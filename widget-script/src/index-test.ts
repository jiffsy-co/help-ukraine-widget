import { createWidget } from './render'
import { sliderBehavior } from './slider'
import cssText from 'bundle-text:./styles/styles.scss'
import { getConfig } from './config'

(window as any).__HELPUKRAINEWIDGET_DISABLE_ANALYICS = true;

const params = getConfig()

document.addEventListener('DOMContentLoaded', () => {
  injectStyles()
  document.body.append(createWidget('one', 'top-left', 'main'))
  document.body.append(createWidget('two', 'top-right', 'main'))
  document.body.append(createWidget('four', 'bottom-left', 'main'))
  document.body.append(createWidget('three', 'middle-left', 'expanded'))
  document.body.append(createWidget('three', 'middle-right', 'collapsed'))
  document.body.append(createWidget(params.widgetType, params.widgetPosition, params.widgetLayout))

  injectAnalytics();
  sliderBehavior()
})

function injectStyles() {
  const style = document.createElement('style')
  document.head.appendChild(style)
  style.appendChild(document.createTextNode(cssText))
}

function injectAnalytics(){
  if ((window as any).__HELPUKRAINEWIDGET_DISABLE_ANALYICS) {
    return;
  }
  const script = document.createElement('script');
  script.setAttribute('src', process.env.NEXT_PUBLIC_ANALYTICS_SCRIPT_PATH || 'https://analytics.helpukrainewinwidget.org/js/script.local.js');
  script.setAttribute('defer', '');
  script.setAttribute('data-domain', [...params.widgetDomain.split(','), process.env.NEXT_PUBLIC_ANALYTICS_ROLLUP_DOMAIN || 'rollup-analytics.helpukrainewinwidget.org'].join(','));
  document.head.appendChild(script);
}