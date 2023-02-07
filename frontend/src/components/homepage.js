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
        if (!document.querySelector('#errorModal')) return
        document.querySelector('#errorModal').classList.remove('scale-0')
        setTimeout(
            () =>
                document.querySelector('#errorModal').classList.add('scale-0'),
            2000
        )
    }

    if (blog == null) {
        return (
            <div className="flex grow flex-col mt-2 gap-y-6 text-3xl sm:text-7xl overflow-hidden">
                {[...Array(6)].map((_, i) => {
                    return (
                        <span
                            key={i}
                            className="h-16 rounded-md animate-pulse bg-slate-700"
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
            <div className="flex flex-col grow items-center justify-center text-xl sm:text-3xl text-gray-400 subpixel-antialiased">
                <h1> There are no blogs to fetch.</h1>
            </div>
        )
    } else {
        return (
            <div>
                {blog &&
                    blog.map((elem) => (
                        <Link
                            to={`/blog/${elem._id}`}
                            key={elem._id}
                            onClick={SingleBlog}
                        >
                            <BlogDetails props={elem} />
                        </Link>
                    ))}
            </div>
        )
    }
}

export default Homepage
