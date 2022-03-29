import {
	defaultPosition,
	defaultType,
	landingUrl,
	WidgetPosition,
	widgetPositions,
	WidgetType,
	widgetTypes
	// scriptId,
	// scriptPositionAttribute,
	// scriptTypeAttribute,
} from "./constants";

export interface WidgetConfig {
    widgetType: WidgetType;
    widgetPosition: WidgetPosition;
}

// export function getConfig(): WidgetConfig {
//     const script = document.getElementById(scriptId);
//     const widgetType = parseEnum(script?.getAttribute(scriptTypeAttribute), widgetTypes, defaultType);
//     const widgetPosition = parseEnum(script?.getAttribute(scriptPositionAttribute), widgetPositions, defaultPosition);
//
//     return {widgetPosition, widgetType};
// }

function parseEnum<T>(value: unknown | undefined, values: readonly T[], defaultValue: T): T {
    if (value && typeof value === "string" && values.indexOf(value as any) !== -1) {
        return value as any as T;
    }
    return defaultValue;
}

export function scriptSrcParams(): WidgetConfig {
	const script = document.currentScript
	const src = script?.getAttribute('src');

	const params = {
		widgetType: defaultType,
		widgetPosition: defaultPosition,
	}
	if ( !src ) {
		return params
	}
	try {
		const url = new URL(src, landingUrl)
		params.widgetType = parseEnum(url.searchParams.get('type'), widgetTypes, defaultType);
		params.widgetPosition = parseEnum(url.searchParams.get('position'), widgetPositions, defaultPosition);
	}
	catch (error) {
		console.error(error)
	}
	return params
}
