import React, { PropTypes } from 'react'

import { Grid } from 'react-bootstrap'

import Header from './header.jsx'

const App = ({ children }) => <div>
  <Header />
  <Grid>{children}</Grid>
</div>

App.propTypes = {
  children: PropTypes.node.isRequired
}

export default App

// export default class App extends React.Component {

//   render () {
//     return <p>Welcome to Pete's webpack HMR testing App with component in c9 with another change!</p>
//   }
// }
