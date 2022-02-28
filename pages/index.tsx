import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { PropsWithChildren } from "react";
import Widget from "../components/Widget";
// import Image from "next/image";
import { useSeo } from "../hooks/seo";
import { IWidgetOptions } from "../types";

const widgets: IWidgetOptions[] = [
  {
    type: "one",
    position: "bottom-right",
  },
  {
    type: "two",
    position: "bottom-right",
  },
  {
    type: "three",
    position: "bottom-right",
  },
  {
    type: "four",
    position: "bottom-right",
  },
];

const Circle = ({ children }: PropsWithChildren<{}>) => {
  return (
    <div className="rounded-full w-10 h-10 flex items-center justify-center bg-black text-white text-xl font-semibold shrink-0">
      {children}
    </div>
  );
};

const ListItem = ({ index, text }: { index: number; text: string }) => (
  <li className="text-black text-xl flex items-center mt-5 peer-first:mt-0">
    <Circle>{index}</Circle>
    <span className="ml-7">{text}</span>
  </li>
);

const List = ({ children }: PropsWithChildren<{}>) => (
  <ul className="">{children}</ul>
);

const Home: NextPage = () => {
  const seo = useSeo();
  return (
    <div className="">
      <Head>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width"></meta>
        <meta property="og:site_name" content={seo.title} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:type" content={"website"} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:url" content={seo.url} />
        <meta property="og:image" content={seo.image.url} />
        <meta property="og:image:url" content={seo.image.url} />
        <meta property="og:image:secure_url" content={seo.image.url} />
        <meta property="og:image:width" content={String(seo.image.width)} />
        <meta property="og:image:height" content={String(seo.image.height)} />
      </Head>

      <main className="w-full mx-auto relative pt-8 px-6 md:pt-16 lg:px-16 xl:px-32">
        <section id="description" className="w-full relative">
          <div className="absolute top-0 right-0">
            <Image
              alt="Logo"
              src="/android-chrome-192x192.png"
              width={88}
              height={88}
              layout="intrinsic"
            ></Image>
          </div>
          <h1 className="text-black font-bold max-w-3xl leading-2 text-6xl lg:text-7xl">
            Put the <span className="text-blue-700">Help</span>{" "}
            <span className="text-yellow-400">Ukraine</span>
            <br />
            widget on your website!
          </h1>

          <p className="text-gray-400 font-bold mt-5 max-w-6xl leading-2 text-4xl md:text-7xl">
            Your customers and visitors of your website will be able to know how
            they can help Ukraine from every place in the world.
          </p>

          <div className="font-semibold text-sky-500 text-xl md:text-3xl mt-10 md:mt-14">
            <a href="#widgets" className="mr-10">
              Widgets ↓
            </a>
            <a href="#instructions">How to install ?</a>
          </div>
        </section>

        <section id="widgets" className="w-full mt-12 lg:mt-20 xl:mt-40">
          <h2 className="text-black text-4xl font-bold">Widgets</h2>
          <p className="text-gray-400 text-xl mt-3">
            Every widget is linked with{" "}
            <a className="underline" href="https://helpukrainewin.org">
              https://helpukrainewin.org
            </a>
          </p>
          <div className="w-full mt-10">
            {widgets.map((options) => (
              <div key={options.type} className="w-full mt-10 lg:mt-10">
                <Widget options={options}></Widget>
              </div>
            ))}
          </div>
        </section>

        <section id="instructions" className="w-full mt-12 lg:mt-20 xl:mt-40">
          <h2 className="text-black text-4xl font-bold">How to install</h2>
          <List>
            <ListItem index={1} text="Choose a widget from the list." />
            <ListItem
              index={2}
              text="Select a place to put it on your website."
            />
            <ListItem
              index={3}
              text="Copy the piece of code to the <head> tag of your website."
            />
          </List>
        </section>

        <section className="w-full mt-14 lg:mt-20 xl:mt-40 text-3xl md:text-5xl">
          <p className="text-black font-semibold leading-1">
            That’s it! Together we will Stop Russian Aggression!
            <span className="text-blue-700 font-semibold mt-4 block">
              Слава <span className="text-yellow-400">Україні!</span>
            </span>
          </p>
        </section>
      </main>

      <footer className="w-full mt-20 lg:mt-26 mx-auto relative py-8 px-6 md:py-12 lg:px-16 xl:px-32">
        <div className="flex w-full items-center">
          <Image
            alt="Logo"
            src="/android-chrome-192x192.png"
            width={40}
            height={40}
            layout="intrinsic"
          ></Image>
          <a
            className="ml-2 font-medium text-sky-500 underline text-xl"
            href="https://helpukrainewin.org/"
          >
            HelpUkraineWin!
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
