function returnCategory(oldCategory) {
    switch (oldCategory) {
        case "for-old-cat": return "для дорослих котів";
        case "for-kitten": return "для кошеняток";
    };
};

function createNavLink(elWithLinks) {
    const header = document.querySelector(elWithLinks);
    const links = header.querySelectorAll("a");

    const pagePath = window.location.pathname;

    switch (pagePath) {
        case "/moormilk-food-cat/": {
            links.forEach((a) => {
                a.href = "/moormilk-food-cat/assortement.html";
                a.textContent = "Каталог товарів";
            });
            break;
        };

        case "/moormilk-food-cat/assortement.html": {
            links.forEach((a) => {
                a.href = "index.html";
                a.textContent = "Головна сторінка";
            });
            break;
        };
        
        default: return "";
    }
}

function sendCurrentProductData(arrayWithProduct, parrentBlock, classProdCard) {
    parrentBlock.addEventListener("click", (e) => {
        if (!e.target.closest("a")) return;

        const navButton = e.target;
        const currentProductCard = navButton.closest(classProdCard);

        const dataCurrentProd = arrayWithProduct[currentProductCard.dataset.product_id];
        sessionStorage.setItem("productData", JSON.stringify(dataCurrentProd));
    });

}

export { returnCategory, createNavLink, sendCurrentProductData };
