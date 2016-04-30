import React from 'react'
import { render } from 'react-dom'
import { browserHistory, IndexRoute, Router, Route } from 'react-router'
import './main.css'

import App from './components/app'
import Home from './components/home'
import About from './components/about'

const div = document.createElement('div')

document.body.appendChild(div)

render(<Router history={browserHistory}>
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path='about' component={About} />
  </Route>
</Router>, div)
