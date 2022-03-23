import crel from 'crelt';
import { helpUrl, landingUrl, WidgetPosition, WidgetType } from './constants';
import logo from 'bundle-text:./styles/logo.svg';

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

function widgetWrapper ( position: WidgetPosition, main: HTMLElement, flag: HTMLElement, expanded: HTMLElement ) {
	return crel( 'div', { class: `huww-widget huww-widget-${position}` },
		crel( 'div', {}, flag ),
		crel( 'div', {}, main ),
		crel( 'div', {}, expanded )
	);
}

export function createWidget1(position: WidgetPosition) {
		return widgetWrapper( position,
			crel('div', { class: `huww-widget-main huww-widget-one` },
				createFlag(),
				crel('p', { class: 'huww-title' }, 'Stop Russian Aggression!'),
				crel('a', { class: 'huww-link huww-trigger-expand', href: helpUrl, target: '_blank' }, 'See what you can do'),
				createLogo()
			),
			createFlagBlock(),
			createExpandedWidget1()
		);
}

export function createWidget2(position: WidgetPosition) {
		return widgetWrapper( position,
			crel('div', { class: `huww-widget-main huww-widget-two` },
				createFlag(),
				crel('p', { class: 'huww-title' }, 'Stop War! You can help!'),
				crel('div', { class: 'huww-divider' }),
				crel('a', { class: 'huww-link huww-trigger-expand', href: helpUrl, target: '_blank' }, 'See what you can do'),
				createLogo(),
			),
			createFlagBlock(),
			createExpandedWidget1()
		);
}

export function createWidget3(position: WidgetPosition) {
	return widgetWrapper( position,
		crel('div', { class: `huww-widget-main huww-widget-three` },
			crel('p', { class: 'huww-title' }, 'Stop War!'),
			crel('p', { class: 'huww-subtitle' }, 'Help Ukraine!'),
			crel('a', { class: 'huww-button huww-trigger-expand', href: helpUrl, target: '_blank' }, 'See how'),
			createLogo(),
		),
		createFlagBlock(),
		createExpandedWidget2()
	);
}

export function createWidget4(position: WidgetPosition) {
	return widgetWrapper( position,
		crel('div', { class: `huww-widget-main huww-widget-four huww-widget-${position}` },
			crel('p', { class: 'huww-title' }, 'Help 🇺🇦 Ukraine win!'),
			crel('p', { class: 'huww-hashtag' }, '#StandWithUkraine'),
			crel('a', { class: 'huww-link huww-trigger-expand', href: helpUrl, target: '_blank' }, 'See how to help'),
			createLogo(),
			createHalfFlag(),
		),
		createFlagBlock(),
		createExpandedWidget1()
	);
}

function createLogo() {
	return crel( 'div', { class: 'huww-trigger-collapse' } )
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
    return crel('div', {class: 'huww-flag-wrapper huww-trigger-flag'},
        crel('div', { class: 'huww-separeted-flag-top' }),
        crel('div', { class: 'huww-separeted-flag-bottom' })
        )
}

function createExpandedWidget1(){
    return crel('div', {class: 'huww-expended-widget-wrapper'},
	    createActionList(),
	    crel('div', { class: 'huww-divider' }),
	    crel('div', {class: 'huww-expended-widget-hide huww-trigger-main'}, 'Hide' ),
    )
}

function createExpandedWidget2(){
    return crel('div', {class: 'huww-expended-widget-wrapper'},
	    createActionList(),
      crel('button', {class: 'huww-expended-widget-hide-button huww-trigger-main'} )
    )
}

function createActionList() {
	return crel( 'div', { class: 'huww-action-list' },
		crel('a', {class: 'huww-action', target: '_blank', href: 'https://helpukrainewin.org/'},
			crel('span', {}, 'Donate Army'),
			crel('span',{},'💸')),
		crel('a', {class: 'huww-action', target: '_blank', href: 'https://helpukrainewin.org/'},
			crel('span', {}, 'Other ways to help'),
			crel('span',{class: 'huww-heart'},'❤')),
		crel('a', {class: 'huww-action', target: '_blank', href: 'https://helpukrainewinwidget.org/'},
			crel('span', {}, 'Get this widget'),
			crel('span',{},'📌')),
	);
}
