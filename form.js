// Array of products
const products = [
    { id: 1, name: "Product A" },
    { id: 2, name: "Product B" },
    { id: 3, name: "Product C" },
];

// Populate the Product Name dropdown
const productDropdown = document.getElementById("productName");
products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.name;
    option.textContent = product.name;
    productDropdown.appendChild(option);
});
