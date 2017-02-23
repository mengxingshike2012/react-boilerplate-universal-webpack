import React from 'react'
import {
  Button,
} from 'antd'
import AddPNG from './add.png'

export default class AddButton extends React.Component {

  render() {
    const style = {
      marginRight: 23,
      height: 30,
      border: 'none',
      padding: 0,
    }
    return (<Button {...this.props} style={style}>
      <img src={AddPNG} />
    </Button>)
  }
}
