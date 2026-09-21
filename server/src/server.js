import app from "./app.js";
import connectDB from "./config/db.js";




const startServer = async () => {
  try {
    await connectDB()
    app.listen(8080, () => {
      console.log("server is running on http://localhost:8080");
    });
  } catch (error) {
    console.log("Error connecting Server");
  }
};


startServer()