import MySQL from "mysql";
import "dotenv/config";

const con = MySQL.createConnection({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

async function query(sql: string) {
  return new Promise((resolve, reject) => {
    con.query(sql, (err, result) => {
      if (err) reject(err);
      resolve(result);
    });
  });
}

export default query;
