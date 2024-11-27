import './profile.css'
function Profile() {
    return (
        <div className='profile-page'>
            <div className='form-container'>
                <h1>Your Profile</h1>
                <p>Update your personal information below</p>
                <div className='form-group'>
                    <label>Your Name</label>
                    <input type='Name' name='Name' id='Name' placeholder='Enter Your Name' required />
                </div>
                <div className='form-group'>
                    <label>Your Email</label>
                    <input type='email' name='email' id='email' placeholder='Enter Your Email' required />
                </div>
                <div className='form-group'>
                    <label>New Password (Leave blank to keep current)</label>
                    <input type='password' name='password' id='password' placeholder='Enter Your Password' required />
                </div>
                <div className='form-group'>
                    <label>Repeat Password</label>
                    <input type='password' name='confirm_password' id='confirm_password' placeholder='Confirm Your Password' required />
                </div>
                <button type='submit'>Login</button>
            </div>
        </div>
    );
}

export default Profile