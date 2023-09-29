// Bussiness Logic
kgConverter = (kg) =>{
     const gram = kg * 1000;
     return `${kg} kilograms equals ${gram} grams`
}

Litre = (l) =>{
    const ml = l * 1000;
    return `${l} litres equals ${ml} mililitre`
}

// gConverter(10)
// kgConverter(10);


// UI Logic
$(document).ready(() =>{
    $("#converter1").submit((event)=>{
        event.preventDefault();

        const kilo = parseInt($("#kilogram").val());

        const gramValue = kgConverter(kilo);
        $("#message1").text(gramValue);

    })

    $("#converter2").submit((event)=>{
        event.preventDefault();

        const ml = parseInt($("#litre").val());

        const litreValue = Litre(ml);
        $("#message2").text(litreValue);

    })
})
