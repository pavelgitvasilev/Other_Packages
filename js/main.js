$(document).ready(function () {
  let button = $('.price__button');

  $(button).click(function () { 
    let imgSrc = $(this).parent().parent().parent().find('.minicard__image').attr('src');
    let imgSrcTest = $(this).parent().parent().parent().find('.test-image').attr('src');
    let titleCard = $(this).parent().parent().find('.info__title--text').text();
    let adressCard = $(this).parent().parent().find('.adress').text();
    let guestsCard = $(this).parent().parent().find('.guests').text();
    let roomCard = $(this).parent().parent().find('.room').text();
    let fullCard = $(this).parent().find('.pricefull').text();
    let actualCard = $(this).parent().find('.priceactual').text();
    let miniImage = $('.hotel__card active').find('.card__image--mini').attr('src');
    let miniTitle = $('.hotel__card active').find('.info__title--text').text();
    let miniAdress = $('.hotel__card active').find('.adress').text();
    let miniGuests = $('.hotel__card active').find('.guests').text();
    let miniRoom = $('.hotel__card active').find('.roomcard').text();
    let miniFull= $('.hotel__card active').find('.price__full--text').text();
    let miniActual = $('.hotel__card active').find('.price__actual--text').text();
    let bigCard = `
            <div class="hotel__card active">
              <div class="hotel__card--image">
                <div class="flash">
                  <span class="flash__text">Flash Offer</span>
                </div>
                <img src="${imgSrcTest}" alt="hotel1" class="card__image">
                <img src="${imgSrc}" alt="hotel1" class="card__image--mini"> 
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
                    <span class="characters__text adress">${adressCard}</span>
                  </div>
                  <div class="characters__block">
                    <img src="img/hero/user.svg" alt="user" class="characters__image">
                    <span class="characters__text guests">${guestsCard}</span>
                  </div>
                  <div class="characters__block">
                    <img src="img/hero/home.svg" alt="home" class="characters__image">
                    <span class="characters__text roomcard">${roomCard}</span>
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
      <img src="${imgSrcTest}" alt="test" class="test-image">
      <img src="${miniImage}" alt="hotel2" class="minicard__image">
    </div>
    <!-- /.minihotel--image -->
    <div class="miniinfo minihotel__card--info">
      <div class="minititle info__title">
        <h2 class="info__title--text">${miniTitle}</h2>
      </div>
      <!-- /.info__title -->
      <div class="characters info__characters info__characters--mimi">
        <div class="characters__block">
          <img src="img/hero/map-pin.svg" alt="map-pin" class="characters__image">
          <span class="characters__text adress">${miniAdress}</span>
        </div>
        <div class="characters__block">
          <img src="img/hero/user.svg" alt="user" class="characters__image">
          <span class="characters__text guests">${miniGuests}</span>
        </div>
        <div class="characters__block">
          <img src="img/hero/home.svg" alt="home" class="characters__image">
          <span class="characters__text room">${miniRoom}</span>
        </div>
      </div>
      <!-- /.characters info__characters -->
      <div class="price info__price">
        <div class="price__sum">
          <div class="price__full">
            <span class="price__full--text pricefull">${miniFull}</span>
          </div>
          <div class="price__actual">
            <span class="price__actual--text priceactual">${miniActual}</span>
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
    // $('.hotel__card').addClass('active');

    if ($(window).find('.hotel__card')){
      $('.hotel__card').parent().removeClass('col-lg-8 col-md-8 col-sm-12 col-12');
      $('.hotel__card').parent().addClass('col-lg-4 col-md-4 col-sm-8');
      $('.hotel__card').parent().html(smallCard);
      $(this).parent().parent().parent().parent().toggleClass('col-lg-4 col-md-4 col-sm-8');
      $(this).parent().parent().parent().parent().toggleClass('col-lg-8 col-md-8 col-sm-12 col-12').html(bigCard);

    }
    
  });
 
});

