function returnCategory(oldCategory) {
    switch (oldCategory) {
        case "for-old-cat": return "для дорослих котів";
        case "for-kitten": return "для кошеняток";
    };
};

function createNavLink(elWithLinks) {
    const header = document.querySelector(elWithLinks);
    const links = header.querySelectorAll("a");

    const page = window.location.pathname.split('/').pop();
    switch (page) {
        case "index.html": {
            links.forEach((a) => {
                a.href = "assortement.html";
                a.textContent = "Каталог товарів";
            });
            break;
        };

        case "assortement.html": {
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