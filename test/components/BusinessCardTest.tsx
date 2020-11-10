import { microdata } from '@cucumber/microdata'
import assert from 'assert'
import { JSDOM } from 'jsdom'
import React from 'react'
import ReactDOM from 'react-dom'
import { Person } from 'schema-dts'

import BusinessCard from '../../src/components/BusinessCard'

describe('<BusinessCard>', () => {
  let root: HTMLElement
  beforeEach(() => {
    const dom = new JSDOM('<!DOCTYPE html>')
    // @ts-ignore
    global.window = dom.window
    root = dom.window.document.createElement('div')
    dom.window.document.body.appendChild(root)
  })

  it('renders person as microdata', () => {
    ReactDOM.render(<BusinessCard givenName="Dolly" familyName="Duck" />, root)
    const person = microdata('http://schema.org/Person', root) as Person
    assert.deepStrictEqual(person, { givenName: 'Dolly', familyName: 'Duck', '@type': 'Person' })
  })
})
