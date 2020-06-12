$(document).ready(function () {
  let button = $('.price__button');

  $(button).click(function () { 
    let imgSrc = $(this).parent().parent().parent().find('.test-image').attr('src');
    let titleCard = $(this).parent().parent().find('.info__title--text').text();
    let adressCard = $(this).parent().parent().find('.adress').text();
    let guestsCard = $(this).parent().parent().find('.guests').text();
    let roomCard = $(this).parent().parent().find('.room').text();
    let fullCard = $(this).parent().find('.pricefull').text();
    let actualCard = $(this).parent().find('.priceactual').text();
    let bigCard = `
            <div class="hotel__card">
              <div class="hotel__card--image">
                <div class="flash">
                  <span class="flash__text">Flash Offer</span>
                </div>
                <img src="${imgSrc}" alt="test" class="test-image--active"> 
              </div>
              <div class="info hotel__card--info" id="info-card">
                <div class="info__rating">
                  <img src="img/hero/star.svg" alt="star" class="info__rating--stars">
                  <img src="img/hero/star.svg" alt="star" class="info__rating--stars">
                  <img src="img/hero/star.svg" alt="star" class="info__rating--stars">
                  <img src="img/hero/star.svg" alt="star" class="info__rating--stars">
                  <img src="img/hero/star.svg" alt="star" class="info__rating--stars">
                </div>
                <!-- /.info__rating -->
                <div class="info__title">
                  <h2 class="info__title--text">${titleCard}</h2>
                </div>
                <!-- /.info__title -->
                <div class="info__description">
                  <p class="info__description--text">Aute quis duis excepteur excepteur ipsum cat eiusmod consectetur enim laborum magna llit. Ipsum est fugiat velit ea llamco do esse ut in veniam sun in onsequat. Aute quis duis epteur excepteur ipsum occaecat eiusmod nsectetur enim laborum magna mollit. Ipsum est fugiat velit ea ullamco do</p>
                </div>
                <!-- /.info__description -->
                <div class="characters info__characters">
                  <div class="characters__block">
                    <img src="img/hero/map-pin.svg" alt="map-pin" class="characters__image">
                    <span class="characters__text">${adressCard}</span>
                  </div>
                  <div class="characters__block">
                    <img src="img/hero/user.svg" alt="user" class="characters__image">
                    <span class="characters__text">${guestsCard}</span>
                  </div>
                  <div class="characters__block">
                    <img src="img/hero/home.svg" alt="home" class="characters__image">
                    <span class="characters__text">${roomCard}</span>
                  </div>
                </div>
                <!-- /.characters info__characters -->
                <div class="price info__price">
                  <div class="price__sum">
                    <div class="price__full">
                      <span class="price__full--text">${fullCard}</span>
                    </div>
                    <div class="price__actual">
                      <span class="price__actual--text">${actualCard}</span>
                    </div>
                  </div>
                  <button class="price__button">Book Now</button>
                </div>
                <!-- /.price info__price -->
              </div>
            </div>
            <!-- /.hotel__card -->
    `
    
    let smallCard = `
    <div class="minihotel__card">
    <div class="minihotel--image">
      <div class="miniflash">
        <span class="miniflash__text">Flash Offer</span>
      </div>
      <img src="img/hero/hotel1.png" alt="test" class="test-image">
      <img src="img/hotels/hotel2.png" alt="hotel2" class="minicard__image">
    </div>
    <!-- /.minihotel--image -->
    <div class="miniinfo minihotel__card--info">
      <div class="minititle info__title">
        <h2 class="info__title--text">LUX* Belle Mare</h2>
      </div>
      <!-- /.info__title -->
      <div class="characters info__characters info__characters--mimi">
        <div class="characters__block">
          <img src="img/hero/map-pin.svg" alt="map-pin" class="characters__image">
          <span class="characters__text adress">1749 Wheeler Ridge  Delaware</span>
        </div>
        <div class="characters__block">
          <img src="img/hero/user.svg" alt="user" class="characters__image">
          <span class="characters__text guests">2 x Guests</span>
        </div>
        <div class="characters__block">
          <img src="img/hero/home.svg" alt="home" class="characters__image">
          <span class="characters__text room">1 x Room</span>
        </div>
      </div>
      <!-- /.characters info__characters -->
      <div class="price info__price">
        <div class="price__sum">
          <div class="price__full">
            <span class="price__full--text pricefull">$ 5,500</span>
          </div>
          <div class="price__actual">
            <span class="price__actual--text priceactual">$ 2,000</span>
          </div>
        </div>
        <button class="price__button price__button--mimi" id="price-button">Book Now</button>
      </div>
      <!-- /.price info__price -->
    </div>
    <!-- /.minihotel__card--info -->
  </div>
  <!-- /.minihotel__card -->
    `

    if ($(window).find(".hotel__card--info")){
      $('.hotel__card').parent().removeClass('col-lg-8 col-md-8 col-sm-12 col-12');
      $('.hotel__card').parent().addClass('col-lg-4 col-md-4 col-sm-8');
      $(this).parent().parent().parent().parent().removeClass('col-lg-4 col-md-4 col-sm-8');
      $(this).parent().parent().parent().parent().addClass('col-lg-8 col-md-8 col-sm-12 col-12');
    }


    $(this).parent().parent().parent().html(bigCard);
    // $('.hotel__card').parent().html(smallCard);
      // miniShowDialog(smallCard);
      // showDialog(bigCard);


    
    
  });

  // function showDialog(text) {
  //   $('.small').html(text);
  // }

  // function miniShowDialog(text) {
  //   $('.big').html(text);
  // }
  
});


{/* <img src="${imgSrc}" alt="hotel1" class="card__image"> */}