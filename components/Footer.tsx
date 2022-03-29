import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="w-full mt-20 lg:mt-26 mx-auto relative py-8 px-3 sm:px-6 md:py-12 lg:px-16 xl:px-32">
      <div className="flex w-full items-center">
        <Logo className="w-10 h-10" />

        <a
          className="ml-2 font-medium text-sky-500 underline text-xl"
          href="https://helpukrainewin.org/"
        >
          HelpUkraineWin!
        </a>
      </div>
    </footer>
  );
};

export default Footer;
