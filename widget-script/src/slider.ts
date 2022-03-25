import {SlideLayout, sliderStorageKey} from "./constants";

class SliderStorage {
	constructor(private key: string) {}
	get(): SlideLayout {
		return localStorage.getItem(this.key) === 'true' ? 'collapsed' : 'main'
	}
	set(state: string): void {
		localStorage.setItem(this.key, (state === 'collapsed').toString())
	}
}

export function sliderBehavior() {
	const widgets = document.querySelectorAll<HTMLElement>('.huww-widget')
	widgets.forEach((widget) => sliderElement(widget))
}

const sliderStorage = new SliderStorage(sliderStorageKey)

function sliderElement(widget: HTMLElement) {
	const triggerList = widget.querySelectorAll<HTMLElement>('.huww-trigger')
	if ( sliderStorage.get() ) {
		widget.dataset.slide = sliderStorage.get()
	}
	triggerList.forEach((triggerElem: HTMLElement) => {
		triggerElem.addEventListener('click', (e) => {
			e.preventDefault()
			const sliderState = triggerElem.dataset.trigger!
			widget.dataset.slide = sliderState
			sliderStorage.set(sliderState)
		})
	})
}


