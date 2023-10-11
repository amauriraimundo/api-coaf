import mysql from "mysql";

export const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "consulta",
  connectionLimit: 100,
});
