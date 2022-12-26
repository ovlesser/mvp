import * as DataSource from '../dataSource/DataSource'
import { ViewData } from './DetailsScreen'
import { Data1, Data2, SourceData } from '../dataSource/data'
import { Callback, Presenter } from '../interface/Presenter'

export const detailsPresenter: Presenter<ViewData> & Record<keyof any, any> = {
    getData: function (): ViewData | undefined {
        return this.data
    },
    getDataByKey: function (key: string): unknown[] {
        return [key === this.data?.key ? this.data : undefined]
    },
    setData: function (key: string): void {
        // TODO: more data manipulation
        const sourceData = DataSource.getDataByKey(key)[0] as SourceData
        this.data = {
            key: sourceData.key,
            title: (sourceData as Data1).type || (sourceData as Data2).name,
            fields: sourceData.props
        }
    },
    invalidate: function (): void {
        this.callback && this.data && this.callback(this.data)
    },
    setListener: function (callback: Callback<ViewData>): void {
        this.callback = callback
    }
}
