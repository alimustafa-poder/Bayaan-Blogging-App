import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

export default function SideBar() {
    //sidebar
    return (
        <div className="sidebar flex flex-col fixed w-0 bg-gray-200 h-screen left-0 top-0 pt-5 z-10 transition-all duration-700 overflow-x-hidden shrink dark:bg-slate-800">
            <div className="flex flex-row justify-end pr-4">
                <FontAwesomeIcon
                    icon={faClose}
                    className="text-red-400 cursor-pointer float-right text-3xl hover:text-black dark:text-white dark:hover:text-red-400"
                    onClick={() => {
                        document
                            .querySelector('.sidebar')
                            .classList.remove('w-48')
                    }}
                />
            </div>
            <div className="sidebar__content__item text-xl font-bold">
                <ul className="flex flex-col">
                    {['All Items', 'Drafts', 'Deleted'].map((_, i) => {
                        return (
                            <Link
                                to={
                                    _ === 'All Items'
                                        ? '/'
                                        : _ === 'Drafts'
                                        ? '/Drafts'
                                        : _ === 'Deleted'
                                        ? '/Deleted'
                                        : '/ToDo'
                                }
                                key={i}
                            >
                                <li className="p-3 cursor-pointer hover:bg-slate-300">
                                    {_}
                                </li>
                            </Link>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}
