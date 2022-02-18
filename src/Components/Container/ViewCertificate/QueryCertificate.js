// Copyright 2017-2022 @polkadot/app-storage authors & contributors
// SPDX-License-Identifier: Apache-2.0


import React from 'react';
import { Form, Input, Label, List } from 'semantic-ui-react';


export default function QueryCertificate ( value ) {
  if (!IsJsonString(value.value)) {
    return null;
    // {JSON.stringify(value.value) }
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
            label={{ basic: true, content: 'Meta Data' }}
            labelPosition="left"
            value={JSON.parse(value.value).metadata}
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
