$(document).ready(function () {
  let button = $('.price__button');
  let miniImage = $('.minicard--image');
  let miniHotel = $('.minihotel__card');
  let testImage = $('.test-image');

  $(button).click(function (e) { 
    let imgSrc = $('.minihotel__card').find('.test-image').attr('src');
    let titleCard = $('.minihotel__card').find('.info__title--text').text();
    let descriptionCard = $('.minihotel__card').find('.info__description--text').text();
    let adressCard = $('.minihotel__card').find('#adress').text();
    let guestsCard = $('.minihotel__card').find('#guests').text();
    let roomCard = $('.minihotel__card').find('#room').text();
    let fullCard = $('.minihotel__card').find('#pricefull').text();
    let actualCard = $('.minihotel__card').find('#priceactual').text();
    let test = `
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
    showDialog(test);
  
    miniHotel.parent().removeClass('col-lg-4 col-md-4 col-sm-8');
    miniHotel.parent().addClass('col-lg-8 col-md-8 col-sm-12 col-12');
    
  });

  function showDialog(text) {
    $('#content').html(text);
  }
  
});


{/* <img src="${imgSrc}" alt="hotel1" class="card__image"> */}