import pool from "../db/pool.js";

//get users and user
export const getUsers = async (req, res) => {
  try {
    const { rows } = await pool.query("SELECT * FROM users");
    res.status(200).json(rows);
  } catch (error) {
    res.status(404).json(error.message);
  }
};

export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { rows } = await pool.query("SELECT * FROM users WHERE id=$1", [id]);
    res.status(200).json(rows[0]);
  } catch (error) {
    res.status(404).json(error.message);
  }
};

