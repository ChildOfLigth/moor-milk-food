import { dataProducts } from './productCatalog.js'
import { sendCurrentProductData, createNavLink } from './actions/actions.js';

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
createNavLink("header");
createNavLink("footer");

const menu_burger = document.querySelector(".content_menu-burger");
menu_burger.onclick = () => {
  menu_burger.classList.toggle("open-menu");

  const block_with_content = document.querySelector(
    ".content_content-open-menu-burger"
  );
  block_with_content.classList.toggle("show");
};