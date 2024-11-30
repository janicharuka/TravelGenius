import express from 'express';
import mysql from 'mysql';
import cors from 'cors';
import session from 'express-session';
import crypto from 'crypto';

const generateSecretKey = () => {
    return crypto.randomBytes(32).toString('hex');
};

const app = express();
app.use(cors());
app.use(express.json());

app.use(session({
    secret: generateSecretKey(),
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        secure: false,
        maxAge: 1000 * 60 * 60 * 24 * 365,
    }
}));

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nntg1',
    port: 3306,
});

app.get('/session', (req, res) => {
    if (req.session.user) {
        return res.status(200).json({ loggedIn: true, user: req.session.user });
    } else {
        return res.status(200).json({ loggedIn: false });
    }
});

app.post('/login', (req, res) => {
    const sql = "SELECT * FROM userdata WHERE userdataEmail = ? AND userdataPassword = ?";
    const values = [req.body.email, req.body.password];

    db.query(sql, values, (err, data) => {
        if (err) return res.json("Error");
        if (data.length > 0) {
            req.session.user = {
                id: data[0].id,
                email: data[0].userdataEmail,
                name: data[0].userdataName,
            };
            return res.status(200).json({ success: true });
        } else {
            return res.status(200).json({ success: false, message: "Account Not Found" });
        }
    });
});

app.post('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.status(200).json({ success: false });
        }
        res.clearCookie('connect.sid');
        return res.status(200).json({ success: true });
    });
});



app.post('/register', (req, res) => {
    const { name, email, password } = req.body;

    const sqlCheckEmail = "SELECT * FROM userdata WHERE userdataEmail = ?";
    db.query(sqlCheckEmail, [email], (err, data) => {
        if (err) return res.json("Error");
        if (data.length > 0) {
            return res.status(200).json({ success: false, message: "Email is already in use" });
        } else {

            const sqlInsert = "INSERT INTO userdata (userdataName, userdataEmail, userdataPassword) VALUES (?, ?, ?)";
            const values = [name, email, password];

            db.query(sqlInsert, values, (err, data) => {
                if (err) {
                    return res.status(200).json({ success: false, message: "Error inserting user" });
                }
                return res.status(200).json({ success: true, message: "Registration successful" });
            });
        }
    });
});

app.post('/update-profile', (req, res) => {
    const { name, email, password } = req.body;


    if (password == null) {
        const sqlUpdate = "UPDATE userdata SET userdataName = ?, userdataEmail = ? WHERE userdataEmail = ?";
        const values = [name, email, email];

        db.query(sqlUpdate, values, (err, data) => {
            if (err) {
                console.error("Error updating user:", err);
                return res.status(200).json({ success: false, message: "Error updating profile" });
            }
            return res.status(200).json({ success: true, message: "Profile updated successfully" });
        });

    } else {
        const sqlUpdate = "UPDATE userdata SET userdataName = ?, userdataEmail = ?, userdataPassword = ? WHERE userdataEmail = ?";
        const values = [name, email, password, email];

        db.query(sqlUpdate, values, (err, data) => {
            if (err) {
                console.error("Error updating user:", err);
                return res.status(200).json({ success: false, message: "Error updating profile" });
            }
            return res.status(200).json({ success: true, message: "Profile updated successfully" });
        });
    }

});



app.listen(8081, () => {
    console.log("Connected to the server on port 8081");
});









// import express from 'express';
// import mysql from 'mysql';
// import cors from 'cors';
// import session from 'express-session';
// import crypto from 'crypto';

// const generateSecretKey = () => {
//     return crypto.randomBytes(32).toString('hex');
// };

// const app = express();
// app.use(cors());
// app.use(express.json());

// app.get('/session', (req, res) => {
//     if (req.session.user) {
//         return res.status(200).json({ loggedIn: true, user: req.session.user });
//     } else {
//         return res.status(200).json({ loggedIn: false});
//     }
// });

// app.use(session({
//     secret: generateSecretKey(),
//     resave: false,
//     saveUninitialized: true,
//     cookie: {
//         httpOnly: true,
//         secure: false,
//         maxAge: 1000 * 60 * 60 * 24 * 365,
//     }
// }));

// const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '20151122',
//     database: 'nntg1',
//     port: 3306,
// });

// app.post('/login', (req, res) => {
//     const sql = "SELECT * FROM userdata WHERE userdataEmail = ? AND userdataPassword = ?";
//     const values = [req.body.email, req.body.password];

//     db.query(sql, values, (err, data) => {
//         if (err) return res.json("Error");
//         if (data.length > 0) {
//             req.session.user = {
//                 id: data[0].id,
//                 email: data[0].userdataEmail,
//             };
//             return res.status(200).json({ success: true });
//         } else {
//             return res.status(200).json({ success: false, message: "Account Not Found" });
//         }
//     });
// });
// app.listen(8081, () => {
//     console.log("Connected to the server on port 8081");
// });
