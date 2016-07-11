import React from 'react'
import ReactDOM from 'react-dom'

import Hello from './components/hello'

ReactDOM.render(
  <Hello compiler="Babel" framework="React" />,
  document.getElementById('app')
)
