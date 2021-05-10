import React from 'react'
import { List } from 'semantic-ui-react'

const Footer1 = () => (
  <div>
    <List floated='right' horizontal>
      <List.Item disabled href='#'>
        © Pharmacy, inc.
      </List.Item>
      <List.Item href='#'>Terms</List.Item>
      <List.Item href='#'>Delivery</List.Item>
      <List.Item href='#'>Contact</List.Item>
    </List>

    <List horizontal>
      <List.Item href='#'>About Us</List.Item>
    </List>
  </div>
)

export default Footer1