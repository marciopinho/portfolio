const PORT = 8000;

import express from 'express';
import cors from 'cors';
import axios from 'axios';
import config from 'dotenv'

const app = express()



app.use(cors)

// (path, ())
app.get('/', (req, res) => {
    // res.json will display in the browser
    res.json('ello')
})

app.listen(8000, () => console.log(`server is running on port ${PORT}`))