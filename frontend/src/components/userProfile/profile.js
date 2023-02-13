import { useAuthContext } from '../../hooks/useAuth'

export default function Profile() {
    //profile page
    const { user } = useAuthContext()
    return (
        <div className="flex flex-col items-center justify-center h-screen gap-y-6">
            <h1 className="text-4xl sm:text-7xl text-red-400">{user.email}</h1>
        </div>
    )
}
