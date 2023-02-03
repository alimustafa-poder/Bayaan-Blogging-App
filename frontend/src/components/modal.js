function Modal() {
    return (
        <div
            id="deleteModal"
            className="flex flex-row justify-center items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-0 duration-300 ease-out delay-700"
        >
            <div className="rounded-md bg-gray-300 tracking-widest flex flex-col justify-center items-center border-2 border-red-300 w-fit gap-y-4 p-3">
                <h1 className="">Delete this item?</h1>
                <div className="flex flex-row space-x-3 my-2 sm:gap-x-12">
                    <button
                        type="button"
                        id="yes"
                        className="bg-red-800 px-5 py-1 text-base text-white w-28 hover:bg-red-700"
                    >
                        OK
                    </button>
                    <button
                        type="button"
                        id="cancel"
                        className="bg-red-800 px-5 py-1 text-base text-white w-28 hover:bg-green-600"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Modal
