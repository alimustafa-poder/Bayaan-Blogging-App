import { useAuthContext } from '../../hooks/useAuth'

export default function Profile() {
    //profile page
    const { user } = useAuthContext()
    return (
        <div className="flex flex-col grow items-center justify-center dark:bg-slate-800">
            <h1 className="p-2 text-xl sm:text-2xl text-red-400 dark:text-white truncate">
                {user.email}
            </h1>
        </div>
    )
}
