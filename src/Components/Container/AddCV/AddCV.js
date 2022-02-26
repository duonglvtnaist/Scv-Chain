import React, { useState, useEffect, createRef } from 'react'
import {
  Grid,
  Segment,
  Input,
  Form,
  Button,
  TextArea,
  Icon,
  Container,
  Menu,
  Label,
  Checkbox,
  Dropdown,
  Dimmer,
  Loader,
  Message,
  SegmentGroup,
} from 'semantic-ui-react'
import './addCV.css'
import SidebarMenu from '../../Sidebar/SidebarMenu'
import SemanticDatepicker from 'react-semantic-ui-datepickers';
import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css';
// import { Grid, Form, Dropdown, Input, Label } from 'semantic-ui-react'

import { useSubstrateState } from '../../../substrate-lib'
import { TxButton, TxGroupButton } from '../../../substrate-lib/components'
import AccountSelector from '../../../AccountSelector'
import Interactor from '../../../Interactor'
import AccountMain from './AccountMain'

const argIsOptional = arg => arg.type.toString().startsWith('Option<')

export default function AddCV(props) {
  const { api, jsonrpc } = useSubstrateState()
  const [status, setStatus] = useState(null)

  const [interxType, setInterxType] = useState('EXTRINSIC')
  const [palletRPCs, setPalletRPCs] = useState([])
  const [callables, setCallables] = useState([])
  const [paramFields, setParamFields] = useState([])


  
 

  const initFormState = {
    palletRpc: 'cv',
    callable: 'createItem',
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
  const indMeta1 = 1
  const indMeta2 = 2
  const indMeta3 = 3
  const indMeta4 = 4

 
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
  const metaDataLabels = {
    profile:'Profile',
    employment_history:'Employment History',
    education:'Education',
    references:'References',
  }
  const initMetaDataInputs = {
    profile:'',
    employment_history:'',
    education:'',
    references:'',
  }
  const [metaDataInputs, setMetaInputs] = useState(initMetaDataInputs)
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

  const handleDateChange = (_, data) => {
    setFormState(formState => {
      let res
      const { state, value } = data

      const {
        ind,
        paramField: { type },
      } = state
      const inputParams = [...formState.inputParams]
      const date = new Date(value).getTime()
      inputParams[ind] = { type, date }
      res = { ...formState, inputParams }

      return res
    })
  
  }
  const onMetaDataChange = (_,data) => {
    const {state, value} = data
    const inputParams = [...formState.inputParams]
    
    if(state===1){
      setMetaInputs({profile: value, employment_history: metaDataInputs.employment_history, education: metaDataInputs.education, references: metaDataInputs.references })
    } else if(state===2){
      setMetaInputs({profile: metaDataInputs.profile, employment_history: value, education: metaDataInputs.education, references: metaDataInputs.references })
    } else if(state===3){
      setMetaInputs({profile: metaDataInputs.profile, employment_history: metaDataInputs.employment_history, education: value, references: metaDataInputs.references })
    } else if(state===4){
      setMetaInputs({profile: metaDataInputs.profile, employment_history: metaDataInputs.employment_history, education: metaDataInputs.education, references: value })
    }
    inputParams[1]= {type:'Bytes', value:(JSON.stringify(metaDataInputs))}
    
    // setFormState({palletRpc:'cv', callable:'createItem',inputParams: inputParams})
    setFormState(formState => {
      return {...formState, inputParams}
    })
  }
  
  const onInterxTypeChange = (ev, data) => {
    setInterxType(data.value)
    // clear the formState
    setFormState({palletRpc:''})
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
            {props.MenuName.map(Menu => (
              <SidebarMenu
                link={Menu.link}
                icon={Menu.icon}
                title={Menu.title}
                key={Menu.id}
              />
            ))}
          </Menu>
        </Grid.Column>
        <Grid.Column width={12}>
          <Container>
            <Segment.Group>
              <Segment raised style={{ backgroundColor: 'rgb(252, 252, 252)' }}>
                <Label color="blue" ribbon>
                  ADD CV
                </Label>
              </Segment>
              <div className="addCV">
                {/* <Input
                  label={{ basic: true, content: 'ACCOUNT ID' }}
                  labelPosition="left"
                  placeholder="Enter ID ..."
                  className="input-id"
                  value={interxType}
                ></Input> */}
                <AccountMain />

                <Form style={{ marginTop: '10px' }}>
                  {paramFields.map((paramField, ind) => {
                    if (paramField.name === "orgDate" || paramField.name ==="expDate"){
                      return <Segment.Group horizontal key={0}>                          
                            <Segment>
                            <Form.Field key={`${paramField.name}-${paramField.type}`}>
                            <SemanticDatepicker
                              label={labelNames[ind].value}
                              state={{ ind, paramField }}
                              className='clndr-cell'
                              onChange={handleDateChange}
                            />
                            {paramField.optional ? (
                              <Label
                                basic
                                pointing = "left"
                                color="teal"
                                content={getOptionalMsg(interxType)}
                              />
                            ) : null}
                            </Form.Field>
                            </Segment>  

                          </Segment.Group>
                         
                      
                    
                    }else if (paramField.name !== "metadata"){
                      return <Form.Field key={`${paramField.name}-${paramField.type}`}>
                              <Input
                                placeholder={paramField.type}
                                fluid
                                type="text"
                                // label={labelNames[ind].value}
                                label={labelNames[ind].value}
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
                    }
                    
                    return <div>
                          <Form.Field >
                            <Input
                              placeholder='Bytes'
                              fluid
                              type="text"
                              // label={labelNames[ind].value}
                              label='Profile'
                              state={indMeta1}
                              value={metaDataInputs.profile ? metaDataInputs.profile : ''}
                              onChange={onMetaDataChange}
                            />
                          </Form.Field>
                          <Form.Field >
                            <Input
                              placeholder='Bytes'
                              fluid
                              type="text"
                              // label={labelNames[ind].value}
                              label='Employment History'
                              state={indMeta2}
                              value={metaDataInputs.employment_history ? metaDataInputs.employment_history : ''}
                              onChange={onMetaDataChange}
                            />
                          </Form.Field>
                          <Form.Field >
                            <Input
                              placeholder='Bytes'
                              fluid
                              type="text"
                              // label={labelNames[ind].value}
                              label='Education'
                              state={indMeta3}
                              value={metaDataInputs.education ? metaDataInputs.education : ''}
                              onChange={onMetaDataChange}
                            />
                          </Form.Field>
                          <Form.Field style={{ marginBottom: '15px' }}>
                            <Input
                              placeholder='Bytes'
                              fluid
                              type="text"
                              // label={labelNames[ind].value}
                              label='References'
                              state={indMeta4}
                              value={metaDataInputs.references ? metaDataInputs.references : ''}
                              onChange={onMetaDataChange}
                            />
                          </Form.Field>
                          
                      </div>
                          
                    // return 
                          
                  })}
                  {/* <SemanticDatepicker onChange={handleDateChange} /> */}
                </Form>
                <Form>
                  <Form.Field style={{ margin: '0px' }}>
                    <Input
                      label={{ basic: true, content: 'Type' }}
                      labelPosition="left"
                      placeholder="Type"
                      style={{ margin: '10px 10px 10px 0px' }}
                      value={JSON.stringify(inputParams[1])}
                      // JSON.stringify(inputParams[0])
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

                <Form style={{ marginBottom: '10px' }}>
                  <TextArea placeholder="Description ..." value={JSON.stringify(formState)} />
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
                <div style={{ overflowWrap: 'break-word' }}>{status}</div>
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
    return <TxButton label="Query" type="QUERY" color="blue" {...props} />
  } else if (interxType === 'EXTRINSIC') {
    return <TxGroupButton {...props} />
  } else if (interxType === 'RPC' || interxType === 'CONSTANT') {
    return <TxButton label="Submit" type={interxType} color="blue" {...props} />
  }
}
