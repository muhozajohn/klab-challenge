const item = [ 
    {name: 'Bike', price:100}, 
    {name: 'TV', price:200}, 
    {name: 'Album', price:10}, 
    {name: 'Book', price:5}, 
    {name: 'Phone', price:500}, 
    {name: 'Computer', price:1000}, ];

const cheaper = item.filter(cheap => cheap.price<=100);
const expensive = item.filter(expe => expe.price>=200);
console.log(cheaper);
console.log(expensive);

function productTotal(array){
    let total = 0;

    for (let i=0; i<array.length; i++){

        total += array[i].price;

    }

    return `The total cost is ${total}.`;
}

function totalAboveTen(array){
    let total = 0;

    for (let i=0; i<array.length; i++){
        if (array[i].price < 10){
            continue;
        }

        else {
            total += array[i].price;
        }
    }

    return `The total cost of products above $10 is ${total}`;
}




console.log(productTotal(item));
console.log(totalAboveTen(item));


