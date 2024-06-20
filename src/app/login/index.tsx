import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import Login from "../../pages/Login/Login";

export default function Page() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar barStyle="dark-content" />
            <Login />
        </SafeAreaView>
    );
}