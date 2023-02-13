import Nav from './components/nav'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
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

function App() {
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
                <Route path="*" element={<Page404 />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
