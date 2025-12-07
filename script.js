const products = [
    {
        name: "Smart Watch",
        price: 3500,
        image: "https://picsum.photos/300/200?random=1"
    },
    {
        name: "Headphones",
        price: 2200,
        image: "https://picsum.photos/300/200?random=2"
    },
    {
        name: "Shoes",
        price: 4500,
        image: "https://picsum.photos/300/200?random=3"
    },
    {
        name: "Backpack",
        price: 1800,
        image: "https://picsum.photos/300/200?random=4"
    }
];

let cartCount = 0;
const productList = document.getElementById("product-list");

products.forEach(product => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <img src="${product.image}" alt="Product Image" />
        <h3>${product.name}</h3>
        <p>PKR ${product.price}</p>
        <button onclick="addToCart()">Add to Cart</button>
    `;

    productList.appendChild(card);
});

function addToCart() {
    cartCount++;
    document.getElementById("cart-count").innerText = cartCount;
}