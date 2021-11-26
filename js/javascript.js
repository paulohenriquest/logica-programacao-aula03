

function calcular() {
    let select = parseInt(document.getElementById('seleciona-temperatura').value);
    // console.log(select);
    let temperatura = document.getElementById('temperatura').value;
    let formulaF = (parseInt(temperatura) * 1.8) + 32;
    let formulak = parseInt(temperatura) + 273;
    let resultado = document.getElementById('resultado');
    // let selectA = parseInt(select)
    // if(select == 0){
    //     resultado.innerHTML = (`${temperatura}°C em Kelvin é ${formulak}k`);
    // } else if(select == 1){
    //     resultado.innerHTML = (`${temperatura}°C em Fahrenheit é ${formulaF}°F`)
    // }
   

switch(select){
    case 0:
        resultado.innerHTML = (`${temperatura}°C em Kelvin é ${formulak}k`);
    break;
    case 1:
        resultado.innerHTML = (`${temperatura}°C em Fahrenheit é ${formulaF}°F`)
    break;
    default:
        resultado.innerHTML = ('Erro');
        break;
}

console.log(temperatura);
resultado.innerHTML = (`${temperatura}°C em Fahrenheit é ${calculo}°F`)
}


