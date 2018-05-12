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
			}
		});

		if (send === true) {
			//Здесь может быть аякс запрос
		}
	});
});
/***********************
 отправка формы в php END
 ***********************/