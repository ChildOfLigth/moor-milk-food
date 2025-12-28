import { dataProducts } from './productCatalog.js';
import { returnCategory, sendCurrentProductData, functionForMenuBurger } from './actions/actions.js';

const productCatalog = document.querySelector(".product-assortment_products");
productCatalog.innerHTML = dataProducts.map((prod, index) => `
    <li class="products_product-card" data-product_id=${index}>
      <img src="${prod.srcImgProd}" alt="product img" class="product-card_product-photo"/>
      <div class="product-card_text-part">
        <h4>${prod.name}</h4>
        <p>${returnCategory(prod.oldCategory)}</p>
      </div>

      <a class="product_navigate-to-product-page" href="product-page.html">
        <p>Детальніше</p>
        <span></span>
      </a>
    </li>
`).join("");

sendCurrentProductData(dataProducts, productCatalog, ".products_product-card");
functionForMenuBurger();

const buttonByScrollToTop = document.querySelector(".main_scroll-to-top");

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = scrollTop / docHeight;

  if (scrollPercent > 0.3) {
    buttonByScrollToTop.classList.add("visible");
  } else {
    buttonByScrollToTop.classList.remove("visible");
  }
});

const startPoitionElement = productCatalog.offsetTop;

buttonByScrollToTop.addEventListener("click", () => {
  window.scrollTo({
    top: startPoitionElement - 30,
    behavior: "smooth",
  });
});
