import { dataProducts } from './productCatalog.js';
import { returnCategory, sendCurrentProductData, createNavLink } from './actions/actions.js';

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
createNavLink("header");
createNavLink("footer");