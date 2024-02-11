import React from 'react';
import { ScrollView, View, Text, Dimensions, StyleSheet,   TouchableOpacity, } from 'react-native';

const { width } = Dimensions.get('window');

export const Onboarding = ({ navigation }) => {
    const navigateToSignup = () => navigation.navigate('Signup');

    return (
        <ScrollView
            horizontal={true}
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
            style={styles.scrollViewStyle}>
            <View style={[styles.screen, { backgroundColor: '#5e92f3' }]}>
                <Text style={styles.text}>Welcome to the App</Text>
            </View>
            <View style={[styles.screen, { backgroundColor: '#4ade80' }]}>
                <Text style={styles.text}>Swipe to learn more</Text>
            </View>
            <View style={[styles.screen, { backgroundColor: '#fde047' }]}>
                <Text style={styles.text}>Get Started</Text>
                <TouchableOpacity onPress={navigateToSignup}>
                    <Text style={styles.link}>Sign up</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollViewStyle: {
        flex: 1,
    },
    screen: {
        width,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    text: {
        fontSize: 22,
        color: '#fff',
        textAlign: 'center',
    },
    link: {
        color: 'blue',
        fontSize: 16,
        marginTop: 12,
    },
});

