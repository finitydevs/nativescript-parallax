import { registerElement, NativeScriptProps, StackLayoutAttributes, GridLayoutAttributes } from 'react-nativescript';
import { StackLayout, GridLayout } from '@nativescript/core';

export interface AnchoredAttributes extends StackLayoutAttributes  {
    dropShadow?: boolean
}

export interface ParllaxViewAttibutes extends GridLayoutAttributes {
    bounce?: boolean
    controlsToFade?: string
    scroll?: () => {}
    anchored?: () => {}
    unanchored?: () => {}
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
    registerElement('parallaxView', require('nativescript-parallax').ParallaxView)
    registerElement('parallaxHeader', require('nativescript-parallax').Header)
    registerElement('parallaxContent', require('nativescript-parallax').Content)
}