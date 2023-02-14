import { Link, useNavigate } from 'react-router-dom'
import CreateNewBtn from './createNewBtn'
import { useLogout } from '../hooks/useLogout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import SideBar from './sidebar/sidebar'

function Nav() {
    const { logout } = useLogout()
    const navigate = useNavigate()

    const handleClick = () => {
        logout()
        navigate('/')
    }
    document.addEventListener('mousedown', closeSideBar)

    function closeSideBar(e) {
        let sidebar = document.querySelector('.sidebar')
        if (sidebar.contains(e.target)) return
        if (e.target.classList.contains('sidebar')) return
        sidebar.classList.remove('w-48')
    }

    return (
        <>
            <SideBar />
            <div className="flex flex-row w-full justify-between sm:text-lg text-wrap p-5 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 sm:shadow-xl shrink">
                <div className="flex flex-row items-center burgerMenu">
                    <FontAwesomeIcon
                        icon={faBars}
                        className="text-white cursor-pointer text-3xl hover:text-black"
                        onClick={() => {
                            document
                                .querySelector('.sidebar')
                                .classList.toggle('w-48')
                        }}
                    />
                </div>
                <Link to="/">
                    <h1 className="sm:text-4xl sm:font-black text-white ml-4">
                        Bayaan
                    </h1>
                </Link>
                {!localStorage.getItem('user') ? (
                    <div className="flex flex-row items-center space-x-4 sm:space-x-7">
                        <Link to="/signup">
                            <button
                                type="submit"
                                className="text-xs bg-white border-black rounded-md sm:leading-4 border p-1 sm:p-4 sm:text-xl"
                            >
                                Sign Up
                            </button>
                        </Link>
                        <Link to="/login">
                            <button
                                type="submit"
                                className="text-xs bg-green-500 border-black rounded-md sm:leading-4 border p-1 sm:p-4 sm:text-xl"
                            >
                                Login
                            </button>
                        </Link>
                    </div>
                ) : (
                    <div className="flex flex-row gap-x-4">
                        <Link to="/profile">
                            <button
                                type="submit"
                                className="text-xs bg-white border-black rounded-full sm:leading-4 border p-1 sm:p-4 sm:text-xl font-bold bg-black text-black"
                            >
                                U
                            </button>
                        </Link>
                        <div
                            className="text-xs bg-white border-black rounded-md sm:leading-4 border p-1 sm:p-4 sm:text-xl pointer cursor-pointer hover:bg-red-600 hover:text-white"
                            onClick={handleClick}
                        >
                            Logout
                        </div>
                    </div>
                )}
            </div>
            <CreateNewBtn />
        </>
    )
}

export default Nav
