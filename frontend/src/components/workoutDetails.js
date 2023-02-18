import { useAuthContext } from '../hooks/useAuth'
import { Remarkable } from 'remarkable'

function BlogDetails({ props }) {
    const md = new Remarkable()
    const { user } = useAuthContext()

    if (user.email !== props.email) return
    return (
        <div
            id={props._id}
            className="flex flex-col bg-gray-300 p-2 rounded-md mt-2 w-full dark:bg-slate-700 dark:hover:bg-slate-600 animate-topDrag"
        >
            <h2 className="sm:text-3xl font-bold text-red-500 dark:text-green-300">
                {props.title}
            </h2>
            <div
                className="overflow-hidden text-ellipsis text-gray-700 dark:text-white transition-all max-h-24"
                dangerouslySetInnerHTML={{ __html: md.render(props.body) }}
            ></div>
        </div>
    )
}

export default BlogDetails
