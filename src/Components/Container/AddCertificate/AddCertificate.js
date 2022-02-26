import React, { useState, useEffect } from 'react'
import {
  Grid,
  Segment,
  Input,
  Form,
  Button,
  TextArea,
  Icon,
  Container,
  Checkbox,
  Menu,
  Label,
} from 'semantic-ui-react'
import './addCertificate.css'
import SidebarMenu from '../../Sidebar/SidebarMenu'
import { SidebarORG } from '../../Data/Data'
import { useSubstrateState } from '../../../substrate-lib'
import { TxButton, TxGroupButton } from '../../../substrate-lib/components'
import AccountMain from '../AddCV/AccountMain'

import SemanticDatepicker from 'react-semantic-ui-datepickers';
import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css';

const argIsOptional = arg => arg.type.toString().startsWith('Option<')
export default function AddCertificate(props) {
  const { api, jsonrpc } = useSubstrateState()
  const [status, setStatus] = useState(null)

  const [interxType, setInterxType] = useState('EXTRINSIC')
  const [palletRPCs, setPalletRPCs] = useState([])
  const [callables, setCallables] = useState([])
  const [paramFields, setParamFields] = useState([])

  const initFormState = {
    palletRpc: 'certificate',
    callable: 'createCertificate',
    inputParams: [],
  }
  const indName = 1
  const indContent = 2
  const indOrigDate = 3
  const indExpDate = 4
  const indValidator= 5

  const metaDataLabels = {
    name:'Name',
    content:'Received For',
    origDate:'Original Date',
    expDate:'Expired Date',
    validator:'Verify By'
  }

  const initMetaDataInputs = {
    name:'',
    content:'',
    origDate:0,
    expDate:0,
    validator:''
  }
  const [metaDataInputs, setMetaInputs] = useState(initMetaDataInputs)

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
      value: 'Metadata',
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
  const onMetaDataChange = (_,data) => {
    const {state, value} = data
    const inputParams = [...formState.inputParams]
    
    if(state===indName){
      setMetaInputs({
        name:value,
        content:metaDataInputs.content,
        origDate:metaDataInputs.origDate,
        expDate:metaDataInputs.expDate,
        validator:metaDataInputs.validator
      })
    } else if(state===indContent){
      setMetaInputs({
        name:metaDataInputs.name,
        content:value,
        origDate:metaDataInputs.origDate,
        expDate:metaDataInputs.expDate,
        validator:metaDataInputs.validator})
    } else if(state===indOrigDate){
      setMetaInputs({
        name:metaDataInputs.name,
        content:metaDataInputs.content,
        origDate:value,
        expDate:metaDataInputs.expDate,
        validator:metaDataInputs.validator})
    } else if(state===indExpDate){
      setMetaInputs({
        name:metaDataInputs.name,
        content:metaDataInputs.content,
        origDate:metaDataInputs.origDate,
        expDate:value,
        validator:metaDataInputs.validator})
    } else if(state===indValidator){
      setMetaInputs({
        name:metaDataInputs.name,
        content:metaDataInputs.content,
        origDate:metaDataInputs.origDate,
        expDate:metaDataInputs.expDate,
        validator:value })
    }
    inputParams[0]= {type:'Bytes', value:(JSON.stringify(metaDataInputs))}
    
    // setFormState({palletRpc:'cv', callable:'createItem',inputParams: inputParams})
    setFormState(formState => {
      return {...formState, inputParams}
    })
  }
  const handleDateChange = (_, data) => {
    const {state, value} = data
    const inputParams = [...formState.inputParams]
    
    if(state===indName){
      setMetaInputs({
        name:value,
        content:metaDataInputs.content,
        origDate:metaDataInputs.origDate,
        expDate:metaDataInputs.expDate,
        validator:metaDataInputs.validator
      })
    } else if(state===indContent){
      setMetaInputs({
        name:metaDataInputs.name,
        content:value,
        origDate:metaDataInputs.origDate,
        expDate:metaDataInputs.expDate,
        validator:metaDataInputs.validator})
    } else if(state===indOrigDate){
      setMetaInputs({
        name:metaDataInputs.name,
        content:metaDataInputs.content,
        origDate: new Date(value).getTime(),
        expDate:metaDataInputs.expDate,
        validator:metaDataInputs.validator})
    } else if(state===indExpDate){
      setMetaInputs({
        name:metaDataInputs.name,
        content:metaDataInputs.content,
        origDate:metaDataInputs.origDate,
        expDate:new Date(value).getTime(),
        validator:metaDataInputs.validator})
    } else if(state===indValidator){
      setMetaInputs({
        name:metaDataInputs.name,
        content:metaDataInputs.content,
        origDate:metaDataInputs.origDate,
        expDate:metaDataInputs.expDate,
        validator:value })
    }
    inputParams[0]= {type:'Bytes', value:(JSON.stringify(metaDataInputs))}
    
    // setFormState({palletRpc:'cv', callable:'createItem',inputParams: inputParams})
    setFormState(formState => {
      return {...formState, inputParams}
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
            {props.MenuName.map(MenuOrg => (
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
                  ADD CERTIFICATE
                </Label>
              </Segment>
              <div className="addCertificate">
                {/* <Input
                  label={{ basic: true, content: 'ACCOUNT ID' }}
                  labelPosition="left"
                  placeholder="Enter ID ..."
                  className="input-id"
                ></Input> */}
                <div >
                  <AccountMain />
                  {/* <div style={{ paddingBottom: '10px' }}>
                    <input type="file" id="getFile" />
                    <Checkbox label="Public" style={{ marginLeft: '15px' }} />
                  </div>
                  <Input
                    label={{ basic: true, content: 'OrigDate' }}
                    labelPosition="left"
                    placeholder="OrigDate"
                    className="input-cv"
                  />
                  <Input
                    label={{ basic: true, content: 'ExpDate' }}
                    labelPosition="left"
                    placeholder="ExpDate"
                    className="input-cv"
                  />
                  <Input
                    label={{ basic: true, content: 'Type' }}
                    labelPosition="left"
                    placeholder="Type"
                    className="input-cv"
                  />
                  <Form>
                    <TextArea placeholder="Description ..." />
                  </Form> */}
                  <Form style={{ marginTop: '10px' , marginBottom: '10px'}}>
                  {paramFields.map((paramField, ind) => {
                     if (paramField.name === "orgDate" || paramField.name ==="expDate"){
                      return <Form.Field key={`${paramField.name}-${paramField.type}`}>
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
                    }else if (paramField.name !== "metaData"){
                      return <Form.Field key={`${paramField.name}-${paramField.type}`}>
                              <Input
                                placeholder={paramField.type}
                                fluid
                                type="text"
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
                              label={metaDataLabels.name}
                              state={indName}
                              value={metaDataInputs.name ? metaDataInputs.name : ''}
                              onChange={onMetaDataChange}
                            />
                          </Form.Field>
                          <Form.Field >
                            <Input
                              placeholder='Bytes'
                              fluid
                              type="text"
                              // label={labelNames[ind].value}
                              label={metaDataLabels.content}
                              state={indContent}
                              value={metaDataInputs.content ? metaDataInputs.content : ''}
                              onChange={onMetaDataChange}
                            />
                          </Form.Field>
                          <Segment.Group horizontal>
                              <Segment>
                                <Form.Field >
                                <SemanticDatepicker
                                  label={metaDataLabels.origDate}
                                  state={indOrigDate}
                                  className='clndr-cell'
                                  onChange={handleDateChange}
                                />
                                
                                <Label
                                  basic
                                  pointing = "above"
                                  color="teal"
                                  content={getOptionalMsg(interxType)}
                                />
                                </Form.Field>
                              </Segment>
                              <Segment>
                                <Form.Field >
                                  <SemanticDatepicker
                                    label={metaDataLabels.expDate}
                                    state={indExpDate}
                                    className='clndr-cell'
                                    onChange={handleDateChange}
                                  />
                                 
                                    <Label
                                      basic
                                      pointing = "above"
                                      color="teal"
                                      content={getOptionalMsg(interxType)}
                                    />
                                </Form.Field>
                              </Segment>
                            </Segment.Group>
                          {/* <Form.Field >
                            <Input
                              placeholder='Bytes'
                              fluid
                              type="text"
                              // label={labelNames[ind].value}
                              label={metaDataLabels.origDate}
                              state={indOrigDate}
                              value={metaDataInputs.origDate ? metaDataInputs.origDate : ''}
                              onChange={onMetaDataChange}
                            />
                          </Form.Field>
                          <Form.Field>
                            <Input
                              placeholder='Bytes'
                              fluid
                              type="text"
                              // label={labelNames[ind].value}
                              label={metaDataLabels.expDate}
                              state={indExpDate}
                              value={metaDataInputs.expDate ? metaDataInputs.expDate : ''}
                              onChange={onMetaDataChange}
                            />
                          </Form.Field> */}

                          <Form.Field style={{ marginBottom: '15px' }}>
                            <Input
                              placeholder='Bytes'
                              fluid
                              type="text"
                              // label={labelNames[ind].value}
                              label={metaDataLabels.validator}
                              state={indValidator}
                              value={metaDataInputs.validator ? metaDataInputs.validator : ''}
                              onChange={onMetaDataChange}
                            />
                          </Form.Field>
                          {/* <Form.Field style={{ marginBottom: '15px' }}>
                            <Input
                              placeholder='Bytes'
                              fluid
                              type="text"
                              // label={labelNames[ind].value}
                              label='Test'
                              state={indValidator}
                              value={JSON.stringify(inputParams)}
                            />
                          </Form.Field> */}
                      </div>
                          
                    // return 
                          
                  })}
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
                {/* <div className="button-submit">
                  <Button className="button-submit-certificate">SUBMIT</Button>
                </div> */}

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
