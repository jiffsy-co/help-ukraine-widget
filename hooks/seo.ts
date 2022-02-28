export interface ISeo {
  title: string;
  description: string;
  url: string;
  image: {
    width: number;
    height: number;
    url: string;
  };
}

export const useSeo = (page: string = "/"): ISeo => {
  return {
    url: process.env.URL + page,
    title: "Help Ukraine",
    description: "Help Ukraine widget",
    image: {
      height: 1080,
      width: 1080,
      url: process.env.URL + "/widget-post.jpeg",
    },
  };
};
