import { createDevTools } from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'

import React from 'react'
import { render } from 'react-dom'
import { browserHistory, IndexRoute, Router, Route } from 'react-router'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import './main.css'

import App from './components/app'
import Home from './components/home'
import About from './components/about'
import reducer from './reducer.js'

// const DevTools = createDevTools(
//   <DockMonitor toggleVisibilityKey='ctrl-h' changePositionKey='ctrl-q'>
//     <LogMonitor theme='tomorrow' preserveScrollTop={false} />
//   </DockMonitor>
// )

const store = createStore(
  reducer
  // DevTools.instrument()
)

const div = document.createElement('div')
document.body.appendChild(div)

render(<Provider store={store}>
  <div>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Home} />
        <Route path='about' component={About} />
      </Route>
    </Router>
  </div>
</Provider>, div)
