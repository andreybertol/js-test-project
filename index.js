const jsonHoteis = require("./hotels.json");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

filtrarHoteis = (bWeekend, tipo) => {  
  let arrTotal = {};
  arrTotal.hoteis = [];

  for (var i = 0; i < jsonHoteis.hoteis; i++) {
    var hotel = jsonHoteis[i];
    var total = 0;
    arrTotal.hoteis[0].nome = hotel;

    if (tipo == "Regular") {
      if (bWeekend) {
        total += hotel.fim_de_semana[0];
      } else {
        total += hotel.dia_de_semana[0];
      }
    } else { // Tipo Fidelidade
      if (bWeekend) {
        total += hotel.fim_de_semana[1];
      } else {
        total += hotel.dia_de_semana[1];
      }
    }
    console.log("\nTipo: " + tipo + "\nValor: " + total);
    arrTotal.hoteis[0].total = total;
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
    const qtdDatas = arrEntrada.length - 1;    

    for (var i = 1; i <= qtdDatas; i++) {
      let data = arrEntrada[i];
      filtrarHoteis(isWeekend(data), tipo);
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