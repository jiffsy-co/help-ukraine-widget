import {
  defaultLayout,
  defaultPosition,
  defaultType,
  landingUrl,
  WidgetPosition,
  widgetPositions,
  WidgetType,
  SlideLayout,
  widgetTypes,
  slideLayout,
  scriptId,
  scriptPositionAttribute,
  scriptTypeAttribute,
  scriptLayoutAttribute,
} from './constants'

export interface WidgetConfig {
  widgetType: WidgetType
  widgetPosition: WidgetPosition
  widgetLayout: SlideLayout
}

export function scriptDatasetParams(): WidgetConfig {
  const script = findScripElement()

  const widgetType = parseEnum(script?.getAttribute(scriptTypeAttribute), widgetTypes, defaultType)
  const widgetPosition = parseEnum(
    script?.getAttribute(scriptPositionAttribute),
    widgetPositions,
    defaultPosition
  )
  const widgetLayout = parseEnum(
    script?.getAttribute(scriptLayoutAttribute),
    slideLayout,
    defaultLayout
  )

  return { widgetPosition, widgetType, widgetLayout }
}

export function getConfig(): WidgetConfig {
  const defaultConfig = scriptDatasetParams()
  return scriptSrcParams(defaultConfig)
}

function parseEnum<T>(value: unknown | undefined, values: readonly T[], defaultValue: T): T {
  if (value && typeof value === 'string' && values.indexOf(value as any) !== -1) {
    return value as any as T
  }
  return defaultValue
}

export function scriptSrcParams(
  defaults: WidgetConfig = {
    widgetType: defaultType,
    widgetPosition: defaultPosition,
    widgetLayout: defaultLayout,
  }
): WidgetConfig {
  const script = findScripElement()
  const src = script?.getAttribute('src')

  const params: WidgetConfig = { ...defaults }
  if (!src) {
    return params
  }
  try {
    const url = new URL(src, landingUrl)
    params.widgetType = parseEnum(url.searchParams.get('type'), widgetTypes, defaults.widgetType)
    params.widgetPosition = parseEnum(
      url.searchParams.get('position'),
      widgetPositions,
      defaults.widgetPosition
    )
    params.widgetLayout = parseEnum(
      url.searchParams.get('layout'),
      slideLayout,
      defaults.widgetLayout
    )
  } catch (error) {
    console.error(error)
  }
  return params
}

function findScripElement(): HTMLScriptElement | null {
  return (
    (document.currentScript as HTMLScriptElement) ||
    document.getElementById(scriptId) ||
    Array.from(document.querySelectorAll('script')).find((el) => {
      const src = el.getAttribute('src')
      if (src) {
        const url = new URL(src, landingUrl)
        return (
          url.pathname === '/cdn/widget.js' &&
          url.searchParams.has('type') &&
          url.searchParams.has('position')
        )
      }
      return false
    }) ||
    null
  )
}
