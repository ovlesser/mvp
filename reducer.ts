import { Data1, Data2 } from './data'
import { getDataByKey } from './DataSource'

interface Action {
    type: string
    payload: unknown
}

export const setMainViewDataAction = (data: Data1[] | Data2[]): Action => ({
    type: 'SET_MAIN_VIEW_DATA',
    payload: data
})

export const addMainViewDataAction = (data: Data1[] | Data2[]): Action => ({
    type: 'ADD_MAIN_VIEW_DATA',
    payload: data
})

export interface MainViewData {
    key: string
    title: string
    description: string
}

export const setDetailsViewDataAction = (data: Data1 | Data2 | string): Action => ({
    type: 'SET_DETAILS_VIEW_DATA',
    payload: data
})

export interface DetailsViewData {
    key: string
    title: string
    fields: Record<string, any>
}

export interface ViewState {
    mainViewData: MainViewData[]
    detailsViewData?: DetailsViewData
}

const defaultState: ViewState = {
    mainViewData: []
}

const isData1 = (object: unknown): boolean =>
    object instanceof Object &&
        'key' in object &&
        'type' in object &&
        'props' in object &&
        object.props instanceof Object &&
        'subType' in object.props

const isData2 = (object: unknown): boolean =>
    object instanceof Object &&
    'key' in object &&
    'name' in object &&
    'props' in object &&
    object.props instanceof Object &&
    'nickName' in object.props

const mapToMainViewData = (data: unknown): MainViewData[] =>
    Array.isArray(data)
        ? data.reduce((result: MainViewData[], element) => {
            if (isData1(element)) {
                result.push({
                    key: (element as Data1).key,
                    title: (element as Data1).type,
                    description: (element as Data1).props.subType
                })
            }
            if (isData2(element)) {
                result.push({
                    key: (element as Data2).key,
                    title: (element as Data2).name,
                    description: (element as Data2).props.nickName
                })
            }
            return result
        }, []) : []

const mapToDetailsViewData = (data: unknown): DetailsViewData | undefined =>
    isData1(data)
        ? {
            key: (data as Data1).key,
            title: (data as Data1).type,
            fields: (data as Data1).props
        }
        : isData2(data)
            ? {
                key: (data as Data2).key,
                title: (data as Data2).name,
                fields: (data as Data2).props
            } : undefined

export const viewReducer = (
    state = defaultState,
    action: Action
): ViewState => {
    switch (action.type) {
    case 'SET_MAIN_VIEW_DATA':
        state = {
            ...state,
            mainViewData: mapToMainViewData(action.payload)
        }
        break
    case 'ADD_MAIN_VIEW_DATA':
        state = {
            ...state,
            mainViewData: state.mainViewData.concat(mapToMainViewData(action.payload))
        }
        break
    case 'SET_DETAILS_VIEW_DATA': {
        const data = typeof action.payload === 'string' ? getDataByKey(action.payload)[0] : action.payload
        state = {
            ...state,
            detailsViewData: mapToDetailsViewData(data)
        }
    }
        break
    }
    return state
}
