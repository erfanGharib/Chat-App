export type T_KeyAsPropNameMap<T> = { [key in keyof Partial<T>]: any }