import { ActionBar } from '@nativescript/core';
import { RouteProp } from '@react-navigation/core';
import React from 'react';
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";

import { MainStackParamList } from "../NavigationParamList";

type ScreenOneProps = {
    route: RouteProp<MainStackParamList, "One">,
    navigation: FrameNavigationProp<MainStackParamList, "One">,
};

export function ScreenOne({ navigation }: ScreenOneProps) {
    return (
            <parallaxView bounce controlsToFade="headerLabel,headerLabel2" 
            onLoaded={(args) => {
                args.object.on('anchored', () => console.log('anchored'))
                args.object.on('unanchored', () => console.log('unanchored'))
                args.object.on('scroll', () => console.log('scroll'))
            }}>
                <parallaxHeader class="header-template" height="300">
                    <label id="headerLabel" backgroundColor="purple" text="Parallax" width="100%" />
                    <label id="headerLabel2" text="Header Component" />
                </parallaxHeader>
                <parallaxAnchored className="anchor">
                    <label id="titleLabel" text="Mr. Anchor"/>
                </parallaxAnchored>
                <parallaxContent class="body-template">
                    <label text="Content" class="header" textWrap="true" />

                    <label textWrap text="Thanks for helping out Jamie, you mad genius. Thanks for helping out Jamie, you mad genius. Thanks for helping out Jamie, you mad genius. Thanks for helping out Jamie, you mad genius.vvvv v Thanks for helping out Jamie, you mad genius. Thanks for helping out Jamie, you mad genius. Thanks for helping out Jamie, you mad genius." />
                </parallaxContent>
            </parallaxView>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        flexDirection: "column",
        justifyContent: "center",
    },
    text: {
        textAlignment: "center",
        fontSize: 24,
        color: "black",
    },
    button: {
        fontSize: 24,
        color: "#2e6ddf",
    },
});
