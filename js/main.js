

$(document).ready(function () {
    $(window).on('load', function (event) {
        $('.preloader').delay(500).fadeOut(500);
    });

    var zoomMap;
    var zoomLevel = 1;

    function activateMaps() {
        zoomMap = $('.maps-container-inner').ZoomArea({
            zoomLevel: 1,
            minZoomLevel: 1,
            maxZoomLevel: 15,
            animateTime: 300,
            parentOverflow: 'auto',
            exceptionsZoom: ['marker-all'],
            hideWhileAnimate: [],
            externalIncrease: '.map-control-zoomin',
            externalDecrease: '.map-control-zoomout',
            virtualScrollbars: false,
            usedAnimateMethod: 'jquery',
            onAfterZoom: handleElementVisbility
        });

        resizeFilterPanel();
    }

    function handleElementVisbility() {

        if (typeof zoomMap == 'undefined') {
            return;
        }

        var currentZoom = zoomMap.settings.zoomLevel;
        console.log(currentZoom);
        if (zoomLevel < currentZoom) {
            // zoomIn
            // $(".hide-at-2").fadeOut();
            // $(".hide-at-3").fadeOut();
            // $(".hide-at-4").fadeOut();
            if (currentZoom >= 1.5) {
                $(".visible-at-2").fadeIn();
                $(".hide-at-2").fadeOut();
                if (currentZoom >= 2) {
                    $(".visible-at-3").fadeIn();
                    $(".hide-at-3").fadeOut();
                    if (currentZoom >= 2.5) {
                        $(".visible-at-4").fadeIn();
                        $(".hide-at-4").fadeOut();
                        if (currentZoom >= 3) {
                            $(".visible-at-5").fadeIn();
                            $(".hide-at-5").fadeOut();
                        }
                    }
                }
            }
        } else {
            // zoomOut
            if (currentZoom < 3) {
                $(".visible-at-5").fadeOut();
                $(".hide-at-5").fadeIn();
                if (currentZoom < 2.5) {
                    $(".visible-at-4").fadeOut();
                    $(".hide-at-4").fadeIn();
                    if (currentZoom < 2) {
                        $(".visible-at-3").fadeOut();
                        $(".hide-at-3").fadeIn();
                        if (currentZoom < 1.5) {
                            $(".visible-at-2").fadeOut();
                            $(".hide-at-2").fadeIn();
                        }
                    }
                }
            }
        }
        zoomLevel = currentZoom;
    }

    function resizeFilterPanel() {
        $('.map-filter').removeAttr('style');
        if (parseInt($('.measurement').css('max-width'), 10) > 768) {
            $('.map-filter').css('height', $('.maps-container').outerHeight() + 'px');
        }
    }


    $(window).on("load", function () {
        activateMaps();
    });

    $(window).on("resize", function () {
        resizeFilterPanel();
    });
    $('#classic_view').hide();


    // $('#group-marker-assam').hide();
    // $('#group-marker-Manipur').hide();
    // $('#group-marker-Tripura').hide();
    // $('#group-marker-Meghalaya').hide();

    // $('#group-marker-Jharkhand').hide();
    // $('#group-marker-Odisha').hide();
    // $('#group-marker-Telangana').hide();
    // $('#group-marker-Karnataka').hide();
    // $('#group-marker-Punjab').hide();
    // $('#group-marker-Madhya').hide();
    // $('#group-marker-Uttarakhand').hide();
    // $('#group-marker-Bihar').hide();
    // $('#group-marker-Uttar').hide();
    // $('#group-marker-gujarat').hide();
    // $('#group-marker-Chhattisgarh').hide();
    // $('#group-marker-goa').hide();
    // $('#group-marker-Maharashtra').hide();
    // $('#group-marker-Pradesh').hide();

    // $('#group-marker-Kerala').hide();
    // $('#group-marker-andhra').hide();
    // $('#group-marker-Tamil').hide();

    // $('#group-marker-Sikkim').hide();
    // $('#group-marker-Arunachal').hide();
    // $('#group-marker-Nagaland').hide();

    // $('#group-marker-Mizoram').hide();
    // $('#group-marker-Bengal').hide();
    // $('#group-marker-Kashmir').hide();
    // $('#group-marker-Rajasthan').hide();
    // $('#group-marker-Ahemdabad').hide();
    // $('#group-marker-Surat').hide();
    // $('#group-marker-Pune').hide();
    // $('#group-marker-Mysuru').hide();
    // $('#group-marker-Kochi').hide();
    // $('#group-marker-Chennai').hide();

    $('#toggle_button').on('click', function () {

        if ($('#toggle_button span').text() == "Classic") {
            $('.map').fadeOut();
            $('#classic_view').fadeIn();
            $('#toggle_button span').text('Graphical');
        } else {
            $('.map').fadeIn();
            $('#classic_view').fadeOut();
            $('#toggle_button span').text('Classic');
        }

    });

});