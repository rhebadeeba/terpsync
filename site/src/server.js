import express from 'express';
import cors from 'cors';
import { getEvents } from './db.js';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/events', (req, res) => {
    getEvents((err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json(results);
    });
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
