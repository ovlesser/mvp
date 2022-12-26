import * as React from 'react'
import { RouteProp, useRoute } from '@react-navigation/native'
import { useEffect, useRef, useState } from 'react'
import { detailsPresenter } from './DetailsPresenter'
import { StyleSheet, View, Text } from 'react-native'

export interface ViewData {
    title: string
    fields: Record<string, any>
}

export const DetailsScreen = (): JSX.Element => {
    return <View style={styles.container}>
        <Text style={styles.sectionTitle}>
            Details
        </Text>
    </View>
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        margin: 16,
        padding: 8,
        paddingHorizontal: 8
    },
    sectionContainer: {
        flexDirection: 'column',
        backgroundColor: 'aliceblue',
        margin: 8,
        padding: 8,
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
