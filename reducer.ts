import { Data1 } from './data'

interface Action {
    type: string
    payload: Data1[]
}

export const setViewDataAction = (data: Data1[]): Action => ({
    type: 'SET_VIEW_DATA',
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

export const viewReducer = (
    state = defaultState,
    action: Action
): ViewState => {
    switch (action.type) {
    case 'SET_VIEW_DATA':
        state = {
            ...state,
            viewData: action.payload.reduce((result: ViewData[], element) => {
                if (isData1(element)) {
                    result.push({
                        title: (element as Data1).type,
                        description: (element as Data1).props.subType
                    })
                }
                return result
            }, [])
        }
    }
    return state
}
