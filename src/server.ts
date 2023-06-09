import express from 'express';

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3033;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
})