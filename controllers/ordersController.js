import pool from "../db/pool.js";

//get orders and order
export const getOrders = async (req, res) => {
  try {
    const { rows } = await pool.query("SELECT * FROM orders");
    res.status(200).json(rows);
  } catch (error) {
    res.status(404).json(error.message);
  }
};

export const getOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const { rows } = await pool.query("SELECT * FROM orders WHERE id=$1", [id]);
    res.status(200).json(rows[0]);
  } catch (error) {
    res.status(404).json(error.message);
  }
}