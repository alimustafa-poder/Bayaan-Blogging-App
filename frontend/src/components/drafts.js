import { useAuthContext } from '../hooks/useAuth'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

export default function Drafts() {
    const { user } = useAuthContext()
    const navigate = useNavigate()
    useEffect(() => {
        if (!user) {
            navigate('/login')
        }
    }, [user, navigate])
    return (
        <div className="flex flex-col justify-center items-center h-screen dark:bg-slate-800">
            <h1 className="text-4xl font-bold dark:text-white">
                Development in progress...
            </h1>
        </div>
    )
}
