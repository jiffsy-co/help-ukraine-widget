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
      height: 100,
      width: 100,
      url: process.env.URL + "/images/" + page,
    },
  };
};
