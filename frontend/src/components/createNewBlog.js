import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import ErrorModal from './errorModal'
import { useAuthContext } from '../hooks/useAuth'

function CreateBlog() {
    const navigate = useNavigate()
    const [error, setError] = useState('')
    const { user } = useAuthContext()

    async function handleSubmit(e) {
        e.preventDefault()
        if (!user) {
            setError('You must be logged in.')
            displayError()
            return
        }
        const data = new FormData(e.target)
        data.append('email', user.email)
        for (let [, value] of data.entries()) {
            if (value.trim() === '') {
                setError('Please fill in all fields.')
                displayError()
                return
            }
        }

        const response = await fetch('/', {
            method: 'POST',
            headers: {
                accepts: 'application/json',
                Authorization: `Bearer ${user.token}`,
            },
            body: data,
        })
        const json = await response.json()
        if (response.status === 200) {
            return navigate(`/${json.test._id}`)
        } else {
            displayError()
            new Promise((resolve, reject) => resolve(setError(json.error)))
        }
    }

    function displayError() {
        document.querySelector('#errorModal').classList.remove('scale-0')
        setTimeout(
            () =>
                document.querySelector('#errorModal').classList.add('scale-0'),
            2000
        )
    }

    return (
        <div className="flex flex-col grow sm:overflow-visible mt-3">
            <form onSubmit={(e) => handleSubmit(e)}>
                <button
                    type="submit"
                    className="p-1 sm:p-2 bg-red-500 px-4 sm:px-8 sm:text-md tracking-wider sm:tracking-widest sm:text-xl float-right"
                >
                    Post
                </button>
                <input
                    name="title"
                    id="title"
                    type="text"
                    placeholder="Enter a title here."
                    className="focus:border-transparent focus:ring-0 ring-0 border-transparent focus:border-red-300 required:border-red-500 invalid:border-red-500 p-2 sm:p-4 w-full text-xl sm:text-2xl bg-zinc-100 mt-2 shadow-md"
                />
                <input
                    name="author"
                    id="author"
                    type="text"
                    placeholder="Author"
                    className="focus:border-transparent focus:ring-0 ring-0 border-transparent focus:border-red-300 required:border-red-500 invalid:border-red-500 p-2 sm:p-4 w-full text-xl sm:text-2xl bg-zinc-100 mt-2 shadow-md"
                />
                <textarea
                    name="body"
                    id="body"
                    type="text"
                    placeholder="Enter body text."
                    className="focus:border-transparent focus:ring-0 ring-0 border-transparent focus:border-red-300 p-2 sm:p-4 text-xl sm:text-2xl bg-zinc-100 shadow-md h-96 w-full"
                />
            </form>
            <ErrorModal props={{ errorName: '404', errorMessage: error }} />
        </div>
    )
}

export default CreateBlog
