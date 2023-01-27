import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { shallowEqual, useSelector } from 'react-redux'
import { ViewState } from './reducer'

export const DetailsView = (): JSX.Element => {
    const { viewData } = useSelector(
        (state: ViewState) => ({
            viewData: state.detailsViewData
        }),
        shallowEqual
    )
    return <View style={styles.container}>
        <Text style={styles.sectionTitle}>
            {viewData?.title}
        </Text>
        {
            viewData?.fields && Object.keys(viewData.fields).map(key =>
                <View style={styles.sectionContainer} key={key}>
                    <Text style={styles.sectionTitle}>
                        {key}
                    </Text>
                    <Text style={styles.sectionDescription}>
                        {viewData?.fields[key]}
                    </Text>
                </View>
            )
        }
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
