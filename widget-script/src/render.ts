import crel from 'crelt';
import clsx from 'clsx';

import {
	armyUrl,
	helpUrl,
	landingUrl,
	WidgetPosition,
	WidgetType,
	AnimationDirection,
	SlideLayout,
	slideLayout,
	widgetWidth,
	widgetHeight
} from './constants';

export function createWidget(type: WidgetType, position: WidgetPosition, initialSlide: SlideLayout ) {
    const widgetRenderers = {
        one: createWidget1,
        two: createWidget2,
        three: createWidget3,
        four: createWidget4,
    }

    return widgetRenderers[type](position, initialSlide);
}

export function sliderBehavior() {
	const widgets = document.querySelectorAll('.huww-widget')
	const slide = (widget: HTMLElement) => {
		const slider = widget.querySelector<HTMLElement>('.huww-slider')!
		const triggerList = widget.querySelectorAll('.huww-trigger')!
			// @ts-ignore
		;[...triggerList].forEach((triggerElem: HTMLElement) => {
			triggerElem.addEventListener('click', (e) => {
				e.preventDefault()
				slider.dataset.slide = triggerElem.dataset.trigger
			})
		})
	}
		// @ts-ignore
	;[...widgets].forEach((widget) => slide(widget))
}

export function createWidget1(position: WidgetPosition, initialSlide: SlideLayout ) {
		return createSlider( position, initialSlide, 'vertical', 'one', [
				createFlag(),
				crel('p', { class: 'huww-title' }, 'Stop Russian Aggression!'),
				crel('a', { class: 'huww-link huww-trigger', 'data-trigger': slideLayout[2], href: helpUrl, target: '_blank' }, 'See what you can do'),
				createCollapseButton(),
			],
			createFlagBlock(),
			createExpandedWidget1()
		);
}

export function createWidget2(position: WidgetPosition, initialSlide: SlideLayout) {
		return createSlider( position, initialSlide,'vertical', 'two', [
				createFlag(),
				crel('p', { class: 'huww-title' }, 'Stop War! You can help!'),
				crel('div', { class: 'huww-divider' }),
				crel('a', { class: 'huww-link huww-trigger', 'data-trigger': slideLayout[2], href: helpUrl, target: '_blank' }, 'See what you can do'),
				createCollapseButton(),
			],
			createFlagBlock(),
			createExpandedWidget2()
		);
}

export function createWidget3(position: WidgetPosition, initialSlide: SlideLayout) {
	return createSlider( position, initialSlide,'horizontal', 'three', [
			crel('p', { class: 'huww-title' }, 'Stop War!'),
			crel('p', { class: 'huww-subtitle' }, 'Help Ukraine!'),
			crel('a', { class: 'huww-button huww-trigger', 'data-trigger': slideLayout[2], href: helpUrl, target: '_blank' }, 'See how'),
			createCollapseButton(),
		],
		createFlagBlock(),
		createExpandedWidget3()
	);
}

export function createWidget4(position: WidgetPosition, initialSlide: SlideLayout) {
	return createSlider( position, initialSlide,'vertical', 'four',[
			crel('p', { class: 'huww-title' }, 'Help 🇺🇦 Ukraine win!'),
			crel('p', { class: 'huww-hashtag' }, '#StandWithUkraine'),
			crel('a', { class: 'huww-link huww-trigger', 'data-trigger': slideLayout[2], href: helpUrl, target: '_blank' }, 'See how to help'),
			createCollapseButton(),
			createHalfFlag(),
		],
		createFlagBlock(),
		createExpandedWidget2()
	);
}

function createSlider ( position: WidgetPosition, initialSlide: SlideLayout, direction: AnimationDirection, widgetType: WidgetType, mainList: HTMLElement[], collapsed: HTMLElement, expanded: HTMLElement ) {
	const main = document.createDocumentFragment()
	mainList.forEach( elem => main.appendChild(elem) )
	return crel( 'div', { class: `huww-widget huww-widget-${position}` },
		crel( 'div', {
				class: `huww-slider huww-slider-direction-${direction}`,
				style: `width:${widgetWidth};height:${widgetHeight};`,
				'data-slide': initialSlide
			},
			createSlide( 'collapsed', collapsed ),
			createSlide( 'main', main, widgetType ),
			createSlide( 'expanded', expanded ),
		),
	);
}

function createSlide ( slideLayout: SlideLayout, slideElem: HTMLElement | DocumentFragment, widgetType?: WidgetType ) {
	return crel( 'div', { class: 'huww-slide', 'data-slide': slideLayout },
		crel( 'div', { class: clsx( 'huww-slide-container', widgetType && `huww-widget-${widgetType}` ) }, slideElem )
	);
}

function createCollapseButton() {
	return crel( 'div', { class: 'huww-button-collapse huww-trigger', 'data-trigger': slideLayout[0] } )
}

function createFlag() {
    return crel('div', { class: 'huww-flag' },
        crel('div', { class: 'huww-flag-top' }),
        crel('div', { class: 'huww-flag-bottom' })
    )
}

function createHalfFlag() {
    return crel('div', { class: 'huww-half-flag' },
        crel('div', { class: 'huww-half-flag-top' }),
        crel('div', { class: 'huww-half-flag-bottom' })
    )
}

function createFlagBlock() {
    return crel('div', {class: 'huww-flag-wrapper huww-trigger', 'data-trigger': slideLayout[1] },
        crel('div', { class: 'huww-separeted-flag-top' }),
        crel('div', { class: 'huww-separeted-flag-bottom' })
        )
}

function createExpandedWidget1(){
    return crel('div', {class: 'huww-expended-widget-wrapper'},
	    createActionList(),
	    crel('div', { class: 'huww-divider' }),
	    crel('div', {class: 'huww-expended-widget-hide huww-trigger', 'data-trigger': slideLayout[1] }, 'Hide' ),
    )
}

function createExpandedWidget2(){
	return crel('div', {class: 'huww-expended-widget-wrapper huww-expended-widget-wrapper-small'},
		createActionList(),
		crel('div', { class: 'huww-divider' }),
		crel('div', {class: 'huww-expended-widget-hide huww-trigger', 'data-trigger': slideLayout[1] }, 'Hide' ),
	)
}

function createExpandedWidget3(){
    return crel('div', {class: 'huww-expended-widget-wrapper huww-expended-widget-wrapper-small'},
	    createActionList(),
      crel('button', {class: 'huww-expended-widget-hide-button huww-trigger', 'data-trigger': slideLayout[1] } )
    )
}

function createActionList() {
	return crel( 'div', { class: 'huww-action-list' },
		createActionItem(
			armyUrl,
			'Donate Army',
			'💸'
		),
		createActionItem(
			helpUrl,
			'Other ways to help',
			'❤' , 'huww-heart'
		),
		createActionItem(
			landingUrl,
			'Get this widget',
			'📌'
		)
	);
}

function createActionItem ( href: string, text: string, emoji: string, emojiClass?: string ) {
	return crel('a', {class: 'huww-action', target: '_blank', href },
		crel('span', {}, text ),
		crel('span',{ class: emojiClass }, emoji )
	);
}
