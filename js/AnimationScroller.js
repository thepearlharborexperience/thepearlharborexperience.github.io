const AnimationScroller = (() => {
    'use strict';
    console.log("%c-----------------------------------------------------------------------------------------------------------------------------------","color:transparent; font-size:50px; font-weight:bold; background-image:url('https://canary.contestimg.wish.com/api/webimage/5b0e1d5dcab48a6c7f40fd62-large.jpg?cache_buster=d017fac4d7d74f84b9dfdd2815aec6c7');background-size:contain;")
    console.log("%cBANZAI BITCH!!! -suicide gang", "font-size:50px; color:red;text-align:center;width:100%;")
    const wowScroller = new WowScroller(false);

    const init = () => {
        TweenMax.set('.plane',{rotation:-30,x:-200});
        TweenMax.set('.ship',{x:(window.innerWidth +800)/2});
        TweenMax.set('.victory',{autoAlpha:0});
        TweenMax.set('.explosion',{scale:.1, autoAlpha:0});

        const landingTimeline = new TimelineMax();
        landingTimeline
            .add(
                TweenMax.to('.landing-title',1,{autoAlpha:0})
            ).add(
                TweenMax.to('.img-bg',1,{autoAlpha:0,scale:1.5})
            ).add(
                TweenMax.to('.landing-page',1,{autoAlpha:0})
            );

        wowScroller.createScene(".landing",{ triggerHook: "onLeave", duration: "200%", offset:0},{
         timeline: landingTimeline
        })

        wowScroller.createScene(".intro",{ triggerHook: "onLeave", duration: "200%", offset:0},{
            '.ship':{x:0,ease:"power2.out"},
        })

        wowScroller.createScene(".scene1",{ triggerHook: "onLeave", duration: "100%", offset:0},{
            '.plane':{x:(window.innerWidth / 2) - 80},
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
