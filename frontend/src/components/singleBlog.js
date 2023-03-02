import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan, faEdit } from '@fortawesome/free-solid-svg-icons'
import Modal from './modal'
import ErrorModal from './errorModal'
import { useAuthContext } from '../hooks/useAuth'
import { Remarkable } from 'remarkable'
import { useThemeContext } from '../hooks/useTheme'

function SingleBlog() {
    const params = useParams()
    const navigate = useNavigate()
    const [blog, setBlog] = useState(null)
    const [error, setError] = useState(null)
    const { user } = useAuthContext()
    const md = new Remarkable()
    const { theme } = useThemeContext()

    useEffect(() => {
        document.documentElement.classList.add(theme)
        async function getSingleBlog() {
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
            if (response.status !== 200) {
                setError(json.error)
                displayError()
            } else {
                setBlog(json)
            }
        }

        getSingleBlog()
    }, [params.id, user, theme])

    function displayError() {
        setTimeout(
            () =>
                document
                    .querySelector('#errorModal')
                    .classList.remove('scale-0'),
            1000
        )

        setTimeout(
            () =>
                document.querySelector('#errorModal').classList.add('scale-0'),
            2000
        )
    }

    if (!user || error) {
        return <ErrorModal props={{ errorName: '401', errorMessage: error }} />
    }

    if (blog == null && !error) {
        return (
            <div className="flex grow flex-row justify-center items-center dark:bg-slate-800">
                <div className="animate-spin rounded-full h-28 w-28 border-b-2 border-gray-900 dark:border-white"></div>
            </div>
        )
    }

    async function handleDelete() {
        const response = await fetch(`/api/${params.id}`, {
            method: 'DELETE',
            headers: {
                accepts: 'application/json',
                Authorization: `Bearer ${user.token}`,
            },
        })

        if (!response.status === '200') {
            return (
                <>
                    <h1>
                        Opps!!! There was an error while fetching the resource
                    </h1>
                </>
            )
        } else {
            return navigate('/')
        }
    }

    function handleModal(e) {
        const modal = document.querySelector('#deleteModal')
        modal.classList.toggle('scale-0')
        document.addEventListener('mousedown', x)

        function x(e) {
            if (modal.contains(e.target)) {
                if (e.target.textContent === 'OK') {
                    handleDelete()
                }
                if (e.target.textContent === 'Cancel') {
                    modal.classList.add('scale-0')
                }
                return
            }
            document.removeEventListener('mousedown', x)

            if (e.target.closest('div').id === 'trashCan') return
            if (!modal.contains(e.target)) {
                modal.classList.add('scale-0')
            }
        }
    }

    return (
        <>
            <div className="flex flex-col grow dark:bg-slate-800 dark:p-2 transition-all justify-center items-center">
                <div className="flex flex-col grow w-[80%] sm:w-[50%] overflow-hidden">
                    <div className="flex flex-row justify-between items-center">
                        <h1 className="text-xl sm:text-5xl text-red-800 font-bold my-2 sm:my-3 dark:text-white">
                            {blog.title}
                        </h1>
                        <div className="flex flex-row space-x-5">
                            <div id="trashCan">
                                <FontAwesomeIcon
                                    icon={faTrashCan}
                                    className="text-xl sm:text-2xl text-red-500 cursor-pointer dark:text-white dark:hover:text-red-500"
                                    onClick={handleModal}
                                />
                            </div>
                            <Link to={`/${params.id}/edit`}>
                                <div id="editIcon">
                                    <FontAwesomeIcon
                                        icon={faEdit}
                                        className="text-xl sm:text-2xl text-gray-800 cursor-pointer dark:text-white"
                                    />
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col grow gap-y-1 p-y-1">
                        <div className="flex flex-row text-xs">
                            <p className="font-bold text-gray-600 dark:text-white">
                                Author:
                            </p>
                            <p className="px-3 dark:text-white">
                                {blog.author}
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row text-xs">
                            <div className="flex flex-row">
                                <p className="font-bold text-gray-600 dark:text-white">
                                    Created at:
                                </p>
                                <p className="px-3 italic dark:text-white">
                                    {new Date(blog.createdAt).toLocaleString()}
                                </p>
                            </div>
                            <div className="flex flex-row">
                                <p className="font-bold text-gray-600 dark:text-white">
                                    Last Updated at:
                                </p>
                                <p className="px-3 italic dark:text-white">
                                    {new Date(blog.updatedAt).toLocaleString()}
                                </p>
                            </div>
                        </div>
                        <div
                            className="font-serif text-xl my-2 sm:my-1 break-all dark:text-white"
                            dangerouslySetInnerHTML={{
                                __html: md.render(blog.body),
                            }}
                        ></div>
                    </div>
                </div>
            </div>
            <Modal />
        </>
    )
}

export default SingleBlog
