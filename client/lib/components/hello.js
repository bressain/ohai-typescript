import React from 'react'

import * as api from '../api'

const { string } = React.PropTypes

export default class Hello extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      potabos: []
    }
  }
  static propTypes = {
    compiler: string,
    framework: string
  }
  componentDidMount () {
    api.getPotabos(res => this.setState({ potabos: res }))
  }
  renderPotabo = (potabo) => {
    return (
      <li key={potabo.id}>
        <h3>{potabo.potabo}</h3>
        <img src={potabo.uri} alt={potabo.name} />
      </li>
    )
  }
  renderPotabos = () => {
    return this.state.potabos.map(this.renderPotabo)
  }
  render () {
    return (
      <div>
        <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>
        <h2>We have here some potabos!</h2>
        <ul>
          {this.renderPotabos()}
        </ul>
      </div>
    )
  }
}
