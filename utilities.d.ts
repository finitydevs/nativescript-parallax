import { AbsoluteLayout, GridLayout, StackLayout, View } from '@nativescript/core';
import { Content, IMinimumHeights } from './nativescript-parallax';
export declare class ParallaxUtilities {
    static setMinimumHeight(contentView: Content, anchoredRow: AbsoluteLayout, minHeight: number, includesAnchored: any): void;
    static getMinimumHeights(): IMinimumHeights;
    static addDropShadow(translateY: number, width: number): StackLayout;
    private static shadowView;
    static fadeViews(topHeight: number, verticalOffset: number, viewsToFade: View[], topOpacity: any): void;
    static getAnchoredTopHeight(topHeight: number, verticalOffset: number): number;
    static getTopViewHeight(topHeight: number, verticalOffset: number): number;
    static displayDevWarning(parent: GridLayout, message: string, ...viewsToCollapse: View[]): void;
    static pluckViews(parent: GridLayout): View[];
    static containsCssClass(view: View, className: string): boolean;
}
