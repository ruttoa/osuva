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

    /**
     * Accordion
     */
    $accordion = $(".wp-block-group.accordion");
    $hash = window.location.hash;
    $accordion.each(function () {
        $(this).find('> h3:not(:first-child)').each(function () {
            $(this).addClass('closed').next('.wp-block-group').addClass('collapse');
        });
        $(this).find('> h3').on('click', function () {
            $(this).next('.wp-block-group').toggleClass('collapse');
            $(this).toggleClass('closed');
        });
    });
    if ($hash) {
        var hash = $hash.substring(1); // Puts hash in variable, and removes the # character
        console.log("Hash found: #" + hash);
    } else {
        // No hash found
    }

    // var el = document.querySelector(".hero::after");

    // el.addEventListener("mousemove", function(e) {
    //     el.style.backgroundPositionX = -e.offsetX + "px";
    //     el.style.backgroundPositionY = -e.offsetY + "px";
    // });

});
