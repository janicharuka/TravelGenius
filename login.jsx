import './login.css'
function Login() {
    return (
        <div className='auth-page'>
            < div className='form-container' >
                <h2>Login</h2>
                <div className='form-group'>
                    <input type='email' name='email' id='email' placeholder='Enter Your Email' required />
                </div>
                <div className='form-group'>
                    <input type='password' name='password' id='password' placeholder='Enter Your Password' required />
                </div>
                <button type='submit'>Login</button>
                <p>
                    Don't have an account?
                    <a href='/register'>Register here</a>
                </p>
            </div >
        </div >
    );
}

export default Login