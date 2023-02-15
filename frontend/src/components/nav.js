import { Link, useNavigate } from 'react-router-dom'
import CreateNewBtn from './createNewBtn'
import { useLogout } from '../hooks/useLogout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faSun } from '@fortawesome/free-solid-svg-icons'
import SideBar from './sidebar/sidebar'
import { useThemeContext } from '../hooks/useTheme'

function Nav() {
    const { logout } = useLogout()
    const navigate = useNavigate()
    const { theme, dispatch } = useThemeContext()

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
            <div className="flex flex-row w-full justify-between sm:text-lg text-wrap p-5 rounded-md bg-blue-400 sm:shadow-xl dark:bg-slate-700 dark:rounded-none">
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
                    <h1 className="sm:text-4xl sm:font-black text-white ml-6">
                        Bayaan
                    </h1>
                </Link>
                <div className="flex flex-row gap-x-4">
                    <div className="flex flex-col justify-center">
                        <FontAwesomeIcon
                            icon={faSun}
                            className="toggleMode text-4xl fill-current cursor-pointer"
                            onClick={() => {
                                if (theme === 'light') {
                                    document.documentElement.classList.remove(
                                        'light'
                                    )
                                    dispatch({ type: 'darkMode' })
                                    document.documentElement.classList.add(
                                        'dark'
                                    )
                                    localStorage.setItem('theme', 'dark')
                                }
                                if (theme === 'dark') {
                                    document.documentElement.classList.remove(
                                        'dark'
                                    )
                                    dispatch({ type: 'lightMode' })
                                    document.documentElement.classList.add(
                                        'light'
                                    )
                                    localStorage.setItem('theme', 'light')
                                }
                            }}
                            style={{
                                color: theme === 'light' ? 'yellow' : 'white',
                            }}
                        />
                    </div>
                    {!localStorage.getItem('user') ? (
                        <div className="flex flex-row items-center space-x-4 sm:space-x-7">
                            <Link to="/signup">
                                <button
                                    type="submit"
                                    className="text-xs bg-white border-black rounded-md sm:leading-4 border p-1 sm:p-4 sm:text-xl dark:bg-slate-800 dark:text-white dark:hover:bg-slate-600 dark:hover:text-white"
                                >
                                    Sign Up
                                </button>
                            </Link>
                            <Link to="/login">
                                <button
                                    type="submit"
                                    className="text-xs bg-green-500 border-black rounded-md sm:leading-4 border p-1 sm:p-4 sm:text-xl dark:bg-slate-400 dark:text-white dark:hover:bg-slate-600 dark:hover:text-white"
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
            </div>
            <CreateNewBtn />
        </>
    )
}

export default Nav
