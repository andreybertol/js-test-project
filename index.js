const hoteis = require("./variables.json");
const readline = require("readline");
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  const dadoExterno = req.query.dadoExterno;
  const valorDoResponse = `Você me enviou: ${dadoExterno}`;
  res.send(valorDoResponse);
});

const port = 3000;

app.listen(port, () => {
  console.log(`Servidor up em: htttp://localhost:${port}`);
});

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

filterHotels = (isWeekend) => {
  for (var i = 0; i < json.hotels; i++) {
    var hotel = hotels[i];
    var type = hotels.tipo;
    var value = 0;
    for (var j = 0; j < hotel.dia_de_semana.length; j++) {
      if (type == "Regular") {
        value = hotel.dia_de_semana[0]; // Valor Regular
      } else {
        value = hotel.dia_de_semana[1]; // Valor Fidelidade
      }

      console.log("\nTipo: " + tipo + "\nValor: " + valor);
    }
  }
};

isWeekend = (date) => {
  let data = new Date(date);

  if (data.getDay() == 6 || data.getDay() == 0) {
    return true;
  }

  return false;
};

fetchCheapestHotel = () => {
  rl.question("Informe a entrada: ", (entrada) => {
    var arrEntrada = entrada.split(/[:,]+/);
    const tipo = arrEntrada[0];
    const datas = arrEntrada.length - 1;

    console.log("\nTipo: " + tipo);

    for (var i = 1; i <= datas; i++) {
      let data = arrEntrada[i];
      filterHotels(isWeekend(data));
    }
    rl.close();
  });
};

rl.on("close", () => {
  console.log("\n Saindo da aplicação.");
  process.exit(0);
});
