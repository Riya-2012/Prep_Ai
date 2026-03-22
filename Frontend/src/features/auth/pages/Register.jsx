import React,{useState} from 'react'
import { useNavigate, Link } from 'react-router'
import { useAuth } from '../hooks/useAuth'

const Register = () => {

    const navigate = useNavigate()
    const [ username, setUsername ] = useState("")
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")

    const {loading,handleRegister} = useAuth()
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        await handleRegister({username,email,password})
        navigate("/")
    }

    if(loading){
        return (
            <main className="auth-main">
                <div className="auth-loading">
                    <div className="spinner"></div>
                    <h2>Creating Account...</h2>
                </div>
            </main>
        )
    }

    return (
        <main className="auth-main">
            <div className="form-container">
                <div className="auth-header">
                    <h1>Create Account</h1>
                    <p>Join us to get started with your journey</p>
                </div>

                <form onSubmit={handleSubmit}>

                    <div className="input-group">
                        <label htmlFor="username">Username</label>
                        <input
                            onChange={(e) => { setUsername(e.target.value) }}
                            type="text" id="username" name='username' placeholder='Enter your username' />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input
                            onChange={(e) => { setEmail(e.target.value) }}
                            type="email" id="email" name='email' placeholder='Enter your email' />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input
                            onChange={(e) => { setPassword(e.target.value) }}
                            type="password" id="password" name='password' placeholder='Create a password' />
                    </div>

                    <button className='button primary-button'>Sign Up</button>

                </form>

                <div className="auth-footer">
                    <p>Already have an account? <Link to={"/login"}>Sign In</Link></p>
                </div>
            </div>
        </main>
    )
}

export default Register