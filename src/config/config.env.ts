export const configenv = () => ({
    port: Number(process.env.HTTP_PORT) || 3000,
    jwtSecret: process.env.JWT_SECRET,
    database: {
      type: 'mssql',
      host: 'rihsrv001',
      username: 'sa',
      password: 'RihSrv001#',
      database: 'risnode-admin-dev',
      logging: false,
      entities: ["src/**/**.entity{.ts,.js}"],
      synchronize: true
    },
  });



// port: Number(process.env.HTTP_PORT),
// jwtSecret: process.env.JWT_SECRET,
// type: 'mssql',
// host: process.env.DB_HOST,
// username: 'sa',
// password: process.env.DB_PASSWORD,
// database: process.env.DB_DATABASE,
// logging: false,
// entities: ["src/**/**.entity{.ts,.js}"],
// synchronize: true
//DB_DATABASE='risnode-admin-dev'

// password: 'RihSrv001#',