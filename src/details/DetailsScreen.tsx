import * as React from 'react'
import { RouteProp, useRoute } from '@react-navigation/native'
import { useEffect, useRef, useState } from 'react'
import { detailsPresenter } from './DetailsPresenter'
import { StyleSheet, View, Text } from 'react-native'

export interface ViewData {
    key: string
    title: string
    fields: Record<string, any>
}

type DetailsScreenParamList = {
    data: {
        key: string
    }
}

export const DetailsScreen = (): JSX.Element => {
    const route = useRoute<RouteProp<DetailsScreenParamList>>()
    const presenter = useRef(detailsPresenter)
    const [data, setData] = useState<ViewData>()

    const updateData = (data: ViewData) => {
        // TODO: the callback function that would be called in presenter.invalidate()
        setData(data)
    }

    useEffect(() => {
        const key = route?.params?.key
        presenter.current.setListener(updateData)
        presenter.current.setData(key)
        presenter.current.invalidate()
    }, [])

    return <View style={styles.container}>
        <Text style={styles.sectionTitle}>
            {data?.title}
        </Text>
        {
            data?.fields && Object.keys(data.fields).map(key =>
                <View style={styles.sectionContainer} key={key}>
                    <Text style={styles.sectionTitle}>
                        {key}
                    </Text>
                    <Text style={styles.sectionDescription}>
                        {data.fields[key]}
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
