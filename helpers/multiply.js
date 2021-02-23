const fs = require("fs");

require("colors");

const createTable = async (base = 5, list = false, max = 10) => {
  try {
    let output = "";

    for (let i = 1; i <= max; i++) {
      output += `${base} x ${i} = ${base * i}\n`;
    }

    if (list) {
      console.log("======================".green);
      console.log(`     Tabla del ${base}      `);
      console.log("======================".green);
      console.log(output);
    }

    fs.writeFileSync(`./outputFile/table-${base}.txt`, output);

    return `Tabla ${base} creada`;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  // createTable : createTable
  createTable,
};
