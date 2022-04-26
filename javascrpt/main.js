$(document).ready(function() {
    function delay(n) {
        n = n || 2000;
        return new Promise(done => {
            setTimeout(() => {
                done();
            }, n);
        });
    }

    function PageTransition() {
        var tl = gsap.timeline();
        tl.to('ul.transition li', { duration: .5, scaleY: 1, Transformorign: 'bottom left', stagger: .2 });
        tl.to('ul.transition li', { duration: .5, scaleY: 1, Transformorign: 'bottom left', stagger: .2 });
        tl.to('ul.transition li', { duration: .5, scaleY: 1, Transformorign: 'bottom left', stagger: .2 });
        tl.to('ul.transition li', { duration: .5, scaleY: 1, Transformorign: 'bottom left', stagger: .2 });
        tl.to('ul.transition li', { duration: .5, scaleY: 1, Transformorign: 'bottom left', stagger: .2 });
    }

    function contextAnimation() {
        var tl = gsap.timeline();
        tl.form();
        tl.form();
    }
    barba.init({
        sync: true,
        transitions: [{
            async leave(data) {
                const done = this.async();
                PageTransition();
                await delay(1500);
                done();
            },
            async enter(data) {
                contextAnimation();
            },
            async once(data) {
                contextAnimation();
            }
        }]
    });
});