$(window).on("load", function () {
  const dummyData =
    '[{"link":"./assets/1.png","foodName":"Sample 1","caloriesTxt":"1 cal.","setPortion":"1 item","price":"5 USD"},{"link":"./assets/2.png","foodName":"Sample 12","caloriesTxt":"1 cal.","setPortion":"1 item","price":"5 USD"},{"link":"./assets/3.png","foodName":"Sample 13","caloriesTxt":"1 cal.","setPortion":"1 item","price":"5 USD"},{"link":"./assets/4.png","foodName":"Sample 14","caloriesTxt":"1 cal.","setPortion":"1 item","price":"5 USD"},{"link":"./assets/5.png","foodName":"Sample 15","caloriesTxt":"1 cal.","setPortion":"1 item","price":"5 USD"},{"link":"./assets/6.png","foodName":"Sample 16","caloriesTxt":"1 cal.","setPortion":"1 item","price":"5 USD"},{"link":"./assets/7.png","foodName":"Sample 17","caloriesTxt":"1 cal.","setPortion":"1 item","price":"5 USD"},{"link":"./assets/8.png","foodName":"Sample 18","caloriesTxt":"1 cal.","setPortion":"1 item","price":"5 USD"}]';

  function sliderItemHtml(
    imgLink = "#",
    foodName = "",
    caloriesTxt = "0 calories",
    setPortion = "1 Person",
    price = "0$"
  ) {
    return `<div class="slider-item">
        <div class="slide">
            <figure class="slide-image">
                <img src="${imgLink}" alt="">
            </figure>
            <h4 class="slide-name">${foodName}</h4>
            <div class="custom-line"></div>
            <div class="row">
                <p>${caloriesTxt}</p>
                <strong>•</strong>
                <p>${setPortion}</p>
            </div>
            <div class="custom-line"></div>
            <div class="row custom-row">
                <p>${price}</p>
                <a href="#"><span>&plus;</span></a>
            </div>
        </div>
    </div>`;
  }
  /*generate slider*/
  $(function () {
    const sliderBlock = document.querySelector(".slider");

    if (sliderBlock) {
      JSON.parse(dummyData).map((item) => {
        sliderBlock.insertAdjacentHTML(
          "beforeend",
          sliderItemHtml(
            item.link,
            item.foodName,
            item.caloriesTxt,
            item.setPortion,
            item.price
          )
        );
      });
    }
  });
  $(function () {
    const slider = document.getElementsByClassName("slider").item(0);
  });
});
