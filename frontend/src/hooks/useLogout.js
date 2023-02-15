import { useAuthContext } from '../hooks/useAuth'

export const useLogout = () => {
    const { dispatch } = useAuthContext()

    const logout = () => {
        localStorage.removeItem('user')
        dispatch({ type: 'LOGOUT' })
    }

    // This is a hack to force the page to reload when the user logs out
    window.addEventListener('storage', (e) => {
        if (e.key === 'user') {
            window.location.href = '/'
        }
    })

    return { logout }
}
