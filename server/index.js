const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 3003;
const app = express();
const router = require('./routes/index');

app.use(cors());
app.use(express.json());
app.use('/public', express.static('public'));
app.use(router);

app.listen(PORT, () => {
    console.log(`App is listening port, ${PORT}`)
});
