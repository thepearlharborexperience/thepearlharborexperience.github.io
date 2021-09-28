const HomepageScroller = (() => {
    'use strict';
    const wowScroller = new WowScroller();


    const init = () => {
        TweenLite.set(".hero .image", {scale: 2})

        TweenLite.set(".rfr", {autoAlpha:0})

        TweenLite.set(".muffler .circle-item", {autoAlpha: .4,scale: .5})
        TweenLite.set(".muffler .circle-item p", {y: 100})

        TweenLite.set(".parts .circle-item", {autoAlpha: .4,scale: .5})
        TweenLite.set(".parts .circle-item p", {autoAlpha: 0})

        const timeline = new TimelineMax();
        const itemTween = TweenMax.to('.parts .circle-item', 1, {scale: 1,autoAlpha: 1});
        const itemTextTween = TweenMax.to('.parts .circle-item p', 1, {autoAlpha: 1});
        timeline.add(itemTween);
        timeline.add(itemTextTween);
        // init ScrollMagic Controller

        // build scenes
        wowScroller.createScene(".exhaust",{ triggerHook: "onLeave", duration: "100%", offset:-595},{
            '.rfr':{autoAlpha:'1', delay:1},
            '.hero .image':{scale:1},
            '.hero.delay .image':{tween:{autoAlpha:'0'}, override:{offset:0}},
            '.hero .content h1':{x: 300,autoAlpha:0},
            '.hero .content p':{x: -300,autoAlpha:0}
        })

        wowScroller.createScene(".exhaust",{ triggerHook: "onLeave", duration: "100%", offset:0},{
            '.hero .image':{autoAlpha:'0'},

        })

        wowScroller.createScene('.muffler',{duration:'50%', triggerHook:'onEnter', offset:200},{
            '.muffler .circle-item p': {y:0, delay:.2},
            '.muffler .circle-item' : {scale: '1', autoAlpha: 1}
        });

        wowScroller.createScene('.parts',{triggerElement: ".parts",triggerHook:'onEnter', offset:400},{
            timeline
        })

    }
    return {init}
})();
