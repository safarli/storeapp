const pg = require("pg");
const pool = new pg.Pool();

const queryAll = async (req, res) => {
  const client = await pool.connect();
  try {
    const result = await client.query(`SELECT * FROM products`);
    res.send(result.rows);
  } catch (e) {
    console.log(e);
  } finally {
    client.release();
  }
};


const addProduct = async (req, res) => {
  const { productId, productName, productStock } = req.body;
  const client = await pool.connect();
  try {
    const result = await client.query(
      `INSERT INTO products(id, productname, stock) VALUES($1, $2, $3)`,
      [productId, productName, productStock]
    );
    res.send(result);
  } catch (e) {
    console.log(e);
  } finally {
    client.release();
  }
};

const searchById = async (req, res) => {
  console.log("called!");
  const param = req.params.id;
  const client = await pool.connect();
  try {
    const result = await client.query(`SELECT * FROM products WHERE id=$1`, [
      param
    ]);
    res.send(result.rows);
  } catch (e) {
    console.log(e);
  } finally {
    client.release();
  }
};

module.exports = {
  queryAll: queryAll,
  addProduct: addProduct,
  searchById: searchById
};
