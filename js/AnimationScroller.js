const AnimationScroller = (() => {
    'use strict';
    const wowScroller = new WowScroller(false);


    const init = () => {
        TweenMax.set('.plane',{rotation:-30});
        TweenMax.set('.victory',{autoAlpha:0});
        TweenMax.set('.explosion',{scale:.1, autoAlpha:0})
        wowScroller.createScene(".scene1",{ triggerHook: "onLeave", duration: "100%", offset:0},{
            '.plane':{x:(document.body.clientWidth / 2) - 80},
        })
        
        wowScroller.createScene(".scene2",{ triggerHook: "onLeave", duration: "100%", offset:0},{
            '.plane':{y:(window.innerHeight) - 200, scale: 1.5},
            '.plane.rotate':{tween:{rotation:60}, override:{duration:"50%"}},

        })
        wowScroller.createScene(".scene3",{ triggerHook: "onLeave", duration: "100%", offset:-400},{
            '.explosion.show':{tween:{autoAlpha:1},override:{duration:"10%"}},
            '.explosion':{tween:{scale:1},override:{}},
            '.plane':{autoAlpha:0}
        })
        wowScroller.createScene(".scene4",{ triggerHook: "onEnter", duration: "100%", offset:100},{
            '.victory':{tween:{autoAlpha:1},override:{}},
            
        })

    }
    return {init}
})();
