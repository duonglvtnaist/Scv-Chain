import React from 'react'
import { Input, Icon, Dropdown } from 'semantic-ui-react'
import { position, workingType } from '../../../../Components/Data/Data'
import './search.css'
import { category, experience } from './../../../../Components/Data/Data'

export default function Search() {
  return (
    <div className="searchJob">
      <div className="search">
        <input placeholder="Search" className="inputSearch" type="search" />
        <button className="iconSearch">
          <Icon name="search" style={{ color: '#ffffff' }} size="large" />
        </button>
      </div>
      <div className="filterBar">
        <div className="filterJob">
          <Dropdown
            placeholder="Working Type"
            selection
            options={workingType}
            className="filterType"
          />
          <Dropdown
            placeholder="Category"
            selection
            options={category}
            className="filterType"
          />
          <Dropdown
            placeholder="Position"
            selection
            options={position}
            className="filterType"
          />
          <Dropdown
            placeholder="Experience"
            selection
            options={experience}
            className="filterType"
          />
        </div>
        <div className="buttonApplyFilter">
          <Icon name="sliders" size="large" style={{ color: '#ffffff' }}></Icon>
          <span className="textApply">Apply</span>
        </div>
      </div>
      <div className="sort">
        <Dropdown
          className="sortBy"
          selection
          placeholder="Sort By"
          options={experience}
        ></Dropdown>
      </div>
    </div>
  )
}
