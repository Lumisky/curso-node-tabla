const { createTable } = require("./helpers/multiply");
const argv = require("./config/yargs");

require("colors");

console.log("\n".repeat("25"));

// const base = 2;

// const [, , arg3 = "base=5"] = process.argv;
// const [, base] = arg3.split("=");
// console.log(base);

// fs.writeFiles(`table-${base}.txt`, output, (err) => {
//   if (err) throw err;
//   console.log(`Tabla ${base} creada`);
// });

createTable(argv.b, argv.l, argv.m)
  .then((archiveName) => console.log(archiveName.rainbow, "creado"))
  .catch((err) => console.log(err));
