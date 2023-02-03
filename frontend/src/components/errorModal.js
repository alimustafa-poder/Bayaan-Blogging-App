function ErrorModal({ props }) {
    return (
        <div
            id="errorModal"
            className="flex flex-row justify-center items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-0 duration-300 ease-out delay-300"
        >
            <div className="rounded-md bg-white tracking-widest flex flex-col justify-center items-center border-2 border-none w-fit gap-y-1 p-3">
                <h1 className="font-bold text-red-400 text-2xl">
                    {props.errorName}
                </h1>
                <h1 className="text-large sm:text-3xl p-5 text-black text-center">
                    {props.errorMessage}
                </h1>
            </div>
        </div>
    )
}

export default ErrorModal
