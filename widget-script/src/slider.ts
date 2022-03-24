import {SlideLayout} from "./constants";

export function sliderBehavior() {
	const widgets = document.querySelectorAll('.huww-widget')
		// @ts-ignore
	;[...widgets].forEach((widget) => sliderElement(widget))
}

function sliderElement(widget: HTMLElement) {
	const storage = sliderStorage('huww_slider_state')
	const triggerList = widget.querySelectorAll('.huww-trigger')!
	if ( storage.slide ) {
		widget.dataset.slide = storage.slide
	}
	// @ts-ignore
	;[...triggerList].forEach((triggerElem: HTMLElement) => {
		triggerElem.addEventListener('click', (e) => {
			e.preventDefault()
			const sliderState = triggerElem.dataset.trigger!
			widget.dataset.slide = sliderState
			storage.set(sliderState)
		})
	})
}

function sliderStorage (key: string) {
	const get = (): SlideLayout => localStorage.getItem(key) === 'true' ? 'collapsed' : 'main'
	const set = (state: string) => {
		localStorage.setItem(key, (state === 'collapsed').toString())
	}
	return {
		get,
		set,
		slide: get(),
	}
}
