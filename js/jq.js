
(function ($) {

	$.fn.slickhover = function (options) {

		var defaults = $.extend({
			animateIn: false
			, icon: 'images/slickhover/zoom-white.png'
			, color: '#000'
			, opacity: 0.2
			, speed: 400
		}, options);
		var object = $(this);
		var settings = $.extend(defaults, options);

		var methods = {

			init: function () {
				return this.each(function () {
					methods.appendHTML();
					methods.setEventHandlers();
				});
			},

			appendHTML: function () {
				if ($(object).is('img')) {
					if ($(object).parent().hasClass('slickhoverWrapper') == false) {
						if (settings.animateIn) {
							var icon = '<span class="icon" style="position: absolute; left: -100%; top: 0; height: 100%; width: 100%; background:url(' + settings.icon + ') center center no-repeat"></span>';
							$(object).wrap('<div class="slickhoverWrapper" style="position: relative; max-width:100%; overflow:hidden; display:inline-block; background:' + settings.color + ';"></div>');
							$(icon).insertBefore($(object));
						} else
							$(object).wrap('<div class="slickhoverWrapper" style="position: relative; max-width:100%; overflow:hidden; display:inline-block; background:url(' + settings.icon + ') center center no-repeat ' + settings.color + ';"></div>');
					}
				}
			},

			/******************************
			Set Event Handlers
			*******************************/

			setEventHandlers: function () {

				$(object).on({
					mouseenter: function () {
						$(this).stop().animate({
							opacity: settings.opacity
						}, settings.speed);

						if (settings.animateIn)
							$(object).prev().stop().animate({
								left: '0px'
							}, settings.speed);
					}
					, mouseleave: function () {
						$(this).stop().animate({
							opacity: 1
						}, settings.speed);

						if (settings.animateIn) {
							$(object).prev().stop().animate({
								left: '100%'
							}, settings.speed, function () {
								$(object).prev().css('left', '-100%');
							});
						}
					}
				});
			}

		};

		if (methods[options]) { 
			return methods[options].apply(this, Array.prototype.slice.call(arguments, 1));
		} else if (typeof options === 'object' || !options) {
			return methods.init.apply(this);
		} else {
			$.error('Method "' + method + '" does not exist in slickhover plugin!');
		}
	};

})(jQuery);
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})