import dotenv from 'dotenv';

//carga todos los archivos en .env
dotenv.config({});

export default {
  database: {
    uri: process.env.DB_URI || 'mongodb://localhost/test',
  },
  server: {
    port: process.env.PORT || 3000,
  },
  jwt: {
    secret: process.env.JWT_SECRET,
  },
};