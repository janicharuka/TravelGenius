import './dashboard.css'
function Dashboard() {
    return (
        <div className='dashboard'>
            <div className='welcome-text'>
                <h1>Welcome to Your Dashboard</h1>
                <p>Manage your travel bookings, profile, and more!</p>
            </div>
            <div className='cards'>
                <div className='card'>
                    <h3>View Bookings</h3>
                    <p>Check your current and past travel bookings.</p>
                </div>
                <div className='card'>
                    <h3>Manage Profile</h3>
                    <p>Update your personal information and preferences.</p>
                </div>
                <div className='card'>
                    <h3>Explore Destinations</h3>
                    <p>Find exciting destinations for your next trip.</p>
                </div>
            </div>
        </div>
    );
}

export default Dashboard