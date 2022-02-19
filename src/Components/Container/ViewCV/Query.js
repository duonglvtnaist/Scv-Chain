// Copyright 2017-2022 @polkadot/app-storage authors & contributors
// SPDX-License-Identifier: Apache-2.0


import React from 'react';
import { Form, Input, Label, List } from 'semantic-ui-react';


export default function Query ( value ) {
  if (!IsJsonString(value.value)) {
    return <Input
    className='show-cv'
    fluid
    label={{ basic: true, content: 'Infor' }}
    labelPosition="left"
    value='No information to show'
></Input>;
    // {JSON.stringify(value.value) }
  } else if (JSON.parse(value.value).itemId==null) {
    return   <Input
                className='show-cv'
                fluid
                label={{ basic: true, content: 'CV IDs list' }}
                labelPosition="left"
                value={value.value}
            ></Input>
            
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
            
        {/* <div>{IsJsonString(value.value).toString()}</div>  */}
        <Input
            className='show-cv'
            fluid
            label={{ basic: true, content: 'CV ID' }}
            labelPosition="left"
            value={JSON.parse(value.value).itemId}
        ></Input>
        <Input
            className='show-cv'
            fluid
            label={{ basic: true, content: 'User ID' }}
            labelPosition="left"
            value={JSON.parse(value.value).userId}
        ></Input>
        <Form>
            <Form.Field className='border-solid'>
            <div className='show-cv'><Label>Created:</Label></div>
            <Input
                fluid
                className='show-cv'
                label={{ basic: true, content: 'Account ID' }}
                labelPosition="left"
                value={JSON.parse(value.value).created.account}
            ></Input>
            <Input
                fluid
                className='show-cv'
                label={{ basic: true, content: 'Block' }}
                labelPosition="left"
                value={JSON.parse(value.value).created.block}
            ></Input>
            <Input
                fluid
                className='show-cv'
                label={{ basic: true, content: 'Time' }}
                labelPosition="left"
                // value={JSON.parse(value.value).created.time}
                // value={new Date(JSON.parse(value.value).created.time).toLocaleDateString("en-US")}
                value={new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(JSON.parse(value.value).created.time)}
            ></Input>
            </Form.Field>
        </Form>
        <Input
            className='show-cv'
            fluid
            label={{ basic: true, content: 'Org Date' }}
            labelPosition="left"
            value={JSON.parse(value.value).orgDate}
        ></Input>
        <Input
            className='show-cv'
            fluid
            label={{ basic: true, content: 'Expired ID' }}
            labelPosition="left"
            value={JSON.parse(value.value).expDate}
        ></Input>
                <Input
            className='show-cv'
            fluid
            label={{ basic: true, content: 'Certificate ID' }}
            labelPosition="left"
            value={JSON.parse(value.value).certificateId}
        ></Input>
        <Input
            className='show-cv'
            fluid
            label={{ basic: true, content: 'Score' }}
            labelPosition="left"
            value={JSON.parse(value.value).score}
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