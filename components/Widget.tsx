import { useCallback, useRef, useState } from 'react'
import { IWidgetOptions, IWidgetType, defaultPosition, widgetPositionsList } from '../types'
import Iframe from './Iframe'

const makeScript = (options: IWidgetOptions): string => {
  const src = new URL(
    process.env.WIDGET_SCRIPT_URL || 'https://helpukrainewinwidget.org/cdn/widget.js'
  )
  src.searchParams.set('type', options.type)
  src.searchParams.set('position', options.position)
  return `<script id="help-ukraine-win" async="true" src="${src.href}"></script>`
}

function Widget({ type }: { type: IWidgetType }) {
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null)
  const [isCopied, setIsCopied] = useState(false)
  const [options, setOptions] = useState<IWidgetOptions>({ type, position: defaultPosition })
  const onClickCopy = useCallback(() => {
    if (textAreaRef.current) {
      textAreaRef.current.select()
      document.execCommand('copy')
      setIsCopied(true)
      const t = setTimeout(() => setIsCopied(false), 1500)
      return () => {
        clearTimeout(t)
      }
    }
  }, [])
  return (
    <div className="w-full overflow-hidden md:max-w-6xl">
      <div className="md:flex">
        <div className="md:shrink-0">
          <div
            className={`h-80 w-full rounded-t-lg md:w-96 bg-gray-100 md:rounded-lg overflow-hidden`}
          >
            <Iframe type={options.type} position={options.position} />
          </div>
        </div>

        <div className="pl-0 md:pt-0 md:pl-4 w-full h-40 md:h-80">
          <div className="rounded-b-lg md:rounded-lg border border-gray-200 w-full flex flex-col h-full overflow-hidden">
            <div className={`flex w-full`}>
              <div className={`flex border-r border-r-gray-200 lg:px-4`}>
                <div className={`flex-none pl-3 py-2 font-medium`}>Placement:</div>
                <select
                  value={options.position}
                  onChange={(e) =>
                    setOptions({
                      ...options,
                      position: e.target.value as IWidgetOptions['position'],
                    })
                  }
                  className={`form-select appearance-none font-medium block px-2 py-2 text-base text-blue-600 bg-white bg-clip-padding bg-no-repeat rounded transition ease-in-out m-0 focus:text-blue-700 focus:bg-white focus:border-blue-600 focus:outline-none`}
                >
                  {Object.entries(widgetPositionsList).map(([position, label]) => {
                    console.log(position, options.position)
                    return (
                      <option key={position} value={position}>
                        {label} {position === options.position && '▾'}
                      </option>
                    )
                  })}
                </select>
              </div>
              <button
                onClick={onClickCopy}
                className={`flex-1 text-md font-medium ${
                  isCopied
                    ? `bg-gradient-to-r via-blue-500 from-yellow-300 to-yellow-300 text-white`
                    : 'text-blue-600'
                }`}
              >
                {isCopied ? 'Copied!' : 'Copy to Clipboard'}
              </button>
            </div>

            <div className={`border-t border-t-gray-200 flex flex-col flex-1`}>
              <textarea
                className={`w-full h-full px-3 py-2 lg:px-7 lg:py-4 text-gray-600 text-sm rounded-b-lg flex-1 appearance-none block focus:outline-none font-mono`}
                ref={textAreaRef}
                readOnly
                value={makeScript(options)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Widget
