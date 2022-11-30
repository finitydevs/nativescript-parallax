import { registerElement, NativeScriptProps, StackLayoutAttributes, GridLayoutAttributes } from 'react-nativescript';
import { StackLayout, GridLayout } from '@nativescript/core';

export interface AnchoredAttributes extends StackLayoutAttributes {
    dropShadow?: boolean
}

export interface ParllaxViewAttibutes extends GridLayoutAttributes {
    bounce?: boolean
    controlsToFade?: string
}

declare global {
    module JSX {
        interface IntrinsicElements {
            parallaxView: NativeScriptProps<ParllaxViewAttibutes, GridLayout>
            parallaxHeader: NativeScriptProps<StackLayoutAttributes, StackLayout>
            parallaxAnchored: NativeScriptProps<AnchoredAttributes, StackLayout>
            parallaxContent: NativeScriptProps<StackLayoutAttributes, StackLayout>
        }
    }
}

export const registerParallax = () => {
    // @ts-ignore
    registerElement('parallaxView', () => new require('nativescript-parallax').ParallaxView)
    // @ts-ignore
    registerElement('parallaxAnchored', () => new require('nativescript-parallax').Anchored)
    // @ts-ignore
    registerElement('parallaxContent', () => new require('nativescript-parallax').Content)
    // @ts-ignore
    registerElement('parallaxHeader', () => new require('nativescript-parallax').Header)
}