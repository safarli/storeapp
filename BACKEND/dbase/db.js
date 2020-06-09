const pg = require("pg");
const pool = new pg.Pool();

const queryAll = async (req, res) => {
  const client = await pool.connect();
  try {
    const result = await client.query(`SELECT * FROM products`);
    res.send(result.rows);
  } catch (ex) {
    console.log(ex);
  } finally {
    client.release();
  }
};

module.exports = {
  queryAll: queryAll
};
