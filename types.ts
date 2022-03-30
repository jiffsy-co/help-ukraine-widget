export interface IWidgetOptions {
  type: "one" | "two" | "three" | "four";
  position: "top-left" | "top-right" | "bottom-right" | "bottom-left";
}

export interface IButton {
  title: 'string',
  children?: any,
}