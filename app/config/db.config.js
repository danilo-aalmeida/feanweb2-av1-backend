module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "r1234",
    DB: "feanwebII_av1",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };