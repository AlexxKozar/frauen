import { _ } from "./utils";
import { TimelineMax, TweenLite, ScrollToPlugin } from "gsap";

(function() {
    let upButton = _('.action_button');
    let tl = new TimelineMax();
    tl.from(upButton, 1, { x: '2500px', autoAlpha: 0 }, { x: '0', autoAlpha: 1 });

    window.addEventListener('scroll', function(e) {
        if (window.pageYOffset > 300) {
            upButton.style.display = 'block';
        } else {
            upButton.style.display = 'none';
        }
    });
})();