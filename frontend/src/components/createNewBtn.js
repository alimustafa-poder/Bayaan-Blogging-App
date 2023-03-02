import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { Link } from 'react-router-dom'

class CreateNewBtn extends React.Component {
    render() {
        return (
            <div
                id="btnCreateBlog"
                className="top-[80%] left-[85%] sm:left-[90%] fixed z-10"
            >
                <Link to="/createBlog">
                    <button className="flex flex-col justify-center items-center p-5 sm:px-5 bg-green-500 bg-gradient-to-r from-red-500 to-blue-500 font-normal sm:text-3xl text-white rounded-full shadow-md hover:text-4xl hover:rotate-90 transition-all duration-300 dark:bg-slate-500 dark:bg-slate-300">
                        <FontAwesomeIcon icon={faPlus} />
                    </button>
                </Link>
            </div>
        )
    }
}

export default CreateNewBtn
