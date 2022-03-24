import crel from 'crelt';
import {
	armyUrl,
	helpUrl,
	landingUrl,
	WidgetPosition,
	WidgetType,
	AnimationDirection,
	SlideLayout, slideLayout
} from './constants';

export function createWidget(type: WidgetType, position: WidgetPosition) {
    const widgetRenderers = {
        one: createWidget1,
        two: createWidget2,
        three: createWidget3,
        four: createWidget4,
    }

    return widgetRenderers[type](position);
}

export function widgetBehavior () {
	// @ts-ignore
	const widgetList = [...document.querySelectorAll('.huww-widget')]

	widgetList.forEach( (widget: HTMLElement) => {
		const hide = widget.querySelector<HTMLElement>('.huww-trigger-main')!
		const link = widget.querySelector<HTMLElement>('.huww-trigger-expand')!
		const flag = widget.querySelector<HTMLElement>('.huww-trigger-flag')!
		const logo = widget.querySelector<HTMLElement>('.huww-trigger-collapse')!

		if ( [hide,link,flag,logo].some( elem =>!elem ) ) {
			return
		}

		const setSlide = ( elem: HTMLElement, index: number ) => {
			elem.addEventListener('click', (e) => {
				e.preventDefault()
				widget.dataset.slide = index.toString()
			} )
		}

		setSlide( logo, 1 )
		setSlide( flag, 2 )
		setSlide( hide, 2 )
		setSlide( link, 3 )
		widget.dataset.slide = '2'
	} )
}

export function createWidget1(position: WidgetPosition) {
		return createSlider( position, 'vertical',
			crel('div', { class: 'huww-widget-one' },
				createFlag(),
				crel('p', { class: 'huww-title' }, 'Stop Russian Aggression!'),
				crel('a', { class: 'huww-link huww-trigger', 'data-trigger': slideLayout[2], href: helpUrl, target: '_blank' }, 'See what you can do'),
				createCollapseButton()
			),
			createFlagBlock(),
			createExpandedWidget1()
		);
}

export function createWidget2(position: WidgetPosition) {
		return createSlider( position, 'vertical',
			crel('div', { class: 'huww-widget-two' },
				createFlag(),
				crel('p', { class: 'huww-title' }, 'Stop War! You can help!'),
				crel('div', { class: 'huww-divider' }),
				crel('a', { class: 'huww-link huww-trigger', 'data-trigger': slideLayout[2], href: helpUrl, target: '_blank' }, 'See what you can do'),
				createCollapseButton(),
			),
			createFlagBlock(),
			createExpandedWidget2()
		);
}

export function createWidget3(position: WidgetPosition) {
	return createSlider( position, 'vertical',
		crel('div', { class: 'huww-widget-three' },
			crel('p', { class: 'huww-title' }, 'Stop War!'),
			crel('p', { class: 'huww-subtitle' }, 'Help Ukraine!'),
			crel('a', { class: 'huww-button huww-trigger', 'data-trigger': slideLayout[2], href: helpUrl, target: '_blank' }, 'See how'),
			createCollapseButton(),
		),
		createFlagBlock(),
		createExpandedWidget3()
	);
}

export function createWidget4(position: WidgetPosition) {
	return createSlider( position, 'horizontal',
		crel('div', { class: 'huww-widget-four' },
			crel('p', { class: 'huww-title' }, 'Help 🇺🇦 Ukraine win!'),
			crel('p', { class: 'huww-hashtag' }, '#StandWithUkraine'),
			crel('a', { class: 'huww-link huww-trigger', 'data-trigger': slideLayout[2], href: helpUrl, target: '_blank' }, 'See how to help'),
			createCollapseButton(),
			createHalfFlag(),
		),
		createFlagBlock(),
		createExpandedWidget2()
	);
}

function createSlider ( position: WidgetPosition, direction: AnimationDirection, main: HTMLElement, collapsed: HTMLElement, expanded: HTMLElement ) {
	return crel( 'div', { class: `huww-widget huww-widget-${position}` },
		crel( 'div', { class: `huww-slider huww-slider-direction-${direction}` },
			createSlide( 'collapsed', collapsed ),
			createSlide( 'main', main ),
			createSlide( 'expanded', expanded ),
		),
	);
}

function createSlide ( slideLayout: SlideLayout, slideElem: HTMLElement ) {
	return crel( 'div', { class: 'huww-slide', 'data-slide': slideLayout },
		crel( 'div', { class: 'huww-slide-container' }, slideElem )
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
