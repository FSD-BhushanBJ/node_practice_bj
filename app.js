const express = require('express');
const app = express();

const campusRoutes = require('./campus');

app.use(express.json());

// test route
app.get('/', (req, res) => {
  res.send('Server is running');
});

// campus routes
app.use('/campus', campusRoutes);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
