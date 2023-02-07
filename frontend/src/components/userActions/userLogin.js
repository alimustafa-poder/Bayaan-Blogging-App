import { useState } from 'react'
import { Link } from 'react-router-dom'
import validator from 'validator'
import { useLogin } from '../../hooks/useLogin'

function LoginForm() {
    const { login, error } = useLogin()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    //if user is already logged in, no need to show login page
    if (localStorage.getItem('user')) return

    // This is the code that makes the page reload when the user logs in.
    window.addEventListener('storage', (e) => {
        window.location.href = '/'
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!validator.isEmail(email) || !password) {
            document.querySelector('form').classList.add('animate-shake')
            setTimeout(() => {
                document.querySelector('form').classList.remove('animate-shake')
            }, 1000)
            return
        }
        const data = new FormData(e.target)
        await login(data)
    }

    return (
        <>
            <div className="flex flex-col grow items-center justify-center w-full">
                <form
                    className="flex flex-col gap-y-2 p-12 w-80 items-center align-center gap-y-5 border-2 border-red-200 rounded-md shadow-md bg-zinc-100"
                    onSubmit={handleSubmit}
                >
                    <div>
                        <label for="email" className="font-bold">
                            Enter your email:
                        </label>
                        <input
                            type="email"
                            placeholder="xyz@email.com"
                            className="focus:border-transparent focus:ring-0 ring-0 border-transparent focus:border-red-300 required:border-red-500 invalid:border-red-500 w-60 text-xl sm:text-2xl bg-zinc-100 rounded-md border-red-200 shadow-md"
                            name="email"
                            id="email"
                            onKeyUp={(e) => {
                                setEmail(e.target.value)
                            }}
                        ></input>
                    </div>
                    <div>
                        <label for="password" className="font-bold">
                            Enter your password:
                        </label>
                        <input
                            type="password"
                            className="focus:border-transparent focus:ring-0 ring-0 border-transparent focus:border-red-300 required:border-red-500 invalid:border-red-500 w-60 text-xl sm:text-2xl bg-zinc-100 rounded-md border-red-200 shadow-md"
                            name="password"
                            id="password"
                            onKeyUp={(e) => {
                                setPassword(e.target.value)
                            }}
                        ></input>
                    </div>
                    <button
                        type="submit"
                        className="text-xl w-60 font-normal bg-green-400 rounded-md hover:bg-green-500 h-8"
                    >
                        Login
                    </button>
                    {error ? <p className="text-red-500">{error}</p> : ''}
                </form>
                <div className="text-start">
                    <Link to="/signup" className="mt-5 text-red-800 text-start">
                        Don't have an account? SignUp.
                    </Link>
                </div>
            </div>
        </>
    )
}

export default LoginForm
