/* globals describe it */

import React from 'react'

import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import sinon from 'sinon'

chai.use(chaiEnzyme())

import { mount, render, shallow } from 'enzyme'

import App from '../app/components/app'
import Header from '../app/components/header'

describe( '<App/>', () => {
  it('includes the <Header/>', () => {
  const wrapper = shallow(<App><p/></App>)
  
  expect(wrapper).to.contain(<Header/>)
  })
})