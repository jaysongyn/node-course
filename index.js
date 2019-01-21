const express = require('express');
const app = express();

app.get('/', (req, res) => {
    debugger
    res.send({ hi: 's'})
})
const PORT = process.env.PORT || 5000;
app.listen(PORT);