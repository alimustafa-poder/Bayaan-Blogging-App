import { useEffect, useState } from 'react'
import BlogDetails from './workoutDetails'
import { Link } from 'react-router-dom'
import SingleBlog from './singleBlog'
import { useAuthContext } from '../hooks/useAuth'
import { PreAuthHomepage } from './pre-auth homepage/homepage'
import ErrorModal from './errorModal'

function Homepage() {
    const [blog, setBlog] = useState(null)
    const [error, setError] = useState(null)
    const { user } = useAuthContext()

    useEffect(() => {
        async function getBlog() {
            if (!user) return
            const data = new FormData()
            data.append('email', user.email)
            const response = await fetch('/api/getAll', {
                method: 'POST',
                headers: {
                    content_type: 'application/json',
                    Authorization: `Bearer ${user.token}`,
                },
                body: data,
            })
            const json = await response.json()

            if (response.ok) {
                setBlog(json)
            } else {
                setError(json)
                displayError()
            }
        }
        getBlog()
    }, [user])

    if (!user) {
        return <PreAuthHomepage />
    }

    if (error) {
        return <ErrorModal props={error} />
    }

    function displayError() {
        //hack saving myself from another context
        setTimeout(() => {
            document.querySelector('#errorModal').classList.remove('scale-0')
        })

        setTimeout(
            () =>
                document.querySelector('#errorModal').classList.add('scale-0'),
            2000
        )
    }

    if (blog == null) {
        return (
            <div className="flex grow flex-col items-center gap-y-4 text-3xl sm:text-7xl overflow-clip sm:overflow-visible p-2 dark:bg-slate-800">
                {[...Array(10)].map((_, i) => {
                    return (
                        <span
                            key={i}
                            className="flex flex-col h-16 rounded-md animate-pulse bg-slate-600 w-[80%] sm:w-[60%]"
                            style={{
                                animationDelay: `${i * 0.05}s`,
                                animationDuration: '1s',
                            }}
                        ></span>
                    )
                })}
            </div>
        )
    } else if (!blog.length) {
        return (
            <div className="flex flex-col grow items-center justify-center text-xl sm:text-3xl text-gray-400 subpixel-antialiased dark:bg-slate-800 dark:text-white">
                <h1> There are no blogs to fetch.</h1>
            </div>
        )
    } else {
        return (
            <div className="flex flex-col grow p-2 dark:bg-slate-800 items-center">
                {blog &&
                    blog.map((elem, i) => (
                        <Link
                            to={`/${elem._id}`}
                            key={elem._id}
                            onClick={SingleBlog}
                            className="flex flex-col opacity-0 animate-opacity w-[80%] sm:w-[60%]"
                            style={{
                                animationDelay: `${i * 0.5}s`,
                                animationDuration: '1s',
                            }}
                        >
                            <BlogDetails props={elem} />
                        </Link>
                    ))}
            </div>
        )
    }
}

export default Homepage
