function Modal() {
    return (
        <div
            id="deleteModal"
            className="flex flex-row justify-center items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-0 duration-300 ease-out delay-700"
        >
            <div className="rounded-md text-xl bg-gray-300 tracking-widest flex flex-col justify-center items-center border-2 border-red-300 w-fit gap-y-4 p-3 dark:bg-slate-600 dark:border dark:border-white transition-all">
                <h1 className="dark:text-white">Delete this item?</h1>
                <div className="flex flex-row space-x-3 my-2 sm:gap-x-12">
                    <button
                        type="button"
                        id="yes"
                        className="bg-red-800 px-5 py-1 text-base text-white w-28 hover:bg-red-700 dark:bg-red-600 dark:hover:bg-red-500"
                    >
                        OK
                    </button>
                    <button
                        type="button"
                        id="cancel"
                        className="bg-red-800 px-5 py-1 text-base text-white w-28 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-500"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Modal
