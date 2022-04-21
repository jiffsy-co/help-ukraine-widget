import Image from 'next/image'

export const ellipsesContent = [
  {
    logo: <Image src="/logos/dev.svg" alt="dev.ua" width={200} height={77} layout="intrinsic" />,
    name: 'dev.ua',
    large: true,
    url: 'https://dev.ua/',
  },
  {
    logo: (
      <Image src="/logos/reface.png" alt="talkie.ai" width={235} height={70} layout="intrinsic" />
    ),
    name: 'Reface',
    large: true,
    url: 'https://hey.reface.ai/',
  },
  {
    logo: (
      <Image
        src="/logos/changeengine.svg"
        alt="changeengine.com"
        width={150}
        height={22}
        layout="intrinsic"
      />
    ),
    large: true,
    name: 'Change Engine',
    url: 'https://www.changeengine.com/',
  },
  {
    logo: <Image src="/logos/elai.svg" alt="elai.io" width={100} height={24} layout="intrinsic" />,
    name: 'Elai',
    url: 'https://elai.io/',
  },
  {
    logo: (
      <Image
        src="/logos/peopleforce.png"
        alt="peopleforce.io"
        width={420}
        height={79}
        layout="intrinsic"
      />
    ),
    name: 'Peopleforce',
    url: 'https://peopleforce.io/',
  },
  {
    logo: (
      <Image
        src="/logos/smartsuite.svg"
        alt="talkie.ai"
        width={145}
        height={23}
        layout="intrinsic"
      />
    ),
    name: 'Smartsuite',
    url: 'https://www.smartsuite.com/',
  },
  {
    logo: (
      <Image src="/logos/upfeed.png" alt="upfeed.io" width={375} height={78} layout="intrinsic" />
    ),
    name: 'Upfeed',
    url: 'https://upfeed.io/',
  },
]
