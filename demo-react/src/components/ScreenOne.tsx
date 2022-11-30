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
        <flexboxLayout style={styles.container}>
            <parallaxView bounce={false} controlsToFade="headerLabel,headerLabel2">
                <parallaxHeader className="header-template" height="200">
                    <label id="headerLabel" text="Parallax"></label>
                    <label id="headerLabel2" text="Header Component"></label>
                </parallaxHeader>
                <parallaxAnchored className="anchor" dropShadow>
                    <gridLayout rows="*" columns="">
                        <label id="titleLabel" row="0" text="Mr. Anchor"></label>
                    </gridLayout>
                </parallaxAnchored>
                <parallaxContent className="body-template">
                    <label text="Content" class="header" textWrap="true" />

                    <label textWrap="true" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut scelerisque, est in viverra vehicula, enim lacus fermentum mi, vel tincidunt libero diam quis nulla. In sem tellus, eleifend quis egestas at, ultricies a neque. Cras facilisis lacinia velit ut lacinia. Phasellus fermentum libero et est ultricies venenatis sit amet ac lectus. Curabitur faucibus nisi id tellus vehicula luctus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc condimentum est id nibh volutpat tempor. Phasellus sodales velit vel dui feugiat, eget tincidunt tortor sollicitudin. Donec nec risus in purus interdum eleifend. Praesent placerat urna aliquet orci suscipit laoreet. In ac purus nec sapien rhoncus egestas. Ut at consequat libero, at pharetra purus. Integer mi lorem, luctus eget porttitor vitae, pharetra et urna. Morbi et euismod lacus. Vestibulum a massa odio. Aenean at neque hendrerit, consequat sem et, congue mi. Sed egestas, ante feugiat lacinia tempus, lacus lorem laoreet magna, a hendrerit augue leo vitae risus. Integer ornare odio nec libero elementum malesuada. Cras sem sapien, aliquet eget nibh molestie, finibus dictum augue. Nulla mi metus, finibus id arcu nec, molestie venenatis libero. Morbi a pharetra odio. Maecenas viverra, quam at sollicitudin sodales, diam purus lacinia dolor, vitae scelerisque erat mi nec nibh. Quisque egestas et nunc in pharetra. Sed vitae tincidunt justo, dictum tincidunt nisi. Quisque tempus dolor urna, et mattis velit porta vitae.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut scelerisque, est in viverra vehicula, enim lacus fermentum mi, vel tincidunt libero diam quis nulla. In sem tellus, eleifend quis egestas at, ultricies a neque. Cras facilisis lacinia velit ut lacinia. Phasellus fermentum libero et est ultricies venenatis sit amet ac lectus. Curabitur faucibus nisi id tellus vehicula luctus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc condimentum est id nibh volutpat tempor. Phasellus sodales velit vel dui feugiat, eget tincidunt tortor sollicitudin. Donec nec risus in purus interdum eleifend. Praesent placerat urna aliquet orci suscipit laoreet. In ac purus nec sapien rhoncus egestas. Ut at consequat libero, at pharetra purus. Integer mi lorem, luctus eget porttitor vitae, pharetra et urna. Morbi et euismod lacus. Vestibulum a massa odio. Aenean at neque hendrerit, consequat sem et, congue mi. Sed egestas, ante feugiat lacinia tempus, lacus lorem laoreet magna, a hendrerit augue leo vitae risus. Integer ornare odio nec libero elementum malesuada. Cras sem sapien, aliquet eget nibh molestie, finibus dictum augue. Nulla mi metus, finibus id arcu nec, molestie venenatis libero. Morbi a pharetra odio. Maecenas viverra, quam at sollicitudin sodales, diam purus lacinia dolor, vitae scelerisque erat mi nec nibh. Quisque egestas et nunc in pharetra. Sed vitae tincidunt justo, dictum tincidunt nisi. Quisque tempus dolor urna, et mattis velit porta vitae.">
                    </label>
                </parallaxContent>
            </parallaxView>
        </flexboxLayout>
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
