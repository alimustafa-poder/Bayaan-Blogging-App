import { useAuthContext } from '../hooks/useAuth'

function BlogDetails({ props }) {
    const { user } = useAuthContext()
    if (user.email !== props.email) return
    return (
        <div
            id={props._id}
            className="flex flex-col bg-gray-300 p-2 rounded-md mt-2 w-full"
        >
            <h2 className="sm:text-3xl font-bold text-red-500">
                {props.title}
            </h2>
            <p className="truncate">{props.body}</p>
        </div>
    )
}

export default BlogDetails
