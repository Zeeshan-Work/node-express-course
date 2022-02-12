// requiring the express module and its libraries 
const express = require('express');
// Making instance of express constructor 
const app = express();
// adding port to listen rrequest
const port = 8000



// hardcoded json data
const mockUserData=[
    {name:'Mark'},
    {name:'Jill'}
    ]
//route for this data and call back function
app.get('/users', function(req,res){
// responding with response here in same file
    res.json({
         success: true,
         message: 'successfully got users. Nice!',
         users: mockUserData
    })
})






// Server activation
app.listen(port, function(){
    console.log(`server is running on port ${port}`)
  })