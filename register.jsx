import { useState } from 'react';
import './register.css';
import axios from 'axios';

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const [sessionData, setSessionData] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            setMessage("Passwords do not match.");
            return;
        }

        axios
            .post('http://localhost:8081/register', { name, email, password })
            .then((res) => {
                if (res.data.success) {
                    window.location.href = '/login';
                } else {
                    setMessage(res.data.message || "Registration failed.");
                }
            })
            .catch((err) => {
                console.error(err);
                setMessage("An error occurred.");
            });

    };

    return (
        <div className='auth-page'>
            <div className='form-container'>
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <input
                            type='text'
                            name='Name'
                            id='Name'
                            placeholder='Enter Your Name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <input
                            type='email'
                            name='email'
                            id='email'
                            placeholder='Enter Your Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <input
                            type='password'
                            name='password'
                            id='password'
                            placeholder='Enter Your Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <input
                            type='password'
                            name='confirm_password'
                            id='confirm_password'
                            placeholder='Confirm Your Password'
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>
                    {message && <p>{message}</p>}
                    <button type='submit'>Register</button>
                    <p>
                        Already have an account? <a href='/login'>Login here</a>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Register;





// import './register.css'

// function Register() {
//     return (
//         <div className='auth-page'>
//             <div className='form-container'>
//                 <h2>Register</h2>
//                 <div className='form-group'>
//                     <input type='Name' name='Name' id='Name' placeholder='Enter Your Name' required />
//                 </div>
//                 <div className='form-group'>
//                     <input type='email' name='email' id='email' placeholder='Enter Your Email' required />
//                 </div>
//                 <div className='form-group'>
//                     <input type='password' name='password' id='password' placeholder='Enter Your Password' required />
//                 </div>
//                 <div className='form-group'>
//                     <input type='password' name='confirm_password' id='confirm_password' placeholder='Confirm Your Password' required />
//                 </div>
//                 <button type='submit'>Login</button>
//                 <p>
//                     Already have an account?
//                     <a href='/login'>Login here</a>
//                 </p>
//             </div>
//         </div>
//     );
// }

// export default Register