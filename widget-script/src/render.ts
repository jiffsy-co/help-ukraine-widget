import crel from 'crelt'

import {
  donateUrl,
  supportUrl,
  landingUrl,
  WidgetPosition,
  WidgetType,
  AnimationDirection,
  SlideLayout,
  slideLayout,
  widgetWidth,
  widgetHeight,
} from './constants'

export function createWidget(
  type: WidgetType,
  position: WidgetPosition,
  initialSlide: SlideLayout
) {
  const widgetRenderers = {
    one: createWidget1,
    two: createWidget2,
    three: createWidget3,
    four: createWidget4,
  }

  return widgetRenderers[type](position, initialSlide)
}

export function createWidget1(position: WidgetPosition, initialSlide: SlideLayout) {
  return createSlider(
    position,
    initialSlide,
    'vertical',
    crel(
      'div',
      { class: 'huww-slide-container huww-widget-one' },
      createFlag(),
      crel('p', { class: 'huww-title' }, 'Stop Russian Aggression!'),
      crel(
        'a',
        { class: 'huww-link huww-trigger', 'data-huww-trigger': slideLayout[2], href: '#' },
        'See what you can do'
      ),
      createCollapseButton()
    ),
    createFlagBlock(),
    createExpandedWidget1()
  )
}

export function createWidget2(position: WidgetPosition, initialSlide: SlideLayout) {
  return createSlider(
    position,
    initialSlide,
    'vertical',
    crel(
      'div',
      { class: 'huww-slide-container huww-widget-two' },
      createFlag(),
      crel('p', { class: 'huww-title' }, 'Stop War! You can help!'),
      crel('div', { class: 'huww-divider' }),
      crel(
        'a',
        { class: 'huww-link huww-trigger', 'data-huww-trigger': slideLayout[2], href: '#' },
        'See what you can do'
      ),
      createCollapseButton()
    ),
    createFlagBlock(),
    createExpandedWidget2()
  )
}

export function createWidget3(position: WidgetPosition, initialSlide: SlideLayout) {
  return createSlider(
    position,
    initialSlide,
    'horizontal',
    crel(
      'div',
      { class: 'huww-slide-container huww-widget-three' },
      crel('p', { class: 'huww-title' }, 'Stop War!'),
      crel('p', { class: 'huww-subtitle' }, 'Help Ukraine!'),
      crel(
        'a',
        { class: 'huww-button huww-trigger', 'data-huww-trigger': slideLayout[2], href: '#' },
        'See how'
      ),
      createCollapseButton()
    ),
    createFlagBlock(),
    createExpandedWidget3()
  )
}

export function createWidget4(position: WidgetPosition, initialSlide: SlideLayout) {
  return createSlider(
    position,
    initialSlide,
    'vertical',
    crel(
      'div',
      { class: 'huww-slide-container huww-widget-four' },
      crel('p', { class: 'huww-title' }, 'Help 🇺🇦 Ukraine win!'),
      crel('p', { class: 'huww-hashtag' }, '#StandWithUkraine'),
      crel(
        'a',
        { class: 'huww-link huww-trigger', 'data-huww-trigger': slideLayout[2], href: '#' },
        'See how to help'
      ),
      createCollapseButton(),
      createHalfFlag()
    ),
    createFlagBlock(),
    createExpandedWidget2()
  )
}

function createSlider(
  position: WidgetPosition,
  initialSlide: SlideLayout,
  direction: AnimationDirection,
  main: HTMLElement,
  collapsed: HTMLElement,
  expanded: HTMLElement
) {
  return crel(
    'div',
    { class: `huww-widget huww-widget-${position}`, 'data-huww-slide': initialSlide },
    crel(
      'div',
      {
        class: `huww-slider huww-slider-direction-${direction}`,
        style: `width:${widgetWidth}px;height:${widgetHeight}px;`,
      },
      createSlide('collapsed', collapsed),
      createSlide('main', main),
      createSlide('expanded', expanded)
    )
  )
}

function createSlide(slideLayout: SlideLayout, slideElem: HTMLElement) {
  return crel('div', { class: 'huww-slide', 'data-huww-slide': slideLayout }, slideElem)
}

function createCollapseButton() {
  return crel('div', {
    class: 'huww-button-collapse huww-trigger',
    'data-huww-trigger': slideLayout[0],
  })
}

function createFlag() {
  return crel(
    'div',
    { class: 'huww-flag' },
    crel('div', { class: 'huww-flag-top' }),
    crel('div', { class: 'huww-flag-bottom' })
  )
}

function createHalfFlag() {
  return crel(
    'div',
    { class: 'huww-half-flag' },
    crel('div', { class: 'huww-half-flag-top' }),
    crel('div', { class: 'huww-half-flag-bottom' })
  )
}

function createFlagBlock() {
  return crel(
    'div',
    {
      class: 'huww-flag-wrapper huww-trigger huww-slide-container',
      'data-huww-trigger': slideLayout[1],
    },
    crel('div', { class: 'huww-separeted-flag-top' }),
    crel('div', { class: 'huww-separeted-flag-bottom' })
  )
}

function createExpandedWidget1() {
  return crel(
    'div',
    { class: 'huww-expended-widget-wrapper huww-slide-container' },
    createActionList(),
    crel('div', { class: 'huww-divider' }),
    crel(
      'div',
      { class: 'huww-expended-widget-hide huww-trigger', 'data-huww-trigger': slideLayout[1] },
      'Hide'
    )
  )
}

function createExpandedWidget2() {
  return crel(
    'div',
    {
      class: 'huww-expended-widget-wrapper huww-expended-widget-wrapper-small huww-slide-container',
    },
    createActionList(),
    crel('div', { class: 'huww-divider' }),
    crel(
      'div',
      { class: 'huww-expended-widget-hide huww-trigger', 'data-huww-trigger': slideLayout[1] },
      'Hide'
    )
  )
}

function createExpandedWidget3() {
  return crel(
    'div',
    {
      class: 'huww-expended-widget-wrapper huww-expended-widget-wrapper-small huww-slide-container',
    },
    createActionList(),
    crel('button', {
      class: 'huww-expended-widget-hide-button huww-trigger',
      'data-huww-trigger': slideLayout[1],
    })
  )
}

function createActionList() {
  return crel(
    'div',
    { class: 'huww-action-list' },
    createActionItem(donateUrl, 'Donate', '💸', 'Donate'),
    createActionItem(supportUrl, 'Support Ukraine', '❤', 'Info', 'huww-heart'),
    createActionItem(landingUrl, 'Share this widget', '📌', 'GetWidget')
  )
}

function createActionItem(
  href: string,
  text: string,
  emoji: string,
  action: 'Donate' | 'Info' | 'GetWidget',
  emojiClass?: string
) {
  return crel(
    'a',
    {
      class: 'huww-action',
      target: '_blank',
      'data-huww-action': action,
      href,
      rel: 'nofollow noopener',
    },
    crel('span', {}, text),
    crel('span', { class: emojiClass }, emoji)
  )
}
