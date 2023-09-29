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

    // Cup-Ounces Converter 
    $("#converter3").submit((event)=>{
        event.preventDefault();

        const cup = parseInt($("#cup").val());

        const ounceValue = cupConverter(cup);
        $("#message3").text(ounceValue);

    })
})
