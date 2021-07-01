let tempop=10
let tempom=8
let tempoc=15
let tempof=12
let tempobg=8


var pedido = (prato, b) => {
    switch (prato) {
        case "Pipoca": 
            if (b >= 2*tempop && b <=3*tempop) {console.log("Comida queimou!")}
            else if (b < tempop) {console.log("Tempo insuficiente")}
            else if (b > 3*tempop) {console.log("Kabumm")}
            else {console.log("Prato pronto, bom apetite")}
        break;
        
        case "Macarrão": 
            if (b >= 2*tempom && b <=3*tempom) {console.log("Comida queimou!")}
            else if (b < tempom) {console.log("Tempo insuficiente")}
            else if (b > 3*tempom) {console.log("Kabumm")}
            else {console.log("Prato pronto, bom apetite")}
        break;
        
        case "Carne": 
            if (b >= 2*tempoc && b <=3*tempoc) {console.log("Comida queimou!")}
            else if (b < tempoc) {console.log("Tempo insuficiente")}
            else if (b > 3*tempoc) {console.log("Kabumm")}
            else {console.log("Prato pronto, bom apetite")}
        break;
        
        case "Feijão": 
        if (b >= 2*tempof && b <=3*tempof) {console.log("Comida queimou!")}
        else if (b < tempof) {console.log("Tempo insuficiente")}
        else if (b > 3*tempof) {console.log("Kabumm")}
        else {console.log("Prato pronto, bom apetite")}
        break;

        case "Brigadeiro": 
        if (b >= 2*tempobg && b <=3*tempobg) {console.log("Comida queimou!")}
        else if (b < tempobg) {console.log("Tempo insuficiente")}
        else if (b > 3*tempobg) {console.log("Kabumm")}
        else {console.log("Prato pronto, bom apetite")}
        break;
  
        default: console.log ("Prato Inexistente");
    }
}

pedido("Pipoca", 8);
pedido("Macarrão", 18);
pedido("Carne", 28);
pedido("Feijão", 38);
pedido("Brigadeiro", 49);
pedido("Arroz", 13);

