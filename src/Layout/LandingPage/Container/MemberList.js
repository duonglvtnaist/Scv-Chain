import React from 'react'
import { Image } from 'semantic-ui-react'

export default function MemberList(props) {
  return (
    <div className="memberInfo">
      <div className="memberImg">
        <Image src={props.image} className="memberPicture"></Image>
      </div>
      <div className="memberDetail">
        <p className="memberName">{props.name}</p>
        <p className="memberPosition">{props.position}</p>
      </div>
    </div>
  )
}
