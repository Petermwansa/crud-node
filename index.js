import express from 'express';
import bodyParser from "body-parser";

const app = express();
const PORT = 4000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
    console.log("Working [TEST]");

    res.send("Here is you");
})

app.listen(PORT, () => console.log(`Server running on port:http://localhost:${PORT}`));
