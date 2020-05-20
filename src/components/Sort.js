import React from 'react'
import { Dropdown, Menu } from 'semantic-ui-react'

const options = [
  {key: 1, text: 'Category', value: 'category'},
  {key: 2, text: 'Description', value: 'description'}
]

const Sort = props => (
    <Menu compact>
      <Dropdown text='Sort Pokemon By' options={options} simple item onChange={props.sortTransaction}/>
    </Menu>
)

export default Sort;
