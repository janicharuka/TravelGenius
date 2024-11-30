import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './login.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [sessionData, setSessionData] = useState(null);

    useEffect(() => {
        axios
            .get('http://localhost:8081/session', { withCredentials: true })
            .then((res) => {
                if (res.data.loggedIn) {
                    window.location.href = '/';
                }
            })
            .catch((err) => console.error(err));
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        axios
            .post(
                'http://localhost:8081/login',
                { email, password },
                { withCredentials: true }
            )
            .then((res) => {
                setMessage(res.data.message);
                if (res.data.success) {
                    setSessionData({
                        id: res.data.user?.id,
                        email: res.data.user?.email,
                    });
                    window.location.href = '/';
                } else {
                    setSessionData(null);
                }
            })
            .catch((err) => console.error(err));
    };

    return (
        <div className='auth-page'>
            <div className='form-container'>
                <form onSubmit={handleSubmit}>
                    <h2>Login</h2>
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
                    {message && <p>{message}</p>}
                    <button type='submit'>Login</button>
                    <p>
                        Don't have an account?{' '}
                        <a href='/register'>Register here</a>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Login;



















// import React, { useState } from 'react';
// import axios from 'axios';
// import './login.css';

// function Login() {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [message, setMessage] = useState('');

//     useEffect(() => {
//         axios
//             .get('http://localhost:8081/session', { withCredentials: true })
//             .then((res) => {
//                 if (res.data.loggedIn) {
//                     setSessionData(res.data.user);
//                 } else {
//                     setSessionData(null);
//                 }
//             })
//             .catch((err) => console.error(err));
//     }, []);

//     function handleSubmit(event) {
//         event.preventDefault();
//         axios
//             .post('http://localhost:8081/login', { email, password })
//             .then((res) => {
//                 setMessage(res.data.message);
//                 if (res.data.success) {
//                     // window.location.href = '/';
//                 }
//             })
//             .catch((err) => console.error(err));
//     }

//     return (
//         <div className='auth-page'>
//             <div className='form-container'>
//                 <form onSubmit={handleSubmit}>
//                     <h2>Login</h2>
//                     <div className='form-group'>
//                         <input
//                             type='email'
//                             name='email'
//                             id='email'
//                             placeholder='Enter Your Email'
//                             onChange={(e) => setEmail(e.target.value)}
//                             required
//                         />
//                     </div>
//                     <div className='form-group'>
//                         <input
//                             type='password'
//                             name='password'
//                             id='password'
//                             placeholder='Enter Your Password'
//                             onChange={(e) => setPassword(e.target.value)}
//                             required
//                         />
//                     </div>
//                     {message && <p>{message}</p>}
//                     <button type='submit'>Login</button>
//                     <p>
//                         Don't have an account?
//                         <a href='/register'> Register here </a>
//                     </p>
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default Login;

