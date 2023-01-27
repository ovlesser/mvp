import React, { type PropsWithChildren } from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, useColorScheme, View } from 'react-native'

import { Colors, Header } from 'react-native/Libraries/NewAppScreen'
import { ViewData, ViewState } from './reducer'
import { shallowEqual, useSelector } from 'react-redux'
import { NavigationProp, useNavigation } from '@react-navigation/native'

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

const MainView = (): JSX.Element => {
    const isDarkMode = useColorScheme() === 'dark'

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter
    }

    const navigation = useNavigation()
    const { viewData } = useSelector(
        (state: ViewState) => ({
            viewData: state.viewData
        }),
        shallowEqual
    )

    return (
        <SafeAreaView style={backgroundStyle}>
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={backgroundStyle}>
                <Header />
                <View
                    style={{
                        backgroundColor: isDarkMode ? Colors.black : Colors.white
                    }}>
                    {
                        viewData?.map((el: ViewData, index:number) =>
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

export default MainView
