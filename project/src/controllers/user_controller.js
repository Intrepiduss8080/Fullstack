const pool = require("../config/db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");


exports.createUser = async (req, resp) => {
    const {name, email, password} = req.body;
    try {
        const hash_password = await bcrypt.hash(password, 8);
        const result = await pool.query("INSERT INTO users(name, email, password) VALUES($1, $2, $3) RETURNING *", [name, email, hash_password]);   
        resp.status(201).json(result.rows[0]);
    } 
    catch (err){
        resp.status(500).json({ error: err.message});
    }
};



exports.updateUser = async (req, resp) => {
    const {id} = req.params;
    const {name, email, password} = req.body;

    try {
        const hash_password = await bcrypt.hash(password, 8);
        const result = await pool.query("UPDATE users SET name = $1, email = $2, password = $3 WHERE id = $4 RETURNING *", [name, email, hash_password, id]);
        resp.status(200).json(result.rows[0]);
    }
    catch(err){
        resp.status(500).json({ error: err.message});
    }

};
