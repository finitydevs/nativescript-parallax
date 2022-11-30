import { GridLayout, StackLayout } from '@nativescript/core';
export declare class Header extends StackLayout {
    constructor();
}
export declare class Anchored extends StackLayout {
    private _dropShadow;
    get dropShadow(): boolean;
    set dropShadow(value: boolean);
    constructor();
}
export declare class Content extends StackLayout {
    constructor();
}
export interface IMinimumHeights {
    portrait: number;
    landscape: number;
}
export declare class ParallaxView extends GridLayout {
    private _controlsToFade;
    private _childLayouts;
    private _includesAnchored;
    private _isAnchored;
    private _topOpacity;
    private _loaded;
    private _minimumHeights;
    private _bounce;
    static scrollEvent: string;
    static anchoredEvent: string;
    static unanchoredEvent: string;
    get bounce(): boolean;
    set bounce(value: boolean);
    get controlsToFade(): string;
    set controlsToFade(value: string);
    get isAnchored(): boolean;
    constructor();
}
