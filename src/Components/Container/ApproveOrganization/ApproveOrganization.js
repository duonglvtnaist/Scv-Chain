import React, { useState, useEffect, createRef } from 'react'
import {
  Container,
  Grid,
  Input,
  Segment,
  TextArea,
  Form,
  Button,
  Menu,
  Label,
} from 'semantic-ui-react'
import { useSubstrateState } from '../../../substrate-lib'
import './approveOrganization.css'
import { TxButton, TxGroupButton } from '../../../substrate-lib/components'
import SidebarMenu from '../../Sidebar/SidebarMenu'
import { SidebarSysMan } from '../../Data/Data'
import AccountSelector from '../../../AccountSelector'
import AccountMain from '../AddCV/AccountMain'
const argIsOptional = arg => arg.type.toString().startsWith('Option<')

export default function ApproveOrganization(props) {
  const { api, jsonrpc } = useSubstrateState()
  const [status, setStatus] = useState(null)

  const [interxType, setInterxType] = useState('EXTRINSIC')
  const [palletRPCs, setPalletRPCs] = useState([])
  const [callables, setCallables] = useState([])
  const [paramFields, setParamFields] = useState([])

  const initFormState = {
    palletRpc: 'sysMan',
    callable: 'approveOrg',
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
      value: 'Account ID',
    },
    {
      value: 'Metadata',
    },
    {
      value: 'Original Date',
    },
    {
      value: 'Expired Date',
    },
    {
      value: 'Certificate ID',
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
              {SidebarSysMan.map(MenuSysMan => (
                <SidebarMenu
                  link={MenuSysMan.link}
                  title={MenuSysMan.title}
                  icon={MenuSysMan.icon}
                  key={MenuSysMan.id}
                />
              ))}
            </Menu>
          </Grid.Column>
          <Grid.Column width={12}>
            <Segment.Group>
              <Segment raised style={{ backgroundColor: 'rgb(252, 252, 252)' }}>
                <Label color="blue" ribbon>
                  APPROVE ORGANIZATION
                </Label>
              </Segment>
              <div className="approve">
              <AccountMain />

                <Form style={{ marginTop: '10px' }}>
                  {paramFields.map((paramField, ind) => (
                    <Form.Field key={`${paramField.name}-${paramField.type}`}>
                      <Input
                        placeholder={paramField.type}
                        fluid
                        type="text"
                        label={labelNames[ind].value}
                        // label={palletRPCs[ind].value}
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
                {/* <Form>
                  <Form.Field style={{ margin: '0px' }}>
                    <Input
                      label={{ basic: true, content: 'Type' }}
                      labelPosition="left"
                      placeholder="Type"
                      style={{ margin: '10px 10px 10px 0px' }}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Input
                      label={{ basic: true, content: 'KeyWork' }}
                      labelPosition="left"
                      placeholder="Ex: English, ReactJs, ..."
                      style={{ margin: '0px 10px 10px 0px' }}
                    />
                  </Form.Field>
                </Form>
                <Input
                  label={{ basic: true, content: 'ID' }}
                  labelPosition="left"
                  placeholder="Enter ID ..."
                  className="input-id"
                  // action={{ icon: 'search' }}
                ></Input>
                <Form style={{ paddingBottom: '20px' }}>
                  <TextArea placeholder="Description ..." />
                </Form>
                <div className="button-submit">
                  <Button positive className="button-approve">
                    APPROVE
                  </Button>
                </div> */}
              </div>
              <Form style={{ paddingBottom: '20px' }}>
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
                <div style={{ overflowWrap: 'break-word' }} className = 'approve'>{status}</div>
            </Segment.Group>
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
    return <TxButton label="Query" type="QUERY" color="blue" {...props} />
  } else if (interxType === 'EXTRINSIC') {
    return <TxGroupButton {...props} />
  } else if (interxType === 'RPC' || interxType === 'CONSTANT') {
    return <TxButton label="Submit" type={interxType} color="blue" {...props} />
  }
}