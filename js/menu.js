$(function () {
    // 滑出导航
    var right = $('.menu');
    var rightNav = $('.rightNav');
    var bg = $('.bgDiv');
    showNav(right, rightNav, "right");

    function showNav(btn, navDiv, direction) {
        btn.on('click', function () {
            bg.css({
                display: "block",
                transition: "opacity .5s",
                webkitTransition: "opacity .5s"
            });
            if (direction == "right") {
                navDiv.css({
                    right: "0px",
                    transition: "right 1s",
                    webkitTransition: "right 1s"
                });
            }

        });
    }
    $('a').each(function () {
        var dom = $(this);
        dom.on('click', function () {
            hideNav();
            // alert(dom.text())
        });
    });
    bg.on('click', function () {
        hideNav();
    });
    function hideNav() {
        rightNav.css({
            right: "-50%",
            transition: "right .1s",
            webkitTransition:"right .1s"
        });
        bg.css({
            display: "none",
            transition: "display 1s",
            webkitTransition:"display 1s"
        });
    }

});