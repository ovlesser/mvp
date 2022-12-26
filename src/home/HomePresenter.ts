import * as DataSource from '../dataSource/DataSource'
import { ViewData } from './HomeScreen'
import { Data1, Data2, SourceData } from '../dataSource/data'
import { Callback, Presenter } from '../interface/Presenter'

export class HomePresenter implements Presenter<ViewData[]> {
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

export const homePresenter: Presenter<ViewData[]> & Record<keyof any, any> = {
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
