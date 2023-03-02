import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faArchive,
    faClose,
    faEnvelope,
    faInbox,
    faTrashCan,
} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

export default function SideBar() {
    //sidebar
    return (
        <div className="sidebar flex flex-col fixed w-0 bg-gray-200 h-screen left-0 top-0 pt-5 z-10 transition-all duration-700 overflow-x-hidden shrink dark:bg-slate-700">
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
                    {['All Items', 'Drafts', 'Deleted', 'Archive'].map(
                        (_, i) => {
                            return (
                                <Link
                                    to={
                                        _ === 'All Items'
                                            ? '/'
                                            : _ === 'Drafts'
                                            ? '/Drafts'
                                            : _ === 'Deleted'
                                            ? '/Deleted'
                                            : '/Archive'
                                    }
                                    key={i}
                                    className="flex flex-row items-center px-4 gap-x-2 hover:bg-slate-600"
                                >
                                    <FontAwesomeIcon
                                        icon={
                                            _ === 'All Items'
                                                ? faInbox
                                                : _ === 'Drafts'
                                                ? faEnvelope
                                                : _ === 'Deleted'
                                                ? faTrashCan
                                                : faArchive
                                        }
                                        style={
                                            _ === 'All Items'
                                                ? { color: '#3b82f6' }
                                                : _ === 'Drafts'
                                                ? { color: '#f59e0b' }
                                                : _ === 'Deleted'
                                                ? { color: '#ef4444' }
                                                : { color: '#10b981' }
                                        }
                                    />
                                    <li className="p-3 cursor-pointer dark:text-white">
                                        {_}
                                    </li>
                                </Link>
                            )
                        }
                    )}
                </ul>
            </div>
        </div>
    )
}
