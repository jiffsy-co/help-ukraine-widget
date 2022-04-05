import { ReactNode } from 'react'

export const widgetTypes = ['one', 'two', 'three', 'four'] as const
export type IWidgetType = typeof widgetTypes[number]

export const widgetPositionsList = {
  'top-left': 'Top Left',
  'top-right': 'Top Right',
  'bottom-right': 'Bottom Right',
  'bottom-left': 'Bottom Left',
  'middle-left': 'Middle Left',
  'middle-right': 'Middle Right',
} as const
export const widgetPositions = Object.keys(widgetPositionsList)
export type IWidgetPosition = typeof widgetPositions[number]

export const widgetLayout = ['expanded', 'main', 'collapsed'] as const
export type IWidgetLayout = typeof widgetLayout[number]

export const defaultPosition: IWidgetPosition = 'top-left'
export const defaultLayout: IWidgetLayout = 'main'

export interface IWidgetOptions {
  type: IWidgetType
  position: IWidgetPosition
  layout: IWidgetLayout
}

export interface ITextBlock {
  title: string
  children: any
}

export interface IButton {
  title: string
  link?: string
  children?: any
}

export interface IDescription {
  logo: JSX.Element
  description: string
  link: string
}

export interface IEllipse {
  children: any
  large?: boolean
}

export interface IPrivacyText {
  children: ReactNode
}

export interface IRights {
  items: string[][]
}
