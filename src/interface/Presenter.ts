export type Callback<T> = (data: T) => void

export interface Presenter<T> {
    getData(): T | undefined

    setData(data: unknown): void

    invalidate(): void

    setListener(callback: Callback<T>): void
}
