import React, { useState } from 'react';
import { Dimensions, StatusBar, SafeAreaView, ScrollView, View, Text, Image, StyleSheet } from 'react-native';

const HomeSlider = ({ navigation }) => {
    const { width, height } = Dimensions.get('window');
    const [currentPage, setCurrentPage] = useState(0);

    const handleScroll = (event) => {
        const { contentOffset } = event.nativeEvent;
        const page = Math.round(contentOffset.x / width);
        setCurrentPage(page);
    };

    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView style={styles.container}>
                <View style={styles.indicatorContainer}>
                    <View style={[styles.indicator, currentPage === 0 ? styles.activeIndicator : null]} />
                    <View style={[styles.indicator, currentPage === 1 ? styles.activeIndicator : null]} />
                </View>
                <ScrollView
                    style={styles.scrollView}
                    horizontal={true}
                    scrollEventThrottle={16}
                    pagingEnabled={true}
                    onScroll={handleScroll}
                >    
                

                
                    <View style={styles.slide}>
                        <Image
                            source={require('./assets/images/image1.jpg')}
                            style={styles.image}
                            resizeMode="contain"
                        />
                        <Text style={styles.text}>Manage your expenses easily</Text>
                    </View>
                    <View style={styles.slide}>
                        <Image
                            source={require('./assets/images/image2.jpg')}
                            style={styles.image}
                            resizeMode="contain"
                        />
                        <Text style={styles.text}>Track the history of your expenses</Text>
                    </View>
                </ScrollView>
                <View style={styles.buttonContainer}>
                    <View style={styles.buttonWrapper}>
                        <Text style={styles.buttonText} onPress={() => navigation.navigate('Sign-In')}>Sign In</Text>
                    </View>
                    <View style={styles.buttonWrapper}>
                        <Text style={styles.buttonText} onPress={() => navigation.navigate('Sign-Up')}>Sign Up</Text>
                    </View>
                </View>
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    scrollView: {
        flex: 1,
    },
    slide: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '90%',
        height: '40%',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#dda15e',
        shadowColor: '#fff',
        shadowOffset: {
            width: 2,
            height: 2,
        },
    },
    text: {
        marginTop: 40,
        fontSize: 20,
        fontWeight: 'bold',
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 60,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    buttonWrapper: {
        backgroundColor: '#dda15e',
        borderRadius: 20,
        paddingHorizontal: 30,
        paddingVertical: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    indicatorContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
    },
    indicator: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: 'gray',
        marginHorizontal: 5,
        marginTop: 25
    },
    activeIndicator: {
        backgroundColor: '#dda15e',
    },
    appName: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default HomeSlider;
