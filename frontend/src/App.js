import Nav from './components/nav'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './components/homepage'
import SingleBlog from './components/singleBlog'
import CreateBlog from './components/createNewBlog'
import EditBlogs from './components/editBlogs'
import SignupForm from './components/userActions/userSignUp'
import LoginForm from './components/userActions/userLogin'

function App() {
    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/SingleBlog/:id" element={<SingleBlog />} />
                <Route path="/createBlog" element={<CreateBlog />} />
                <Route path="/:id/edit" element={<EditBlogs />} />
                <Route path="/signup" element={<SignupForm />} />
                <Route path="/login" element={<LoginForm />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
