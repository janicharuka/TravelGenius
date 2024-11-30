import React, { useState, useEffect } from 'react';
import './profile.css';
import axios from 'axios';

function Profile() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        axios
            .get('http://localhost:8081/session', { withCredentials: true })
            .then((res) => {
                if (res.data.loggedIn) {
                    setName(res.data.user.name);
                    setEmail(res.data.user.email);
                } else {
                    window.location.href = '/login';
                }
            })
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            setMessage("Passwords do not match.");
            return;
        }

        const dataToUpdate = {
            name,
            email,
            password: password || undefined,
        };

        axios
            .post('http://localhost:8081/update-profile', dataToUpdate, { withCredentials: true })
            .then((res) => {
                if (res.data.success) {
                    setMessage("Profile updated successfully.");
                    
                    window.location.href = '/profile';
                } else {
                    setMessage(res.data.message || "Update failed.");
                }
            })
            .catch((err) => {
                console.error(err);
                setMessage("An error occurred.");
            });
    };


    return (
        <div className='profile-page'>
            <div className='form-container'>
                <h1>Your Profile</h1>
                <p>Update your personal information below</p>
                {message && <p className='message'>{message}</p>}
                <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label>Your Name</label>
                        <input
                            type='text'
                            name='name'
                            id='name'
                            placeholder='Enter Your Name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <label>Your Email</label>
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
                        <label>New Password (Leave blank to keep current)</label>
                        <input
                            type='password'
                            name='password'
                            id='password'
                            placeholder='Enter New Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className='form-group'>
                        <label>Repeat Password</label>
                        <input
                            type='password'
                            name='confirm_password'
                            id='confirm_password'
                            placeholder='Confirm Your Password'
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>
                    <button type='submit'>Update Profile</button>
                </form>
            </div>
        </div>
    );
}

export default Profile;




// import './profile.css'
// function Profile() {
//     return (
//         <div className='profile-page'>
//             <div className='form-container'>
//                 <h1>Your Profile</h1>
//                 <p>Update your personal information below</p>
//                 <div className='form-group'>
//                     <label>Your Name</label>
//                     <input type='Name' name='Name' id='Name' placeholder='Enter Your Name' required />
//                 </div>
//                 <div className='form-group'>
//                     <label>Your Email</label>
//                     <input type='email' name='email' id='email' placeholder='Enter Your Email' required />
//                 </div>
//                 <div className='form-group'>
//                     <label>New Password (Leave blank to keep current)</label>
//                     <input type='password' name='password' id='password' placeholder='Enter Your Password' required />
//                 </div>
//                 <div className='form-group'>
//                     <label>Repeat Password</label>
//                     <input type='password' name='confirm_password' id='confirm_password' placeholder='Confirm Your Password' required />
//                 </div>
//                 <button type='submit'>Login</button>
//             </div>
//         </div>
//     );
// }

// export default Profile