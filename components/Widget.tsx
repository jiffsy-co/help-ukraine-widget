import { ReactNode, useCallback, useRef, useState } from "react";
import styles from "../styles/Widget.module.css";

export interface IWidget {
  name: string;
  script: string;
  example: ReactNode;
}

function Widget({ options }: { options: IWidget }) {
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);
  const [isCopied, setIsCopied] = useState(false);
  const [placement, setPlacement] = useState<number>(1);
  const onClickCopy = useCallback(() => {
    if (textAreaRef.current) {
      textAreaRef.current.select();
      document.execCommand("copy");
      setIsCopied(true);
      const t = setTimeout(() => setIsCopied(false), 1500);
      return () => {
        clearTimeout(t);
      };
    }
  }, []);
  return (
    <div className="w-full overflow-hidden md:max-w-6xl">
      <div className="md:flex">
        <div className="md:shrink-0">
          <div className={`h-80 w-full md:w-80 bg-gray-100 rounded-lg`}>
            {options.example}
          </div>
        </div>

        <div className="pt-4 pl-0 md:pt-0 md:pl-4 w-full h-80">
          <div className="rounded-lg border border-gray-200 w-full flex flex-col h-full overflow-hidden">
            <div className={`flex w-full`}>
              <div className={`flex border-r border-r-gray-200 lg:px-4`}>
                <div className={`flex-none pl-3 py-2 font-medium`}>
                  Placement:
                </div>
                <select
                  value={placement}
                  onChange={(e) => setPlacement(+e.target.value)}
                  className={`form-select appearance-none font-medium block px-2 py-2 text-base text-blue-600 bg-white bg-clip-padding bg-no-repeat rounded transition ease-in-out m-0 focus:text-blue-700 focus:bg-white focus:border-blue-600 focus:outline-none`}
                >
                  <option value={1}>Top Left {placement === 1 && "▾"}</option>
                  <option value={2}>Top Right {placement === 2 && "▾"}</option>
                  <option value={3}>
                    Bottom Left {placement === 3 && "▾"}
                  </option>
                  <option value={4}>
                    Bottom Right {placement === 4 && "▾"}
                  </option>
                </select>
              </div>
              <button
                onClick={onClickCopy}
                className={`flex-1 text-md font-medium ${
                  isCopied
                    ? `bg-gradient-to-r via-blue-500 from-yellow-300 to-yellow-300 text-white`
                    : "text-blue-600"
                }`}
              >
                {isCopied ? "Copied!" : "Copy to Clipboard"}
              </button>
            </div>

            <div className={`border-t border-t-gray-200 flex flex-col flex-1`}>
              <textarea
                className={`w-full h-full px-3 py-2 lg:px-7 lg:py-4 text-gray-600 font-mono text-sm rounded-b-lg flex-1 appearance-none block focus:outline-none font-mono`}
                ref={textAreaRef}
                readOnly
                value={options.script}
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Widget;
