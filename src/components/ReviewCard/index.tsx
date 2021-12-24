import React, { useEffect } from 'react'
import ResizeObserver from 'resize-observer-polyfill'
import { Photo } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'

import * as S from './styles'

type Props = {
  id: number
  name: string
  image: Photo
  description: string
}

const ReviewCard: React.FC<Props> = ({ id, name, image, description }) => {
  useEffect(() => {
    const texts = document.querySelectorAll('p.description')

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        entry.target.classList[
          entry.target.scrollHeight > entry.contentRect.height + 25
            ? 'add'
            : 'remove'
        ]('truncated')
      }
    })

    texts.forEach((text) => observer.observe(text))
  })

  const avatar = image?.data?.attributes?.url
    ? getImageUrl(image?.data?.attributes?.url)
    : '/img/avatar.webp'

  return (
    <S.Card>
      <S.User>
        <S.Image
          src={avatar}
          alt={
            image?.data?.attributes?.alternativeText ?? 'silhueta de uma pessoa'
          }
          loading="lazy"
        />
        <S.Name>{name}</S.Name>
      </S.User>
      <S.Text>
        <input type="checkbox" id={`review-${id}`} />
        <p className="description">{description}</p>
        <label className="label-more" htmlFor={`review-${id}`}>
          Ver tudo
        </label>
      </S.Text>
    </S.Card>
  )
}

export default ReviewCard
