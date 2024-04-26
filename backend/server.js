// @/backend/server.js

const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");

const PORT = process.env.PORT || 5000;

// Alustetaan Express-sovellus
const app = express();

// Middleware / CORS
app.use(cors());
require("dotenv").config();

// Rest of the code...
app.use(express.json());

// Määritetään uusi pool-yhteys
const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
});

// Testiyhteys PostgreSQL-tietokantaan
pool.query(`SELECT NOW()`, (err, res) => {
  if (err) {
    console.error("Virhe tietokantayhteydessä", err.stack);
  } else {
    console.log("Yhteys tietokantaan toimii", res.rows[0]);
  }
});

app.listen(PORT, () => {
  console.log(`Palvelin käynnistyi porttiin ${PORT}`);
});
