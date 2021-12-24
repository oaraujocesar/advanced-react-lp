export type TechIcon = {
  title: string
  icon: {
    data: {
      attributes: {
        alternativeText: string
        url: string
      }
    }
  }
}

export type Module = {
  title: string
  subtitle: string
  description: string
}

export type Photo = {
  data: {
    attributes: {
      alternativeText: string
      url: string
    }
  }
}

export type Review = {
  name: string
  text: string
  photo: Photo
}

export type Question = {
  question: string
  answer: string
}

export type SocialLinks = {
  title: string
  url: string
}[]

export type LogoProps = {
  data: {
    attributes: {
      url: string
      alternativeText: string
    }
  }
}

export type HeaderProps = {
  title: string
  description: string
  button: {
    label: string
    url: string
  }
  image: {
    data: {
      attributes: {
        alternativeText: string
        url: string
      }
    }
  }
}

export type SectionAboutProjectProps = {
  title: string
  description: string
  image: {
    data: {
      attributes: {
        url: string
        alternativeText: string
      }
    }
  }
}

export type SectionTechProps = {
  title: string
  techIcons: TechIcon[]
}

export type SectionConceptsProps = {
  title: string
  concepts: {
    title: string
  }[]
}

export type SectionModulesProps = {
  title: string
  modules: Module[]
}

export type SectionAgendaProps = {
  title: string
  description: string
}

export type PricingBoxProps = {
  totalPrice: number
  numberInstallments: number
  priceInstallments: number
  benefits: string
  button: {
    label: string
    url: string
  }
}

export type SectionAboutUsProps = {
  title: string
  authors: {
    data: {
      attributes: {
        photo: Photo
        name: string
        role: string
        description: string
        socialLinks: SocialLinks
      }
    }[]
  }
}

export type SectionReviewsProps = {
  title: string
  reviews: Review[]
}

export type SectionFaqProps = {
  title: string
  questions: Question[]
}

export type LandingPageProps = {
  data: {
    attributes: {
      logo: LogoProps
      header: HeaderProps
      sectionAboutProject: SectionAboutProjectProps
      sectionTech: SectionTechProps
      sectionConcepts: SectionConceptsProps
      sectionModules: SectionModulesProps
      sectionAgenda: SectionAgendaProps
      pricingBox: PricingBoxProps
      sectionAboutUs: SectionAboutUsProps
      sectionReviews: SectionReviewsProps
      sectionFaq: SectionFaqProps
    }
  }
}
