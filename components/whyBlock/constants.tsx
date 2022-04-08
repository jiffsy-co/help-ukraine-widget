import LinkedInLogo from '../logo/LinkedInLogo'
import FacebookLogo from '../logo/FacebookLogo'
import TwitterLogo from '../logo/TwitterLogo'
import { JiffsyFacebookLink, JiffsyTwitterLink, JiffsyLinkedInLink } from '../constants'

export const socialMedias = [
  {
    title: 'Facebook',
    logo: <FacebookLogo />,
    link: JiffsyFacebookLink,
  },
  {
    title: 'Twitter',
    logo: <TwitterLogo />,
    link: JiffsyTwitterLink,
  },
  {
    title: 'LinkedIn',
    logo: <LinkedInLogo />,
    link: JiffsyLinkedInLink,
  },
]

export const whyText =
  'We are Ukrainians, when the war started, we felt like we wanted to help our country by any means, that’s how we decided to develop the website widget, that will help to inform website visitors about the situation in Ukraine, and help Ukrainian official resources to get some donations. We believe that Ukraine is the country of ultimate freedom, that now is fighting for the freedom of the whole world. We ask the World to join, and Help Ukraine. Share this page:'
