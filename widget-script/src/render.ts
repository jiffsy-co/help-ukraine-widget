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
        crel('a', { class: 'huww-link', href: helpUrl, target: '_blank' }, 'See what you can do'),
        createLogo(),
        createFlag(),
    );
}

export function createWidget2(position: WidgetPosition) {
    return crel('div', { class: `huww-widget huww-widget-two huww-widget-${position}` },
        crel('p', { class: 'huww-title' }, 'Stop War! You can help!'),
        crel('div', { class: 'huww-divider' }),
        crel('a', { class: 'huww-link', href: helpUrl, target: '_blank' }, 'See what you can do'),
        createLogo(),
    );
}

export function createWidget3(position: WidgetPosition) {
    return crel('div', { class: `huww-widget huww-widget-three huww-widget-${position}` },
        crel('p', { class: 'huww-title' }, 'Stop War!'),
        crel('p', { class: 'huww-subtitle' }, 'Help Ukraine!'),
        crel('a', { class: 'huww-button', href: helpUrl, target: '_blank' }, 'See how'),
        createLogo(),
    );
}

export function createWidget4(position: WidgetPosition) {
    return crel('div', { class: `huww-widget huww-widget-four huww-widget-${position}` },
        crel('p', { class: 'huww-title' }, 'Help 🇺🇦 Ukraine win!'),
        crel('p', { class: 'huww-hashtag' }, '#StandWithUkraine'),
        crel('a', { class: 'huww-link', href: helpUrl, target: '_blank' }, 'See how to help'),
        createLogo(),
        createHalfFlag(),
    );
}

function createLogo() {
    return crel('a', { class: "huww-logo", href: landingUrl, target: '_blank' },
        crel('span', {class: 'huww-logo-img'}),
        crel('span', { class: 'huww-logo-text'}, 'Get widget'),
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