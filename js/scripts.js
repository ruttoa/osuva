/**
 * Navbar toggle function
 */
var hamburger = document.querySelector(".navbar-toggler"),
    target = document.querySelector(".navbar .collapse");

hamburger.addEventListener("click", function () {
    this.classList.toggle("is-active");
    target.classList.toggle("is-active");
    document.body.classList.toggle("menu-open");
}, false);


// On document ready
jQuery(function ($) {
    /**
     * Navigation dropdowns
     */
    $dd = $(".navbar-nav > .menu-item-has-children > a");
    console.log($dd);
    $dd.on('click', function (e) {
        e.preventDefault();
        $(this).next('.sub-menu').toggleClass('show');
    })

    $(document).on('click', function(event){
        if (!event.target.matches('.navbar-nav > .menu-item-has-children > a')) {
            var dropdowns = document.getElementsByClassName("sub-menu");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    });
});
