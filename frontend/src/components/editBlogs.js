import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import ErrorModal from './errorModal'
import { useAuthContext } from '../hooks/useAuth'

function EditBlogs() {
    const navigate = useNavigate()
    const params = useParams()
    const [blog, setBlog] = useState(null)
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('')
    const [error, setError] = useState(null)
    const { user } = useAuthContext()

    useEffect(() => {
        async function getOldBlog() {
            if (!user) {
                setError('You are not logged in.')
                displayError()
                return
            }
            const response = await fetch(`/api/${params.id}`, {
                method: 'GET',
                headers: {
                    accepts: 'application/json',
                    Authorization: `Bearer ${user.token}`,
                },
            })
            const json = await response.json()
            if (response.status === 200) {
                setBlog(json)
                setTitle(json.title)
                setBody(json.body)
                setAuthor(json.author)
            } else {
                await new Promise((resolve, reject) =>
                    resolve(setError(json.error))
                )
            }
        }
        getOldBlog()
    }, [params.id, user])

    function displayError() {
        document.querySelector('#errorModal').classList.remove('scale-0')
        setTimeout(() => {
            if (!document.querySelector('#errorModal')) return
            document.querySelector('#errorModal').classList.add('scale-0')
        }, 2000)
    }

    async function handleSubmit(e) {
        e.preventDefault()
        if (error) {
            displayError()
        }
        if (blog === null) return
        if (!user) {
            setError('You are not logged in.')
            displayError()
            return
        }
        if (
            title.trim() === blog.title &&
            author.trim() === blog.author &&
            body.trim() === blog.body
        ) {
            setError('Fields should reflect changes.')
            displayError()
        } else if (
            title.trim() === '' ||
            body.trim() === '' ||
            author.trim() === ''
        ) {
            setError("Fields can't be empty.")
            displayError()
        } else {
            const data = new FormData(e.target)
            const response = await fetch(`/api/${params.id}`, {
                method: 'PATCH',
                headers: {
                    accepts: 'application/json',
                    Authorization: `Bearer ${user.token}`,
                },
                body: data,
            })
            const json = await response.json()
            if (response.status === 200) {
                return navigate(`/${params.id}`)
            } else {
                displayError()
                new Promise((resolve, reject) => resolve(json.error))
            }
        }
    }

    return (
        <div className="overflow-hidden sm:overflow-visible py-3">
            <form onSubmit={(e) => handleSubmit(e)}>
                <button
                    type="submit"
                    className="p-1 sm:p-2 bg-red-500 px-4 sm:px-8 sm:text-md tracking-wider sm:tracking-widest sm:text-xl float-right dark:bg-red-400 dark:text-white dark:font-bold dark:shadow-md"
                >
                    Update Blog
                </button>
                <input
                    name="title"
                    id="title"
                    type="text"
                    placeholder="Enter a title here."
                    className="focus:border-transparent focus:ring-0 ring-0 border-transparent focus:border-red-300 required:border-red-500 invalid:border-red-500 p-2 sm:p-4 w-full text-xl sm:text-2xl bg-zinc-100 mt-2 shadow-md dark:bg-slate-800 dark:text-white dark:placeholder-white"
                    value={title}
                    onChange={() =>
                        setTitle(document.querySelector('#title').value.trim())
                    }
                />
                <input
                    name="author"
                    id="author"
                    type="text"
                    placeholder="Author"
                    className="focus:border-transparent focus:ring-0 ring-0 border-transparent focus:border-red-300 required:border-red-500 invalid:border-red-500 p-2 sm:p-4 w-full text-xl sm:text-2xl bg-zinc-100 mt-2 shadow-md dark:bg-slate-800 dark:text-white dark:placeholder-white"
                    value={author}
                    onChange={() =>
                        setAuthor(
                            document.querySelector('#author').value.trim()
                        )
                    }
                />
                <textarea
                    name="body"
                    id="body"
                    type="text"
                    placeholder="Enter body text."
                    className="focus:border-transparent focus:ring-0 ring-0 border-transparent focus:border-red-300 p-2 sm:p-4 text-xl sm:text-2xl bg-zinc-100 shadow-md h-96 w-full dark:bg-slate-800 dark:text-white dark:placeholder-white"
                    value={body}
                    onChange={() =>
                        setBody(document.querySelector('#body').value.trim())
                    }
                />
            </form>
            <ErrorModal
                props={{
                    errorName: '404',
                    errorMessage: error,
                }}
            />
        </div>
    )
}

export default EditBlogs
