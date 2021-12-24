import React from 'react'
import { GetStaticProps } from 'next'

import client from 'graphql/client'
import GET_LANDING_PAGE from 'graphql/queries/getLandingPage'
import { LandingPageProps } from 'types/api'

import SectionHero from 'components/SectionHero'
import SectionAboutProject from 'components/SectionAboutProject'
import SectionTech from 'components/SectionTech'
import SectionConcepts from 'components/SectionConcepts'
import SectionModules from 'components/SectionModules'
import SectionAgenda from 'components/SectionAgenda'
import PricingBox from 'components/PricingBox'
import SectionAboutUs from 'components/SectionAboutUs'
import SectionReviews from 'components/SectionReviews'
import SectionFaq from 'components/SectionFaq'
import Footer from 'components/Footer'
import JsonSchema from 'components/JsonSchema'

const Index = ({ data: { attributes } }: LandingPageProps) => (
  <>
    <SectionHero logo={attributes.logo} header={attributes.header} />
    <SectionAboutProject {...attributes.sectionAboutProject} />
    <SectionTech {...attributes.sectionTech} />
    <SectionConcepts {...attributes.sectionConcepts} />
    <SectionModules {...attributes.sectionModules} />
    <SectionAgenda {...attributes.sectionAgenda} />
    <PricingBox {...attributes.pricingBox} />
    <SectionAboutUs {...attributes.sectionAboutUs} />
    <SectionReviews />
    <SectionFaq />
    <Footer />
    <JsonSchema />
  </>
)

export const getStaticProps: GetStaticProps = async () => {
  const { landingPage } = await client.request(GET_LANDING_PAGE)

  return {
    props: {
      ...landingPage
    }
  }
}

export default Index
