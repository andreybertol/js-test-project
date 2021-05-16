const hoteis = require('./variables.json');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

iniciar = () => {
    console.log('programa iniciado');
}

fetch_hotel = (entrada) => {
    if (id == null) {
        return null;
    }

    console.log("id passada:" + id);
}

iniciar();
rl.question("Informe a entrada.", (entrada) => {
    console.log("\n\n Entrada digitada: " + entrada);
    var arr_entrada = entrada.split(",");    
    const tipo = arr_entrada[0];
    const datas = arr_entrada.length - 1;
    for (var i = 1; i <= datas; i++) {
        console.log("Data " + i + ": " + arr_entrada[i]);
    } 
    rl.close();
});

rl.on("close", () => {
    console.log("\n Saindo da aplicação.");
    process.exit(0);
});