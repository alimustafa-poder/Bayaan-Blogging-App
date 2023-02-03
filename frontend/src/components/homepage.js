import { useEffect, useState } from 'react'
import BlogDetails from './workoutDetails'
import { Link } from 'react-router-dom'
import SingleBlog from './singleBlog'
import { useAuthContext } from '../hooks/useAuth'
import { PreAuthHomepage } from './pre-auth homepage/homepage'

function Homepage() {
    const [blog, setBlog] = useState(null)
    const { user } = useAuthContext()

    useEffect(() => {
        async function getBlog() {
            if (!user) return
            const response = await fetch('/api', {
                headers: {
                    accepts: 'application/json',
                    Authorization: `Bearer ${user.token}`,
                },
            })
            const json = await response.json()

            if (response.ok) {
                setBlog(json)
            }
        }
        getBlog()
    }, [user])

    if (!user) {
        return <PreAuthHomepage />
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
                        <Link to={elem._id} key={elem._id} onClick={SingleBlog}>
                            <BlogDetails props={elem} />
                        </Link>
                    ))}
            </div>
        )
    }
}

export default Homepage
