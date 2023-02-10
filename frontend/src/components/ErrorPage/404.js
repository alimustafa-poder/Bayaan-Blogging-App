import { Link } from 'react-router-dom'

export default function Page404() {
    //not found page
    return (
        <div className="flex flex-col items-center justify-center h-screen gap-y-6">
            <h1 className="text-4xl sm:text-7xl text-red-400">
                404: Page not found
            </h1>
            <Link to="/">
                <button className="bg-gray-400 text-gray-800 px-4 py-2 rounded-md mt-4 hover:bg-gray-300">
                    Go back to homepage
                </button>
            </Link>
        </div>
    )
}
