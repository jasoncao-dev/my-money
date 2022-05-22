import { useState } from 'react'
import { projectAuth } from '../firebase/configs'
import { useAuthContext } from './useAuthContext'

/**
 * It logs the user out of the app and clears the user's data from the context
 */
export const useLogout = () => {
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const { dispatch } = useAuthContext()

    const logout = async () => {
        setError(null)
        setIsPending(true)

        try {
            await projectAuth.signOut()
            dispatch({ type: 'LOGOUT' })
            setError(null)
            setIsPending(false)
        } catch (err) {
            console.log(err.message)
            setError(err.message)
            setIsPending(false)
        }
    }
    return { error, isPending, logout }
}