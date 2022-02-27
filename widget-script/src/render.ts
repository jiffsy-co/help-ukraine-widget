import crel from 'crelt';
import { helpUrl, landingUrl } from './constants';


export function createWidget1() {
    return crel('div', { class: 'huww-widget-one' },
        crel('p', { class: 'huww-title' }, 'Stop Russian Aggression!'),
        crel('a', { class: 'huww-link', href: helpUrl, target: '_blank' }, 'See what you can do'),
        createLogo(),
        createFlag(),
    );
}

export function createWidget2() {
    return crel('div', { class: 'huww-widget-two' },
        crel('p', { class: 'huww-title' }, 'Stop War! You can help!'),
        crel('a', { class: 'huww-link', href: helpUrl, target: '_blank' }, 'See what you can do'),
        crel('div', { class: 'huww-divider' }),
        createLogo(),
        createFlag(),
    );
}

export function createWidget3() {
    return crel('div', { class: 'huww-widget-three' },
        crel('p', { class: 'huww-title' }, 'Stop War!'),
        crel('p', { class: 'huww-subtitle' }, 'Help Ukraine!'),
        crel('a', { class: 'huww-button', href: helpUrl, target: '_blank' }, 'See how'),
        createLogo(),
    );
}

function createLogo() {
    return crel('a', { class: "huww-logo", href: landingUrl, target: '_blank' },
        crel('span', {}, 'Get widget'),
    );
}

function createFlag() {
    return crel('div', { class: 'huww-flag' },
        crel('div', { class: 'huww-flag-top' }),
        crel('div', { class: 'huww-flag-bottom' })
    )
}