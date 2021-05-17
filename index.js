const jsonHoteis = require("./variables.json");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

filtrarHoteis = (isWeekend) => {

  let arrTotal = [];
  for (var i = 0; i < jsonHoteis.hoteis; i++) {
    var hotel = jsonHoteis[i];
    var tipo = jsonHoteis.tipo;
    var total = 0;

    for (var j = 0; j < hotel.dia_de_semana.length; j++) {
      if (type == "Regular") {
        total += hotel.dia_de_semana[0]; // Valor Regular
      } else {
        total += hotel.dia_de_semana[1]; // Valor Fidelidade
      }

      console.log("\nTipo: " + tipo + "\nValor: " + valor);      
      arrTotal.push(hotel.nome) // TODO finalizar
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

buscarHotelBarato = () => {
  rl.question("Informe a entrada: ", (entrada) => {
    var arrEntrada = entrada.split(/[:,]+/);
    const tipo = arrEntrada[0];
    const datas = arrEntrada.length - 1;

    console.log("\nTipo: " + tipo);

    for (var i = 1; i <= datas; i++) {
      let data = arrEntrada[i];
      filtrarHoteis(isWeekend(data));
    }
    rl.close();
  });
};

rl.on("close", () => {
  console.log("\n Saindo da aplicação.");
  process.exit(0);
});

// inicio
buscarHotelBarato();