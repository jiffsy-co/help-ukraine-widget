import { SlideLayout, sliderStorageKey } from './constants'

class SliderStorage {
  constructor(private key: string) {}
  get(): SlideLayout | null {
    return localStorage.getItem(this.key) === 'true'
      ? 'collapsed'
      : localStorage.getItem(this.key) === 'false'
      ? 'main'
      : null
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
	const actionList = widget.querySelectorAll<HTMLAnchorElement>('.huww-widget a')
	const persistedState = sliderStorage.get()
	if ( !(window as any).__HELPUKRAINEWIDGET_DISABLE_PERSISTENCE && persistedState ) {
		widget.dataset.slide = persistedState
	}
	triggerList.forEach((triggerElem: HTMLElement) => {
		triggerElem.addEventListener('click', (e) => {
			e.preventDefault()
			const sliderState = triggerElem.dataset.trigger!
			widget.dataset.slide = sliderState
			sliderStorage.set(sliderState)
			try {
				(window as any).plausible && (window as any).plausible("ChangeState", { props:{ state: sliderState } })
			} catch (error) {}
		})
	})
	actionList.forEach((actionElem: HTMLElement) => {
		actionElem.addEventListener('click', (e) => {
			if (!actionElem.hasAttribute('href')) {
				return;
			}
			try {
				(window as any).plausible && (window as any).plausible("Outbound Link: Click",{ props: { url: actionElem.getAttribute('href') } })
			} catch (error) {}
		})
	})
}
