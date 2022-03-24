import {createWidget, sliderBehavior} from "./render";
import cssText from 'bundle-text:./styles/styles.scss';

document.addEventListener("DOMContentLoaded", () => {
    injectStyles();
    document.body.append(createWidget("one", "top-left", 'collapsed'));
    document.body.append(createWidget("two", "top-right", 'collapsed'));
    document.body.append(createWidget("three", "bottom-right", 'collapsed'));
    document.body.append(createWidget("four", "bottom-left", 'collapsed'));
		document.body.append(createWidget("three", "middle-left", 'collapsed' ));
		document.body.append(createWidget("three", "middle-right", 'collapsed' ));

		sliderBehavior();
});


function injectStyles() {
    const style = document.createElement('style');
    document.head.appendChild(style);
    style.appendChild(document.createTextNode(cssText));
}
