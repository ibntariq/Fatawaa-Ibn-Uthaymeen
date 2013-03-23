(function () {
    'use strict';

    WinJS.Application.onmainwindowactivated = function (e) {
        if (e.detail.kind == Windows.ApplicationModel.Activation.ActivationKind.launch) {
            // TODO: startup code here
        }
    }

    WinJS.Application.start();

    $(document).ready(function () {

        //Effects at the start//
        $('#name').transit({ opacity: 1 }, 4000);
        $('#container').transit({ y: '-63%' }, 1000).delay(3000);
        $('.main_button').transit({ x: '40%', easing: 'snap' }, 1000);
        setTimeout(function () {
            $('.bg_pattern').transit({ opacity: 1 }, 2000);
        }, 1000)

        //Events on clicks//
        $('.box').click(function () {
            if ($('.bg_pattern').css('opacity') == 1) {
                $('.bg_pattern').transit({ opacity: 0 }, 'slow').delay(300);
                $('.main_button').transit({ opacity: 0 }, 'slow').css({ display: 'none' });
                $('.head').transit({ opacity: 0 }, 'slow').css({ display: 'none' });
                setTimeout(function () {
                    $('#container').transit({ opacity: 0 }, 'slow');
                }, 400)
                setTimeout(function () {
                    $('#container').css({ display: 'none' });
                }, 600)
                setTimeout(function () {
                    $('#display').fadeIn('slow').delay(3000);
                }, 1500)
                setTimeout(function () {
                    $('#back').fadeIn('fast').transit({ x: "54%", easing: 'snap' }, 2000);
                }, 1500)
            }
        })

        $('#aqd_box').click(function () {
            if ($('.bg_pattern').css('opacity') == 1) {
                setTimeout(function () {
                    $('#aqd_pg').transit({ x: "-108%", easing: 'snap' }, 2000);
                }, 1500)
            }
        });

        $('#mnhj_box').click(function () {
            if ($('.bg_pattern').css('opacity') == 1) {
                setTimeout(function () {
                    $('#mnhj_pg').transit({ x: "-108%", easing: 'snap' }, 2000);
                }, 1500)
            }
        });

        $('#wrshp_box').click(function () {
            if ($('.bg_pattern').css('opacity') == 1) {
                setTimeout(function () {
                    $('#wrshp_pg').transit({ x: "-108%", easing: 'snap' }, 2000);
                }, 1500)
            }
        });

        $('#misc_box').click(function () {
            if ($('.bg_pattern').css('opacity') == 1) {
                setTimeout(function () {
                    $('#misc_pg').transit({ x: "-108%", easing: 'snap' }, 2000);
                }, 1500)
            }
        });

        $('#abt_box').click(function () {
            if ($('.bg_pattern').css('opacity') == 1) {
                setTimeout(function () {
                    $('#abt_pg').transit({ x: "-108%", easing: 'snap' }, 2000);
                }, 1500)
            }
        });
    

        //Hovering Effects//
        $('#aqd_box').hover(function () {

            $(this).css({ backgroundColor: "#0D4F8B" }, "slow").mouseleave(function () {
                $(this).css({ backgroundColor: "#191919" }, "slow");
            });
        });

        $('#mnhj_box').hover(function () {

            $(this).css({ backgroundColor: "#5C246E" }, "slow").mouseleave(function () {
                $(this).css({ backgroundColor: "#191919" }, "slow");

            });
        });

        $('#wrshp_box').hover(function () {

            $(this).css({ backgroundColor: "#FF3030" }, "slow").mouseleave(function () {
                $(this).css({ backgroundColor: "#191919" }, "slow");

            });
        });

        $('#misc_box').hover(function () {

            $(this).css({ backgroundColor: "#327556" }, "slow").mouseleave(function () {
                $(this).css({ backgroundColor: "#191919" }, "slow");

            });
        });

        $('#abt_box').hover(function () {

            $(this).css({ backgroundColor: "#507786" }, "slow").mouseleave(function () {
                $(this).css({ backgroundColor: "#191919" }, "slow");

            });
        });

        //hovering on buttons
        $('#close').hover(function () {
            $(this).attr("src", "images/buttons/hovclose.png").mouseleave(function () {
                $(this).attr("src", "images/buttons/close.png")
            })
        })

        $('#home').hover(function () {
            $(this).attr("src", "images/buttons/hov_home.png").mouseleave(function () {
                $(this).attr("src", "images/buttons/home.png")
            })
        })

        $('.button').hover(function () {
            $(this).attr("src", "images/buttons/hov_back.png").mouseleave(function () {
                $(this).attr("src", "images/buttons/back.png")
            })

        })

        //clicks on buttons
        $('#back').click(function () {
            location.reload(true);
        })

        $('#home').click(function () {
            if ($('.bg_pattern').css('opacity') == 1) {
                $('#home_button').attr("href", "/default.html");
            }
        })

        $('#close').click(function () {
            window.close();
        })


    });
})();