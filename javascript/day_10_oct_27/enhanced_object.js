function makeLaptop(brand, model, price, year) {
    return {   // ES_5
        brand: brand,
        model: model,
        price: price,
        year: year,
    }
}
console.log(makeLaptop('HP', 'ProBook', 40000, 2026));

function createLaptop(brand, model, price, year) { // ES_6
    return { brand, model, price, year }
}
console.log(createLaptop('HP', 'ProBook', 40000, 2026));