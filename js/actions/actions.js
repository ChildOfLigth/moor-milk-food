function returnCategory(oldCategory) {
    switch (oldCategory) {
        case "for-old-cat": return "для дорослих котів";
        case "for-kitten": return "для кошеняток";
    };
};

function createNavLink(elWithLinks) {
    const header = document.querySelector(elWithLinks);
    if (!header) return;

    const links = header.querySelectorAll("a");
    const pagePath = window.location.pathname;

    switch (pagePath) {
        case "/moormilk-food-cat/":
        case "/moormilk-food-cat/index.html":
            links.forEach((a) => {
                a.href = "/moormilk-food-cat/assortement.html";
                a.textContent = "Каталог товарів";
            });
            break;

        case "/moormilk-food-cat/assortement.html":
            links.forEach((a) => {
                a.href = "/moormilk-food-cat/index.html";
                a.textContent = "Головна сторінка";
            });
            break;
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
