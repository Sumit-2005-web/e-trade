require('dotenv').config();  // .env value goes to system process
const express = require('express'); // for importing express
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = process.env.PORT || 8080;  //On deployment port or localhost
const uri = process.env.MONGO_URL;  // MongoURL store in .env file associated with dotenv
const cookieParser = require("cookie-parser");
const authRoute = require("./routes/AuthRoutes");
const bcrypt = require('bcryptjs');

const {HoldingModel} = require('./model/HoldingModel'); // Importing Holdings model
const {PositionModel} = require('./model/PositionModel'); // Importing Positions model
const {OrdersModel} = require('./model/OrdersModel');

const allowedOrigins = [
  "http://localhost:5173", // Login/Signup frontend
  "http://localhost:5174", // Dashboard frontend
];

app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin (like Postman or curl)
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      } else {
        return callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.json());

app.use("/", authRoute);

app.get("/allHoldings", async (req, res) => {
    let allHoldings = await HoldingModel.find({});
    res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
    let allPositions = await PositionModel.find({});
    res.json(allPositions);
})

app.post("/newOrder", async (req, res) => {
  const { name, qty, price, mode } = req.body;

  try {
    // Save the new order
    const newOrder = new OrdersModel({ name, qty, price, mode });
    await newOrder.save();

    if (mode === "BUY") {
      let holding = await HoldingModel.findOne({ name });

      if (holding) {
        // Recalculate weighted average price
        const totalQty = holding.qty + qty;
        const totalCost = (holding.avg * holding.qty) + (price * qty);
        const newAvg = totalCost / totalQty;

        holding.qty = totalQty;
        holding.avg = newAvg;

        await holding.save();
      } else {
        // Create a new holding
        const newHolding = new HoldingModel({
          name: req.body.name,
          qty: req.body.qty,
          avg: price,
          price: price,   // initialize current price
          net: "0",       // default values, adjust if needed
          day: "0"
        });

        await newHolding.save();
      }
    }

    res.send("Order saved and holdings updated!");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error processing the order.");
  }
});

app.get("/allOrders", async(req, res) => {
     let allOrders = await OrdersModel.find({});
    res.json(allOrders);
})




app.listen(PORT, () => {           // For checking database connection & app connection
    console.log(`App is listening on port ${PORT}`);
    mongoose.connect(uri);
    console.log("DB connected");
})