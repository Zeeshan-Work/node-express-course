// requiring the express module and its libraries 
const express = require('express');
// Making instance of express constructor 
const app = express();
// adding port to listen rrequest
const port = 8000






// Server activation
app.listen(port, function(){
    console.log(`server is running on port ${port}`)
  })