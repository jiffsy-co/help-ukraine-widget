import { IWidgetOptions } from "../types";

function Iframe({ type = "one", position = "bottom-right" }: IWidgetOptions) {
  return (
    <iframe
      sandbox="allow-scripts allow-same-origin"
      className="w-full h-full border-none"
      src={`/sandbox/${type}/${position}`}
    ></iframe>
  );
}

export default Iframe;
