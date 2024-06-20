// src/screens/LoginScreen.js
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const Login = () => {
    return (
        <View className="flex-1 justify-center items-center bg-base-100 p-4">
            <Text className="text-2xl font-bold text-primary mb-6">Login</Text>
            <TextInput
                placeholder="Email"
                placeholderTextColor="#aaa"
                className="w-full p-3 mb-4 border border-neutral rounded-lg"
            />
            <TextInput
                placeholder="Password"
                placeholderTextColor="#aaa"
                secureTextEntry
                className="w-full p-3 mb-6 border border-neutral rounded-lg"
            />
            <TouchableOpacity className="w-full p-3 bg-primary rounded-lg">
                <Text className="text-center text-base-100 font-semibold">Login</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text className="text-center text-neutral mt-4">Forgot Password?</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Login;
