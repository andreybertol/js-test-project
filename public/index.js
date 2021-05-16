const hoteis = require('./variables.json');
const readline = require('readline');
const express = require('express')

const app = express()

app.get('/', (req,res) => {

  const dadoExterno = req.query.dadoExterno

  const valorDoResponse = `Você me enviou: ${dadoExterno}`

  res.send(valorDoResponse)
})

const port = 3000

app.listen(port, () => {

  console.log(`Servidor up em: htttp://localhost:${port}`);
})

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

filter_hoteis = (fim_de_semana) => {
    for(var i = 0; i < json.hoteis; i++)
    {
        var hotel = hoteis[i];
        var tipo = hoteis.tipo;
        var valor = 0;
        for(var j = 0; j < hotel.dia_de_semana.length; j++)
        {
            if (tipo == 'Regular') {                
                valor = hotel.dia_de_semana[0]; // Valor Regular
            } else {
                valor = hotel.dia_de_semana[1]; // Valor Fidelidade
            }

            console.log("\nTipo: " + tipo + "\nValor: " + valor);
        }
    }
}

is_weekend = (date) => {

    let data = new Date(date)

    if (data.getDay() == 6 || data.getDay() == 0) {
        return true
    }

    return false;
}

rl.question("Informe a entrada: ", (entrada) => {    
    var arr_entrada = entrada.split(/[:,]+/);
    const tipo = arr_entrada[0];
    const datas = arr_entrada.length - 1;    

    console.log("\nTipo: " + tipo);

    for (var i = 1; i <= datas; i++) {
        let data = arr_entrada[i];            
        filter_hoteis(is_weekend(data));
    }
    rl.close();
});

rl.on("close", () => {
    console.log("\n Saindo da aplicação.");
    process.exit(0);
});