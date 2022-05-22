import { useState, useEffect } from 'react'
import { projectAuth } from '../firebase/configs'
import { useAuthContext } from './useAuthContext'

/**
 * It logs the user out of the app and clears the user's data from the context
 */
export const useLogout = () => {
    const [isCancelled, setIsCancelled] = useState(false)
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const { dispatch } = useAuthContext()

    const logout = async () => {
        setError(null)
        setIsPending(true)

        try {
            await projectAuth.signOut()
            dispatch({ type: 'LOGOUT' })
            /* Update state */
            if (!isCancelled) {
                setError(null)
                setIsPending(false)
            }
            
        } catch (err) {
            if (!isCancelled) {
                console.log(err.message)
                setError(err.message)
                setIsPending(false)
            }
        }
    }

    /* This prevents state to be updated when user navigates to other page while awaiting for response to get back */
    useEffect(() => {
      return () => setIsCancelled(true)
    }, [])
    
    return { error, isPending, logout }
}