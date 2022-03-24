import crel from 'crelt';
import { helpUrl, landingUrl, WidgetPosition, WidgetType } from './constants';
import logo from 'bundle-text:./styles/logo.svg';

export function createWidget(type: WidgetType, position: WidgetPosition) {
    const widgetRenderers = {
        one: createWidget1,
        two: createWidget2,
        three: createWidget3,
        four: createWidget4,
    }

    return widgetRenderers[type](position);
}

export function createWidget1(position: WidgetPosition) {
    return crel('div', { class: `huww-widget huww-widget-one huww-widget-${position}` },
        crel('p', { class: 'huww-title' }, 'Stop Russian Aggression!'),
        crel('a', { class: 'huww-link', href: helpUrl, target: '_blank' }, 'See what you can do',
            crel('span',{class: 'huww-open-arrow'}),
    ),
        createCloseButton(),
        createFlag(),
    );
}

export function createWidget2(position: WidgetPosition) {
    return crel('div', { class: `huww-widget huww-widget-two huww-widget-${position}` },
        createFlag(),
        crel('p', { class: 'huww-title' }, 'Stop War! You can help!'),
        crel('div', { class: 'huww-divider' }),
        crel('a', { class: 'huww-link', href: helpUrl, target: '_blank' }, 'See what you can do',
            crel('span',{class: 'huww-open-arrow'}),
        ),
        createCloseButton(),
    );
}

export function createWidget3(position: WidgetPosition) {
    return crel('div', { class: `huww-widget huww-widget-three huww-widget-${position}` },
        crel('p', { class: 'huww-title' }, 'Stop War!'),
        crel('p', { class: 'huww-subtitle' }, 'Help Ukraine!'),
        crel('a', { class: 'huww-button', href: helpUrl, target: '_blank' }, 'See how',
            crel('span',{class: 'huww-open-arrow'}),
        ),
        createCloseButton(),
    );
}

export function createWidget4(position: WidgetPosition) {
    return crel('div', { class: `huww-widget huww-widget-four huww-widget-${position}` },
        crel('p', { class: 'huww-title' }, 'Help 🇺🇦 Ukraine win!'),
        crel('p', { class: 'huww-hashtag' }, '#StandWithUkraine'),
        crel('a', { class: 'huww-link', href: helpUrl, target: '_blank' }, 'See how to help',
            crel('span',{class: 'huww-open-arrow'}),
            ),
        createCloseButton(),
        createHalfFlag(),
    );
}

function createLogo() {
    return crel('a', { class: "huww-logo", href: landingUrl, target: '_blank' },
        crel('span', {class: 'huww-logo-img'}),
        crel('span', { class: 'huww-logo-text'}, 'Get widget'),
    );
}

function createCloseButton() {
    return crel('span', {class: 'huww-close-button'},
        crel('span', {class: 'huww-close-span'}),
        );
}

function createFlag() {
    return crel('div', { class: 'huww-flag' },
        crel('div', { class: 'huww-flag-top' }),
        crel('div', { class: 'huww-flag-bottom' })
    )
}

function createHalfFlag() {
    return crel('div', { class: 'huww-half-flag' },
        crel('div', { class: 'huww-half-flag-top' }),
        crel('div', { class: 'huww-half-flag-bottom' })
    )
}

function createFlagBlock() {
    return crel('div', {class: 'huww-flag-wrapper'},
        crel('div', { class: 'huww-separeted-flag-top' }),
        crel('div', { class: 'huww-separeted-flag-bottom' })
        )
}

function createExpandedWidget1_2(){
    return crel('div', {class: 'huww-expended-widget1-wrapper'},
        crel('div', {class: 'huww-expended-widget1-block'},
            crel('a', {}, 'Donate Army'),
            crel('span',{},'💸')),
        crel('div', {class: 'huww-expended-widget1-block'},
            crel('a', {}, 'Other ways to help'),
            crel('span',{class: 'huww-heart'},'❤')),
        crel('div', {class: 'huww-expended-widget1-block'},
            crel('a', {class: 'huww-heart'}, 'Get this widget'),
            crel('span',{},'📌')),
        crel('div', { class: 'huww-divider' }),
        crel('div', {class: 'huww-expended-widget-hide'}, 'Hide',
            crel('span',{class: 'huww-hide-button-arrow'})),
    )
}

function createExpandedWidget3(){
    return crel('div', {class: 'huww-expended-widget3-wrapper'},
        crel('div', {class: 'huww-expended-widget3-block'},
            crel('a', {}, 'Donate Army'),
            crel('span',{},'💸')),
        crel('div', {class: 'huww-expended-widget3-block'},
            crel('a', {}, 'Other ways to help'),
            crel('span',{class: 'huww-heart'},'❤')),
        crel('div', {class: 'huww-expended-widget3-block'},
            crel('a', {}, 'Get this widget'),
            crel('span',{},'📌')),
        crel('button', {class: 'huww-expended-widget-hide-button'},
            crel('span', {class: 'huww-hide-button-arrow'})),
    )
}

function createExpandedWidget4(){
    return crel('div', {class: 'huww-expended-widget4-wrapper'},
        crel('div', {class: 'huww-expended-widget4-block'},
            crel('a', {}, 'Donate Army'),
            crel('span',{},'💸')),
        crel('div', {class: 'huww-expended-widget4-block'},
            crel('a', {}, 'Other ways to help'),
            crel('span',{class: 'huww-heart'},'❤')),
        crel('div', {class: 'huww-expended-widget4-block'},
            crel('a', {}, 'Get this widget'),
            crel('span',{},'📌')),
        crel('div', { class: 'huww-divider' }),
        crel('div', {class: 'huww-expended-widget-hide'}, 'Hide',
            crel('span',{class: 'huww-hide-button-arrow'})),
    )
}
