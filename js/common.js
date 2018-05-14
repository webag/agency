$(document).ready(function () {
	if($(window).width() < 767){ //на мобильных устройствах

		// свапаем текст и картинку для "неправильных" блоков на синем фоне
		$(".r_l").each(function () {
			var pdiv = $(this).find('.img');
			pdiv.insertBefore(pdiv.prev());
		});

		$('.spoiler_text').hide();
		$('.spoiler_w .header').click(function(){
			$(this).toggleClass("folded").toggleClass("unfolded").next().slideToggle();
		});

		$('[data-fancybox="full"]').fancybox({
			width: "100%",
			height: "100%",
			margin: [0, 0, 0, 0] // top, right, bottom, left
		});
		//*mobile js*//
	} 
});


/***********************
 отправка формы в php BEGIN
 ***********************/
$(function () {
	$(".ajax-form").on("submit", function (event) {
		var form = $(this);
		var send = true;
		event.preventDefault();

		form.find("[data-req='true']").each(function () {
			if ($(this).val() === "") {
				var self = $(this);
				self.addClass('error');
				send = false;
				setTimeout(function () {
					self.removeClass('error');
				}, 1500);
				form.find('.error').eq(0).focus();
			}
		});

		var form_data = form.serialize();

		if (send === true) {
			$.ajax({
				type: "POST",
				dataType: "xml",
				crossDomain : true,
				processData : false,
				url: "https://docs.google.com/forms/d/e/1FAIpQLSe_C0BOlJGm7gJOv6fPxgTt5IZJRKC_gYkvawj10nvS2luh7Q/formResponse",
				data: form_data,
				statusCode: { // после того как пришел ответ от сервера
					0: function (){ // это успешный случай
						form.html('<p class="thanks">We will contact you soon. Thanks!</p>'); // сунем в форму сообщение что все ок
					},
					200: function (){ // это тоже успешный случай
						form.html('<p class="thanks">We will contact you soon. Thanks!</p>'); // сунем в форму сообщение что все ок
					}
				}
			});
		}
	});
});
/***********************
 отправка формы в php END
 ***********************/


/***********************
 Прокрутка к секциям BEGIN
***********************/
$(function () {
	$('.scrollto').on('click', function () {
		var elementClick = $(this).attr("href");
		var destination = $(elementClick).offset().top;
		$('html,body').stop().animate({scrollTop: destination}, 1000);
		return false;
	});
});
/***********************
 Прокрутка к секциям END
***********************/