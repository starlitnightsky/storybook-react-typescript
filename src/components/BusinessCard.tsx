import React from 'react'

interface Props {
  /**
   * The given name of the person
   */
  givenName: string

  /**
   * The family name of the person
   */
  familyName: string
}

const BusinessCard: React.FunctionComponent<Props> = ({ givenName, familyName }) => (
  <div className="pt-6 space-y-4 text-lg font-semibold" itemScope itemType="http://schema.org/Person">
    <span itemProp="givenName">{givenName}</span>
    <span itemProp="familyName">{familyName}</span>
  </div>
)

export default BusinessCard
