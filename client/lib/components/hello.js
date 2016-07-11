import React from 'react'

export default class Hello extends React.Component {
  static propTypes = {
    compiler: React.PropTypes.string,
    framework: React.PropTypes.string
  }
  render() {
    return <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>
  }
}
