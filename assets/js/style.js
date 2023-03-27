$(window).scroll(function() {
    var headerHeight = $(".header").outerHeight();
    // kiểm tra điều kiện > header thì mới addClass 
    if ($(window).scrollTop() > headerHeight) {
        $('.header').addClass('header-fixed');
    } else {
        $('.header').removeClass('header-fixed');
    }

    //scroll to div
    // if ($(this).scrollTop() >= $('.navigator').offset().top) {
    //     $('.navigator-container').addClass('fixed');
    //     $('.navigator-logo').show();
    // } else {
    //     $('.navigator-container').removeClass('fixed');
    //     $('.navigator-logo').hide();
    // }
});


/* back to top */
var btn = $('#backtotop');

$(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, '1000');
});




$(document).ready(function() {


    $(function() {
        const ids = ['acm', 'acp', 'adtCount', 'allCount']
        ids.forEach((id) => {
            return document.getElementById(id)
        })

        let valuead = 1;
        acp.addEventListener('click', (e) => {
            valuead++
            adtCount.innerText = valuead;
            allCount.innerText = valuead + valuech + valueinf;
        })
        acm.addEventListener('click', (e) => {
            if (valuead > 1) {
                valuead--
                adtCount.innerText = valuead;
                allCount.innerText = valuead + valuech + valueinf;
            }
        })


        const idsch = ['ccm', 'ccp', 'chdCount', 'allCount']
        idsch.forEach((id) => {
            return document.getElementById(id)
        })

        let valuech = 0;
        ccp.addEventListener('click', (e) => {
            valuech++
            chdCount.innerText = valuech;
            allCount.innerText = valuead + valuech + valueinf;
        })
        ccm.addEventListener('click', (e) => {
            if (valuech > 0) {
                valuech--
                chdCount.innerText = valuech;
                allCount.innerText = valuead + valuech + valueinf;
            }
        })

        const idsinf = ['icm', 'icp', 'infCount', 'allCount']
        idsinf.forEach((id) => {
            return document.getElementById(id)
        })

        let valueinf = 0;
        icp.addEventListener('click', (e) => {
            valueinf++
            infCount.innerText = valueinf;
            allCount.innerText = valuead + valuech + valueinf;
        })
        icm.addEventListener('click', (e) => {
            if (valueinf > 0) {
                valueinf--
                infCount.innerText = valueinf;
                allCount.innerText = valuead + valuech + valueinf;
            }
        })
    });


    $(".optbtn").click(function() {
        $(this).parents().children('.paxCount-dropmain').toggleClass('active');
    });

    $(".close-done").click(function() {
        $('.paxCount-dropmain').removeClass('active');
    });

    $(".optbtn").click(function() {
        $(this).parents().children('.cabin-dropmain').toggleClass('active');
    });
    $(".optbtn").click(function() {
        $(this).parents().children('.option__trip-inner').toggleClass('active');
    });

    $('.option-wrap__content > .row').hide()
    $(".option__trip-inner label").click(function() {
        var idNameOp = $(this).attr('data-opid');
        $('.option-wrap-content').children('.opitem[id = ' + idNameOp + ']').css('display', 'block');
        $('.option-wrap-content').children('.opitem').not($('.option-wrap-content').children('.opitem[id = ' + idNameOp + ']')).css('display', 'none');

    });



    // $('#check-in').datepicker();
    // $('#check-out').datepicker();
    $("#checkIn").flatpickr({
        dateFormat: "d/m/Y"
    });
    $("#checkOut").flatpickr({
        dateFormat: "d/m/Y"
    });


    $('.btn__add').click(function() {
        var html = `<div class="col-12 mb-4">
            <div class="row">
                <div class="col-lg-4">
                    <select name="" id="" class="form-control">
                    <option value="">Form Where </option>
                    <option value="">áddsdsd</option>
                    <option value="">áddsdsd</option>
                    <option value="">áddsdsd</option>
                    <option value="">áddsdsd</option>
                </select>
                </div>
                <div class="col-lg-4">
                    <select name="" id="" class="form-control">
                    <option value="">To Where</option>
                    <option value="">áddsdsd</option>
                    <option value="">áddsdsd</option>
                    <option value="">áddsdsd</option>
                    <option value="">áddsdsd</option>
                </select>
                </div>
                <div class="col-lg-4">
                    <div class="form-feild">
                        <input type="text" class="form-input hasDatepicker" id="date1" placeholder="mm/dd/yy">
                        <label for="" class="form-label">Date</label>
                        <span class="icon">
                        <i class="fa-duotone fa-calendar-days"></i>
                    </span>
                    </div>
                </div>
            </div>
        </div>`;
        $('#multicity-11').append(html);
    });

    $('.btn__del').click(function() {
        var countOpdiv = $('#multicity-11').children('div').length;
        if (countOpdiv > 2) {
            $('#multicity-11').children('div:last').remove();
        }
    });

    // $("#date1").flatpickr({
    //     dateFormat: "d/m/Y"
    // });

    $(".hasDatepicker").flatpickr({
        dateFormat: "d/m/Y"
    });

    // $(".bookingbar__input-wrapper").click(function() {
    //     $(this).children('.bookingbar__dropdown-content').toggleClass('open');
    // });

    // $(".bar_group").click(function() {
    //     if ($(window).width() < 1023) {
    //         $('.main_nav').slideToggle();
    //     }
    // });

    $("input[name=optrip]").click(function() {
        $(this).parents('.option-trip-icon').addClass('is-checked');
        $('.option-trip-icon').not($(this).parents('.option-trip-icon')).removeClass('is-checked');
        $('.option__trip-inner').removeClass('active');
        var getValue = $(this).parents('label').children('.option-trip-label').text();
        $('.valueTrip').text(getValue);
    });

    $("input[name=opcabin]").click(function() {
        $(this).parents('.option-cabin-icon').addClass('is-checked');
        $('.option-cabin-icon').not($(this).parents('.option-cabin-icon')).removeClass('is-checked');
        $('.cabin-dropmain').removeClass('active');
        var getValue = $(this).parents('label').children('.cabin-label-text').text();
        $('.cabin-dropvalue').text(getValue);

    });






    // $('#auth-signin').show();
    // $('#auth-signup').hide();
    $(".js-signup-btn").click(function() {
        $('#auth-signin').hide();
        $('#auth-signup').show();
    });
    $(".js-signin-btn").click(function() {
        $('#auth-signin').show();
        $('#auth-signup').hide();
    });



    // $('.header_navhover').hover(function() {
    //     if ($(window).width() > 1024) {
    //         $('.navContent').stop().slideDown("600");
    //     }
    // }, function() {
    //     if ($(window).width() > 1024) {
    //         $('.navContent').stop().slideUp("600");
    //     }
    // })

    $(".header-burger").click(function() {
        $('.menu').addClass('active');
    });
    $(".menu-btn").click(function() {
        $('.menu').removeClass('active');
    });


    $("input[name=SearchFormtripType]").click(function() {
        var valTitle = $(this).attr('data-label');
        $('.js-trip-type-label').text(valTitle);
    });



    //hover function
    // $(".menu-left .menu-left__link").mouseover(function() {
    //     $(this).addClass('open').removeClass('unhovered');
    //     $('.menu-left__link').not($(this)).addClass('unhovered');
    // });
    // $(".menu-left .menu-left__link").mouseout(function() {
    //     $(this).removeClass('open');
    // });

    $(document).mouseup(function(e) {
        if ($(e.target).closest(".paxCount-dropmain").length ===
            0) {
            $('.paxCount-dropmain').removeClass('active');
        }

        if ($(e.target).closest(".cabin-dropmain").length ===
            0) {
            $('.cabin-dropmain').removeClass('active');
        }
        if ($(e.target).closest(".option__trip-inner").length ===
            0) {
            $('.option__trip-inner').removeClass('active');
        }
    });



});

$('.select-air').select2({
    tags: true,
    placeholder: 'Select or Search by Airlines'
})

const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
signupBtn.onclick = (() => {
    loginForm.style.marginLeft = "-50%";
    loginText.style.marginLeft = "-50%";
});
loginBtn.onclick = (() => {
    loginForm.style.marginLeft = "0%";
    loginText.style.marginLeft = "0%";
});
signupLink.onclick = (() => {
    signupBtn.click();
    return false;
});