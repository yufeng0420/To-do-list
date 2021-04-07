export interface changeEvent {
    target:{
        name: string,
        value?: any,
        type: string
        checked?: boolean
    }
}