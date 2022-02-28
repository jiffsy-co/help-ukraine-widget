export const landingUrl = "https://helpukrainewinwidget.org";
export const helpUrl = "https://helpukrainewin.org";

export const widgetPositions = ['top-left', 'top-right', 'bottom-right', 'bottom-left'] as const;
export type WidgetPosition = typeof widgetPositions[number];

export const widgetTypes = ["one", "two", "three", "four"] as const;
export type WidgetType = typeof widgetTypes[number];

export const defaultType: WidgetType = "four";
export const defaultPosition: WidgetPosition = "bottom-right";

export const scriptId = 'help-ukraine-win';
export const scriptTypeAttribute = "data-type";
export const scriptPositionAttribute = "data-position";