import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuth'

export default function ArchivedBlogs() {
    const { user } = useAuthContext()
    const navigate = useNavigate()
    useEffect(() => {
        if (!user) {
            navigate('/login')
        }
    })
    return (
        <div className="flex flex-col justify-center items-center h-screen dark:bg-slate-800">
            <h1 className="text-4xl font-bold dark:text-white">
                Development in progress...
            </h1>
        </div>
    )
}
