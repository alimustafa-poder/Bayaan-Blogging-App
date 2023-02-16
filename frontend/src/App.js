import Nav from './components/nav'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import Homepage from './components/homepage'
import SingleBlog from './components/singleBlog'
import CreateBlog from './components/createNewBlog'
import EditBlogs from './components/editBlogs'
import SignupForm from './components/userActions/userSignUp'
import LoginForm from './components/userActions/userLogin'
import Page404 from './components/ErrorPage/404'
import Profile from './components/userProfile/profile'
import Drafts from './components/drafts'
import Deleted from './components/deleted'
import ArchivedBlogs from './components/archive'
import { useThemeContext } from './hooks/useTheme'

function App() {
    const { theme } = useThemeContext()
    useEffect(() => {
        localStorage.setItem('theme', theme)
        document.documentElement.classList.add(theme)
    })
    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/:id" element={<SingleBlog />} />
                <Route path="/createBlog" element={<CreateBlog />} />
                <Route path="/:id/edit" element={<EditBlogs />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/signup" element={<SignupForm />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/drafts" element={<Drafts />} />
                <Route path="/deleted" element={<Deleted />} />
                <Route path="/archive" element={<ArchivedBlogs />} />
                <Route path="*" element={<Page404 />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
