import React,{useState} from 'react'
import { useNavigate, Link } from 'react-router'
import "../auth.form.scss"
import { useAuth } from '../hooks/useAuth'

const Login = () => {

    const { loading, handleLogin } = useAuth()
    const navigate = useNavigate()

    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        await handleLogin({email,password})
        navigate('/')
    }

    if(loading){
        return (
            <main className="auth-main">
                <div className="auth-loading">
                    <div className="spinner"></div>
                    <h2>Loading...</h2>
                </div>
            </main>
        )
    }


    return (
        <main className="auth-main">
            <div className="form-container">
                <div className="auth-header">
                    <h1>Welcome Back</h1>
                    <p>Enter your details to access your account</p>
                </div>
                <form onSubmit={handleSubmit}>
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
                            type="password" id="password" name='password' placeholder='Enter your password' />
                    </div>
                    <button className='button primary-button' >Sign In</button>
                </form>
                <div className="auth-footer">
                    <p>Don't have an account? <Link to={"/register"} >Create one here</Link></p>
                </div>
            </div>
        </main>
    )
}

export default Login