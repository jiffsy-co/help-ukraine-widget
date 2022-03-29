import cssText from 'bundle-text:./styles/styles.scss';
import {scriptSrcParams} from './config';
import {createWidget} from './render';
import {sliderBehavior} from "./slider";

if (document.readyState !== "loading") {
    setTimeout(initialize);
} else {
    document.addEventListener("DOMContentLoaded", initialize);
}

const params = scriptSrcParams()

function initialize() {
    injectStyles();
		initWidget();
}

function injectStyles() {
    const style = document.createElement('style');
    document.head.appendChild(style);
    style.appendChild(document.createTextNode(cssText));
}


function initWidget() {
    document.body.append(createWidget(params.widgetType, params.widgetPosition, 'main'));

		sliderBehavior();
}

