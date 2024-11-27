import './bookings.css'

function Bookings() {
    return (
        <div className='bookings'>
            <div className='welcome-text'>
                <h1>Your Bookings</h1>
                <p>Here are your current and past travel bookings.</p>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>Booking ID</th>
                        <th>Destination</th>
                        <th>Hotel</th>
                        <th>Check-in</th>
                        <th>Check-out</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>#12345</td>
                        <td>Paris</td>
                        <td>Hotel Lux</td>
                        <td>2024-12-01</td>
                        <td>2024-12-10</td>
                        <td>Confirmed</td>
                        <td><button className='manage-button'>Manage</button></td>
                    </tr>
                    <tr>
                        <td>#12346</td>
                        <td>New York</td>
                        <td>Grand Plaza</td>
                        <td>2025-01-10</td>
                        <td>2025-01-15</td>
                        <td>Pending</td>
                        <td><button className='manage-button'>Manage</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Bookings