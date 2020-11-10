import { Meta } from '@storybook/react/types-6-0'
import React from 'react'

import BusinessCard from '../../src/components/BusinessCard'

export default {
  title: 'BusinessCard',
  component: BusinessCard,
} as Meta

export const AslakHellesøy = () => {
  return <BusinessCard givenName="Aslak" familyName="Hellesøy" />
}
