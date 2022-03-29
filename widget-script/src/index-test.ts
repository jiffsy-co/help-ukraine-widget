import {createWidget} from "./render";
import {sliderBehavior} from "./slider";
import cssText from 'bundle-text:./styles/styles.scss';
import {getConfig} from "./config";

const params = getConfig()

document.addEventListener("DOMContentLoaded", () => {
    injectStyles();
    document.body.append(createWidget("one", "top-left", 'main'));
    document.body.append(createWidget("two", "top-right", 'main'));
    document.body.append(createWidget("four", "bottom-left", 'main'));
    document.body.append(createWidget("three", "middle-left", 'expanded' ));
    document.body.append(createWidget("three", "middle-right", 'collapsed' ));
    document.body.append(createWidget(params.widgetType, params.widgetPosition, params.widgetLayout ));

    sliderBehavior();
});


function injectStyles() {
    const style = document.createElement('style');
    document.head.appendChild(style);
    style.appendChild(document.createTextNode(cssText));
}
