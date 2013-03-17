require([
    'dojox/gfx',
    'dojox/gfx/fx',
    'dojo/fx/easing',
    'dojox/gfx/Moveable'
], function (gfx, Fxg, easing, Moveable) {
    var surface = gfx.createSurface('surface', 400, 400);

    var circle = surface.createCircle({ cx: 100, cy: 100, r:50 })
                        .setFill("#FC97C0")
                        .setStroke({color: "#E01B6A", width: 10});

   new Fxg.animateTransform({
        duration: 3200,
        shape: circle,
        easing: easing.bounceOut,
        transform: [{
            name: "rotategAt",
            start: [0,150,150],
            end: [360,150,150] 
        }]
    }).play();

    new Fxg.animateStroke({
        duration: 2200,
        shape: circle,
        color: {start: '#e01b6a', end: '#75193E'}
    }).play();

    new Moveable(circle);

});
