import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan, faEdit } from '@fortawesome/free-solid-svg-icons'
import Modal from './modal'
import ErrorModal from './errorModal'
import { useAuthContext } from '../hooks/useAuth'

function SingleBlog() {
    const params = useParams()
    const navigate = useNavigate()
    const [blog, setBlog] = useState(null)
    const [error, setError] = useState(null)
    const { user } = useAuthContext()

    useEffect(() => {
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
                return
            } else {
                setBlog(json)
            }
        }

        getSingleBlog()
    }, [params.id, user])

    function displayError() {
        if (!document.querySelector('#errorModal')) return
        document.querySelector('#errorModal').classList.remove('scale-0')
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
            <div className="flex grow flex-row justify-center items-center">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
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
            document.removeEventListener('mousedown', x)

            if (e.target.closest('div').id === 'trashCan') return
            if (!modal.contains(e.target)) {
                modal.classList.add('scale-0')
            }
            if (e.target.textContent === 'OK') {
                handleDelete()
            }
            if (e.target.textContent === 'Cancel') {
                modal.classList.add('scale-0')
            }
        }
    }

    return (
        <>
            <div className="flex flex-col grow">
                <div className="flex flex-row justify-between items-center">
                    <h1 className="text-xl sm:text-3xl text-red-800 font-bold my-2 sm:my-3">
                        {blog.title}
                    </h1>
                    <div className="flex flex-row space-x-5">
                        <div id="trashCan">
                            <FontAwesomeIcon
                                icon={faTrashCan}
                                className="text-xl sm:text-2xl text-red-500 cursor-pointer"
                                onClick={handleModal}
                            />
                        </div>
                        <Link to={`/${params.id}/edit`}>
                            <div id="editIcon">
                                <FontAwesomeIcon
                                    icon={faEdit}
                                    className="text-xl sm:text-2xl text-gray-800 cursor-pointer"
                                />
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col grow gap-y-1 p-y-1 flex-wrap">
                    <div className="flex flex-row text-xs">
                        <p className="font-bold text-gray-600">Author:</p>
                        <p className="px-3">{blog.author}</p>
                    </div>
                    <div className="flex flex-col sm:flex-row text-xs">
                        <div className="flex flex-row">
                            <p className="font-bold text-gray-600">
                                Created at:
                            </p>
                            <p className="px-3 italic">
                                {new Date(blog.createdAt).toLocaleString()}
                            </p>
                        </div>
                        <div className="flex flex-row">
                            <p className="font-bold text-gray-600">
                                Last Updated at:
                            </p>
                            <p className="px-3 italic">
                                {new Date(blog.updatedAt).toLocaleString()}
                            </p>
                        </div>
                    </div>
                    <div className="font-serif text-xl my-2 sm:my-1">
                        <p className="break-all">{blog.body}</p>
                    </div>
                </div>
            </div>
            <Modal />
        </>
    )
}

export default SingleBlog
