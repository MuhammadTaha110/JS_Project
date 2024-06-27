let newProduct = () => {

    const productTittle = document.createTextNode(products[id].title);
    const productPrice = document.createTextNode(products[id].price);
    const card = document.createElement('div');
    
    productTittleContainer.appendChild(productTittle);
    productPriceContainer.appendChild(productPrice);
    card.appendChild(productTittleContainer);
    card.appendChild(productPriceContainer);

    

}

let id;
for (let i = 0; i < products.length; i++) {
    id = i;
    newProduct()
}



let newProduct = (producttittle, productprice , productimage) => {

    const card = document.createElement('div');
    cardContainer.appendChild(card);


    const productImage = document.createElement('img');
    card.appendChild(productImage);
    productImage.src = productimage;

    const productTittleContainer = document.createElement('div');
    const productPriceContainer = document.createElement('div');

    productTittleContainer.className = 'productTittle';
    productPriceContainer.className = 'productPrice';

    const productTittle = document.createTextNode(producttittle);
    const productPrice = document.createTextNode(productprice);


    productTittleContainer.appendChild(productTittle);
    productPriceContainer.appendChild(productPrice);

    card.appendChild(productTittleContainer);
    card.appendChild(productPriceContainer);

}
