import React from 'react'
import * as S from './styles'

import { LogoProps } from 'types/api'

const Logo = ({ data: { attributes } }: LogoProps) => {
  return (
    <S.LogoWrapper
      src={`http://localhost:1337${attributes.url}`}
      alt={attributes.alternativeText}
    />
  )
}

export default Logo
