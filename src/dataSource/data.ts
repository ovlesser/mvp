export interface Data1 {
    type: string
    props: Record<string, any>
}

export interface Data2 {
    name: string
    props: Record<string, any>
}

export type SourceData = Data1 | Data2
