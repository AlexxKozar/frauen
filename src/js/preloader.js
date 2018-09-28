import { TweenMax } from "gsap";
import { _, __ } from "./utils";

(function() {
    let letters = __('.preloader span');
    TweenMax.staggerFrom(
        letters,
        0.25, { opacity: 0, x: Math.floor(Math.random() * 100), ease: Back.easeOut },
        0.1
    );

    setTimeout(function() {
        TweenMax.to(_('.preloader'), 0.3, { autoAlpha: 0 });
    }, 1000);
})();