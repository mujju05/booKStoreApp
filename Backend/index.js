import express from "express"; // work as a delivery partner
import mongoose from "mongoose"; // mongo db
import dotenv from "dotenv"; // to overcome the updation method of node.js
import bookRoute from "./route/book.route.js";
import cors from "cors";
import userRoute from "./route/user.route.js"


const app = express()
app.use(cors()); // to allow multiple port run in a single device
app.use(express.json()); //to called postman json data 

dotenv.config();

const PORT=process.env.PORT || 4000;
const URI=process.env.MongoDBURI;

// connect to mongo db
try {
  mongoose.connect(URI,{
    useNewUrlParser: true,
    useUnifiedtopology: true
  });
  console.log("Connected to Mongo DB")

  
} catch (error) {
  console.log("Error:",error);
}

// defining routes
app.use("/book",bookRoute);
app.use("/user",userRoute);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})