const mongoose = require("mongoose");
//Write missing code here
mongoose.connect("mongodb+srv://siyanasrin1506:siya@cluster0.az0z2ma.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log(error);
  });
