function WowScroller(_debug){
    /*
        USAGE:

        const wowScroller = new WowScroller();
        wowScroller.createScene(".exhaust",{ triggerHook: "onLeave", duration: "100%", offset:-595},{
            '#pinned-element1 .image':{scale:'1'},
            '.hero .content h1':{x: 300,autoAlpha:0},
            '.hero .content p':{x: -300,autoAlpha:0}
        })

        OR

        const timeline = new TimelineMax();
        const itemTween = TweenMax.to('.parts .circle-item', 1, {scale: 1,autoAlpha: 1});
        const itemTextTween = TweenMax.to('.parts .circle-item p', 1, {autoAlpha: 1});
        timeline.add(itemTween);
        timeline.add(itemTextTween);
        
        wowScroller.createScene(".exhaust",{ triggerHook: "onLeave", duration: "100%", offset:-595},{timeline})


        PARAMETERS EXPLAINED(from usage example):

        _trigger = ".exhaust"
            -STRING The element that will trigger the animation, it is the value for the 'triggerHook' scene option.

        _sceneOptions = { triggerHook: "onLeave", duration: "100%", offset:-595}
            -OBJECT containing scene options that will be applied to all tweens

        _tweens = {
                    '#pinned-element1 .image':{scale:'1'},
                    '.hero .content h1':{x: 300,autoAlpha:0},
                    '.hero .content p':{x: -300,autoAlpha:0}
                }
            -OBJECT containing tweens that will run in parallel with the trigger element. object pattern:
            {
                'element selector for tween'              : {tweenProperty:'value'},
                'a different element selector for tween'  : {tweenProperty:'value'},
                'element selector for tween'              : {tweenProperty:'value'}
            }
        
            OR

        _tweens = {timeline}
            -OBJECT containing a TimelineMax animation
    */
    const controller = new ScrollMagic.Controller();
    let debug = _debug;
    if(debug)document.body.classList.add('debug')
    const getTween = (_tweenTarget, _tweens) =>{
        let tween;
        if(_tweenTarget == 'timeline'){
            tween = _tweens[_tweenTarget]
        }               
        else if('tween' in _tweens[_tweenTarget]){
            tween = TweenMax.to(_tweenTarget, 1, _tweens[_tweenTarget].tween)
        }
        else{
            tween = TweenMax.to(_tweenTarget, 1, _tweens[_tweenTarget])
        }                                     
        return tween;
    }
    const getSceneOptions = (_tweenObj, _sceneOptions)=>{
        let options;
        if('override' in _tweenObj) options = {..._sceneOptions, ..._tweenObj['override']}
        else options = {..._sceneOptions}
        return options;
    }

    this.createScene = (_trigger, _sceneOptions={}, _tweens)=>{
        Object.keys(_tweens).forEach(tweenTarget=>{
            const tween = getTween(tweenTarget, _tweens);
            const sceneOptions = getSceneOptions(_tweens[tweenTarget], _sceneOptions)
            const scene = new ScrollMagic.Scene({triggerElement:_trigger,...sceneOptions})
            scene.setTween(tween)
            if(debug)scene.addIndicators(false)
            scene.addTo(controller)
        })
    }
}