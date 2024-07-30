const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config(); 

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Failed to connect to MongoDB:', err));

const h1Schema = new mongoose.Schema({
  text: { type: String, required: true },
});

const H1Text = mongoose.model('H1Text', h1Schema);

app.get('/api/h1', async (req, res) => {
  try {
    const h1Text = await H1Text.findOne().exec();
    res.json({ text: h1Text ? h1Text.text : 'Default text' });
  } catch (err) {
    console.error('Error fetching H1 text:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/api/h1', async (req, res) => {
  const { text } = req.body;
  try {
    let h1Text = await H1Text.findOne().exec();
    if (h1Text) {
      h1Text.text = text;
    } else {
      h1Text = new H1Text({ text });
    }
    await h1Text.save();
    res.json({ success: true });
  } catch (err) {
    console.error('Error saving H1 text:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Backend server running on http://localhost:${port}`);
});
