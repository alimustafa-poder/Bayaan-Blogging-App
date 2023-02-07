import { useState } from 'react'
import { useAuthContext } from './useAuth'
import { useNavigate } from 'react-router-dom'

export const useLogin = () => {
    const navigate = useNavigate()
    const [error, setError] = useState(null)
    const [loading, setisLoading] = useState(null)

    const { dispatch } = useAuthContext()
    const login = async (data) => {
        setisLoading(true)
        setError(null)
        const response = await fetch('/login', {
            method: 'POST',
            body: data,
        })
        const json = await response.json()

        if (response.status === 200) {
            localStorage.setItem('user', JSON.stringify(json))
            dispatch({ type: 'LOGIN', payload: json })
            navigate('/')
        } else {
            setisLoading(false)
            setError(json.error)
        }
    }

    return { login, error, loading }
}
