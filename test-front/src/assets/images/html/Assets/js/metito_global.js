(function (window, document, $, undefined) {
    var metitoApp = {
       
        backgroundImage: function () {
            var isRTL = $('html').attr('lang') == 'en' ? false : true;
            var $windowWidth = $(window).innerWidth();
            if ($windowWidth < 600) {
                $(".background-banner-wrapper").each(function () {
                    if ($(this).data('mob')) {
                        var dataImage = $(this).data('mob');
                        $(this).css('background-image', 'url(' + dataImage + ')');
                    }

                })
            }
        },
        cardToggle: function () {
            $('.mt-card-select').on('click', function(){
                $(this).parent().parent().toggleClass("active");
            });
        },
        customDropdown: function () {
            $('.mt-custom-select').dropdown();
        },
        isotopeTab: function () {
            // store filter for each group
            var buttonFilters = {};
            var buttonFilter;
            // quick search regex
            var qsRegex;

            // init Isotope
            var $grid = $('.grid').isotope({
                // itemSelector: '.mt-cards-items',
                filter: function() {
                var $this = $(this);
                var searchResult = qsRegex ? $this.text().match( qsRegex ) : true;
                var buttonResult = buttonFilter ? $this.is( buttonFilter ) : true;
                return searchResult && buttonResult;
                },
            });
            
            $('.mt-cards-filters').on( 'click', '.button', function() {
               
                var $this = $(this);
                // get group key
                var $buttonGroup = $this.parents('.button-group');
                var filterGroup = $buttonGroup.attr('data-filter-group');
                // set filter for group
                buttonFilters[ filterGroup ] = $this.attr('data-filter');
                // combine filters
                buttonFilter = concatValues( buttonFilters );
                // Isotope arrange
                $grid.isotope();
              });

            // change is-checked class on buttons
            $('.button-group').each( function( i, buttonGroup ) {
                var $buttonGroup = $( buttonGroup );
                $buttonGroup.on( 'click', 'button', function() {
                $buttonGroup.find('.is-checked').removeClass('is-checked');
                $( this ).addClass('is-checked');
                });
            });
            // flatten object by concatting values
            function concatValues( obj ) {
                var value = '';
                for ( var prop in obj ) {
                value += obj[ prop ];
                }
                return value;
            };

            // use value of search field to filter
            var $quicksearch = $('.quicksearch').keyup( debounce( function() {
                qsRegex = new RegExp( $quicksearch.val(), 'gi' );
                $grid.isotope();
            }) );

            function debounce( fn, threshold ) {
                var timeout;
                threshold = threshold || 100;
                return function debounced() {
                  clearTimeout( timeout );
                  var args = arguments;
                  var _this = this;
                  function delayed() {
                    fn.apply( _this, args );
                  }
                  timeout = setTimeout( delayed, threshold );
                };
              }
              

            
  
            
        },
        customUploader: function () {
            if ($("#fileuploader").length) {
                $("#fileuploader").uploadFile({
                    url:"http://172.20.10.4/metito-isotop/Assets/uploadImage",
                    fileName:"myfile",
                    showPreview:true,
                    showDelete: false,
                    showError: false,
                    extraHTML:function(){
                        var html = "<div class='mt-restrict-dwnd'><input id='type1' type='checkbox'/><label for='type1'>Restrict download</label>";
                        html += "</div>";
                        return html;    		
                    },
                    // autoSubmit:false
                });
            } 
        },
        fancyBox: function () {
            Fancybox.bind('[data-fancybox="gallery"]', {
                // dragToClose: true,
                
                Thumbs: false,
                Image: {
                  zoom: false,
                  click: false,
                  wheel: "slide"
                },
              
                on: {
                     // Create top bar
     
                  // Move caption inside the slide
                  reveal: (f, slide) => {
                    slide.$caption && slide.$content.appendChild(slide.$caption);
                  },
                },
              });
        },
      
        init: function () {
            metitoApp.backgroundImage();
            metitoApp.cardToggle();
            if ($(".grid").length) {
                metitoApp.isotopeTab();
             };
             metitoApp.customDropdown();
             metitoApp.customUploader();
             metitoApp.fancyBox();
            
            
        }
    };
    window.metitoApp = metitoApp;
})(window, document, jQuery);

jQuery(document).ready(function () {
    metitoApp.init();
});


