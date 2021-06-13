require('dotenv').config({ path: `${__dirname}/.env` });

const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 8080;

if (process.env.NODE_ENV === 'dev') {
    // Allow development server access to resources
    app.use(
        cors({
            origin: 'http://localhost:3000',
        }),
    );
}

if (process.env.NODE_ENV === 'production') {
    // Add in static directory
    app.use(express.static(path.join(__dirname, 'client/build')));
}

app.get('/user', (req, res) => {
    return res.json({
        user: { name: 'Neo' },
    });
});

if (process.env.NODE_ENV === 'production') {
    // Use build folder at /client/build
    app.get('/*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
}

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
