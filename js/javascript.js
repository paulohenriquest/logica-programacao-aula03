

function calcular() {
    let select1 = parseInt(document.getElementById('seleciona-temperatura1').value);
    let select2 = parseInt(document.getElementById('seleciona-temperatura2').value);
    // console.log(select);
    let temperatura = parseInt(document.getElementById('temperatura').value);
    let formulaF = (parseInt(temperatura) * 1.8) + 32;
    let formulak = parseInt(temperatura) + 273;
    let resultado = document.getElementById('resultado');
    // let selectA = parseInt(select);
    // if(select1 === 0 || select2 === 0){
    //     let nome = 'Kelvin';
    // } else if(select1 === 1 || select2 ===1){
    //     let nome = '°Fahrenheit';
    // } else if(select1 === 2 || select2 === 2){
    //         let nome = '°Celsius';
    //     }

    if(select1 == 0 && select2 === 0 || select1 == 1 && select2 === 1 || select1 == 2 && select2 === 2){
    switch(select1 || select2){
        case 0:
        resultado.innerHTML = (`A temperatura em Kelvin é ${formulak}k`);
        break;
        case 1:
        resultado.innerHTML = (`A temperatura em °Fahhrenheit é ${formulak}k`);
        break;
        case 2:
        resultado.innerHTML = (`A temperatura em °Celsius é ${formulak}k`);
        break;
        }
        // resultado.innerHTML = (`A temperatura em é ${temperatura}`);
        // resultado.innerHTML = (`${temperatura}°C em Kelvin é ${formulak}k`);
    } else if(select1 === 0 && select2 === 1){
        let formulaF = temperatura - 459.67;
        resultado.innerHTML = (`${temperatura}K em Fahrenheit é ${formulaF}°Fahrenheit`)
    } else if(select1 === 0 && select2 === 2){
        let formulaF = temperatura - 273.15;
        resultado.innerHTML = (`${temperatura}K em Celsius é ${formulaF}°Celsius`)
    } else if(select1 === 1 || select2 === 0){
        let formulaF = temperatura + 273.15;
        resultado.innerHTML = (`${temperatura}F em Kelvin é ${formulaF}°kelvin`)
    }else if(select1 === 1 || select2 === 2){
            let formulaF = temperatura  - 17.22;
            resultado.innerHTML = (`${temperatura}F em Celsius é ${formulaF}°Celsius`)
    }else if(select1 === 2 || select2 === 1){
            let formulaF = temperatura  + 33.8;
            resultado.innerHTML = (`${temperatura}C em Fahrenheit é ${formulaF}°Fahrenheit`)
        }

    
// switch(select1){
//     case 0:
//         resultado.innerHTML = (`${temperatura}°C em Kelvin é ${formulak}k`);
//     break;
//     case 1:
//         resultado.innerHTML = (`${temperatura}°C em Fahrenheit é ${formulaF}°F`)
//     break;
//     default:
//         resultado.innerHTML = ('Erro');
//     break;



console.log(temperatura);
// resultado.innerHTML = (`${temperatura}°C em Fahrenheit é ${calculo}°F`);

}