import * as DataSource from './DataSource'
import { ViewData } from './App'
import { Data1, Data2 } from './data'

export interface Presenter<T> {
    getData(): T
}

export class PresenterImp implements Presenter<ViewData[]> {
    getData(): ViewData[] {
        return [...DataSource.data1, ...DataSource.data2].map(el => ({
            title: (el as Data1).type || (el as Data2).name,
            description: (el as Data1).props.subType || (el as Data2).props.nickName
        }))
    }
}

export const presenter: Presenter<ViewData[]> = {
    getData: function (): ViewData[] {
        return [...DataSource.data1, ...DataSource.data2].map(el => ({
            title: (el as Data1).type || (el as Data2).name,
            description: (el as Data1).props.subType || (el as Data2).props.nickName
        }))
    }
}
