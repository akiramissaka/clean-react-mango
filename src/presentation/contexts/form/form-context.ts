import { createContext } from 'react'

export type FormContext = {
    isLoading: boolean
    errorMessage: string
}

export default createContext<FormContext>(null)
