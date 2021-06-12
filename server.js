const express = require('express');
const cors = require('cors');

const app = express();
const port = 8080;

// Allow development server access to resources
app.use(
    cors({
        origin: 'http://localhost:3000',
    }),
);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/user', (req, res) => {
    return res.json({
        user: { name: 'Neo' },
    });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
