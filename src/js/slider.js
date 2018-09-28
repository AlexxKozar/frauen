import $ from "jquery";
import { _ } from "./utils";
import "slick-carousel";



$(".comments_slider").slick({
    infinite: false,
    nextArrow: $('.next'),
    prevArrow: $('.prev'),
    infinite: true,
    dots: false,
    speed: 300,
    responsive: [{

        breakpoint: 1024,
        settings: {
            slidesToShow: 1,
        }
    }, {
        breakpoint: 600,
        settings: {
            slidesToShow: 1,
        }
    }, {
        breakpoint: 300,
        settings: "unslick"

    }]
});

$(".comments_slider").on("init", function(event, slick) {
    $(".comments_title_content_number").text(parseInt(slick.currentSlide + 1) + ".");
});

$(".comments_slider").on("afterChange", function(event, slick, currentSlide) {
    $(".comments_title_content_number").text(parseInt(slick.currentSlide + 1) + ".");
});