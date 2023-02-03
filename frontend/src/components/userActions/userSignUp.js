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

    if (error) {
        console.log(error)
    }

    return (
        <>
            <div className="flex flex-col grow items-center justify-center w-full">
                <form
                    className="flex flex-col gap-y-2 p-2 w-72 gap-y-3"
                    onSubmit={handleSubmit}
                >
                    <div>
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
                            <p className="p-1 mt-1 bg-red-200 border-red-800 border rounded-md text-red-500">
                                {error}
                            </p>
                        ) : (
                            ''
                        )}
                        {email !== '' && !validator.isEmail(email) ? (
                            <p className="p-1 mt-1 bg-red-200 border-red-800 border rounded-md text-red-500">
                                Please enter a correct email.
                            </p>
                        ) : (
                            ''
                        )}
                    </div>
                    <div>
                        <input
                            type="password"
                            className="focus:border-transparent focus:ring-0 ring-0 border-transparent focus:border-red-300 required:border-red-500 invalid:border-red-500 w-full text-xl sm:text-2xl bg-zinc-100 rounded-md border-red-200 shadow-md"
                            name="password"
                            id="password"
                            onChange={() =>
                                setPassword(
                                    document.querySelector('#password').value
                                )
                            }
                        ></input>
                        {password !== '' &&
                        !validator.isStrongPassword(password) ? (
                            <p className="p-1 mt-1 bg-red-200 border-red-800 border rounded-md text-red-500">
                                Please choose a strong password.
                            </p>
                        ) : (
                            ''
                        )}
                    </div>
                    <button
                        disabled={loading}
                        type="submit"
                        className="text-xl font-normal bg-green-400 rounded-md hover:bg-green-500 h-8"
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
        </>
    )
}

export default SignupForm
