export interface IWidgetOptions {
  type: "one" | "two" | "three" | "four";
  position: "top-left" | "top-right" | "bottom-right" | "bottom-left";
}

export interface ITextBlock {
  title: 'string',
  children: Element | string,
}

export interface IButton {
  title: 'string',
  children?: any,
}

export interface IDescription {
  logo: Element,
  description: string,
  link: string,
}

export interface IEllipse {
  children: any,
  large?: boolean
}