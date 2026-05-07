const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors') 
const UserModel = require('./models/Users')

const app = express()
app.use(cors())
app.use(express.json())

const cors = require('cors');

app.use(cors({
  origin: "https://your-frontend.vercel.app"
}));

mongoose.connect("mongodb+srv://janrezvkasilag_db_user:<janrez092892Aka!!!>@cluster0.mtsqrmk.mongodb.net/?appName=Cluster0")

// ACTIVE TASKS
app.get("/tasks", (req, res) => {
    UserModel.find({ completedDate: null })
        .then(tasks => res.json(tasks))
        .catch(err => res.json(err));
});

// HISTORY
app.get("/history", (req, res) => {
    UserModel.find({ completedDate: { $ne: null } })
        .then(tasks => res.json(tasks))
        .catch(err => res.json(err));
});

app.post("/tasks", (req, res) => {
    UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.delete("/tasks/:id", (req, res) => {
   console.log("DELETE REQUEST ID:", req.params.id); 
    UserModel.findByIdAndDelete(req.params.id)
        .then(result => res.json(result))
        .catch(err => res.json(err));
});

// MOVE TO HISTORY (UPDATE)
app.put("/tasks/:id/move", (req, res) => {
    UserModel.findByIdAndUpdate(
        req.params.id,
        { completedDate: new Date().toLocaleString() },
        { new: true }
    )
    .then(result => res.json(result))
    .catch(err => res.json(err));
});

app.listen(5000, ()=> {
    console.log("Server is Running")
})
