import { useState } from 'react'
import { Link } from 'react-router-dom'
import validator from 'validator'
import { useSignup } from '../../hooks/useSignup'

function SignupForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { signup, error, loading } = useSignup()
    if (localStorage.getItem('user')) return
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (
            !validator.isEmail(email) ||
            !validator.isStrongPassword(password)
        ) {
            document.querySelector('form').classList.add('animate-shake')
            setTimeout(() => {
                document.querySelector('form').classList.remove('animate-shake')
            }, 1000)
            return
        }
        const data = new FormData(e.target)
        await signup(data)
    }

    return (
        <>
            <div
                className="flex flex-col grow items-center justify-center w-full"
                style={{ display: loading ? 'none' : 'flex' }}
            >
                <form
                    className="flex flex-col gap-y-2 p-12 w-80 items-center align-center gap-y-5 border-2 border-red-200 rounded-md shadow-md bg-zinc-100"
                    onSubmit={handleSubmit}
                >
                    <div>
                        <label htmlFor="email" className="font-bold">
                            Enter your email:
                        </label>
                        <input
                            type="email"
                            placeholder="xyz@email.com"
                            className="focus:border-transparent focus:ring-0 ring-0 border-transparent focus:border-red-300 required:border-red-500 invalid:border-red-500 w-full text-xl sm:text-2xl bg-zinc-100 rounded-md border-red-200 shadow-md"
                            name="email"
                            id="email"
                            onChange={() => {
                                setEmail(document.querySelector('#email').value)
                            }}
                        ></input>
                        {error ? (
                            <p className="p-1 mt-1 text-red-500">{error}</p>
                        ) : (
                            ''
                        )}
                        {email !== '' && !validator.isEmail(email) ? (
                            <p className="p-1 mt-1 text-red-500">
                                Please enter a correct email.
                            </p>
                        ) : (
                            ''
                        )}
                    </div>
                    <div>
                        <label htmlFor="password" className="font-bold">
                            Enter your password:
                        </label>
                        <input
                            type="password"
                            className="focus:border-transparent focus:ring-0 ring-0 border-transparent focus:border-red-300 required:border-red-500 invalid:border-red-500 w-full text-base sm:text-base bg-zinc-100 rounded-md border-red-200 shadow-md"
                            name="password"
                            id="password"
                            placeholder="Enter your password"
                            onChange={() =>
                                setPassword(
                                    document.querySelector('#password').value
                                )
                            }
                        ></input>
                        {password !== '' &&
                        !validator.isStrongPassword(password) ? (
                            <p className="p-1 mt-1 text-red-500">
                                Please choose a strong password.
                            </p>
                        ) : (
                            ''
                        )}
                    </div>
                    <button
                        disabled={loading}
                        type="submit"
                        className="text-xl w-60 font-normal bg-green-400 rounded-md hover:bg-green-500 h-8"
                    >
                        Signup
                    </button>
                </form>
                <div className="text-start">
                    <Link to="/login" className="text-red-500 text-start">
                        Already have an account? Login.
                    </Link>
                </div>
            </div>
            <div
                className="flex grow flex-row justify-center items-center absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2]"
                style={{ display: loading ? 'flex' : 'none' }}
            >
                <div className="animate-spin rounded-full h-20 w-20 border-b-2 border-gray-900"></div>
            </div>
        </>
    )
}

export default SignupForm
