import { NativeScriptProps, StackLayoutAttributes, GridLayoutAttributes } from 'react-nativescript';
import { StackLayout, GridLayout } from '@nativescript/core';
export interface AnchoredAttributes extends StackLayoutAttributes {
    dropShadow?: boolean;
}
export interface ParllaxViewAttibutes extends GridLayoutAttributes {
    bounce?: boolean;
    controlsToFade?: string;
}
declare global {
    module JSX {
        interface IntrinsicElements {
            parallaxView: NativeScriptProps<ParllaxViewAttibutes, GridLayout>;
            parallaxHeader: NativeScriptProps<StackLayoutAttributes, StackLayout>;
            parallaxAnchored: NativeScriptProps<AnchoredAttributes, StackLayout>;
            parallaxContent: NativeScriptProps<StackLayoutAttributes, StackLayout>;
        }
    }
}
export declare const registerParallax: () => void;
