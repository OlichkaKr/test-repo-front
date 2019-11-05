const express = require('express');
const app = express();

app.use(express.static('static_files'));

// start the server at URL: http://localhost:3000/
app.listen(8080, () => {
  console.log('Server started at http://localhost:8080/');
});