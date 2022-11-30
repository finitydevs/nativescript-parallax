import { BaseNavigationContainer } from '@react-navigation/core';
import * as React from "react";
import { stackNavigatorFactory } from "react-nativescript-navigation";

import { ScreenOne } from "./ScreenOne";

const StackNavigator = stackNavigatorFactory();

/**
 * The main stack navigator for the whole app.
 */
export const MainStack = () => (
    <BaseNavigationContainer>
        <StackNavigator.Navigator
            initialRouteName="Screen One"
            screenOptions={{
                headerStyle: {
                    backgroundColor: "white",
                },
            }}
        >
            <StackNavigator.Screen
                name="One"
                component={ScreenOne}
            />
        </StackNavigator.Navigator>
    </BaseNavigationContainer>
);
