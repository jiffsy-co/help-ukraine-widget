export interface IWidgetOptions {
  type: "one" | "two" | "three" | "four";
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "middle-left" | "middle-right";
  layout: 'expanded' | 'main' | 'collapsed'
}

export interface IButton {
  title: any,
  children?: any,
}