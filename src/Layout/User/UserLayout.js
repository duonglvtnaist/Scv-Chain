import React, { useState } from 'react'
import AddCV from './../../Components/Container/AddCV/AddCV'
import { SidebarUser } from './../../Components/Data/Data'

export default function UserLayout() {
  return <AddCV MenuName={SidebarUser} />
}
