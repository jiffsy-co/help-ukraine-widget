import { SlideLayout, sliderDisabledPersistenceStorageKey, sliderStorageKey } from './constants'

class SliderStorage {
  constructor(private key: string, private disabledKey: string) {}
  get(): SlideLayout | null {
    return localStorage.getItem(this.key) === 'true'
      ? 'collapsed'
      : localStorage.getItem(this.key) === 'false'
      ? 'main'
      : null
  }
  // disabled persistence for preview on landing
  disabled(): boolean {
    return localStorage.getItem(this.disabledKey) === 'true'
  }
  set(state: string): void {
    localStorage.setItem(this.key, (state === 'collapsed').toString())
  }
}

export function sliderBehavior() {
  const widgets = document.querySelectorAll<HTMLElement>('.huww-widget')
  widgets.forEach((widget) => sliderElement(widget))
}

const sliderStorage = new SliderStorage(sliderStorageKey, sliderDisabledPersistenceStorageKey)

function sliderElement(widget: HTMLElement) {
  const triggerList = widget.querySelectorAll<HTMLElement>('.huww-trigger')
  const persistedState = sliderStorage.get()
  if (!sliderStorage.disabled() && persistedState) {
    widget.dataset.slide = persistedState
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
