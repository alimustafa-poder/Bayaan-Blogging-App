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

    if (loading) {
        return (
            <div className="flex grow flex-row justify-center items-center dark:bg-slate-800 transition-all">
                <div className="animate-spin rounded-full h-20 w-20 border-b-2 border-gray-900 dark:border-white"></div>
            </div>
        )
    }

    return (
        <>
            <div
                className="flex flex-col grow items-center justify-center w-full dark:bg-slate-800"
                style={{ display: loading ? 'none' : 'flex' }}
            >
                <div className="signupForm animate-leftDrag opacity-0">
                    <form
                        className="flex flex-col gap-y-2 p-12 w-80 items-center align-center gap-y-5 border-2 border-red-200 rounded-md shadow-md bg-zinc-100 dark:bg-slate-700 dark:border-none"
                        onSubmit={handleSubmit}
                    >
                        <div>
                            <label
                                htmlFor="email"
                                className="font-bold dark:text-white"
                            >
                                Enter your email:
                            </label>
                            <input
                                type="email"
                                placeholder="xyz@email.com"
                                className="focus:border-transparent focus:ring-0 ring-0 border-transparent focus:border-red-300 required:border-red-500 invalid:border-red-500 w-60 text-base sm:text-base bg-zinc-100 rounded-md border-red-200 shadow-md"
                                name="email"
                                id="email"
                                onChange={() => {
                                    setEmail(
                                        document.querySelector('#email').value
                                    )
                                }}
                            ></input>
                            {email !== '' && !validator.isEmail(email) ? (
                                <p className="p-1 mt-1 text-red-500 font-bold">
                                    Please enter a correct email.
                                </p>
                            ) : (
                                ''
                            )}
                        </div>
                        <div>
                            <label
                                htmlFor="password"
                                className="font-bold dark:text-white"
                            >
                                Enter your password:
                            </label>
                            <input
                                type="password"
                                className="focus:border-transparent focus:ring-0 ring-0 border-transparent focus:border-red-300 required:border-red-500 invalid:border-red-500 w-60 text-base sm:text-base bg-zinc-100 rounded-md border-red-200 shadow-md"
                                name="password"
                                id="password"
                                placeholder="Enter your password"
                                onChange={() =>
                                    setPassword(
                                        document.querySelector('#password')
                                            .value
                                    )
                                }
                            ></input>
                            {password !== '' &&
                            !validator.isStrongPassword(password) ? (
                                <p className="p-1 mt-1 text-red-500 font-bold">
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
                        {error ? (
                            <p className="p-1 mt-1 text-red-500 font-bold">
                                {error}
                            </p>
                        ) : (
                            ''
                        )}
                    </form>
                    <div className="text-center">
                        <Link
                            to="/login"
                            className="text-red-500 text-start dark:text-white dark:font-bold"
                        >
                            Already have an account? Login.
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignupForm
