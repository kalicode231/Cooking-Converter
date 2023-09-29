// Bussiness Logic
kgConverter = (kg) =>{
     const gram = kg * 1000;
     return `${kg} kilograms equals ${gram} grams`
}

litreConverter = (l) =>{
    const ml = l * 1000;
    return `${l} litres equals ${ml} mililitre`
}

cupConverter = (c) =>{
    const ounces = c * 8;
    return `${c} cups equals ${ounces} ounces`
}

pintConverter = (p) =>{
    const cup = p * 2;
    return `${p} pints equals ${cup} cups`
}

quartConverter = (q) =>{
    const pints = q * 2;
    return `${q} quarts equals ${pints} pints`
}

gallonConverter = (g) =>{
    const quarts = g * 4;
    return `${g} gallons equals ${quarts} quarts`
}

// gConverter(10)
// kgConverter(10);


// UI Logic
$(document).ready(() =>{
    // Kilogram-gram Converter
    $("#converter1").submit((event)=>{
        event.preventDefault();

        const kilo = parseInt($("#kilogram").val());

        const gramValue = kgConverter(kilo);
        $("#message1").text(gramValue);

    })

    // Litre-milliliter Converter
    $("#converter2").submit((event)=>{
        event.preventDefault();

        const litre = parseInt($("#litre").val());

        const mlValue = litreConverter(litre);
        $("#message2").text(mlValue);

    })

    // Cup-Ounces Converter 
    $("#converter3").submit((event)=>{
        event.preventDefault();

        const cup = parseInt($("#cup").val());

        const ounceValue = cupConverter(cup);
        $("#message3").text(ounceValue);

    })

    // Pint-Cup Converter 
    $("#converter4").submit((event)=>{
        event.preventDefault();

        const pint = parseInt($("#pint").val());

        const cupValue = pintConverter(pint);
        $("#message4").text(cupValue);

    })

    // Quart-Pint Converter 
    $("#converter5").submit((event)=>{
        event.preventDefault();

        const quart = parseInt($("#quart").val());

        const pintValue = pintConverter(quart);
        $("#message5").text(pintValue);

    })

    // Gallon-Quart Converter 
    $("#converter6").submit((event)=>{
        event.preventDefault();

        const gallon = parseInt($("#gallon").val());

        const quartValue = gallonConverter(gallon);
        $("#message6").text(quartValue);

    })
})
