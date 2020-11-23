import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;
const startServer = async () => {
    app.listen(PORT, () => console.log(`server is listening on port ${PORT}`));
};

startServer();
