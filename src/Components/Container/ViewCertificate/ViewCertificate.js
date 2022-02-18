import React, { useState, useEffect } from 'react'
import {
  Grid,
  Segment,
  Input,
  Dropdown,
  Container,
  Icon,
  Button,
  Menu,
  Label,
  Form,
} from 'semantic-ui-react'
import './viewCertificate.css'
import SidebarMenu from '../../Sidebar/SidebarMenu'
import { SidebarORG } from '../../Data/Data'
import { useSubstrateState } from '../../../substrate-lib'
import { TxButton, TxGroupButton } from '../../../substrate-lib/components'
import { decorateStorage } from '@polkadot/types'
import AccountMain from '../AddCV/AccountMain'
import QueryCertificate from './QueryCertificate'

const argIsOptional = arg => arg.type.toString().startsWith('Option<')
export default function ViewCertificate() {
  const { api, jsonrpc } = useSubstrateState()
  const [status, setStatus] = useState('')
  // const [choosing, setChoosing] = useState('itemById')
  const [interxType, setInterxType] = useState('QUERY')
  const [palletRPCs, setPalletRPCs] = useState([])
  const [callables, setCallables] = useState([])
  const [paramFields, setParamFields] = useState([])
  // const [infor, setInfor] = useState('')
  const initFormState = {
    palletRpc: 'certificate',
    callable: 'certificateById',
    inputParams: [],
  }

  const [formState, setFormState] = useState(initFormState)
  const { palletRpc, callable, inputParams } = formState

  const getApiType = (api, interxType) => {
    if (interxType === 'QUERY') {
      return api.query
    } else if (interxType === 'EXTRINSIC') {
      return api.tx
    } else if (interxType === 'RPC') {
      return api.rpc
    } else {
      return api.consts
    }
  }
  const labelNames = [
    {
      value: 'Cerfiticate ID',
    },
  ]
  const updatePalletRPCs = () => {
    if (!api) {
      return
    }
    const apiType = getApiType(api, interxType)
    const palletRPCs = Object.keys(apiType)
      .sort()
      .filter(pr => Object.keys(apiType[pr]).length > 0)
      .map(pr => ({ key: pr, value: pr, text: pr }))
    setPalletRPCs(palletRPCs)
  }

  const updateCallables = () => {
    if (!api || palletRpc === '') {
      return
    }
    const callables = Object.keys(getApiType(api, interxType)[palletRpc])
      .sort()
      .map(c => ({ key: c, value: c, text: c }))
    setCallables(callables)
  }

  const updateParamFields = () => {
    if (!api || palletRpc === '' || callable === '') {
      setParamFields([])
      return
    }

    let paramFields = []

    if (interxType === 'QUERY') {
      const metaType = api.query[palletRpc][callable].meta.type
      if (metaType.isPlain) {
        // Do nothing as `paramFields` is already set to []
      } else if (metaType.isMap) {
        paramFields = [
          {
            name: metaType.asMap.key.toString(),
            type: metaType.asMap.key.toString(),
            optional: false,
          },
        ]
      } else if (metaType.isDoubleMap) {
        paramFields = [
          {
            name: metaType.asDoubleMap.key1.toString(),
            type: metaType.asDoubleMap.key1.toString(),
            optional: false,
          },
          {
            name: metaType.asDoubleMap.key2.toString(),
            type: metaType.asDoubleMap.key2.toString(),
            optional: false,
          },
        ]
      }
    } else if (interxType === 'EXTRINSIC') {
      const metaArgs = api.tx[palletRpc][callable].meta.args

      if (metaArgs && metaArgs.length > 0) {
        paramFields = metaArgs.map(arg => ({
          name: arg.name.toString(),
          type: arg.type.toString(),
          optional: argIsOptional(arg),
        }))
      }
    } else if (interxType === 'RPC') {
      let metaParam = []

      if (jsonrpc[palletRpc] && jsonrpc[palletRpc][callable]) {
        metaParam = jsonrpc[palletRpc][callable].params
      }

      if (metaParam.length > 0) {
        paramFields = metaParam.map(arg => ({
          name: arg.name,
          type: arg.type,
          optional: arg.isOptional || false,
        }))
      }
    } else if (interxType === 'CONSTANT') {
      paramFields = []
    }

    setParamFields(paramFields)
  }

  useEffect(updatePalletRPCs, [api, interxType])
  useEffect(updateCallables, [api, interxType, palletRpc])
  useEffect(updateParamFields, [api, interxType, palletRpc, callable, jsonrpc])

  const onPalletCallableParamChange = (_, data) => {
    setFormState(formState => {
      let res
      const { state, value } = data
      if (typeof state === 'object') {
        // Input parameter updated
        const {
          ind,
          paramField: { type },
        } = state
        const inputParams = [...formState.inputParams]
        inputParams[ind] = { type, value }
        res = { ...formState, inputParams }
      } else if (state === 'palletRpc') {
        res = { ...formState, [state]: value, callable: '', inputParams: [] }
      } else if (state === 'callable') {
        res = { ...formState, [state]: value, inputParams: [] }
      }
      return res
    })
  }

  const onInterxTypeChange = (ev, data) => {
    setInterxType(data.value)
    // clear the formState
    setFormState(initFormState)
  }

  const getOptionalMsg = interxType =>
    interxType === 'RPC'
      ? 'Optional Parameter'
      : 'Leaving this field as blank will submit a NONE value'
  return (
    <Container style={{ marginTop: '20px' }}>
      <Grid>
        <Grid.Column width={4}>
          <Menu fluid vertical tabular>
            {SidebarORG.map(MenuOrg => (
              <SidebarMenu
                link={MenuOrg.link}
                icon={MenuOrg.icon}
                title={MenuOrg.title}
                key={MenuOrg.id}
              />
            ))}
          </Menu>
        </Grid.Column>
        <Grid.Column width="12">
          <Container>
            <Segment.Group>
              <Segment raised style={{ backgroundColor: 'rgb(252, 252, 252)' }}>
                <Label color="blue" ribbon>
                  VIEW CERTIFICATE
                </Label>
              </Segment>
              <div className="view-certificate">
                <AccountMain />
                {/* <Input
                  label={{ basic: true, content: 'Certificate EnKey' }}
                  labelPosition="left"
                  placeholder="Certificate EnKey ..."
                  className="input-id"
                  value={JSON.stringify(formState) + " - " + choosing + " - " + infor}
                ></Input>
                <div className="button-submit">
                  <Button className="button-view-certificate">View</Button>
                </div> */}
                {/* <Form>
                  <Form.Group style={{ overflowX: 'auto' }} inline>
                  <label>Interaction Type</label>
                  <Form.Radio
                    label="View by ID"
                    name="choosing"
                    value="itemById"
                    checked={choosing === 'itemById'}
                    onChange={onInterxTypeChange}
                  />
                  <Form.Radio
                    label="View by Account"
                    name="choosing"
                    value="itemsByAccountId"
                    checked={choosing === 'itemsByAccountId'}
                    onChange={onInterxTypeChange}
                  />
                </Form.Group>
                </Form> */}
                <Form style={{ margin: '10px 0px' }}>
                  {paramFields.map((paramField, ind) => (
                    <Form.Field key={`${paramField.name}-${paramField.type}`}>
                      <Input
                        placeholder={paramField.type}
                        fluid
                        type="text"
                        label={labelNames[ind].value}
                        className="input-certificate"
                        state={{ ind, paramField }}
                        value={inputParams[ind] ? inputParams[ind].value : ''}
                        onChange={onPalletCallableParamChange}
                      />
                      {paramField.optional ? (
                        <Label
                          basic
                          pointing
                          color="teal"
                          content={getOptionalMsg(interxType)}
                        />
                      ) : null}
                    </Form.Field>
                  ))}
                </Form>
                <Form>
                  <Form.Field style={{ textAlign: 'center' }}>
                    <InteractorSubmit
                      setStatus={setStatus}
                      attrs={{
                        interxType,
                        palletRpc,
                        callable,
                        inputParams,
                        paramFields,
                      }}
                    />
                  </Form.Field>
                </Form>
              </div>
            </Segment.Group>
            <Segment.Group>
              <Segment raised style={{ backgroundColor: 'rgb(252, 252, 252)' }}>
                <Label color="blue" ribbon className="show-title">
                  CERTIFICATE INFORMATION
                </Label>
              </Segment>
              <div className="show-certificate">
                {/* <div className="cv-info">
                  <label>CID: </label>
                  <span className="show-content">0</span>
                </div>
                <div className="cv-info">
                  <label>Owner ID: </label>
                  <span className="show-content">
                    5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY
                  </span>
                </div>
                <div className="cv-info">
                  <label>SCORE: </label>
                  <span className="show-content">5</span>
                  <Icon name="star" color="yellow" />
                </div>
                <div className="cv-info">
                  <label>METADATA: </label>
                  <span className="show-content">0x6d6f74</span>
                </div>
                <div className="cv-info">
                  <label>OrigDate: </label>
                  <span className="show-content">01/01/2022</span>
                </div>
                <div className="cv-info">
                  <label>ExpDate: </label>
                  <span className="show-content">31/12/2022</span>
                </div> */}
                <div className="certificate-info">
                  {/* <label>Result: </label>
                  <span className="show-content">{status}</span> */}
                  <QueryCertificate value={status}/>
                </div>
                {/* <div style={{ overflowWrap: 'break-word' }}>{status}</div> */}
              </div>
            </Segment.Group>
          </Container>
        </Grid.Column>
      </Grid>
    </Container>
  )
}
function InteractorSubmit(props) {
  const {
    attrs: { interxType },
  } = props
  if (interxType === 'QUERY') {
    return <TxButton label="View" type="QUERY" color="blue" {...props} />
  } else if (interxType === 'EXTRINSIC') {
    return <TxGroupButton {...props} />
  } else if (interxType === 'RPC' || interxType === 'CONSTANT') {
    return <TxButton label="Submit" type={interxType} color="blue" {...props} />
  }
}
