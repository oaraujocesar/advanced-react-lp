import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'
import ProfileCard from 'components/ProfileCard'

import * as S from './styles'
import { SectionAboutUsProps } from 'types/api'

const SectionAboutUs = ({ title, authors }: SectionAboutUsProps) => {
  return (
    <Container>
      <Heading reverseColor>{title}</Heading>

      <S.Content>
        {authors.data.map(({ attributes }) => (
          <ProfileCard
            key={attributes.name}
            name={attributes.name}
            role={attributes.role}
            image={attributes.photo}
            socialLinks={attributes.socialLinks}
            description={attributes.description}
          />
        ))}
      </S.Content>
    </Container>
  )
}

export default SectionAboutUs
