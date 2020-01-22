const express = require("express");
const knex = require("knex");

const knexConfiguration = {
    client: "sqlite3",
    connection: {
        filename: "./data/carData.db3",
    },
    useNullAsDefault: true,
};

const db = knex(knexConfiguration);

const router = express.Router();

router.get("/", (req, res) => {
    db("cars")
        .then(cars => {
            res.status(200).json(cars);
        })
        .catch(err => {
            res.status(500).json({ message: "Failed to retrieve cars" });
        });
});

router.post("/", (req, res) => {
    const car = req.body;
    db("cars")
        .insert(car)
        .then(ids => {
            db("cars")
                .where({ carID: ids[0] })
                .then(newCar => {
                    res.status(201).json(newCar);
                });
        })
        .catch(err => {
            console.log("POST error", err);
            res.status(500).json({ message: "Failed to store data" });
        });
});

module.exports = router;