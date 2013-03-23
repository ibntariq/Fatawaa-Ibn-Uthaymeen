(function () {
    'use strict';

    WinJS.Application.onmainwindowactivated = function (e) {
        if (e.detail.kind == Windows.ApplicationModel.Activation.ActivationKind.launch) {
            // TODO: startup code here
        }
    }

    WinJS.Application.start();

    $(document).ready(function () {
               
        
        $('#hadith_eng').transit({ opacity: 1 }, 3000);
        $('#container').transit({ y: '-20%' }, 1000);
        setTimeout(function () {
            $('.lang').transit({ opacity: 1 }, 2000);
        }, 1000)

        //Hovering Effects//
        $('#eng_box').hover(function () {
            $(this).css({ backgroundColor: "#0D4F8B" }, "slow").mouseleave(function () {
                $(this).css({ backgroundColor: "#191919" }, "slow");
            });                       
        });

        $('#urdu_box').hover(function () {
                        $(this).css({ backgroundColor: "#5C246E" }, "slow").mouseleave(function () {
                $(this).css({ backgroundColor: "#191919" }, "slow");
            });
        });

        $('#arb_box').hover(function () {
            $(this).css({ backgroundColor: "#B0171F" }, "slow").mouseleave(function () {
                $(this).css({ backgroundColor: "#191919" }, "slow");                
            });
        });


        //Changing of Hadith     
        

        //using hoverIntent
        var arb_config = {
            over: mouse_over,
            sensitivity: 3,
            interval: 300,                 
            out: mouse_leave    
        };

        $('#arb_box').hoverIntent(arb_config);

        function mouse_over() {
            $('#hadith_eng,#hadith_urdu').transit({ opacity: '0' }, 200);
            if ($('#hadith_arb').css('opacity') == 0) {
                $('#hadith_arb').stop(true).transit({ opacity: 1 }, 3000);
            }
        }

        function mouse_leave() {
           
        }


        var eng_config = {
            over: engmouse_over,
            sensitivity: 3,
            interval: 300,            
            out: engmouse_leave
        };

        $('#eng_box').hoverIntent(eng_config);

        function engmouse_over() {
            $('#hadith_arb,#hadith_urdu').transit({ opacity: '0' }, 200);
                if ($('#hadith_eng').css('opacity') == 0) {
                    $('#hadith_eng').stop(true).transit({ opacity: 1 }, 3000);
                }
        }

        function engmouse_leave() {

        }

        var urdu_config = {
            over: urdumouse_over,
            sensitivity: 3,
            interval: 300,            
            out: urdumouse_leave
        };

        $('#urdu_box').hoverIntent(urdu_config);

        function urdumouse_over() {
                $('#hadith_arb,#hadith_eng').transit({ opacity: '0' }, 200);
                if ($('#hadith_urdu').css('opacity') == 0) {
                    $('#hadith_urdu').stop(true).transit({ opacity: 1 }, 3000);
                }
        }

        function urdumouse_leave() {
        }       



        
    });

})();