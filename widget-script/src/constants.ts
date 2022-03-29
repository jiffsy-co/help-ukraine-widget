export const armyUrl = 'https://helpukrainewin.org'
export const helpUrl = 'https://helpukrainewin.org'
export const landingUrl = 'https://helpukrainewinwidget.org'

export const sliderStorageKey = 'huww-slider-state'

export const widgetWidth: number = 400
export const widgetHeight: number = 250

export const widgetPositions = [
  'top-left',
  'top-right',
  'bottom-right',
  'bottom-left',
  'middle-left',
  'middle-right',
] as const
export type WidgetPosition = typeof widgetPositions[number]

export const slideLayout = ['collapsed', 'main', 'expanded'] as const
export type SlideLayout = typeof slideLayout[number]

export const animationDirection = ['vertical', 'horizontal'] as const
export type AnimationDirection = typeof animationDirection[number]

export const widgetTypes = ['one', 'two', 'three', 'four'] as const
export type WidgetType = typeof widgetTypes[number]

export const defaultType: WidgetType = 'three'
export const defaultPosition: WidgetPosition = 'top-left'

// export const scriptId = 'help-ukraine-win';
// export const scriptTypeAttribute = "data-type";
// export const scriptPositionAttribute = "data-position";
