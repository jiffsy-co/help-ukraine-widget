import cssText from 'bundle-text:./styles/styles.scss';
import { createWidget1, createWidget2, createWidget3 } from './render';



document.addEventListener("DOMContentLoaded", () => {
    injectStyles();
    initWidget();
});


const widgetRenderers: {[key: string]: () => HTMLElement} = {
    one: createWidget1,
    two: createWidget2,
    three: createWidget3,
}

const widgetTypes = Object.keys(widgetRenderers);
const defaultType = "one";


function injectStyles() {
    const style = document.createElement('style');
    document.head.appendChild(style);
    style.appendChild(document.createTextNode(cssText));
}

function initWidget() {
    const config = parseWidgetConfig(window.HELP_UKRAINE_WIDGET);
    document.body.append(widgetRenderers[config.widgetType]());
}

function parseWidgetConfig(widgetConfig: unknown): WidgetConfig {
    const defaultConfig = {widgetType: defaultType};
    if (!widgetConfig) {
        return defaultConfig;
    }

    if (typeof widgetConfig === "object") {
        const widgetType = (widgetConfig as any)["widgetType"];

        if (widgetTypeValid(widgetType)) {
            return {widgetType};
        }
    }

    return defaultConfig;
}

function widgetTypeValid(widgetType: unknown | undefined) {
    return widgetType && typeof widgetType === "string" && widgetTypes.indexOf(widgetType) !== -1;
}


interface WidgetConfig {
    widgetType: string;
}

declare global {
    interface Window {
        HELP_UKRAINE_WIDGET?: unknown;
    }
}
