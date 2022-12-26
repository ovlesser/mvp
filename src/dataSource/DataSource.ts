import { Data1, Data2 } from './data'
import { homePresenter } from '../home/HomePresenter'

export const data1: Data1[] = [
    {
        key: '1-1',
        type: '1-1',
        props: { subType: '1-1', prop1: '1-1-1', prop2: '1-1-2' }
    },
    {
        key: '1-2',
        type: '1-2',
        props: { subType: '1-2', prop1: '1-2-1', prop2: '1-2-2' }
    },
    {
        key: '1-3',
        type: '1-3',
        props: { subType: '1-3', prop1: '1-3-1', prop2: '1-3-2' }
    }
]

export const data2: Data2[] = [
    {
        key: '2-1',
        name: '2-1',
        props: { nickName: '2-1', prop1: '2-1-1', prop2: '2-1-2' }
    },
    {
        key: '2-2',
        name: '2-2',
        props: { nickName: '2-2', prop1: '2-2-1', prop2: '2-2-2' }
    }
]

export const getDataByKey = (key: string) : unknown[] => {
    const found1 = data1.filter(el => el.key === key)
    const found2 = data2.filter(el => el.key === key)
    return [...found1, ...found2]
}

// let count = 0
const dataSource = [...data1, ...data2]
// setInterval(() => {
//     presenter.setData(dataSource.slice(0, count++ % dataSource.length + 1))
//     presenter.invalidate()
// }, 1000)
setTimeout(() => {
    homePresenter.setData(dataSource)
    homePresenter.invalidate()
}, 1000)
