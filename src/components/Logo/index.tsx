import React from 'react'
import * as S from './styles'

import { LogoProps } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'

const Logo = ({ data: { attributes } }: LogoProps) => {
  return (
    <S.LogoWrapper
      src={getImageUrl(attributes.url)}
      alt={attributes.alternativeText}
    />
  )
}

export default Logo
