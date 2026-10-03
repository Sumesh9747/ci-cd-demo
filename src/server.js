const express = require('express');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello! My CI/CD Node.js application is running.');
});

if (require.main === module) {
    app.listen(PORT, () => {
        console.log('Server running on port ' + PORT);
    });
}

module.exports = app;
