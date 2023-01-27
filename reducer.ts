import { Data1, Data2 } from './data'

interface Action {
    type: string
    payload: Data1[] | Data2[]
}

export const setViewDataAction = (data: Data1[] | Data2[]): Action => ({
    type: 'SET_VIEW_DATA',
    payload: data
})

export const addViewDataAction = (data: Data1[] | Data2[]): Action => ({
    type: 'ADD_VIEW_DATA',
    payload: data
})

export interface ViewData {
    title: string
    description: string
}

export interface ViewState {
    viewData: ViewData[]
}

const defaultState: ViewState = {
    viewData: []
}

const isData1 = (object: unknown): boolean =>
    object instanceof Object &&
        'type' in object &&
        'props' in object &&
        object.props instanceof Object &&
        'subType' in object.props

const isData2 = (object: unknown): boolean =>
    object instanceof Object &&
    'name' in object &&
    'props' in object &&
    object.props instanceof Object &&
    'nickName' in object.props

const mapToViewData = (data: unknown[]): ViewData[] =>
    data.reduce((result: ViewData[], element) => {
        if (isData1(element)) {
            result.push({
                title: (element as Data1).type,
                description: (element as Data1).props.subType
            })
        }
        if (isData2(element)) {
            result.push({
                title: (element as Data2).name,
                description: (element as Data2).props.nickName
            })
        }
        return result
    }, [])

export const viewReducer = (
    state = defaultState,
    action: Action
): ViewState => {
    switch (action.type) {
    case 'SET_VIEW_DATA':
        state = {
            ...state,
            viewData: mapToViewData(action.payload)
        }
        break
    case 'ADD_VIEW_DATA':
        state = {
            ...state,
            viewData: state.viewData.concat(mapToViewData(action.payload))
        }
        break
    }
    return state
}
