$(document).ready(function(){
    // Fetch WooCommerce products
    const consumerKey = 'ck_d0805151b186fde48fb2e632d9f01ebe9ac66e16';
    const consumerSecret = 'cs_6cdfd478fc2f0d15128fa6ccc86abf72b3d9985e';

    function fetchWooCommerceProducts() {
        const url = 'https://your-store-url.com/wp-json/wc/v3/products';

        fetch(url, {
            headers: {
                'Authorization': 'Basic ' + btoa(consumerKey + ':' + consumerSecret)
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            // Process and display your products here
        })
        .catch(error => console.error('Error:', error));
    }

    fetchWooCommerceProducts();

    // Initialize category ajax functionality
    if (typeof sw_click_ajax === "function") {
        $('.active [data-catload=ajax]').each(function(){
            sw_click_ajax($(this));
        });
        $('[data-catload=ajax]').on('click', function(){
            sw_click_ajax($(this));
        });
    }

    // Initialize portfolio functionality
    if (typeof $.fn.isotope === "function") {
        $('.sw-portfolio-product').each(function(){
            var $this = $(this);
            var $container = $('#container_' + this.id);
            $container.imagesLoaded().progress(function(){
                $container.isotope({
                    layoutMode: 'fitRows'
                });
            });
        });
    }

    // Initialize countdown timers
    if ($.fn.countdown) {
        $('.product-countdown').each(function(){
            var $this = $(this);
            var finalDate = $(this).data('date');
            $this.countdown(finalDate, function(event){
                $this.html(event.strftime('%D days %H:%M:%S'));
            });
        });
    }

    // Initialize slick sliders
    if ($.fn.slick) {
        $('.responsive-slider').slick({
            // Add your slick slider settings here
        });
    }
});
