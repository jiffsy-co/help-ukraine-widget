import { defaultPosition, defaultType, scriptId, scriptPositionAttribute, scriptTypeAttribute, WidgetPosition, widgetPositions, WidgetType, widgetTypes } from "./constants";

export interface WidgetConfig {
    widgetType: WidgetType;
    widgetPosition: WidgetPosition;
}

export function getConfig(): WidgetConfig {
    const script = document.getElementById(scriptId);
    const widgetType = parseEnum(script?.getAttribute(scriptTypeAttribute), widgetTypes, defaultType);
    const widgetPosition = parseEnum(script?.getAttribute(scriptPositionAttribute), widgetPositions, defaultPosition);

    return {widgetPosition, widgetType};
}

function parseEnum<T>(value: unknown | undefined, values: readonly T[], defaultValue: T): T {
    if (value && typeof value === "string" && values.indexOf(value as any) !== -1) {
        return value as any as T;
    }
    return defaultValue;
}
