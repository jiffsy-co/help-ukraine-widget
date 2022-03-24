import {createWidget, sliderBehavior} from "./render";
import cssText from 'bundle-text:./styles/styles.scss';

document.addEventListener("DOMContentLoaded", () => {
    injectStyles();
    document.body.append(createWidget("one", "top-left"));
    document.body.append(createWidget("two", "top-right"));
    document.body.append(createWidget("three", "bottom-right"));
    document.body.append(createWidget("four", "bottom-left"));
		document.body.append(createWidget("one", "middle-left"));
		document.body.append(createWidget("two", "middle-right"));

		sliderBehavior();
});


function injectStyles() {
    const style = document.createElement('style');
    document.head.appendChild(style);
    style.appendChild(document.createTextNode(cssText));
}
