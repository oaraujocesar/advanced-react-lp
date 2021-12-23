const GET_LANDING_PAGE = /* GraphQL */ `
  fragment logo on LandingPage {
    logo {
      data {
        attributes {
          url
          alternativeText
        }
      }
    }
  }

  fragment header on LandingPage {
    header {
      title
      description
      image {
        data {
          attributes {
            alternativeText
            url
          }
        }
      }
      button {
        label
        url
      }
    }
  }

  fragment about on LandingPage {
    sectionAboutProject {
      title
      description
      image {
        data {
          attributes {
            url
            alternativeText
          }
        }
      }
    }
  }

  query GET_LANDING_PAGE {
    landingPage {
      data {
        attributes {
          ...logo
          ...header
          ...about
        }
      }
    }
  }
`

export default GET_LANDING_PAGE
