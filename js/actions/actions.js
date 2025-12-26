function returnCategory(oldCategory) {
    switch (oldCategory) {
        case "for-old-cat": return "для дорослих котів";
        case "for-kitten": return "для кошеняток";
    };
};

function sendCurrentProductData(arrayWithProduct, parrentBlock, classProdCard) {
    parrentBlock.addEventListener("click", (e) => {
        if (!e.target.closest("a")) return;

        const navButton = e.target;
        const currentProductCard = navButton.closest(classProdCard);

        const dataCurrentProd = arrayWithProduct[currentProductCard.dataset.product_id];
        sessionStorage.setItem("productData", JSON.stringify(dataCurrentProd));
    });

}

function functionForMenuBurger() {
    const menu_burger = document.querySelector(".header-content_menu-burger");
    menu_burger.onclick = () => {
        menu_burger.classList.toggle("open-menu");

        const block_with_content = document.querySelector(
            ".header-content_content-open-menu-burger"
        );
        block_with_content.classList.toggle("show");
    };
}



export { returnCategory, sendCurrentProductData, functionForMenuBurger };
