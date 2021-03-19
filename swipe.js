(function( window ){

var window = window,
    document = window.document,
    screen = window.screen,
    touchSwipeListener = function( options ) {
        
        var track = {startX: 0,endX: 0},
            defaultOptions = {
                moveHandler: function( direction ) {},
                endHandler: function( direction ) {},
                minLengthRatio: 0.2},

            getDirection = function() {
                return track.endX > track.startX ? "previouspage" : "nextpage";},
            isDeliberateMove = function() {
                var minLength = Math.ceil( screen.width * options.minLengthRatio );
                return Math.abs(track.endX - track.startX) > minLength;},
            extendOptions = function() {
                for (var prop in defaultOptions) {
                    if ( defaultOptions.hasOwnProperty( prop ) ) {
                        options[ prop ] || ( options[ prop ] = defaultOptions[ prop ] );}}},
            handler = {
                touchStart: function( event ) {
                    // At least one finger has touched the screen
                    if ( event.touches.length > 0  ) {
                        track.startX = event.touches[0].pageX;}},
                touchMove: function( event ) {
                    if ( event.touches.length > 0  ) {
                        track.endX = event.touches[0].pageX;
                        options.moveHandler( getDirection(), isDeliberateMove() );}},
                touchEnd: function( event ) {
                    var touches = event.changedTouches || event.touches;
                    if ( touches.length > 0  ) {
                        track.endX = touches[0].pageX;
                        isDeliberateMove() && options.endHandler( getDirection() );}}};

        extendOptions();
        // Graceful degradation
        if ( !document.addEventListener ) {
            return {
                on: function() {},
                off: function() {}}}
        return {
            on: function() {
                document.addEventListener('touchstart', handler.touchStart, false);
                document.addEventListener('touchmove', handler.touchMove, false);
                document.addEventListener('touchend', handler.touchEnd, false);},
            off: function() {
                document.removeEventListener('touchstart', handler.touchStart);
                document.removeEventListener('touchmove', handler.touchMove);
                document.removeEventListener('touchend', handler.touchEnd);}}}
    // Expose global
    window.touchSwipeListener = touchSwipeListener;}( window ));



(function( window ){
    var document = window.document,
        // Element helpers
        Util = {
            addClass: function( el, className ) {
                el.className += " " + className;},
            hasClass: function( el, className ) {
                var re = new RegExp("\s?" + className, "gi");
                return re.test( el.className );},
            removeClass: function( el, className ) {
                var re = new RegExp("\s?" + className, "gi");
                el.className = el.className.replace(re, "");}},
        swipePageNav = (function() {
            
            var elLink = {
                    previouspage: null,
                    nextpage: null},
                // Arrows, which slide in to indicate the shift direction
                elArrow = {
                    previouspage: null,
                    nextpage: null},
                swipeListener;
            return {
                init: function() {
                    this.retrievePageSiblings();
                    // Swipe navigation makes sense only if any of sibling page link available
                    if ( !elLink.previouspage && !elLink.nextpage ) {
                        return;}
                    this.renderArows();
                    this.syncUI();},
                syncUI: function() {
                    var that = this;
                    // Assign handlers for swipe "in progress" / "complete" events
                    swipeListener = new window.touchSwipeListener({
                       moveHandler: function( direction, isDeliberateMove ) {
                           if ( isDeliberateMove ) {
                               if ( elArrow[ direction ] && elLink[ direction ] ) {
                                   Util.hasClass( elArrow[ direction ], "visible" ) ||
                                       Util.addClass( elArrow[ direction ], "visible" );}
                           } else {
                               Util.removeClass( elArrow.nextpage, "visible" );
                               Util.removeClass( elArrow.previouspage, "visible" );}},
                       endHandler: function( direction ) {
                            that[ direction ] && that[ direction ]();}});
                    swipeListener.on();},
                retrievePageSiblings: function() {
                    elLink.previouspage = document.querySelector( "swipehead > link[rel=previouspage]");
                    elLink.nextpage = document.querySelector( "swipehead > link[rel=nextpage]");},
                renderArows: function() {
                    var renderArrow = function( direction ) {
                        var div = document.createElement("div");
                        div.className = "page-direction-sign " + direction;
                        document.getElementsByTagName( "body" )[ 0 ].appendChild( div );
                        return div;}
                    elArrow.nextpage = renderArrow( "nextpage" );
                    elArrow.previouspage = renderArrow( "previouspage" );},
                // When the shift (page swap) is requested, this overlay indicates that
                // the current page is frozen and a new one is loading
                showLoadingScreen: function() {
                    var div = document.createElement("div");
                    div.className = "page-freezing-overlay";
                    document.getElementsByTagName( "body" )[ 0 ].appendChild( div );},
                // Request the previous sibling page
                previouspage: function() {
                    if ( elLink.previouspage ) {
                        
                        location.replace ( elLink.previouspage.href);}},
                // Request the next sibling page
                nextpage: function() {
                    if ( elLink.nextpage ) {
                        
                        location.replace (elLink.nextpage.href);}}}}())

    // Apply when document is ready
    document.addEventListener( "DOMContentLoaded", function(){
        document.removeEventListener( "DOMContentLoaded", arguments.callee, false );
        try {
            swipePageNav.init();} catch (e) {
            alert(e);}}, false );}( window ));

