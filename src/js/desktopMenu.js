import { TimelineMax } from "gsap";
import { _ } from "./utils";
(function() {
    class Menu {
        constructor(menu) {
            this._menu = menu;
        }
        open() {
            let tl = new TimelineMax();
            tl.fromTo(this._menu, 0.3, { x: '-100px', autoAlpha: 0 }, { x: '0', autoAlpha: 1 });
        }
        close() {
            let tl = new TimelineMax();
            tl.fromTo(this._menu, 0.8, { x: '0', autoAlpha: 1 }, { x: '-100px', autoAlpha: 0 });
        }
    }

    let menu = new Menu(
        _('.desktop_menu_content')
    );

    _('.header_action_buton').addEventListener('click', function(e) {
        _('.desktop_menu').style.display = 'flex';
        menu.open();
    });

    _('.close_header_button').addEventListener('click', function(e) {
        menu.close();
        _('.desktop_menu').style.display = 'none';
    });

    window.addEventListener('scroll', function(e) {
        if (!_('header').classList.contains('fixed_header')) {

            _('header').classList.toggle('fixed_header');
            let tl = new TimelineMax();
            tl.fromTo(_('header'), 0.3, { y: '-100px', autoAlpha: 0 }, { y: '0', autoAlpha: 1 });
        }
        if (window.pageYOffset <= 0) {
            _('header').classList.toggle('fixed_header');
        }
    });


})()