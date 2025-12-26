import { returnCategory } from "./actions/actions.js";

const data = JSON.parse(sessionStorage.getItem("productData"));

const globalTitle = document.querySelector("title");
globalTitle.textContent = data.name;

const blockForProductData = document.querySelector(".info-product");
blockForProductData.innerHTML = `
<div class="info-product_description">
 <div class="description_text-content">
  <div class="text-content_title">
   <h2 class="title_product-name">${data.name}</h2>
   <p class="title_for-whom">Для кого: ${returnCategory(data.oldCategory)}</p>
  </div>

  <p class="description_description-for-product">${data.description}</p>

  <ul class="description_additional-additives">
    <li class="additional-additives_item">з протеїнами — сприяють сильним та гнучким м’язам</li>
    <li class="additional-additives_item">з цинком — для здорової шкіри та блискучої шерсті</li>
    <li class="additional-additives_item">з молочними добавками — для здоров'я кісток</li>
  </ul>
 </div>

 <div class="swiper">
  <div class="swiper-wrapper">
    <div class="swiper-slide">
      <img src="${data.srcImgProd}" alt="${data.name}">
    </div>
    <div class="swiper-slide">
      <img src="${data.presentPhoto}" alt="${data.name} на тарілці">
     </div>
    </div>

    <div class="swiper-pagination"></div>
   </div>
 </div>
</div>

<div class="info-product_composition-product">
  <div class="composition-product_content">
    <h2>Склад:</h2>
    <p>${data.composition}</p>
  </div>

  <div class="composition-product_content">
    <h2>Інструкція по годуванню</h2>
    <p>Коту з масою тіла 3 кг потрібно приблизно 3–3½ пакетики вологого корму MoorMilk на добу. Для кота вагою 4 кг рекомендовано 3½–4 пакетики, а для кота вагою 5 кг — 4–4½ пакетики на день. Щоб організм звик до нового раціону, більшості котів необхідний перехідний період у 5–7 днів.</p>
  </div>
</div>
`;