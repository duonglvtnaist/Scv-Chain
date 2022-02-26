// Copyright 2017-2022 @polkadot/app-storage authors & contributors
// SPDX-License-Identifier: Apache-2.0


import React from 'react';
import { Form, Input, Label, List } from 'semantic-ui-react';


export default function QueryCertificate ( value ) {
  if(value.value===""){
      return null;
  } else if (!IsJsonString(value.value)) {
    // return <Label>Can't find that certificate!!!</Label>
    return <Input     
    className='show-cv'
    fluid
    label={{ basic: true, content: 'Infor' }}
    labelPosition="left" 
    value ="Can't find that certificate!!!"
    />
  }
  const metaDataLabels = {
    name:'Name',
    content:'Received For',
    origDate:'Original Date',
    expDate:'Expired Date',
    validator:'Verify By'
  }
  return (

    <section className='storage--Queries'>
     {/* {JSON.parse(value.value).map((query) =>
        <Input
        // placeholder={paramField.type}
        fluid
        type="text"
        label={Object.getOwnPropertyNames(query)}
        className="input-cv"
        // state={{ ind, paramField }}
        value={query}
        // onChange={onPalletCallableParamChange}
        />
        // <
        //   key={query.id}
        //   onRemove={onRemove}
        //   value={query}
        // />
      )} */}
        {/* <List>
        {JSON.parse(value.value).map(el => {
        return (
            <List.Item  key={el.id}>
            <List.Content>
                {el.firstname} {el.lastname}
            </List.Content>
            <List.Content>{el.phone}</List.Content>
            </List.Item>
        );
        })}</List> */}
            
            {/* {
                JSON.parse(value.value).map((data,key) =>
                {
                    return (
                        <Input label={key} value={data.} />
                    )
                })
            } */}
            
        {/* <div>{value.value}</div>  */}
        <Input
            className='show-cv'
            fluid
            label={{ basic: true, content: 'Certificate ID' }}
            labelPosition="left"
            value={JSON.parse(value.value).cid}
        ></Input>
        <Input
            className='show-cv'
            fluid
            label={{ basic: true, content: 'Org ID' }}
            labelPosition="left"
            value={JSON.parse(value.value).org}
        ></Input>
        
        <Input
            className='show-cv'
            fluid
            label={{ basic: true, content: 'Score' }}
            labelPosition="left"
            value={JSON.parse(value.value).scrore}
        ></Input>

        <Input
            className='show-cv'
            fluid
            label={{ basic: true, content: metaDataLabels.name }}
            labelPosition="left"
            value={JSON.parse(hex_to_ascii(JSON.parse(value.value).metadata).substr(1,hex_to_ascii(JSON.parse(value.value).metadata).length-1)).name}
        ></Input>
        <Input
            className='show-cv'
            fluid
            label={{ basic: true, content: metaDataLabels.content }}
            labelPosition="left"
            value={JSON.parse(hex_to_ascii(JSON.parse(value.value).metadata).substr(1,hex_to_ascii(JSON.parse(value.value).metadata).length-1)).content}
        ></Input>
        <Input
            className='show-cv'
            fluid
            label={{ basic: true, content: metaDataLabels.origDate }}
            labelPosition="left"
            value={JSON.parse(hex_to_ascii(JSON.parse(value.value).metadata).substr(1,hex_to_ascii(JSON.parse(value.value).metadata).length-1)).origDate}
        ></Input>
        <Input
            className='show-cv'
            fluid
            label={{ basic: true, content: metaDataLabels.expDate }}
            labelPosition="left"
            value={JSON.parse(hex_to_ascii(JSON.parse(value.value).metadata).substr(1,hex_to_ascii(JSON.parse(value.value).metadata).length-1)).expDate}
        ></Input>
        <Input
            className='show-cv'
            fluid
            label={{ basic: true, content: metaDataLabels.validator }}
            labelPosition="left"
            value={JSON.parse(hex_to_ascii(JSON.parse(value.value).metadata).substr(1,hex_to_ascii(JSON.parse(value.value).metadata).length-1)).validator}
        ></Input>
        {/* <div> {IsJsonString(value.value) ? JSON.parse(value.value).itemId:''}</div> */}

    </section>
  );
}
  function IsJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
  }
  function hex_to_ascii(str1)
 {
	var hex  = str1.toString();
	var str = '';
	for (var n = 0; n < hex.length; n += 2) {
		str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
	}
	return str;
 }