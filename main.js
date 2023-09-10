const categoryContainer = document.getElementById("categoryContainer");
const loading = document.getElementById("loading");

const categories = [...Array(100).keys()].map(num => ({
    id: num,
    name: `Kategória ${num}`,
    products: [...Array(25).keys()].map(p => `Termék ${p}`),
}));

let visibleCategories = 10;
let currentOpenCategory = 0;

function loadProductsForCategory(categoryElem, category) {
    loading.style.display = "block";
    setTimeout(() => {
        const productsDiv = categoryElem.querySelector(".products");
        category.products.forEach(product => {
            const productElem = document.createElement("div");
            productElem.className = "product";
            productElem.textContent = product;
            productsDiv.appendChild(productElem);
        });
        loading.style.display = "none";
    }, 1000);
}

function loadCategories() {
    loading.style.display = "block";
    setTimeout(() => {
        for (let i = categoryContainer.children.length; i < visibleCategories; i++) {
            const category = categories[i];
            const categoryElem = document.createElement("div");
            categoryElem.className = "category";
            categoryElem.innerHTML = `
                <h2>${category.name}</h2>
                <div class="products" ${i !== currentOpenCategory ? 'style="display: none;"' : ''}></div>
            `;
            if (i === currentOpenCategory) {
                loadProductsForCategory(categoryElem, category);
            }
            categoryElem.addEventListener('click', () => {
                const openProducts = categoryContainer.querySelector(".products:not([style*='display: none'])");
                if (openProducts) openProducts.style.display = "none";
                categoryElem.querySelector(".products").style.display = "block";
                loadProductsForCategory(categoryElem, category);
            });
            categoryContainer.appendChild(categoryElem);
        }
        loading.style.display = "none";
    }, 1000);
}

window.addEventListener('scroll', () => {
    if (window.scrollY + window.innerHeight >= categoryContainer.offsetHeight - 10) {
        visibleCategories += 2; // Ez itt a módosítás, 2 kategória töltődik be görgésre
        loadCategories();
    }
});

loadCategories();const categoryContainer = document.getElementById("categoryContainer");
const loading = document.getElementById("loading");

const categories = [...Array(100).keys()].map(num => ({
    id: num,
    name: `Kategória ${num}`,
    products: [...Array(25).keys()].map(p => `Termék ${p}`),
}));

let visibleCategories = 10;
let currentOpenCategory = 0;

function loadProductsForCategory(categoryElem, category) {
    loading.style.display = "block";
    setTimeout(() => {
        const productsDiv = categoryElem.querySelector(".products");
        category.products.forEach(product => {
            const productElem = document.createElement("div");
            productElem.className = "product";
            productElem.textContent = product;
            productsDiv.appendChild(productElem);
        });
        loading.style.display = "none";
    }, 1000);
}

function loadCategories() {
    loading.style.display = "block";
    setTimeout(() => {
        for (let i = categoryContainer.children.length; i < visibleCategories; i++) {
            const category = categories[i];
            const categoryElem = document.createElement("div");
            categoryElem.className = "category";
            categoryElem.innerHTML = `
                <h2>${category.name}</h2>
                <div class="products" ${i !== currentOpenCategory ? 'style="display: none;"' : ''}></div>
            `;
            if (i === currentOpenCategory) {
                loadProductsForCategory(categoryElem, category);
            }
            categoryElem.addEventListener('click', () => {
                const openProducts = categoryContainer.querySelector(".products:not([style*='display: none'])");
                if (openProducts) openProducts.style.display = "none";
                categoryElem.querySelector(".products").style.display = "block";
                loadProductsForCategory(categoryElem, category);
            });
            categoryContainer.appendChild(categoryElem);
        }
        loading.style.display = "none";
    }, 1000);
}

window.addEventListener('scroll', () => {
    if (window.scrollY + window.innerHeight >= categoryContainer.offsetHeight - 10) {
        visibleCategories += 10;
        loadCategories();
    }
});

loadCategories();
