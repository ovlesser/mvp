/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { type PropsWithChildren, useEffect, useState } from 'react'
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    useColorScheme,
    View
} from 'react-native'

import { Colors, Header } from 'react-native/Libraries/NewAppScreen'
import { homePresenter } from './HomePresenter'
import { NavigationProp, useNavigation } from '@react-navigation/native'

export interface ViewData {
    title: string
    description: string
}

const Section: React.FC<
    PropsWithChildren<{
        data: ViewData
        navigation: NavigationProp<any>
    }>
    > = ({ children, data, navigation }) => {
        const isDarkMode = useColorScheme() === 'dark'
        return (
            <TouchableOpacity onPress={() => {
                navigation.navigate('Details')
            }}>
                <View style={styles.sectionContainer}>
                    <Text
                        style={[
                            styles.sectionTitle,
                            {
                                color: isDarkMode ? Colors.white : Colors.black
                            }
                        ]}>
                        {data.title}
                    </Text>
                    <Text
                        style={[
                            styles.sectionDescription,
                            {
                                color: isDarkMode ? Colors.light : Colors.dark
                            }
                        ]}>
                        {children}
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }

export const HomeScreen = (): JSX.Element => {
    const isDarkMode = useColorScheme() === 'dark'

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter
    }

    const navigation = useNavigation()
    const [data, setData] = useState<ViewData[]>([])

    useEffect(() => {
        homePresenter.setListener(setData)
    }, [])

    return (
        <SafeAreaView style={backgroundStyle}>
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={backgroundStyle.backgroundColor}
            />
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={backgroundStyle}>
                <Header />
                <View
                    style={{
                        backgroundColor: isDarkMode ? Colors.black : Colors.white
                    }}>
                    {
                        data.map((el, index:number) =>
                            <Section key={index} data={el} navigation={navigation}>
                                {el.description}
                            </Section>
                        )
                    }
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600'
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400'
    },
    highlight: {
        fontWeight: '700'
    }
})
