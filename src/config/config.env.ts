export const ConfigEnv = () => ({
    port: Number(process.env.HTTP_PORT),
    jwtSecret: process.env.JWT_SECRET,
    database: {
      type: 'mssql',
      host: process.env.DB_HOST,
      username: 'sa',
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      logging: false,
      entities: ["src/**/**.entity{.ts,.js}"],
      synchronize: true
    },
  });

//export const SECRET = 'secret-key';



