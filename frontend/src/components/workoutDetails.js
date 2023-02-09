import { useAuthContext } from '../hooks/useAuth'
import { Remarkable } from 'remarkable'

function BlogDetails({ props }) {
    const md = new Remarkable()
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
            <div
                className="truncate text-gray-700"
                dangerouslySetInnerHTML={{ __html: md.render(props.body) }}
            ></div>
        </div>
    )
}

export default BlogDetails
