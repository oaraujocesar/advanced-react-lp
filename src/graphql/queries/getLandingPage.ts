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

  fragment sectionAboutProject on LandingPage {
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

  fragment sectionTech on LandingPage {
    sectionTech {
      title
      techIcons {
        icon {
          data {
            attributes {
              alternativeText
              url
            }
          }
        }
        title
      }
    }
  }

  fragment sectionConcepts on LandingPage {
    sectionConcepts {
      title
      concepts(pagination: { limit: 20 }) {
        title
      }
    }
  }

  query GET_LANDING_PAGE {
    landingPage {
      data {
        attributes {
          ...logo
          ...header
          ...sectionAboutProject
          ...sectionTech
          ...sectionConcepts
        }
      }
    }
  }
`

export default GET_LANDING_PAGE
