export interface ISeo {
  title: string
  description: string
  url: string
  image: {
    width: number
    height: number
    url: string
  }
}

export const useSeo = (page: string = '/'): ISeo => {
  return {
    url: process.env.URL + page,
    title: 'Help Ukraine',
    description: `Put the Help Ukraine widget on your website! Your customers and visitors of your website will be able to know how they can help Ukraine from every place in the world.`,
    image: {
      height: 1080,
      width: 1080,
      url: process.env.URL + '/widget-post.jpeg',
    },
  }
}
