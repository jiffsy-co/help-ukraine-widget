import cssText from 'bundle-text:./styles/styles.scss'
import { getConfig } from './config'
import { createWidget } from './render'
import { sliderBehavior } from './slider'

if (document.readyState !== 'loading') {
  setTimeout(initialize)
} else {
  document.addEventListener('DOMContentLoaded', initialize)
}

const params = getConfig()

function initialize() {
    injectAnalytics();
    injectStyles();
    initWidget();
}

function injectStyles() {
  const style = document.createElement('style')
  document.head.appendChild(style)
  style.appendChild(document.createTextNode(cssText))
}

function initWidget() {
  document.body.append(createWidget(params.widgetType, params.widgetPosition, params.widgetLayout))
  sliderBehavior()
}

function injectAnalytics(){
    if ((window as any).__HELPUKRAINEWIDGET_DISABLE_ANALYICS) {
      return;
    }
    const script = document.createElement('script');
    script.setAttribute('src', process.env.NEXT_PUBLIC_ANALYTICS_SCRIPT_PATH || 'https://analytics.helpukrainewinwidget.org/js/script.js');
    script.setAttribute('defer', '');
    script.setAttribute('data-domain', [...params.widgetDomain.split(','), process.env.NEXT_PUBLIC_ANALYTICS_ROLLUP_DOMAIN || 'rollup-analytics.helpukrainewinwidget.org'].join(','));
    document.head.appendChild(script);
}