export interface Data1 {
    key: string
    type: string
    props: Record<string, any>
}

export interface Data2 {
    key: string
    name: string
    props: Record<string, any>
}

export type SourceData = Data1 | Data2
