import * as DataSource from './DataSource'
import { ViewData } from './App'
import { Data1, Data2, SourceData } from './data'

export type Callback<T> = (data: T) => void

export interface Presenter<T> {
    getData(): T | undefined

    setData(data: unknown): void

    invalidate(): void

    setListener(callback: Callback<T>): void
}

export class PresenterImp implements Presenter<ViewData[]> {
    data: ViewData[] = []
    callback: Callback<ViewData[]> | undefined

    constructor() {
        this.setData([...DataSource.data1, ...DataSource.data2])
    }

    getData(): ViewData[] {
        return this.data
    }

    setData(data: unknown): void {
        // TODO: more data manipulation
        this.data = (data as SourceData[]).map(el => ({
            title: (el as Data1).type || (el as Data2).name,
            description: (el as Data1).props.subType || (el as Data2).props.nickName
        }))
    }

    invalidate(): void {
        this.callback && this.callback(this.data)
    }

    setListener(callback: Callback<ViewData[]>): void {
        this.callback = callback
    }
}

export const presenter: Presenter<ViewData[]> & Record<keyof any, any> = {
    getData(): ViewData[] {
        return this.data
    },
    setData(data: unknown): void {
        // TODO: more data manipulation
        this.data = (data as SourceData[]).map(el => ({
            title: (el as Data1).type || (el as Data2).name,
            description: (el as Data1).props.subType || (el as Data2).props.nickName
        }))
    },
    invalidate(): void {
        this.callback && this.callback(this.data)
    },
    setListener(callback: Callback<ViewData[]>): void {
        this.callback = callback
    }
}
