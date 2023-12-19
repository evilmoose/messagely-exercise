/** Common config for message.ly */

// read .env files and make environmental variables

require("dotenv").config();

const DB_URI = (process.env.NODE_ENV === "test")
  ? "postgres://mqifqveo:zP8_iNNhmU_wsSwHLpXGIFyyl8Iz4N7p@bubble.db.elephantsql.com/mqifqveo"
  : "postgres://mqifqveo:zP8_iNNhmU_wsSwHLpXGIFyyl8Iz4N7p@bubble.db.elephantsql.com/mqifqveo"

const SECRET_KEY = process.env.SECRET_KEY || "secret";

const BCRYPT_WORK_FACTOR = 12;


module.exports = {
  DB_URI,
  SECRET_KEY,
  BCRYPT_WORK_FACTOR,
};