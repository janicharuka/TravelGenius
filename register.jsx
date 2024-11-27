import './register.css'

function Register() {
    return (
        <div className='auth-page'>
            <div className='form-container'>
                <h2>Register</h2>
                <div className='form-group'>
                    <input type='Name' name='Name' id='Name' placeholder='Enter Your Name' required />
                </div>
                <div className='form-group'>
                    <input type='email' name='email' id='email' placeholder='Enter Your Email' required />
                </div>
                <div className='form-group'>
                    <input type='password' name='password' id='password' placeholder='Enter Your Password' required />
                </div>
                <div className='form-group'>
                    <input type='password' name='confirm_password' id='confirm_password' placeholder='Confirm Your Password' required />
                </div>
                <button type='submit'>Login</button>
                <p>
                    Already have an account?
                    <a href='/login'>Login here</a>
                </p>
            </div>
        </div>
    );
}

export default Register