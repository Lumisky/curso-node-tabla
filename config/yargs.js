const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "Es la base de la tabla de multiplica",
  })
  .option("l", {
    alias: "list",
    type: "boolean",
    default: false,
    describe: "Muestra la tabla en consola",
  })
  .option("m", {
    alias: "max",
    type: "number",
    default: 10,
    describe: "Es el multiplicador maximo",
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "La base tiene que ser un numero";
    }
    return true;
  }).argv;

module.exports = argv;
