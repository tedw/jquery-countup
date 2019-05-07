/* CountUp jQuery Plugin */
// Inspired by http://stackoverflow.com/questions/2540277/jquery-counter-to-count-up-to-a-target-number
// Using jQuery plugin tempate from https://github.com/jquery-boilerplate/boilerplate/

;(function ( $, window, document, undefined ) {

		var pluginName = "countUp",
			defaults = {
				duration: 1500,
				easing: 'swing'
			};

		function Plugin ( element, options ) {
				this.element = element;
				this.settings = $.extend( {}, defaults, options );
				this._defaults = defaults;
				this._name = pluginName;
				this.init();
		}

		Plugin.prototype = {
			init: function () {
				var $el = $(this.element);
				this.animateCount( $el );
			},
			animateCount: function ( $el ) {
				var num = $el.text();
				$el.animate({ countNum: num }, {
					duration: this.settings.duration,
					easing: this.settings.easing,
					step: function() {
						$el.text(Math.ceil( this.countNum ));
					},
					 complete:function() {
                                          $el.text(this.countNum)
                                        }
					
				});
			}
		};

		// A really lightweight plugin wrapper around the constructor,
		// preventing against multiple instantiations
		$.fn[ pluginName ] = function ( options ) {
			return this.each(function() {
				if ( !$.data( this, "plugin_" + pluginName ) ) {
					$.data( this, "plugin_" + pluginName, new Plugin( this, options ) );
				}
			});
		};

})( jQuery, window, document );
