import { dataProducts } from './productCatalog.js'
import { sendCurrentProductData, functionForMenuBurger } from './actions/actions.js';

const product_list = document.querySelector(".our-menu_products-list");

const observerForProdList = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      product_list.classList.add("show");
    }
  });

}, { root: null });
observerForProdList.observe(product_list);

sendCurrentProductData(dataProducts, product_list, ".products-list_product-card");
functionForMenuBurger();
