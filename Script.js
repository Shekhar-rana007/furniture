CDN_URL = 'https://d3juy0zp6vqec8.cloudfront.net/';
function change_payment_type(type = 'one_time') {
    if (type == 'enach') {
        // $("#recurring_payment").show();
        // $('.nach_field').show();
        // $("#normal_payment").hide();
        // $(".common").show();
        $("#wallet_coins").hide();
    } else {
        $("#wallet_coins").show();
        $(".common").hide();
        $(".nach_field").hide();
        $("#normal_payment").show();
        $("#recurring_payment").hide();
        $('.recurring-field').hide();
}

}


function checkBoxValidationAdmin(t, e) {
    for (var a = 0, i = "on", r = $("#display_form input"), n = 0; n < r.length; n++)
        "checkbox" == r[n].type && r[n].checked && (a = 1, "on" != r[n].value && (i = r[n].value));
    return 0 == a ? (alert("Please Select the CheckBox"), !1) : "on" == i ? (alert("No records found "), !1) : void confirm_global_status(t, e)
}

function checkBoxWithSelectValidationAdmin(t, e) {
    if ("" == $("#mail_contents").val())
        return alert("Please select the mail template"), !1;
    for (var a = 0, i = "on", r = $("#display_form input"), n = 0; n < r.length; n++)
        "checkbox" == r[n].type && r[n].checked && (a = 1, "on" != r[n].value && (i = r[n].value));
    return 0 == a ? (alert("Please Select the CheckBox"), !1) : "on" == i ? (alert("No records found "), !1) : void confirm_global_status(t, e)
}

function SelectValidationAdmin(t, e) {
    if ("" == $("#mail_contents").val())
        return alert("Please select the mail template"), !1;
    confirm_global_status(t, e)
}

function confirm_global_status(t, e) {
    $.confirm({
        title: "Confirmation",
        message: "Whether you want to continue this action?",
        buttons: {
            Yes: {
                class: "yes",
                action: function () {
                    bulk_logs_action(t, e)
                }
            },
            No: {
                class: "no",
                action: function () {
                    return !1
                }
            }
        }
    })
}

function bulk_logs_action(t, e) {
    var a = prompt("For Security Purpose, Please Enter Email Id");
    return "" == a ? (alert("Please Enter The Email ID"), !1) : null != a && (a != e ? (alert("Please Enter The Correct Email ID"), !1) : ($("#statusMode").val(t), $("#SubAdminEmail").val(e), void $("#display_form").submit()))
}

function confirm_status(t) {
    $.confirm({
        title: "Confirmation",
        message: "You are about to change the status of this record ! Continue?",
        buttons: {
            Yes: {
                class: "yes",
                action: function () {
                    window.location = BaseURL + t
                }
            },
            No: {
                class: "no",
                action: function () {
                    return !1
                }
            }
        }
    })
}

function confirm_set_theme(t) {
    $.confirm({
        title: "Confirmation",
        message: "Are you sure? This cannot be undone!",
        buttons: {
            Yes: {
                class: "yes",
                action: function () {
                    window.location = BaseURL + t
                }
            },
            No: {
                class: "no",
                action: function () {
                    return !1
                }
            }
        }
    })
}

function confirm_mode(t) {
    $.confirm({
        title: "Confirmation",
        message: "You are about to change the display mode of this record ! Continue?",
        buttons: {
            Yes: {
                class: "yes",
                action: function () {
                    window.location = BaseURL + t
                }
            },
            No: {
                class: "no",
                action: function () {
                    return !1
                }
            }
        }
    })
}

function confirm_delete(t) {
    $.confirm({
        title: "Delete Confirmation",
        message: "You are about to delete this record. <br />It cannot be restored at a later time! Continue?",
        buttons: {
            Yes: {
                class: "yes",
                action: function () {
                    window.location = BaseURL + t
                }
            },
            No: {
                class: "no",
                action: function () {
                    return !1
                }
            }
        }
    })
}

function checkBoxCategory() {
    for (var t = 0, e = "on", a = $("#display_form input"), i = 0; i < a.length; i++)
        "checkbox" == a[i].type && a[i].checked && (t = 1, e = a[i].value);
    return 0 == t ? (alert("Please Select the CheckBox"), !1) : t > 1 ? (alert("Please Select only one CheckBox at a time"), !1) : "on" == e ? (alert("No records found "), !1) : void confirm_category_checkbox(e)
}

function confirm_category_checkbox(t) {
    $.confirm({
        title: "Confirmation",
        message: "Whether you want to continue this action?",
        buttons: {
            Yes: {
                class: "yes",
                action: function () {
                    $("#checkboxID").val(t), $("#display_form").submit()
                }
            },
            No: {
                class: "no",
                action: function () {
                    return !1
                }
            }
        }
    })
}

function changeSellerStatus(t, e) {
    val = $("#seller_status_" + t).val(), "" != val && "" != t && $.ajax({
        type: "POST",
        url: "admin/seller/change_seller_request",
        data: {
            id: t,
            status: val,
            user_id: e
        },
        dataType: "json",
        success: function (t) {
            alert(t)
        }
    })
}

function disableGiftCards(t, e) {
    $.confirm({
        title: "Confirmation",
        message: "You are about to change the mode of giftcards ! Continue?",
        buttons: {
            Yes: {
                class: "yes",
                action: function () {
                    var a = prompt("For Security Purpose, Please Enter Email Id");
                    return "" == a ? (alert("Please Enter The Email ID"), !1) : null != a && (a != e ? (alert("Please Enter The Correct Email ID"), !1) : void(window.location = BaseURL + t))
                }
            },
            No: {
                class: "no",
                action: function () {
                    return !1
                }
            }
        }
    })
}

function editPictureProducts(t, e) {
    var a = "img_" + t,
            i = window.location.pathname,
            r = i.substring(i.lastIndexOf("/") + 1);
    $.ajax({
        type: "POST",
        url: BaseURL + "admin/product/editPictureProducts",
        data: {
            id: a,
            cpage: r,
            position: t,
            imgId: e
        },
        dataType: "json",
        success: function (e) {
            if ("No" == e)
                return alert("You can't delete all the images"), !1;
            $("#img_" + t).remove()
        }
    })
}

function editPictureProductsUser(t, e) {
    var a = "img_" + t,
            i = window.location.pathname,
            r = i.substring(i.lastIndexOf("/") + 1);
    $.ajax({
        type: "POST",
        url: BaseURL + "site/product/editPictureProducts",
        data: {
            id: a,
            cpage: r,
            position: t,
            imgId: e
        },
        dataType: "json",
        success: function (e) {
            if ("No" == e)
                return alert("You can't delete all the images"), !1;
            $("#img_" + t).remove()
        }
    })
}

function quickSignup() {
    $.dialog("signin-overlay");
    var t = $.dialog("register"),
            e = $("#signin-email").val();
    $.ajax({
        type: "POST",
        url: baseURL + "site/user/quickSignup",
        data: {
            email: e
        },
        dataType: "json",
        success: function (e) {
            if ("0" == e.success)
                return alert(e.msg), !1;
            $(".quickSignup2 .username").val(e.user_name), $(".quickSignup2 .url b").text(e.user_name), $(".quickSignup2 .email").val(e.email), $(".quickSignup2 .fullname").val(e.full_name), t.open()
        }
    })
}

function quickSignup2() {
    var t = $(".quickSignup2 .username").val(),
            e = $(".quickSignup2 .email").val(),
            a = $(".quickSignup2 .user_password").val(),
            i = $(".quickSignup2 .fullname").val();
    $.ajax({
        type: "POST",
        url: baseURL + "site/user/quickSignupUpdate",
        data: {
            username: t,
            email: e,
            password: a,
            fullname: i
        },
        dataType: "json",
        success: function (t) {
            if ("0" == t.success)
                return alert(t.msg), !1;
            location.href = baseURL + "send-confirm-mail"
        }
    })
}

function register_user() {
    var t = window.location,
            e = $("#fullname").val(),
            a = $("#phone_no").val(),
            i = $("#cart_email").val(),
            r = "",
            n = "",
            o = "",
            rc = $('#referral_code_signup').val(),
            s = window.location.search,
            l = "no";
    $(".brandSt").is(":checked") && (l = "yes"), $.ajax({
        type: "POST",
        url: baseURL + "site/user/registerUser",
        data: {
            fullname: e,
            mobile: a,
            email: i,
            pwd: r,
            brand: l,
            api_id: n,
            thumbnail: o,
            referral_code: rc,
            otp: $("#otp").val()
        },
        dataType: "json",
        success: function (e) {
            "0" == e.success ? toast(e.msg, 'toast bg-danger', '4000') : (
                    setTimeout(function () {
                        const identifyEventRegisterNew = new amplitude.Identify();
                        identifyEventRegisterNew.set('Phone Number', a);
                        identifyEventRegisterNew.set('Email Id', e.emailid);
                        identifyEventRegisterNew.set('Full Name', e.full_name);
                        identifyEventRegisterNew.set('User Id', e.user_id);
                        identifyEventRegisterNew.set('User ID', e.user_id);
                        amplitude.identify(identifyEventRegisterNew);
                        location.href = baseURL + 'cart';
                    }, 3000));
        }
    });
}

function cartalreadylogin() {
    var emailExp = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if ($("#cart_email").val() == '') {
        toast('Please enter email address.', 'toast bg-danger', '5000');
        return false;
    }
    if (!$("#cart_email").val().match(emailExp))
    {
        toast('Please enter valid email address.', 'toast bg-danger', '5000');
        return false;
    }

    if ($("#fullname").val() == '') {
        toast('Please enter full name', 'toast bg-danger', '5000');
        return false;
    }
    if ($("#fullname").val().length <= 2) {
        toast('Name should be atleast 2 characters long.', 'toast bg-danger', '5000');
        return false;
    }
    $.ajax({
        url: baseURL + 'site/user/update_user_details',
        method: 'post',
        data: {
            email: $("#cart_email").val(),
            fullname: $("#fullname").val(),
            referral_code: $("#referral_code_signup").val()
        },
        dataType: 'json',
        success: function (response) {
            if (response.status_code == 400) {
                toast(response.message, 'toast bg-danger', '5000');
            } else {
                window.location.reload();
            }
        }
    });
}
function register_user_new() {
    var t = window.location,
            e = $("#fullname").val(),
            a = $("#phone_no").val(),
            i = $("#email").val(),
            r = "",
            n = "",
            o = "",
            rc = $('#referral_code_signup').val(),
            s = window.location.search,
            l = "no",
            ml = $('#mailmodo').val();
    $(".brandSt").is(":checked") && (l = "yes"), $.ajax({
        type: "POST",
        url: baseURL + "site/user/registerUser",
        data: {
            fullname: e,
            mobile: a,
            email: i,
            pwd: r,
            brand: l,
            api_id: n,
            thumbnail: o,
            referral_code: rc,
            otp: $("#otp").val()
        },
        dataType: "json",
        success: function (e) {
            "0" == e.success ? toast(e.msg, 'toast bg-danger', '2000') : (toast('User Login Successfully', 'toast bg-success', 3500),
                    setTimeout(function () {
                        $('#overlay').show();
                        const identifyEventRegisterUserNew = new amplitude.Identify();
                        identifyEventRegisterUserNew.set('Phone Number', a);
                        identifyEventRegisterUserNew.set('Email Id', e.emailid);
                        identifyEventRegisterUserNew.set('Full Name', e.full_name);
                        identifyEventRegisterUserNew.set('User Id', e.user_id);
                        identifyEventRegisterUserNew.set('User ID', e.user_id);
                        amplitude.identify(identifyEventRegisterUserNew);
                        if (ml === 'mailmodo') {
                            location.href = baseURL + 'cart';
                        } else {
                            location.href = baseURL;
                        }
                        
                    }, 3000));
        }
    });
}

function register_user_cart() {
    var t = window.location,
            e = $("#fullname").val(),
            a = $("#phone_no").val(),
            i = $("#cart_email").val(),
            r = '',
            n = '',
            o = '',
            rc = '',
            s = window.location.search,
            l = "no";
    $(".brandSt").is(":checked") && (l = "yes"), $.ajax({
        type: "POST",
        url: baseURL + "site/user/registerUser",
        data: {
            fullname: e,
            mobile: a,
            email: i,
            pwd: r,
            brand: l,
            api_id: n,
            thumbnail: o,
            referral_code: rc,
            otp: $("#otp").val()
        },
        dataType: "json",
        success: function (e) {
            "0" == e.success ? toast(e.msg, 'toast bg-danger', '2000') : (
                    setTimeout(function () {
//                        location.href = baseURL + 'cart';
                        $.ajax({
                            url: baseURL + "site/user/verify_otp_new",
                            method: 'post',
                            data: {
                                mobile: document.getElementById('phone_no').value,
                                otp: document.getElementById('otp').value
                            },
                            dataType: 'json',
                            success: function (response) {
                                if (response.status_code == 200) {
                                    $('#overlay').show();
//                                        toast('Yay ! You are Successfully Logged In :)', 'toast bg-success', '5000');
                                    setTimeout(function () {
                                        window.location.href = baseURL + 'cart';
                                    }, 2000);
                                }
                            }
                        });
                    }, 2000));
        }
    });
}

function forgot_password() {
    $("#forgot-pass").validate({
        rules: {
            forgotemail: {
                required: !0,
                email: !0
            }
        },
        messages: {
            forgotemail: {
                required: "<font color='red'>Email cannot be empty.</font>",
                email: "<font color='red'>Please enter a valid email address.</font>"
            }
        },
        errorPlacement: function (error, element) {
            var placement = $(element).data('error');
            if (placement) {
                $(placement).append(error)
            } else {
                error.insertAfter(element);
            }
        },
        submitHandler: function (t) {
            $('#forgotsubmit').attr('disabled', 'disabled');
            $.ajax({
                type: "POST",
                url: baseURL + "site/user/forgot_password_user",
                data: {
                    forgotemail: $("#forgotemail").val()
                },
                dataType: "json",
                beforeSend: function () {
                    // $("#forgotsubmit").attr("disabled", !0)
                    $('#overlay').show();
                },
                success: function (t) {
                    $('#overlay').hide();
                    $("#forgotsubmit").removeAttr("disabled"), $("#h3_text").css("display", "none"), "0" == t.status ? ($("#div_for").hide(), $("#forgot_password").hide(), $("#email_error").show(), setTimeout(function () {
                        $("#h3_text").css("display", "block"), $("#email_error").hide(), $("#forgot_password").hide(), $("#div_for").show()
                    }, 1e3)) : ($("#div_for").hide(), $("#forgot_password").show(), setTimeout(function () {
                        location.reload()
                    }, 3e3)), $("#overlay").hide()
                },
                error: function (error) {
                    $('#overlay').hide();
                    console.log(error);
                }
            })
        }
    })
}

function hideErrDiv(t) {
    $("#" + t).hide("slow")
}

function resendConfirmation(t) {
    toast('We have sent account verification link on your registered mail ID.', 'toast bg-success', 3500);

    $("#resend_mail_button").attr("disabled", !0), "" != t && ($(".confirm-email").html("<span>Sending...</span>"), $.ajax({
        type: "POST",
        url: baseURL + "site/user/resend_confirm_mail",
        data: {
            mail: t
        },
        dataType: "json",
        beforeSend: function () {
            // $("#overlay").show();
            // toast('We have sent account verification link on your registered mail ID.','toast bg-success',3500);

        },
        success: function (t) {
            if ("0" == t.success)
                return alert(t.msg), !1;
            // $("#overlay").hide(), 
            //toast('We have sent account verification link on your registered mail ID.','toast bg-success',3500);

        }
    }))
}

function profileUpdate() {
    $("#profile_settings_form").validate({
        rules: {
            name: {
                required: !0,
                minlength: 2,
                maxlength: 20
            },
            phone_no: {
                required: !0,
                minlength: 10,
                maxlength: 10,
                number: !0
            }
        },
        messages: {
            name: {
                required: "Name cannot be empty.",
                minlength: "Name has atleast 2 character long.",
                maxlength: "Name should be 20 characters maximum."
            },
            phone_no: {
                required: "Number cannot be empty.",
                minlength: "Number has atleast 10 character long.",
                maxlength: "Number should be 10 characters maximum.",
                number: "Please enter a valid Mobile Number."
            }
        },
        submitHandler: function (t) {
            var e = $("#phone_no").val(),
                    a = $("#name").val(),
                    i = $("#setting_website").val(),
                    r = $(".setting_location").val(),
                    n = $(".setting_twitter").val(),
                    o = $(".setting_facebook").val(),
                    s = $(".setting_google").val(),
                    l = $(".birthday_year").val(),
                    d = $(".birthday_month").val(),
                    c = $(".birthday_day").val(),
                    u = $(".setting_bio").val(),
                    p = $("#email").val(),
                    m = $(".setting_age").val(),
                    _ = $(".setting_gender:checked").val();
            $.ajax({
                type: "POST",
                url: baseURL + "site/user_settings/update_profile",
                data: {
                    full_name: a,
                    web_url: i,
                    location: r,
                    s_city: r,
                    twitter: n,
                    facebook: o,
                    google: s,
                    b_year: l,
                    b_month: d,
                    b_day: c,
                    about: u,
                    email: p,
                    age: m,
                    gender: _,
                    phone_no: e
                },
                dataType: "json",
                success: function (t) {
                    if ("0" == t.success)
                        return toast(t.msg, 'toast bg-primary', 4000), $("#save_account").removeAttr("disabled"), !1;
                    window.location.href = baseURL + "settings"
                }
            })
        }
    })
}

function updateUserPhoto() {
    if ("" == $(".uploadavatar").val())
        return toast("Choose an image to upload", 'toast bg-warning', 3000), $("#save_profile_image").removeAttr("disabled"), !1;
    $("#profile_settings_form").removeAttr("onSubmit"), $("#profile_settings_form").submit()
}

function updateUserDoc1() {
    if ("" == $("#uploadavatar-doc1").val())
        return toast("Choose an image to upload", 'toast bg-warning', 3000), $("#save_profile_image").removeAttr("disabled"), !1;
    $("#profile_settings_form").removeAttr("onSubmit"), $("#profile_settings_form").submit()
}

function updateUserDoc2() {
    if ("" == $("#uploadavatar-doc2").val())
        return toast("Choose an image to upload", 'toast bg-warning', 3000), $("#save_profile_image").removeAttr("disabled"), !1;
    $("#profile_settings_form").removeAttr("onSubmit"), $("#profile_settings_form").submit()
}

function updateUserDoc3() {
    if ("" == $("#uploadavatar-doc3").val())
        return toast("Choose an image to upload", 'toast bg-warning', 3000), $("#save_profile_image").removeAttr("disabled"), !1;
    $("#profile_settings_form").removeAttr("onSubmit"), $("#profile_settings_form").submit()
}

function deleteUserPhoto() {
    if (!window.confirm("Are you sure?"))
        return $("#delete_profile_image").removeAttr("disabled"), !1;
    $.ajax({
        type: "POST",
        url: baseURL + "site/user_settings/delete_user_photo",
        dataType: "json",
        success: function (t) {
            if ("0" == t.success)
                return alert(t.msg), $("#delete_profile_image").removeAttr("disabled"), !1;
            window.location.href = baseURL + "settings"
        }
    })
}

function deactivateUser() {
    $("#close_account").disable(), window.confirm("Are you sure?") ? $.ajax({
        url: baseURL + "site/user_settings/delete_user_account",
        success: function (t) {
            window.location.href = baseURL
        }
    }) : $("#close_account").removeAttr("disabled")
}

function delete_gift(t, e) {
    $.ajax({
        type: "POST",
        url: baseURL + "site/cart/ajaxDelete",
        data: {
            curval: t,
            cart: "gift"
        },
        success: function (t) {
            var a = t.split("|");
            $("#gift_cards_amount").val(a[0]);
            $("#item_total").html(a[0]);
            $("#total_item").html(a[0]);
            $("#Shop_id_count").html(a[1]);
            $("#Shop_MiniId_count").html(a[1] + " items");
            $("#giftId_" + e).hide();
            $("#GiftMindivId_" + e).hide();
            0 == a[0] && ($("#GiftCartTable").hide(), 0 == a[1] && $("#EmptyCart").show());
        }
    })
}

function delete_subscribe(t, e) {
    $.ajax({
        type: "POST",
        url: baseURL + "site/cart/ajaxDelete",
        data: {
            curval: t,
            cart: "subscribe"
        },
        success: function (t) {
            var a = t.split("|");
            $("#subcrib_amount").val(a[0]);
            $("#subcrib_ship_amount").val(a[1]);
            $("#subcribt_tax_amount").val(a[2]);
            $("#subcrib_total_amount").val(a[3]);
            $("#SubCartAmt").html(a[0]);
            $("#SubCartSAmt").html(a[1]);
            $("#SubCartTAmt").html(a[2]);
            $("#SubCartGAmt").html(a[3]);
            $("#Shop_id_count").html(a[4]);
            $("#Shop_MiniId_count").html(a[4] + " items");
            $("#SubscribId_" + e).hide();
            $("#SubcribtMinidivId_" + e).hide();
            0 == a[0] && ($("#SubscribeCartTable").hide(), 0 == a[4] && $("#EmptyCart").show());
        }
    })
}

function ajaxEditproductAttribute(t, e, a, i) {
    $("#loadingImg_" + t).html('<span class="loading"><img src="' + CDN_URL + 'images/indicator.gif" alt="Loading..."></span>'), $.ajax({
        type: "POST",
        url: baseURL + "admin/product/ajaxProductAttributeUpdate",
        data: {
            attId: t,
            attname: e,
            attprice: a,
            pid: i
        },
        success: function (e) {
            $("#loadingImg_" + t).html("")
        }
    })
}

function ajaxChangeproductAttribute(t, e, a, i) {
    $("#loadingImg_" + t).html('<span class="loading"><img src="' + CDN_URL + 'images/indicator.gif" alt="Loading..."></span>'), $.ajax({
        type: "POST",
        url: baseURL + "site/product/ajaxProductAttributeUpdate",
        data: {
            attId: t,
            attname: e,
            attprice: a,
            pid: i
        },
        success: function (e) {
            $("#loadingImg_" + t).html("")
        }
    })
}

function ajaxCartAttributeChange(t, e) {
    $("#loadingImg_" + e).html('<span class="loading"><img src="' + CDN_URL + 'images/indicator.gif" alt="Loading..."></span>'), $("#AttrErr").html(""), $("#AttrErr").hide(), $("#loadingmessage").show(), $.ajax({
        type: "POST",
        url: baseURL + "site/product/ajaxProductDetailAttributeUpdate",
        data: {
            prdId: e,
            attId: t
        },
        success: function (t) {
            var a = t.split("|");
            $("#attribute_values").val(a[0]), $("#price").val(a[1]), $("#SalePrice,#SalePricePop").html(a[1]), $("#loadingImg_" + e).html(""), $("#loadingmessage").hide()
        }
    })
}

function ajaxCartAttributeChangePopup(t, e) {
    $("#loadingImg1_" + e).html('<span class="loading"><img src="' + CDN_URL + 'images/indicator.gif" alt="Loading..."></span>'), $.ajax({
        type: "POST",
        url: baseURL + "site/product/ajaxProductDetailAttributeUpdate",
        data: {
            prdId: e,
            attId: t
        },
        success: function (a) {
            var i = a.split("|");
            $("#attribute_values").val(i[0]), $("#attr_name_id").val(t), $("#price").val(i[1]), $("#SalePrice,#SalePricePop").html(i[1]), $("#loadingImg1_" + e).html("")
        }
    })
}

function delete_cart(p, e, product_name='') {
    var i = $("#is_coupon").val();
    $.ajax({
        type: "POST",
        url: baseURL + "site/cart/ajaxDelete",
        data: {
            curval: p,
            cart: "cart",
            code: i
        },
        success: function (t) {
            removeCoins_on_coupon_vjs();
            if (p_ev) {
                amplitude.track('Remove From Cart', {
                    "Product Name": product_name
                });
            }
            $("#price_table").empty();
            $("#min-cart-product-" + e).fadeOut();
            $("#min-cart-product-" + e).remove();
            $("#cart-row-" + p).fadeOut();
            $("#cart-row-" + p).remove();
            $("#cart-row-first-" + p).fadeOut();
            $("#cart-row-first-" + p).remove();
            var r = t.split("|");
            var cart_data_wcs = JSON.parse(r[r.length - 1]);
            if ("" != r[11]) {
                var n = "<b> " + r[11] + ".</b> products are not available in your city, please remove and select products from your city.";
                $("#cartSubmit .frmcart .alert-danger").html(n)
            } else {
                $("#cartSubmit .frmcart .alert-danger").remove(), $("#cartSubmit .frmcart #button_div").hasClass("hide") && ($("#cartSubmit .frmcart #button_div").removeClass("hide"), $("#cartSubmit .frmcart #button_div button.form-nav-next").removeAttr("disabled"));
            }
            if (r[4] < 1) {
                $("#add_new_product, #min-cart-order-summary, #mini-cart-checkout-wrapper").empty();
                $("#new_product_added").empty();
                $(".priceaddon").hide();
                $(".btncartdiv").hide();
                $("#subtotal").hide();
                $("#add_new_product, #min-cart-order-summary").append('<div class="emptycartbar"><img src="' + CDN_URL + 'images/empty_cart.webp" alt="Empaty cart"><h5 style="text-align: center;">Your Cart is Empty</h5><p style="text-align: center;font-size: 12px;margin-top: 5px;">Looks like you have not chosen <br> any product yet</p></div>');
                $("#new_product_added").append('<div class="emptycartbar"><img src="' + CDN_URL + 'images/empty_cart.webp" alt="Empaty cart"><h5 style="text-align: center;">Your Cart is Empty</h5><p style="text-align: center;font-size: 12px;margin-top: 5px;">Looks like you have not chosen <br> any product yet</p></div>');
                $("#empty_msg").show();
                $("#title").hide();
                $(".emptycartbar").show();
            }
            if (r[4] > 0) {
                $("#user_cart_btn").html(`<span class="material-symbols-outlined">shopping_cart</span><span class="cart-badge" id="new_count">${r[4]}</span>`);
                $("#user_cart_btn_m").html(`<span class="material-symbols-outlined">shopping_cart</span><span class="cart-badge" id="new_count">${r[4]}</span>`);
            } else {
                $("#user_cart_btn").html('<span class="material-symbols-outlined">shopping_cart</span>');
                $("#user_cart_btn_m").html('<span class="material-symbols-outlined">shopping_cart</span>');
            }
            
            if ($('#TotalRentIncludeGST').length) {
                var totalrentincludegst = (parseFloat(cart_data_wcs['total_rent_after_discount']) + parseFloat(cart_data_wcs['total_gst']));
                $("#TotalRentIncludeGST").html('<i class="rupees-symbol">&#x20B9;</i> ' + totalrentincludegst.toFixed(2));
                $("#TotalRentIncludeGST1").html('<i class="rupees-symbol">&#x20B9;</i> ' + totalrentincludegst.toFixed(2));
            }
            
            $("#cart_amount").val(r[0]);
            $("#cart_ship_amount").val(r[1]);
            $("#cart_tax_amount").val(r[2]);
            $("#cart_total_amount").val(r[3]);
            $("#discount_Amt").val(r[5]);
            $("#CartAmt").html(cart_data_wcs['total_final_rent']);
            $("#CartAmtFirst").html(r[0]);
            $("#rental_amt").html('<i id="new_pricesymbl" class="fa fa-inr" aria-hidden="true"></i>' + r[0]);
            $("#min-cart-advance").html('<i class="rupees-symbol">&#x20B9;</i> ' + r[0]);
            $("#CartAmtDup").html(r[0]);
            $("#CartSAmt").html(cart_data_wcs['security_deposite']);
            $("#CartSAmtFirst").html(r[1]);
            $("#deposit_amt").html('<i id="new_pricesymbl" class="fa fa-inr" aria-hidden="true"></i>' + r[1]);
            $("#min-cart-refundable-deposit").html('<i class="rupees-symbol">&#x20B9;</i> ' + r[1]);
            $("#min-cart-subtotal").html('<i class="rupees-symbol">&#x20B9;</i> ' + r[3]);
            $("#CartTAmt").html(r[2]);
            $("#CartGAmt").html('<i id="new_pricesymbl" class="fa fa-inr" aria-hidden="true"></i>' + r[3]);
            $("#DetailCartGAmt").html('<i id="new_pricesymbl" class="fa fa-inr" aria-hidden="true"></i>' + r[3]);
            $("#CartCartGAmt").html('<i class="rupees-symbol">&#x20B9;</i> ' + cart_data_wcs['total_grand_final_rent']);
            $("#CartCartGAmtFirst").html('<i class="rupees-symbol">&#x20B9;</i> ' + r[10]);
            $("#Shop_id_count").html(r[4]);
            $("#Shop_MiniId_count").html(r[4] + " items");
            $("#disAmtVal").html('<i class="rupees-symbol">&#x20B9;</i> ' + cart_data_wcs['discount_amount']);
            $("#cartdivId_" + e).hide();
            $("#cartMindivId_" + e).hide();
            if (0 == r[0]) {
                $("#cartSubmit").hide();
                if (0 == r[4]) {
                    $("#EmptyCart").show();
                }
            }
            if (0 == r[6]) {
                $("#radio_buttons").empty();
                $("#payment_button_div").remove();
                $("#payment_button_div").remove();
                $("#form_submit_button1").remove();
                $("#radio_buttons").html("<p id=alert_message><font color=red>You can't buy only addon products</font></p>");
                $("#new_button_1").click(function () {
                    alert("You can't buy only addon products")
                });
            }
            $("#mobile_cart_row_" + e).fadeOut("slow");
            $("#cart-row-" + e).fadeOut("slow");
            $("#cart-row-inside-" + e).fadeOut("slow");
            $("#cart-row-first-" + e).fadeOut("slow");
            $("#header-cart-row-" + e).fadeOut("slow");
            $("#addon-product-detail-cart-" + e).fadeOut("slow");
            $("#all-product-detail-cart-" + e).fadeOut("slow");
            $("#image_tab" + e).fadeOut("slow");
            //$("#product_quantity_" + a).val("0");
            $("#CartAmt1").html(r[0]);
            $("#CartSAmt1").html(r[1]);
            $("#gstTaxVal").html('<i class="rupees-symbol">&#x20B9;</i> ' + cart_data_wcs['total_gst']);
            $("#gstTaxValFirst").html('<i class="rupees-symbol">&#x20B9;</i> ' + r[9]);
            $('#gstTaxVal1').html('&#8377; ' + r[9]);
            $("#CartCartGAmt1").html('<i class="rupees-symbol">&#x20B9;</i> ' + r[10]);
            $("#price_table").append(' <div class="discol"><label>ADVANCE RENTAL</label><span id="rental_amt"><i id="p-price" class="fa fa-inr" aria-hidden="true"></i>' + r[0] + '</span></div><div class="discol"><label>REFUNDABLE DEPOSIT</label><span id="deposit_amt"> <i id="p-price" class="fa fa-inr" aria-hidden="true"></i>' + r[1] + '</span></div><label>TOTAL RENT </label><span id="DetailCartGAmt"> <i id="p-price" class="fa fa-inr" aria-hidden="true"></i>' + r[3] + "</span> </div>");
            if ("yes" == r[7]) {
                checkRemove(i);
            }
//            console.log('li length');
//            console.log($('ul#cartitems li').length);
//            if($('ul#cartitems li').length == 0){
//                $('.desktop-proceed-btn').hide();
//                $('.cart-sidebar.align-items-start').remove();
//                $('.fixed-rental-plans-steps-listing').remove();
//                setTimeout(function () {
//                    window.location.href = baseURL;
//                },3000);
//            }
        }
    })
}

/*Remove Wallet coins */
function removeCoins_on_coupon_vjs(type = 'null') {
    $.ajax({
        type: 'get',
        url: baseURL + 'site/user/refresh_coins_on_coupon_applied',
        dataType: 'json',
        success: function (response) {
            if ($('#removeCFCoins').length > 0) {
                $('#removeCFCoins').click();
            }
            if (response.status == 200) {
                $('.wallet_amount_visible').remove();
                $('.wallet_grand_total').remove();
                $('#wallet_message').html('<label style="color:green">Coins Released</label>');
                $('#CoinsRedeemed').html('-<i class="rupees-symbol">&#x20B9;</i> 0');
                $('#CartCartGAmt1').html('<i class="rupees-symbol">&#x20B9;</i>' + response.data.total_after_wallet_discount);
                $('#CartCartGAmt').html('<i class="rupees-symbol">&#x20B9;</i>' + response.data.total_after_wallet_discount);
                $('.cartInvoiceBal').html(response.data.total_after_wallet_discount);
                $('.coins-amt').html('<i class="icn icn-coins-gold"></i>' + response.data.original_wallet);
                var html = '<label>Coins to be Redeemed</label> <input type="text" id="wallet_amount" name="" value=""><span class="redeem-btn flex-full justify-content-center"><a href="javascript:void(0)" onclick="VerifyWalletAndApply(\'' + type + '\')" class="explore-btn" >Redeem</a></span>';
                $("#redeemcoinDiv").html(html);
                setTimeout(function () {
                    $('#wallet_message').html('');
                }, 3000);
            }
        }
    })
}


function update_cart(t, e, a, i = !1) {
    var r, n = $("#quantity" + e).val(),
            o = $("#attr_name" + e).val();
    r = void 0 === o ? $("#cart-price" + e).text() : (r = o.split("|"))[1];
    var s = 0,
            l = $("#quantity" + e).data("mqty");
    if (n - n != 0 || "" == n || "0" == n || n < "0")
        return alert("Invalid Quantity"), !1;
    $.ajax({
        type: "post",
        url: baseURL + "site/cart/getQty/" + a + "/" + t,
        success: function (t) {
            s = t
        },
        complete: function () {
            parseInt(n) + parseInt(s) > l ? alert("Maximum stock available for this product is " + l) : $.ajax({
                type: "POST",
                url: baseURL + "site/cart/ajaxUpdate",
                data: {
                    updval: t,
                    qty: n,
                    attribute_values: o,
                    price: r,
                    op: i
                },
                success: function (t) {
                    var a = t.split("|");
                    $("#cart_amount").val(a[1]), $("#cart_ship_amount").val(a[2]), $("#cart_tax_amount").val(a[3]), $("#cart_total_amount").val(a[4]), $("#discount_Amt").val(a[6]), $("#IndTotalVal" + e).html(a[0]), $("#CartAmt").html(a[1]), $("#CartAmtFirst").html(a[1]), $("#rental_amt").html('<i id="new_pricesymbl" class="fa fa-inr" aria-hidden="true"></i>' + a[1]), $("#CartAmt1").html(a[1]), $("#CartAmtDup").html(a[1]), $("#CartSAmt").html(a[2]), $("#CartSAmtFirst").html(a[2]), $("#deposit_amt").html('<i id="new_pricesymbl" class="fa fa-inr" aria-hidden="true"></i>' + a[2]), $("#CartTAmt").html(a[3]), $("#CartGAmt").html('<i id="p-price" class="fa fa-inr" aria-hidden="true"></i>' + a[4]), $("#MCartGAmt").html(a[10]), $("#Shop_id_count").html(a[5]), $("#Shop_MiniId_count").html(a[5] + " items"), $("#disAmtVal").html('<i class="rupees-symbol">&#x20B9;</i> ' + a[6]), location.reload()
                }
            })
        }
    })
}

function update_cart_mobile(t, e, a, i) {
    var r, n = $("#quantity-mobile" + e).val(),
            o = $("#attri_name" + e).val();
    r = null == o ? $("#cart-prodcuct-price-" + e).text() : (r = o.split("|"))[1];
    var s = 0,
            l = $("#quantity-mobile" + e).data("mqty");
    if (null != i && 1 == n && 0 == i)
        return alert("Invalid Quantity"), !1;
    null == i && (i = !1), $.ajax({
        type: "post",
        url: baseURL + "site/cart/getQty/" + a + "/" + t,
        success: function (t) {
            s = t
        },
        complete: function () {
            parseInt(n) + parseInt(s) > l ? alert("Maximum stock available for this product is " + l) : $.ajax({
                type: "POST",
                url: baseURL + "site/cart/ajaxUpdate",
                data: {
                    updval: t,
                    qty: n,
                    attribute_values: o,
                    price: r,
                    op: i
                },
                success: function (t) {
                    var i = t.split("|");
                    $("#cart_amount").val(i[1]), $("#cart_ship_amount").val(i[2]), $("#cart_tax_amount").val(i[3]), $("#cart_total_amount").val(i[4]), $("#discount_Amt").val(i[6]), $("#IndTotalVal" + e).html(i[0]), $("#CartAmt").html(i[1]), $("#CartAmtFirst").html(i[1]), $("#CartAmt1").html(i[1]), $("#rental_amt").html('<i id="new_pricesymbl" class="fa fa-inr" aria-hidden="true"></i>' + i[1]), $("#CartAmtDup").html(i[1]), $("#CartSAmt").html(i[2]), $("#CartSAmtFirst").html(i[2]), $("#CartSAmt1").html(i[2]), $("#deposit_amt").html('<i id="new_pricesymbl" class="fa fa-inr" aria-hidden="true"></i>' + i[2]), $("#CartTAmt").html(i[3]), $("#CartGAmt").html('<i id="p-price" class="fa fa-inr" aria-hidden="true"></i>' + i[4]), $("#MCartGAmt").html(i[4]), $("#Shop_id_count").html(i[5]), $("#Shop_MiniId_count").html(i[5] + " items"), $("#disAmtVal").html('<i class="rupees-symbol">&#x20B9;</i> ' + i[6]), $("#CartCartGAmt").html('<i class="rupees-symbol">&#x20B9;</i> ' + i[4]), $("#CartCartGAmtFirst").html('<i class="rupees-symbol">&#x20B9;</i> ' + i[4]), $("#CartCartGAmt1").html('<i class="rupees-symbol">&#x20B9;</i> ' + i[10]), $("#new_quantity1_" + a).html(i[8])
                }
            })
        }
    })
}

function CartChangeAddress(t) {
    var e = $("#cart_amount").val(),
            a = $("#discount_Amt").val();
    $.ajax({
        type: "POST",
        url: baseURL + "site/cart/ajaxChangeAddress",
        data: {
            add_id: t,
            amt: e,
            disamt: a
        },
        success: function (e) {
            if ("0" == e)
                return !1;
            var a = e.split("|");
            $("#Ship_address_val").val(t), $("#Chg_Add_Val").html(a[4])
        }
    })
}

function SubscribeChangeAddress(t) {
    var e = $("#subcrib_amount").val();
    $.ajax({
        type: "POST",
        url: baseURL + "site/cart/ajaxSubscribeAddress",
        data: {
            add_id: t,
            amt: e
        },
        success: function (e) {
            if ("0" == e)
                return !1;
            var a = e.split("|");
            $("#subcrib_ship_amount").val(a[0]), $("#subcrib_tax_amount").val(a[1]), $("#subcrib_total_amount").val(a[3]), $("#SubCartSAmt").html(a[0]), $("#SubCartTAmt").html(a[1]), $("#SubTamt").html(a[2]), $("#SubCartGAmt").html(a[3]), $("#SubShip_address_val").val(t), $("#SubChg_Add_Val").html(a[4])
        }
    })
}

function shipping_Subcribe_address_delete() {
    var t = $("#SubShip_address_val").val();
    $.ajax({
        type: "POST",
        url: baseURL + "site/cart/ajaxDeleteAddress",
        data: {
            del_ID: t
        },
        success: function (t) {
            if (0 != t)
                return $("#Ship_Sub_err").html("Default address doesn`t get deleted."), setTimeout("hideErrDiv('Ship_Sub_err')", 3e3), !1;
            location.reload()
        }
    })
}

function shipping_cart_address_delete() {
    var t = $("#Ship_address_val").val();
    $.ajax({
        type: "POST",
        url: baseURL + "site/cart/ajaxDeleteAddress",
        data: {
            del_ID: t
        },
        success: function (t) {
            if (0 != t)
                return $("#Ship_err").html("Default address doesn`t get deleted."), setTimeout("hideErrDiv('Ship_err')", 3e3), !1;
            location.reload()
        }
    })
}

function require_login(t) {
    return $(location).attr("href").replace(baseURL, ""), $("#myModal3").modal("show"), !1
}

function ajax_add_cart(t, rentnow = "") {
    if (!$(".add_to_cart").attr("require_login")) {
        var e = Math.abs($("#quantity").val()),
                a = Math.abs($("#quantity").data("mqty"));

        if ($("#frp_product_cart_id").length > 0) {
            var selected_tenure = $('#selected_tenure').val();
        } else {
            var selected_tenure = $('#selected_tenure').val() + "+";
        }
        if ("0" == e || "" == e)
            return toast('Invalid quantity', 'toast bg-warning', '4000'), !1;
        if (e > a)
            return toast("Maximum stock of this product is " + a, 'toast bg-warning', '4000'), !1;

        var n = $("#product_id").val(),
                o = $("#sell_id").val(),
                s = $("#price").val(),
                l = $("#product_shipping_cost").val(),
                d = $("#product_tax_cost").val(),
                c = $("#cateory_id").val(),
                isupfront = $('#is_upfront').val();
        var attribute_values = $('#attr_name_id').val();

        return $.ajax({
            type: "POST",
            url: baseURL + "site/cart/cartadd",
            data: {
                mqty: a,
                quantity: e,
                product_id: n,
                sell_id: o,
                cate_id: c,
                price: s,
                product_shipping_cost: l,
                product_tax_cost: d,
                attribute_values: attribute_values,
                selected_tenure: $('#selected_tenure').val()
            },
            success: function (t) {
                var e = 0,
                        i = 0,
                        r = 0,
                        n = "";

                if ("login" == t.login)
                    window.location.href = baseURL + 'user_sign_up';
                else if ("Error" == t.Error)
                    toast("Maximum Quantity: " + a + ". Already in your cart: " + t.show_error + ".", 'toast bg-danger', '4000');
                else if ("FRPAttrError" == t.Error) {
                    toast(t.message, 'toast bg-warning', '10000');
                } else {
                    if ("AttrError" == t.Error)
                        return toast(t.message, 'toast bg-warning', 4000), !1;
                    $(".priceaddon").show(), $("#add_new_product").empty(), $("#min-cart-order-summary").empty(), $("#new_product_added").empty(), $("#price_table").empty(), $(".btncartdiv").empty(), $(".btncartdiv").show(), $("#add_new_product").show();

                    var totalCount = 0;
                    var shippingcost = 0;
                    for (var o = 0; o < t.product_value.length; o++) {
                        var s = t.product_value[o].image.split(",");
                        totalCount += parseInt(t.product_value[o].quantity);
                        shippingcost += (parseInt(t.product_value[o].product_shipping_cost) * parseInt(t.product_value[o].quantity));

                        if (e += (isupfront ? (t.product_value[o].attr_name == '3 Months' ? t.product_value[o].price * 2 * t.product_value[o].quantity : 0) : t.product_value[o].product_shipping_cost) + t.product_value[o].price * t.product_value[o].quantity - t.product_value[o].discountAmount, i += t.product_value[o].price * t.product_value[o].quantity - t.product_value[o].discountAmount * t.product_value[o].quantity, r += t.product_value[o].product_shipping_cost * t.product_value[o].quantity, "" != t.product_value[o].attr_type && t.product_value[o].attr_name)
                            var l = t.product_value[o].attr_type + "/",
                                    d = t.product_value[o].attr_name;

                        else
                            l = "", d = "";

                        if ($("#frp_product_cart_id").length > 0) {
                            $("#frp_product_cart_id").val(t.inserted_frp_product_id);
                        }
                        $("#add_new_product").append('<li id="header-cart-row-' + t.product_value[o].id + '"><div class="cart-thumb"><img src="' + CDN_URL + 'images/product/' + s[0] + '" alt="" /></div><div class="cart-desc"><strong>' + t.product_value[o].product_name + "</strong><small>" + l + d + '</small><span id="new_quantity1_' + t.product_value[o].product_id + '">' + t.product_value[o].quantity + "</span><span>  x Rs " + t.product_value[o].price + '</span><br><a href="cart"><i class="material-icons">mode_edit</i></a><a href="javascript:void(0)" onclick="delete_cart(' + t.product_value[o].id + "," + t.product_value[o].id + ')"><i class="material-icons">delete</i></a></div> <strong></li>'), $("#min-cart-order-summary").append(`<li id="min-cart-product-${o}">
                                								<div class="order-summary-box flex-full">
                                									<div class="product-img flex-full">
                                										<img src="${CDN_URL}images/product/${t.product_value[o].image.split(',')[0]}" alt="Product Image" width="110" height="86"></img>
                                									</div>
                                									<div class="product-desc flex-full align-items-start align-content-start">
                                										<a href="javascript:void(0)" class="delete" onclick="javascript:delete_cart(${t.product_value[o].id},${o})"><i class="icn icn-delete"></i></a>
                                										<h3>${t.product_value[o].product_name}</h3>
                                										<ul class="product-desc-listing flex-full">
                                											<li>
                                												<h4>Quantity</h4>
                                												<span>${t.product_value[o].quantity} item</span>
                                											</li>
                                											<li>
                                												<h4>${t.product_value[o].rental_freq} Rent</h4>
                                												<span><i class="rupees-symbol">&#x20B9;</i> ${t.product_value[o].price}</span>
                                											</li>
                                										</ul>
                                									</div>
                                								</div>
                                							</li>`), 0 == t.product_value[o].is_addon && $("#new_product_added").append('<li id="addon-product-detail-cart-' + t.product_value[o].id + '"><div class="cart-item"><div class="cart-image"> <img src="' + CDN_URL + 'images/product/' + s[0] + '" alt="' + t.product_value[o].product_name + '" /> </div><div class="cart-item-detail"><h5>' + t.product_value[o].product_name + '</h5><span id="new_quantity1_' + t.product_value[o].product_id + '">' + t.product_value[o].quantity + "</span><span> x Rs " + t.product_value[o].price + '</span><br> <a href="cart"><i class="material-icons">&#xE254;</i></a> <a href="javascript:void(0)" onclick="javascript:delete_cart(' + t.product_value[o].id + "," + t.product_value[o].id + ')"><i class="material-icons">&#xE872;</i></a> </div></div></li>')
                    }
                    n = '<li><div class="pull-left">ADVANCE RENTAL</div><div class="pull-right"><strong id="rental_amt"><i id="p-price_1" class="fa fa-inr" aria-hidden="true"></i>' + i + "</strong></div><br>", n += '<div class="pull-left">REFUNDABLE DEPOSIT</div><div class="pull-right"><strong id="deposit_amt"> <i id="p-price" class="fa fa-inr" aria-hidden="true"></i>' + r + "</strong></div><br>", n += '<div class="pull-left">SUBTOTAL</div><div class="pull-right"><strong id="CartGAmt"> <i id="p-price" class="fa fa-inr" aria-hidden="true"></i>' + e + "</strong></div></li>", $("#add_new_product").append(n), $("#mini-cart-checkout-wrapper").show(), $("#mini-cart-checkout-wrapper").html(`<ul class="product-desc-listing flex-full">
                							<li>
                								<h4>Duration</h4>
                								<span id="min-cart-duration">${tenureData[selected_tenure].attr_name}</span>
                							</li>
                							<li>
                								<h4>Advance Rental</h4>
                								<span id="min-cart-advance"><i class="rupees-symbol">&#x20B9;</i> ${i.toFixed(2)}</span>
                							</li>
                							<li>
                								<h4>Refundable Deposit</h4>
<!--                								<span id="min-cart-refundable-deposit"><i class="rupees-symbol">&#x20B9;</i> ${r.toFixed(2)}</span>-->
<!--                								<span id="min-cart-refundable-deposit"><i class="rupees-symbol">&#x20B9;</i> ${(tenureData[selected_tenure].attr_name == '3 Months' ? (i * 2).toFixed(2) : 0)}</span>-->
                			
                								<span id="min-cart-refundable-deposit"><i class="rupees-symbol">&#x20B9;</i> ${(isupfront == 1 ? (tenureData[selected_tenure].attr_name == '3 Months' ? (i * 2).toFixed(2) : 0) : shippingcost.toFixed(2))}</span>
                							</li>							
                							<li>
                								<h4>Sub Total</h4>
                								<span id="min-cart-subtotal"><i class="rupees-symbol">&#x20B9;</i> ${e.toFixed(2)}</span>
                							</li>
                						</ul>
                						<span class="submit-btn flex-full justify-content-center">
                							<a href="${baseURL}cart" class="explore-btn">Checkout</a>
                                            </span>`), $(".btncartdiv").append('<a href="' + baseURL + 'cart" class="btn-check pull-left btngray"><i class="material-icons">shopping_cart</i><span>View Cart</span></a><a href="' + baseURL + 'cart" class="btn-check pull-right"><span>Check Out</span> <i class="material-icons checkrot">reply</i></a>'), $("#price_table").append('<div class="discol"><label>ADVANCE RENTAL</label><span id="rental_amt"><i id="p-price" class="fa fa-inr" aria-hidden="true"></i>' + i + '</span></div><div class="discol"><label>REFUNDABLE DEPOSIT</label><span id="deposit_amt"><i id="p-price" class="fa fa-inr" aria-hidden="true"></i>' + r + '</span></div><label>TOTAL RENT </label><span id="DetailCartGAmt"> <i id="p-price" class="fa fa-inr" aria-hidden="true"></i>' + e + "</span></div>"), $('#add-to-cart-btn').length > 0 ?
                            document.getElementById('add-to-cart-btn').innerHTML = 'Added to Cart' : '';
                    toast('Great! Product is added to the Cart :)', 'toast bg-success', '3000');

                }

                if (t.product_value.length > 0) {
                    $("#user_cart_btn").html(`<span class="material-symbols-outlined">shopping_cart</span><span class="cart-badge" id="new_count">${totalCount}</span>`);
                    $("#user_cart_btn_m").html(`<span class="material-symbols-outlined">shopping_cart</span><span class="cart-badge" id="new_count">${totalCount}</span>`);

                    check_page = window.location.href;
                    check_page_array = check_page.split('/');
                    is_cart = check_page_array[check_page_array.length - 3];
                    if (is_cart != 'choose-products') {
                        if ($("#side-mini-cart").hasClass('d-none')) {
                            $("#side-mini-cart").removeClass('d-none');
                        }
                        $("#side-mini-cart").addClass('open');
                        $("body").addClass('scroll-hide');
                    }
                } else {
                    $("#user_cart_btn").html(`<span class="material-symbols-outlined">shopping_cart</span>`);
                    $("#user_cart_btn_m").html(`<span class="material-symbols-outlined">shopping_cart</span>`);
                }

                if (p_ev) {
                    fbq('track', 'AddToCart');
                    gtag('event', 'conversion', {'send_to': 'AW-867888766/ml9eCI27rIYYEP7c650D'});
                    gtag('event', 'add_to_cart', {
                        "items": [
                            {
                                "id": $("#sku").val(),
                                "name": $("#product_name").val(),
                                "list_name": "Search Results",
                                "brand": "Cityfurnish",
                                "category": $("#category_name").val(),
                                "list_position": 1,
                                "quantity": 1,
                                "price": $("#price").val()
                            }
                        ]
                    });
                    
                    if (rentnow != "") {
                        amplitude.track('Rent Now - Web - Step 1', {
                            "Product Category": $("#category_name").val(),
                            "Product Name": $("#product_name").val(),
                            "Rent Period" : $("#selected_tenure").val(),
                            "Product Rent": $("#price").val(),
                            "Number Of Items" : totalCount
                        });
                    }else{
                        amplitude.track('Add To Cart', {
                            "Product Category": $("#category_name").val(),
                            "Product Name": $("#product_name").val(),
                            "Rent Period" : $("#selected_tenure").val(),
                            "Product Rent": $("#price").val(),
                            "Number Of Items" : totalCount
                        });
                    }
                }
                
                if (t.coupon_code != "") {
                    checkRemove(t.coupon_code);
                }
                if (rentnow != "") {
                    window.location.href = baseURL + 'cart';
                }
            }
        }), !1
    }
    require_login()
}

function ajax_add_cart_addon(t) {
    var e = $("#product_id_" + t).val();
    $.ajax({
        type: "POST",
        dataType: "json",
        url: baseURL + "site/cart/getTenure",
        data: {
            pid: e
        },
        success: function (e) {
            tenure = e, ajax_get_tenure_data(t, tenure)
        }
    })
}

function ajax_get_tenure_data(t, e) {
    if (!$(".add_to_cart").attr("require_login")) {
        var a = $("#quantity_" + t).val();
        if (1 > a)
            return toast("Maximum stock of this product is " + a, 'toast bg-warning', '4000'), !1;
        var i = $("#tenureslider").val();
        if ("no" != e && 0 == i)
            return toast('Please Choose preferred tenure', 'toast bg-warning', '4000'), !1;
        var r = $("#product_id_" + t).val(),
                n = $("#sell_id_" + t).val(),
                o = $("#price_" + t).val(),
                s = $("#product_shipping_cost_" + t).val(),
                l = $("#product_tax_cost_" + t).val(),
                d = $("#cateory_id_" + t).val(),
                c = $("#attr_name_id_" + t).val();
        return $.ajax({
            type: "POST",
            url: baseURL + "site/cart/cartadd",
            data: {
                mqty: a,
                quantity: 1,
                product_id: r,
                sell_id: n,
                cate_id: d,
                price: o,
                product_shipping_cost: s,
                product_tax_cost: l,
                attribute_values: c
            },
            success: function (t) {
                $("#shopping_product_id_" + r).val(t.product_value[0].id), $(".priceaddon").show(), $("#addon_new_product").empty(), $("#add_new_product").empty(), $("#add_new_product").show(), $("#price_table").empty(), $(".emptycartbar").hide();
                var e = 0,
                        i = 0,
                        n = 0,
                        o = "";
                if ("login" == t.login)
                    window.location.href = baseURL;
                else if ("Error" == t.Error)
                    alert("Maximum Quantity: " + a + ". Already in your cart: " + t.show_error + ".");
                else {
                    if (t.product_value.length > 0) {
                        $("#user_cart_btn").html(`<i class="icn icn-cart"></i><span id="new_count">${t.product_value.length}</span>`);
                        $("#user_cart_btn_m").html(`<i class="icn icn-cart-white"></i><span id="new_count">${t.product_value.length}</span>`);
                    } else {
                        $("#user_cart_btn").html(`<i class="icn icn-cart"></i>`);
                        $("#user_cart_btn_m").html(`<i class="icn icn-cart-white"></i>`);
                    }
                    for (var s = 0; s < t.product_value.length; s++) {
                        var l = t.product_value[s].image.split(",");
                        if (e += t.product_value[s].product_shipping_cost * t.product_value[s].quantity + t.product_value[s].price * t.product_value[s].quantity - t.product_value[s].discountAmount, i += t.product_value[s].price * t.product_value[s].quantity - t.product_value[s].discountAmount * t.product_value[s].quantity, n += t.product_value[s].product_shipping_cost * t.product_value[s].quantity, "" != t.product_value[s].attr_type && t.product_value[s].attr_name)
                            var d = t.product_value[s].attr_type + "/",
                                    c = t.product_value[s].attr_name;
                        else
                            d = "", c = "";
                        $("#add_new_product").append('<li id="header-cart-row-' + t.product_value[s].id + '"><div class="cart-thumb"><img src="' + CDN_URL + 'images/product/' + l[0] + '" alt="" /></div><div class="cart-desc"><strong>' + t.product_value[s].product_name + "</strong><small>" + d + c + '</small><span id="new_quantity1_' + t.product_value[s].product_id + '">' + t.product_value[s].quantity + "</span><span> x Rs " + t.product_value[s].price + '</span><br><a href="cart"><i class="material-icons">mode_edit</i></a><a href="javascript:void(0)" onclick="delete_cart(' + t.product_value[s].id + "," + t.product_value[s].id + "," + t.product_value[s].product_id + ')"><i class="material-icons">delete</i></a></div> <strong></li>'), 1 == t.product_value[s].is_addon && ($("#product_quantity_" + t.product_value[s].product_id).val(t.product_value[s].quantity), $("#addon_new_product").append('<li id="addon-product-detail-cart-' + t.product_value[s].id + '"><div class="cart-item"><div class="cart-image"> <img src="' + CDN_URL + 'images/product/' + l[0] + '" alt="' + t.product_value[s].product_name + '" /> </div><div class="cart-item-detail"><h5>' + t.product_value[s].product_name + '</h5><span id="new_quantity_' + t.product_value[s].product_id + '">' + t.product_value[s].quantity + "</span><span> x Rs " + t.product_value[s].price + '</span><br> <a href="cart"><i class="material-icons">&#xE254;</i></a> <a href="javascript:void(0)" onclick="javascript:delete_cart(' + t.product_value[s].id + "," + t.product_value[s].id + "," + t.product_value[s].product_id + ')"><i class="material-icons">&#xE872;</i></a> </div></div></li>'))
                    }
                    $("#price_table").append(' <div class="discol"><label>ADVANCE RENTAL</label><span id="rental_amt"><i id="p-price" class="fa fa-inr" aria-hidden="true"></i>' + i + '</span></div><div class="discol"><label>REFUNDABLE DEPOSIT</label><span id="deposit_amt"> <i id="p-price" class="fa fa-inr" aria-hidden="true"></i>' + n + '</span></div><label>TOTAL RENT </label><span id="DetailCartGAmt"> <i id="p-price" class="fa fa-inr" aria-hidden="true"></i>' + e + "</span> </div>"), o = '<li><div class="pull-left">ADVANCE RENTAL</div><div class="pull-right"><strong id="rental_amt"> <i id="p-price" class="fa fa-inr" aria-hidden="true"></i>' + i + "</strong></div><br>", o += '<div class="pull-left">REFUNDABLE DEPOSIT</div><div class="pull-right"><strong id="deposit_amt"> <i id="p-price" class="fa fa-inr" aria-hidden="true"></i>' + n + "</strong></div><br>", o += '<div class="pull-left">SUBTOTAL</div><div class="pull-right"><strong id="CartGAmt"> <i id="p-price" class="fa fa-inr" aria-hidden="true"></i>' + e + "</strong></div></li>", $("#add_new_product").append(o), $("#add_new_product").append('<div class="btncartdiv"><a href="' + baseURL + 'cart" class="btn-check pull-left btngray"><i class="material-icons">shopping_cart</i><span>View Cart</span></a><a href="' + baseURL + 'cart" class="btn-check pull-right"><span>Check Out</span> <i class="material-icons checkrot">reply</i></a></div>'), $("#new_msg_box").hide(), $("#title").show(), swal({
                        title: "Success!",
                        text: t.message,
                        animation: "slide-from-bottom",
                        type: "success",
                        showConfirmButton: !0,
                        confirmButtonText: "View Cart",
                        confirmButtonColor: "#e8e8e8",
                        allowOutsideClick: !0
                    }, function (t) {
                        t && (window.location.href = baseURL + "cart")
                    }), setTimeout(function () {
                        swal.close()
                    }, 5e3)
                }
            }
        }), !1
    }
    require_login()
}

function ajax_add_cart_subcribe() {
    if (!$("#subscribe").attr("require_login")) {
        var t = $("#user_id").val(),
                e = $("#fancybox_id").val(),
                a = $("#price").val(),
                i = $("#shipping_cost").val(),
                r = $("#tax").val(),
                n = $("#category_id").val(),
                o = $("#name").val(),
                s = $("#seourl").val(),
                l = $("#image").val();
        return $.ajax({
            type: "POST",
            url: baseURL + "site/fancybox/cartsubscribe",
            data: {
                name: o,
                quantity: 1,
                user_id: t,
                fancybox_id: e,
                price: a,
                fancy_ship_cost: i,
                category_id: n,
                fancy_tax_cost: r,
                seourl: s,
                image: l
            },
            success: function (t) {
                "login" == t ? window.location.href = baseURL + "login" : ($("#MiniCartViewDisp").html(t), $("#cart_popup").show().delay("3000").fadeOut())
            }
        }), !1
    }
    require_login()
}

function ajax_add_gift_card() {
    if (!$(".create-gift-card").attr("require_login")) {
        $("#GiftErr").html();
        var t = $("#price_value").val(),
                e = $("#recipient_name").val(),
                a = $("#recipient_mail").val(),
                i = $("#description").val(),
                r = $("#sender_name").val(),
                n = $("#sender_mail").val();
        return "" == t ? ($("#GiftErr").html("Please Select the Price Value"), !1) : "" == e ? ($("#GiftErr").html("Please Enter the Receiver Name"), !1) : "" == a ? ($("#GiftErr").html("Please Enter the Receiver Email"), !1) : validateEmail(a) ? "" == i ? ($("#GiftErr").html("Please  Enter the Description"), !1) : ($.ajax({
            type: "POST",
            url: baseURL + "site/giftcard/insertEditGiftcard",
            data: {
                price_value: t,
                recipient_name: e,
                recipient_mail: a,
                description: i,
                sender_name: r,
                sender_mail: n
            },
            success: function (t) {
                "login" == t ? window.location.href = baseURL + "login" : ($("#MiniCartViewDisp").html(t), $("#cart_popup").show())
            }
        }), !1) : ($("#GiftErr").html("Please Enter Valid Email Address"), !1)
    }
    require_login()
}

function change_user_password() {
    $("#change_pass").validate({
        rules: {
            pass: {
                required: !0,
                minlength: 2,
                maxlength: 20
            },
            confirmpass: {
                required: !0,
                minlength: 2,
                maxlength: 20
            }
        },
        messages: {
            pass: {
                required: "<font color='red'>Password cannot be empty.</font>",
                minlength: "<font color='red'>Password has atleast 2 character long.</font>",
                maxlength: "<font color='red'>Password should be 20 characters maximum.</font>"
            },
            confirmpass: {
                required: "<font color='red'>Confirm Password cannot be empty.</font>",
                minlength: "<font color='red'>Confirm Password has atleast 2 character long.</font>",
                maxlength: "<font color='red'>Confirm Password should be 20 characters maximum.</font>"
            }
        },
        errorPlacement: function (error, element) {
            var placement = $(element).data('error');
            if (placement) {
                $(placement).append(error)
            } else {
                error.insertAfter(element);
            }
        },
        submitHandler: function (t) {
            t.submit()
        }
    })
}

function get_shiping(id) {
    var shipID = id;
    $.ajax({
        type: "POST",
        url: baseURL + 'site/user_settings/get_shipping',
        data: {
            'shipID': shipID
        },
        dataType: 'json',

        success: function (response) {

            // $('#myModaladdress').modal('show');
            if (response.primary == 'Yes') {
                $("#make_default").prop("checked", true);
            } else
            {
                $("#make_default").prop("checked", false);
            }
            $(".add-address-block h2").html("Update Address");
            $("#ship_id").val(response.ship_id);
            $('#full_name').val(response.full_name);
            $('#type').val(response.type);
            $('#address1').val(response.address1);
            $('#address2').val(response.address2);
            $('#city').val(response.city);
            $('#state').val(response.state);
            $('#country').val(response.country);
            // $('.postal_code').val(response.postal_code);
            $('#number').val(response.phone);
            $('#phone').val(response.phone);
            $('#phone_alternate').val((response.alter_phone && response.alter_phone != 'undefined' && response.alter_phone != '' ? response.alter_phone : ''));
            $('#postal_code').val(response.postal_code);
            arrangeflowuolabels();
        }
    });
}

function setDefaultAddress(addressID) {
    var res = window.confirm('Are you sure?');
    if (res) {
        $.ajax({
            type: "POST",
            url: baseURL + 'site/user_settings/udatesetdefault_shipping',
            data: {
                'shipID': addressID
            },
            dataType: 'json',
            success: function (response) {
                location.reload();

            }
        });
    }
}

function arrangeflowuolabels() {
    $('.FlowupLabels').FlowupLabels({
        feature_onInitLoad: true,
        // Class when focusing an input
        class_focused: 'focused',
        // Class when an input has text entered
        class_populated: 'populated'
    });
}


/*Add new address from user profile */
function addmyprofileaddress() {
    $("#address_form").validate({
        rules: {
            full_name: {
                required: !0,
                minlength: 2,
                maxlength: 20
            },
            phone: {
                required: !0,
                minlength: 10,
                maxlength: 10,
                number: !0
            },
            phone_alternate: {
                required: !0,
                minlength: 10,
                maxlength: 10,
                number: !0
            },
            address1: {
                required: !0,
                minlength: 5,
                maxlength: 100
            },
            address2: {
                minlength: 5,
                maxlength: 100
            },
            city: {
                required: {
                    depends: function (element) {
                        if ('default' == $('#city').val()) {
                            $('#city').val('');
                        }
                        return true;
                    }
                }
            },
            state: {
                required: !0,
            },
            postal_code: {
                required: !0,
                minlength: 6,
                maxlength: 6,
                number: !0
            },
            // address1:{
            //     request: !0
            // },
        },
        messages: {
            full_name: {
                required: "Full name is required.",
                minlength: "Full name should be atleast 2 characters long.",
                maxlength: "Full name should be 20 characters maximum."
            },
            phone: {
                required: "Mobile number is required.",
                minlength: "Mobile number must be 10 digit long.",
                maxlength: "Mobile number should be 10 digit long.",
                number: "Please enter a valid mobile mumber."
            },
            phone_alternate: {
                required: "Alternate mobile number is required.",
                minlength: "Alternate mobile number has atleast 10 digit long.",
                maxlength: "Alternate mobile number should be 10 digit maximum.",
                number: "Please enter a valid alternate mobile mumber."
            },
            address1: {
                required: "Flat No, Building No. is required.",
                minlength: "Flat No, Building No. should be atleast 5 characters long.",
                maxlength: "Flat No, Building No. should be 100 characters maximum."
            },
            address2: {
                minlength: "Address 1 should be atleast 5 characters long.",
                maxlength: "Address 1 should be 100 characters maximum."
            },
            city: {
                required: "City is required.",
            },
            postal_code: {
                required: "Postal code is required.",
                minlength: "Postal code must be 6 digit long.",
                maxlength: "Postal code should be 6 digit long.",
                number: "Please enter a valid postal code."
            },
            // address1: {
            //     required: "Address line 1 number is required."
            // },
        },
        errorPlacement: function (error, element) {
            var placement = $(element).data('error');
            if (placement) {
                $(placement).append(error)
            } else {
                error.insertAfter(element);
            }
        },
        submitHandler: function (e) {
            var user_id = $('#user_id').val();
            var full_name = $('#full_name').val();
            var address1 = $('#address1').val();
            var address2 = $('#address2').val();
            //var nick_name = $('#nick_name').val();
            var alter_number = $('#phone_alternate').val();
            var country = $('#country').val();
            var city = $('#city').val();
            var state = $('#state').val();
            var phone = $('#phone').val();
            var postal_code = $('#postal_code').val();
            var current_city = $('#current_city').val();
            var shipID = $('#ship_id').val();
            var make_default = 0
            if ($('#make_default').is(":checked")) {
                make_default = 1;
            }
            $('#button-submit-merchant').attr("disabled", "disabled");

            $.ajax({
                url: $("#shiping_address").val(),
                type: "post",
                dataType: 'json',
                data: 'full_name=' + full_name +
                        '&address1=' + address1 +
                        '&address2=' + address2 +
                        '&phone_alternate=' + alter_number +
                        //'&nick_name='+nick_name+
                        '&country=' + country +
                        '&state=' + state +
                        '&city=' + city +
                        '&phone=' + phone +
                        '&postal_code=' + postal_code +
                        '&user_id=' + user_id +
                        '&make_default=' + make_default +
                        '&shipID=' + shipID,
                success: function (result) {
                    if (result.status == 'false') {
                        toast('Your location is not serviceable', 'toast bg-danger', 4000);
                    } else {
                        var msg = 'New Address Added';
                        if (shipID != null || shipID != '') {
                            msg = 'Address Updated';
                        }
                        toast(msg, 'toast bg-success', 5000);
                        location.reload();
                    }

                    // sweetAlert({
                    //     title: "Success!",
                    //     text: msg,
                    //     type: "success",
                    //     showCancelButton: false,
                    //     closeOnConfirm: true,
                    //     animation: "slide-from-bottom",
                    //     showConfirmButton: true,      
                    // },function(isConfirm){
                    //     if (isConfirm) {
                    //         location.reload();
                    //     }

                    // }); 

                }
            });
        }
    })
}


function delete_shipping_address_cart(id, isdefault) {
    event.preventDefault();
    if (isdefault)
        return alert('You cannot remove your default address.');
    if (!confirm('Do you really want to remove this shipping address?'))
        return;

    $.ajax({
        type: 'post',
        url: baseURL + 'site/user_settings/remove_shipping_addr',
        data: {
            id: id,
            user_id: $('#user_id').val()
        },
        dataType: 'json',
        success: function (json) {
            $(".add-address-block h2").html("Add New Address");
            $("#ship_id").val('');
            $('#full_name').val('');
            $('#type').val('');
            $('#address1').val('');
            $('#address2').val('');
            $('#city').val('default');
            $('#state').val('');
            $('#country').val('');
            // $('.postal_code').val(response.postal_code);
            $('#number').val('');
            $('#phone').val('');
            $('#postal_code').val('');
            if (json.count.count == 0) {
                $("#" + id).fadeOut('fast', function () {
                    $("#" + id).remove();
                });
            } else {
                if (json.status_code === 1) {
                    $("#" + id).fadeOut('fast', function () {
                        $("#" + id).remove();
                    });
                } else if (json.status_code === 0) {
                    if (json.message)
                        alert(json.message);
                }
            }
        }
    })
}



function checkCode() {
    if ($("#CouponErr").html(""), $("#CouponErr").show(), $("#cart_amount").val() > 0) {
        var t = $("#is_coupon").val(),
                e = $("#cart_total_amount").val(),
                a = $("#cart_ship_amount").val();
        $("#cart_tax_amount").val(), "" != t ? $.ajax({
            type: "POST",
            url: baseURL + "site/cart/checkCode",
            data: {
                code: t,
                amount: e,
                shipamount: a
            },
            success: function (i) {
                // checkRemove(t);
                var r = i.split("|");
                return 1 == i ? ($("#CouponErr").html("Entered code is invalid"), $("#CouponErr").css("color", "red"), !1) : 2 == i ? ($("#CouponErr").html("Code is already used"), $("#CouponErr").css("color", "red"), !1) : 3 == i ? ($("#CouponErr").html("Please add more items in the cart and enter the coupon code"), $("#CouponErr").css("color", "red"), !1) : 4 == i ? ($("#CouponErr").html("Entered Coupon code is not valid for this product"), $("#CouponErr").css("color", "red"), !1) : 5 == i ? ($("#CouponErr").html("Entered Coupon code is expired"), $("#CouponErr").css("color", "red"), !1) : 6 == i ? ($("#CouponErr").html("Entered code is Not Valid"), $("#CouponErr").css("color", "red"), !1) : 7 == i ? ($("#CouponErr").html("Please add more items quantity in the particular category or product, for using this coupon code"), $("#CouponErr").css("color", "red"), !1) : 8 == i ? ($("#CouponErr").html("Entered Gift code is expired"), $("#CouponErr").css("color", "red"), !1) : 9 == i ? ($("#CouponErr").html("Coupon is not applicable on the selected city"), $("#CouponErr").css("color", "red"), !1) : 10 == i ? ($("#CouponErr").html("Coupon is not applicable for selected tenure"), $("#CouponErr").css("color", "red"), !1) : void("Success" == r[0] ? $.ajax({
                    type: "POST",
                    url: baseURL + "site/cart/checkCodeSuccess",
                    data: {
                        code: t,
                        amount: e,
                        shipamount: a
                    },
                    success: function (e) {
                        if (p_ev) {
                            amplitude.track('Purchase Funnel - Step 2', {
                                "Promo Code": t,
                            });
                        }
                        if ($('#removeCFCoins').length > 0) {
                            $('#removeCFCoins').click();
                        }
                        var a = e.split("|");
                        var cart_data_wcs = JSON.parse(a[a.length - 1]);
                        $('#CouponMessage').html(r[3]);
                        $('#CouponMessage').css('color', 'green');
                        $("#CouponErr").html("Coupon Code Applied"), $("#CouponErr").css("color", "green"), $("#cart_amount").val(a[0]), $("#cart_ship_amount").val(a[1]), $("#cart_tax_amount").val(a[2]), $("#cart_total_amount").val(a[3]), $("#discount_Amt").val(a[4]), $("#rental_amt").html('<i id="p-price" class="fa fa-inr" aria-hidden="true"></i>' + a[0]), $("#CartTAmt").html(a[2]), $("#CartGAmt").html('<i id="p-price" class="fa fa-inr" aria-hidden="true"></i>' + a[3]), $("#disAmtVal").html('<i class="rupees-symbol">&#x20B9;</i> ' + cart_data_wcs['discount_amount']), $("#3rdStepDiscount").html(a[4]), $("#disAmtVal_header").html('<i id="p-price" class="fa fa-inr" aria-hidden="true"></i>' + a[4]), $("#disAmtValDiv").show(), $("#CouponCode").val(t), $("#Coupon_id").val(r[1]), $("#couponType").val(r[2]), $("#MCartGAmt").html(a[3]), $("#CartCartGAmt").html('&#x20B9; ' + cart_data_wcs['total_grand_final_rent']), $("#CartCartGAmtFirst").html('<i class="rupees-symbol">&#x20B9;</i> ' + a[7]), $("#CartCartGAmt1").html('<i class="rupees-symbol">&#x20B9;</i> ' + a[7]), $("#gstTaxVal").html('<i class="rupees-symbol">&#x20B9;</i> ' + cart_data_wcs['total_gst']), $("#gstTaxValFirst").html('<i class="rupees-symbol">&#x20B9;</i> ' + a[6]), $("#gstTaxVal1").html('<i class="rupees-symbol">&#x20B9;</i> ' + a[6]);
                        if (r.includes("combine")) {
                            $("#CouponMessage").append(" Coupon not applicable on few items in cart.");
                            $("#CouponMessage").css("color", "green");
                        }
                        if ($('#TotalRentIncludeGST').length) {
                            var totalrentincludegst = (parseFloat(cart_data_wcs['total_rent_after_discount']) + parseFloat(cart_data_wcs['total_gst']));
                            $("#TotalRentIncludeGST").html('<i class="rupees-symbol">&#x20B9;</i> ' + totalrentincludegst.toFixed(2));
                            $("#TotalRentIncludeGST1").html('<i class="rupees-symbol">&#x20B9;</i> ' + totalrentincludegst.toFixed(2));
                        }
                        for (var i = 6, n = 0; n < a[5]; n++)
                            $("#IndTotalVal" + n).html(a[i]), i++;
                        $("#CheckCodeButton").val("Remove"), $("#is_coupon").attr("readonly", "readonly"), document.getElementById("CheckCodeButton").setAttribute("onclick", "javascript:checkRemove();")
                        setTimeout(function () {
                            window.location.reload();
                        }, 2000);
                    }
                }) : "Referral_Success" == r[0] && $.ajax({
                    type: "POST",
                    url: baseURL + "site/cart/checkReferralCodeSuccess",
                    data: {
                        code: t,
                        amount: e,
                        shipamount: a
                    },
                    success: function (e) {
                        var a = e.split("|");
                        $("#CouponErr").html("Coupon Code Applied"), $("#CouponErr").css("color", "green"), $("#cart_amount").val(a[0]), $("#cart_ship_amount").val(a[1]), $("#cart_tax_amount").val(a[2]), $("#cart_total_amount").val(a[3]), $("#discount_Amt").val(a[4]), $("#rental_amt").html('<i id="p-price" class="fa fa-inr" aria-hidden="true"></i>' + a[0]), $("#CartTAmt").html(a[2]), $("#CartGAmt").html('<i id="p-price" class="fa fa-inr" aria-hidden="true"></i>' + a[3]), $("#disAmtVal").html('<i class="rupees-symbol">&#x20B9;</i> ' + a[4]), $("#3rdStepDiscount").html(a[4]), $("#disAmtVal_header").html('<i id="p-price" class="fa fa-inr" aria-hidden="true"></i>' + a[4]), $("#disAmtValDiv").show(), $("#CouponCode").val(t), $("#Coupon_id").val(r[1]), $("#couponType").val(r[2]), $("#MCartGAmt").html(a[3]), $("#CartCartGAmt").html('<i class="rupees-symbol">&#x20B9;</i> ' + a[3]), $("#CartCartGAmtFirst").html('<i class="rupees-symbol">&#x20B9;</i> ' + a[3]), $("#CartCartGAmt1").html('<i class="rupees-symbol">&#x20B9;</i> ' + a[3]);
                        for (var i = 6, n = 0; n < a[5]; n++)
                            $("#IndTotalVal" + n).html(a[i]), i++;
                        $("#CheckCodeButton").val("Remove"), $("#is_coupon").attr("readonly", "readonly"), document.getElementById("CheckCodeButton").setAttribute("onclick", "javascript:checkRemove();")
                    }
                }))
            }
        }) : $("#CouponErr").html("<font color='red'>Enter Valid Code</font>")
    } else
        $("#CouponErr").html("Please add items in cart and enter the coupon code");
    setTimeout("hideErrDiv('CouponErr')", 3e3)
}

function checkRemove(t = null) {
    if ($("#CouponErr").html(""), $("#CouponErr").show(), null != t)
        var e = t;
    else
        e = $("#is_coupon").val();
    $.ajax({
        type: "POST",
        url: baseURL + "site/cart/checkCodeRemove",
        data: {
            code: e
        },
        success: function (t) {
            $('.coupon-code').addClass('apply-coupon');
            $('.coupon-code').removeClass('coupon-code');
            var a = t.split("|");
            var cart_data_wcs = JSON.parse(a[a.length - 1]);
            $("#cart_amount").val(a[0]);
            $("#min-cart-advance").html('<i class="rupees-symbol">&#x20B9;</i> ' + a[0]);
            $("#min-cart-subtotal").html('<i class="rupees-symbol">&#x20B9;</i> ' + a[3]);
            $("#cart_ship_amount").val(a[1]);
            $("#cart_tax_amount").val(a[2]);
            $("#cart_total_amount").val(a[3]);
            $("#discount_Amt").val(a[4]);
            $("#rental_amt").html('<i id="p-price" class="fa fa-inr" aria-hidden="true"></i>' + a[0]);
            $("#CartTAmt").html(a[2]);
            $("#CartGAmt").html('<i id="p-price" class="fa fa-inr" aria-hidden="true"></i>' + a[3]);
            if ($('#TotalRentIncludeGST').length) {
                var totalrentincludegst = (parseFloat(cart_data_wcs['total_rent_after_discount']) + parseFloat(cart_data_wcs['total_gst']));
                $("#TotalRentIncludeGST").html('<i class="rupees-symbol">&#x20B9;</i> ' + totalrentincludegst.toFixed(2));
                $("#TotalRentIncludeGST1").html('<i class="rupees-symbol">&#x20B9;</i> ' + totalrentincludegst.toFixed(2));
            }
            $("#disAmtVal").html('<i class="rupees-symbol">&#x20B9;</i> ' + cart_data_wcs['discount_amount']);
            $("#3rdStepDiscount").html(a[4]);
            $("#disAmtVal_header").html('<i id="p-price" class="fa fa-inr" aria-hidden="true"></i>' + a[4]);
            $("#disAmtValDiv").show();
            $("#CouponCode").val(e);
            $("#Coupon_id").val(0);
            $("#couponType").val("");
            $("#MCartGAmt").html(a[3]);
            $("#CartCartGAmt").html('<i class="rupees-symbol">&#x20B9;</i> ' + cart_data_wcs['total_grand_final_rent']);
            $("#CartCartGAmtFirst").html('<i class="rupees-symbol">&#x20B9;</i> ' + a[7]);
            $("#CartCartGAmt1").html('<i class="rupees-symbol">&#x20B9;</i> ' + a[7]);
            $("#gstTaxVal").html('<i class="rupees-symbol">&#x20B9;</i> ' + cart_data_wcs['total_gst']);
            $("#gstTaxValFirst").html('<i class="rupees-symbol">&#x20B9;</i> ' + a[6])
            $("#gstTaxVal1").html('<i class="rupees-symbol">&#x20B9;</i> ' + a[6]);
            for (var i = 6, r = 0; r < a[5]; r++)
                $("#IndTotalVal" + r).html(a[i]), i++;
            $("#is_coupon").val(""), $("#disAmtValDiv").hide(), $("#is_coupon").removeAttr("readonly"), $("#CheckCodeButton").val("Apply"), $("#CouponMessage").html("")
            // if(t == null){
            document.getElementById("CheckCodeButton").setAttribute("onclick", "javascript:checkCode();")
            // }
            removeCoins_on_coupon_vjs();
            window.location.reload();
        }
    })
}

function paypal() {
    $("#PaypalPay").show(), $("#CreditCardPay").hide(), $("#otherPay").hide(), $("#dep1").attr("class", "depth1 current"), $("#dep2").attr("class", "depth2"), $("#dep1 a").attr("class", "current"), $("#dep2 a").attr("class", "")
}

function creditcard() {
    $("#CreditCardPay").show(), $("#PaypalPay").hide(), $("#otherPay").hide(), $("#dep1").attr("class", "depth1"), $("#dep2").attr("class", "depth2 current"), $("#dep1 a").attr("class", ""), $("#dep2 a").attr("class", "current")
}

function othermethods() {
    $("#otherPay").show(), $("#PaypalPay").hide(), $("#CreditCardPay").hide(), $("#dep1").attr("class", "depth1"), $("#dep2").attr("class", "depth2"), $("#dep3").attr("class", "depth3 current"), $("#dep1 a").attr("class", ""), $("#dep2 a").attr("class", ""), $("#dep3 a").attr("class", "current")
}

function loadListValues(t) {
    var e = $(t).val(),
            a = $(t).parent().next().find("select");
    "" == e ? a.html('<option value="">--Select--</option>') : (a.hide(), $(t).parent().next().append('<span class="loading">Loading...</span>'), $.ajax({
        type: "POST",
        url: BaseURL + "admin/product/loadListValues",
        data: {
            lid: e
        },
        dataType: "json",
        success: function (t) {
            a.next().remove(), a.html(t.listCnt).show()
        }
    }))
}

function loadListValuesUser(t) {
    var e = $(t).val(),
            a = $(t).parent().next().find("select");
    "" == e ? a.html('<option value="">--Select--</option>') : (a.hide(), $(t).parent().next().append('<span class="loading">Loading...</span>'), $.ajax({
        type: "POST",
        url: BaseURL + "site/product/loadListValues",
        data: {
            lid: e
        },
        dataType: "json",
        success: function (t) {
            a.next().remove(), a.html(t.listCnt).show()
        }
    }))
}

function changeListValues(t, e) {
    var a = $(t).val(),
            i = $(t).parent().next().find("select");
    "" == a ? i.html('<option value="">--Select--</option>') : (i.hide(), $(t).parent().next().append('<span class="loading">Loading...</span>'), $.ajax({
        type: "POST",
        url: BaseURL + "admin/product/loadListValues",
        data: {
            lid: a,
            lvID: e
        },
        dataType: "json",
        success: function (t) {
            i.next().remove(), i.html(t.listCnt).show()
        },
        complete: function () {
            i.next().remove(), i.show()
        }
    }))
}

function changeListValuesUser(t, e) {
    var a = $(t).val(),
            i = $(t).parent().next().find("select");
    "" == a ? i.html('<option value="">--Select--</option>') : (i.hide(), $(t).parent().next().append('<span class="loading">Loading...</span>'), $.ajax({
        type: "POST",
        url: BaseURL + "site/product/loadListValues",
        data: {
            lid: a,
            lvID: e
        },
        dataType: "json",
        success: function (t) {
            i.next().remove(), i.html(t.listCnt).show()
        },
        complete: function () {
            i.next().remove(), i.show()
        }
    }))
}

function confirm_status_dashboard(t) {
    $.confirm({
        title: "Confirmation",
        message: "You are about to change the status of this record ! Continue?",
        buttons: {
            Yes: {
                class: "yes",
                action: function () {
                    window.location = BaseURL + "admin/dashboard/admin_dashboard"
                }
            },
            No: {
                class: "no",
                action: function () {
                    return !1
                }
            }
        }
    })
}

function validateEmail(t) {
    return !!/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(t)
}

function changeShipStatus(t, e, a) {
    $(".status_loading_" + e).prev().hide(), $(".status_loading_" + e).show(), $.ajax({
        type: "post",
        url: baseURL + "site/user/change_order_status",
        data: {
            value: t,
            dealCode: e,
            seller: a
        },
        dataType: "json",
        success: function (t) {
            t.status_code
        },
        fail: function (t) {
            alert(t)
        },
        complete: function () {
            $(".status_loading_" + e).hide(), $(".status_loading_" + e).prev().show()
        }
    })
}

function changeCatPos(t, e) {
    var a = $(t).prev().val();
    a - a == 0 ? ($(t).hide(), $(t).next().show(), $.ajax({
        type: "post",
        url: baseURL + "admin/category/changePosition",
        data: {
            catID: e,
            pos: a
        },
        complete: function () {
            $(t).next().hide(), $(t).show().text("Done").delay(800).text("Update")
        }
    })) : alert("Invalid position")
}

function changeCmsPos(t, e) {
    var a = $(t).prev().val();
    a - a == 0 ? ($(t).hide(), $(t).next().show(), $.ajax({
        type: "post",
        url: baseURL + "admin/cms/changePosition",
        data: {
            catID: e,
            pos: a
        },
        complete: function () {
            $(t).next().hide(), $(t).show().text("Done").delay(800).text("Update")
        }
    })) : alert("Invalid position")
}

function approveCmt(t) {
    if (!$(t).hasClass("approving"))
        if ($(t).addClass("approving"), $(t).text("Approving..."), window.confirm("Are you sure to approve this comment ?\n This action cannot be undone.")) {
            var e = $(t).data("cid"),
                    a = $(t).data("tid"),
                    i = $(t).data("uid");
            $.ajax({
                type: "post",
                url: baseURL + "site/product/approve_comment",
                data: {
                    cid: e,
                    tid: a,
                    uid: i
                },
                dataType: "json",
                success: function (e) {
                    "1" == e.status_code ? $(t).parent().remove() : ($(t).removeClass("approving"), $(t).text("Approve"))
                }
            })
        } else
            $(t).removeClass("approving"), $(t).text("Approve")
}

function deleteCmt(t) {
    if (!$(t).hasClass("deleting"))
        if ($(t).addClass("deleting"), $(t).text("Deleting..."), window.confirm("Are you sure to delete this comment ?\n This action cannot be undone.")) {
            var e = $(t).data("cid");
            $.ajax({
                type: "post",
                url: baseURL + "site/product/delete_comment",
                data: {
                    cid: e
                },
                dataType: "json",
                success: function (e) {
                    "1" == e.status_code ? $(t).parent().parent().remove() : ($(t).removeClass("deleting"), $(t).text("Delete"))
                }
            })
        } else
            $(t).removeClass("deleting"), $(t).text("Delete")
}

function post_order_comment(t, e, a, i) {
    if (!$(".order_comment_" + t).hasClass("posting")) {
        $(".order_comment_" + t).addClass("posting");
        var r = $(".order_comment_" + t).parent();
        "" == a ? (alert("Login required"), $(".order_comment_" + t).removeClass("posting")) : "" == $(".order_comment_" + t).val() ? (alert("Your comment is empty"), $(".order_comment_" + t).removeClass("posting")) : (r.find("img").show(), r.find("input").hide(), $.ajax({
            type: "post",
            url: baseURL + "site/user/post_order_comment",
            data: {
                product_id: t,
                comment_from: e,
                commentor_id: a,
                deal_code: i,
                comment: $(".order_comment_" + t).val()
            },
            complete: function () {
                r.find("img").hide(), r.find("input").show(), window.location.reload()
            }
        }))
    }
}

function post_order_comment_admin(t, e) {
    if (!$(".order_comment_" + t).hasClass("posting")) {
        $(".order_comment_" + t).addClass("posting");
        var a = $(".order_comment_" + t).parent();
        "" == $(".order_comment_" + t).val() ? (alert("Your comment is empty"), $(".order_comment_" + t).removeClass("posting")) : (a.find("img").show(), a.find("input").hide(), $.ajax({
            type: "post",
            url: baseURL + "admin/order/post_order_comment",
            data: {
                product_id: t,
                comment_from: "admin",
                commentor_id: "1",
                deal_code: e,
                comment: $(".order_comment_" + t).val()
            },
            complete: function () {
                a.find("img").hide(), a.find("input").show(), window.location.reload()
            }
        }))
    }
}

function changeReceivedStatus(t, e) {
    $(t).hide(), $(t).next().show(), $.ajax({
        type: "post",
        url: baseURL + "site/user/change_received_status",
        data: {
            rid: e,
            status: $(t).val()
        },
        complete: function () {
            $(t).show(), $(t).next().hide()
        }
    })
}

function update_refund(t, e) {
    if (!$(t).hasClass("updating")) {
        $(t).addClass("updating").text("Updating..");
        var a = $(t).prev().val();
        if ("" == a || a - a != 0)
            return alert("Enter valid amount"), $(t).removeClass("updating").text("Update"), !1;
        $.ajax({
            type: "post",
            url: baseURL + "admin/seller/update_refund",
            data: {
                amt: a,
                uid: e
            },
            complete: function () {
                window.location.reload()
            }
        })
    }
}

function update_phone(t, e) {
    if (!$(t).hasClass("updating")) {
        $(t).addClass("updating").text("Updating..");
        var a = $(t).prev().val();
        if ("" == a)
            return alert("Enter valid phone"), $(t).removeClass("updating").text("Update"), !1;
        $.ajax({
            type: "post",
            url: baseURL + "admin/users/update_phone",
            data: {
                phone: a,
                uid: e
            },
            complete: function () {
                $(t).removeClass("updating").text("Update")
            }
        })
    }
}

function update_payment_type(t, e) {
    if (!$(t).hasClass("updating")) {
        $(t).addClass("updating").text("Updating..");
        var a = $(t).prev().val();
        if ("" == a)
            return alert("Enter valid payment type "), $(t).removeClass("updating").text("Update"), !1;
        $.ajax({
            type: "post",
            url: baseURL + "admin/order/update_payment_type",
            data: {
                payment_type: a,
                id: e
            },
            complete: function () {
                $(t).removeClass("updating").text("Update")
            }
        })
    }
}

function update_vendor(t, e) {
    if (!$(t).hasClass("updating")) {
        $(t).addClass("updating").text("Updating..");
        var a = $(t).prev().val();
        if ("" == a)
            return alert("Enter valid vendor name "), $(t).removeClass("updating").text("Update"), !1;
        $.ajax({
            type: "post",
            url: baseURL + "admin/order/update_vendor",
            data: {
                vendor: a,
                id: e
            },
            complete: function () {
                $(t).removeClass("updating").text("Update")
            }
        })
    }
}

function update_sell_id(t, e) {
    if (!$(t).hasClass("updating")) {
        $(t).addClass("updating").text("Updating..");
        var a = $(t).prev().val();
        if ("" == a)
            return alert("Enter valid vendor ID "), $(t).removeClass("updating").text("Update"), !1;
        $.ajax({
            type: "post",
            url: baseURL + "admin/order/update_sell_id",
            data: {
                sell_id: a,
                id: e
            },
            complete: function () {
                $(t).removeClass("updating").text("Update")
            }
        })
    }
}

function update_courier_name(t, e) {
    if (!$(t).hasClass("updating")) {
        $(t).addClass("updating").text("Updating..");
        var a = $(t).prev().val();
        if ("" == a)
            return alert("Enter valid courier name "), $(t).removeClass("updating").text("Update"), !1;
        $.ajax({
            type: "post",
            url: baseURL + "admin/order/update_courier_name",
            data: {
                courier_name: a,
                id: e
            },
            complete: function () {
                $(t).removeClass("updating").text("Update")
            }
        })
    }
}

function update_tracking_id(t, e) {
    if (!$(t).hasClass("updating")) {
        $(t).addClass("updating").text("Updating..");
        var a = $(t).prev().val();
        if ("" == a)
            return alert("Enter valid tracking id "), $(t).removeClass("updating").text("Update"), !1;
        $.ajax({
            type: "post",
            url: baseURL + "admin/order/update_tracking_id",
            data: {
                tracking_id: a,
                id: e
            },
            complete: function () {
                $(t).removeClass("updating").text("Update")
            }
        })
    }
}

function update_status(t, e) {
    if (!$(t).hasClass("updating")) {
        $(t).addClass("updating").text("Updating..");
        var a = $(t).prev().val();
        if ("" == a)
            return alert("Enter valid status "), $(t).removeClass("updating").text("Update"), !1;
        $.ajax({
            type: "post",
            url: baseURL + "admin/order/update_status",
            data: {
                status: a,
                id: e
            },
            complete: function () {
                $(t).removeClass("updating").text("Update")
            }
        })
    }
}

function update_shipping_status(t, e) {
    if (!$(t).hasClass("updating")) {
        $(t).addClass("updating").text("Updating..");
        var a = $(t).prev().val();
        if ("" == a)
            return alert("Enter valid shipping_status "), $(t).removeClass("updating").text("Update"), !1;
        $.ajax({
            type: "post",
            url: baseURL + "admin/order/update_shipping_status",
            data: {
                shipping_status: a,
                id: e
            },
            complete: function () {
                $(t).removeClass("updating").text("Update")
            }
        })
    }
}

function update_received_payment(t, e) {
    if (!$(t).hasClass("updating")) {
        $(t).addClass("updating").text("Updating..");
        var a = $(t).prev().val();
        if ("" == a)
            return alert("Enter valid received_payment "), $(t).removeClass("updating").text("Update"), !1;
        $.ajax({
            type: "post",
            url: baseURL + "admin/order/update_received_payment",
            data: {
                received_payment: a,
                id: e
            },
            complete: function () {
                $(t).removeClass("updating").text("Update")
            }
        })
    }
}

function update_exp_dispatch(t, e) {
    if (!$(t).hasClass("updating")) {
        $(t).addClass("updating").text("Updating..");
        var a = $(t).prev().val();
        if ("" == a)
            return alert("Enter valid exp_dispatch"), $(t).removeClass("updating").text("Update"), !1;
        $.ajax({
            type: "post",
            url: baseURL + "admin/order/update_exp_dispatch",
            data: {
                exp_dispatch: a,
                id: e
            },
            complete: function () {
                $(t).removeClass("updating").text("Update")
            }
        })
    }
}

function product_details_contact_form(t) {
    $(t).attr("require-login") ? require_login() : $.dialog("contact_frm").open()
}

function IsEmail(t) {
    return /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(t)
}

function ContactSeller() {
    $("#div_question").html(""), $("#div_name").html(""), $("#div_emailaddress").html(""), $("#div_phoneNumber").html("");
    var t = $(".contact_frm #question").val(),
            e = $(".contact_frm #name").val(),
            a = $(".contact_frm #emailaddress").val(),
            i = $(".contact_frm #phoneNumber").val(),
            r = $(".contact_frm #selleremail").val(),
            n = $(".contact_frm #sellerid").val(),
            o = $(".contact_frm #productId").val();
    return "" == t ? ($("#div_question").html("This field is required"), !1) : "" == e ? ($("#div_name").html("This field is required"), !1) : "" == a ? ($("#div_emailaddress").html("This field is required"), !1) : IsEmail(a) ? ($("#div_question").html(""), $("#div_name").html(""), $("#div_emailaddress").html(""), $("#div_phoneNumber").html(""), $("#loadingImgContact").show(), void $.ajax({
        type: "POST",
        url: baseURL + "site/product/contactform",
        data: {
            question: t,
            name: e,
            email: a,
            phone: i,
            selleremail: r,
            sellerid: n,
            product_id: o
        },
        success: function (t) {
            "Success" == t && ($("#loadingImgContact").hide(), location.reload())
        }
    })) : ($("#div_emailaddress").html("Please Enter Valid Email Address"), !1)
}

function check_addon_prod() {
    var t = !0;
    return $("input[id*='quantity']").each(function (e, a) {
        if (document.getElementById("quantity" + e).value < 0)
            return alert("Invalid Quantity"), $("#quantity" + e).focus(), t = !1
    }), t
}

function upload_request(t) {
    if ($(t).hasClass("sending"))
        return !1;
    $(t).addClass("sending");
    var e = $(t).children("textarea"),
            a = $(t).children("input");
    return a.val("Sending...").css("opacity", "0.5"), "" == e.val() ? (alert("Please type your message"), $(t).removeClass("sending"), a.val("Send Request").css("opacity", "1")) : e.val().length < 10 ? (alert("Please give more information in your message"), $(t).removeClass("sending"), a.val("Send Request").css("opacity", "1")) : $.ajax({
        type: "post",
        url: baseURL + "site/landing/upload_request",
        data: {
            msg: e.val()
        },
        dataType: "json",
        success: function (t) {
            t && t.status_code && 1 == t.status_code ? t.message ? alert(t.message) : alert("Your request received. We will contact you soon") : t && t.message ? alert(t.message) : alert("Some errors occured. Please try again later")
        },
        complete: function () {
            $(t).removeClass("sending"), a.val("Send Request").css("opacity", "1"), $(t).parent().parent().find(".ly-close").trigger("click")
        }
    }), !1
}

function addnewaddress() {
    $("#addnewAddress").validate({
        rules: {
            full_name: {
                required: !0,
                minlength: 2,
                maxlength: 20
            },
            phone: {
                required: !0,
                minlength: 10,
                maxlength: 10,
                number: !0
            },
            phone_alternate: {
                required: !0,
                minlength: 10,
                maxlength: 10,
                number: !0
            },
            address1: {
                required: !0,
                minlength: 5,
                maxlength: 100
            },
            address2: {
                minlength: 5,
                maxlength: 100
            },
            city: {
                required: {
                    depends: function (element) {
                        if ('default' == $('#city').val()) {
                            $('#city').val('');
                        }
                        return true;
                    }
                }
            },
            state: {
                required: !0,
            },
            postal_code: {
                required: !0,
                minlength: 6,
                maxlength: 6,
                number: !0
            },
            // address1:{
            //     request: !0
            // },
        },
        messages: {
            full_name: {
                required: "Full name is required.",
                minlength: "Full name should be atleast 2 characters long.",
                maxlength: "Full name should be 20 characters maximum."
            },
            phone: {
                required: "Mobile number is required.",
                minlength: "Mobile number has atleast 10 digit long.",
                maxlength: "Mobile number should be 10 digit maximum.",
                number: "Please enter a valid mobile mumber."
            },
            phone_alternate: {
                required: "Alternate mobile number is required.",
                minlength: "Alternate mobile number has atleast 10 digit long.",
                maxlength: "Alternate mobile number should be 10 digit maximum.",
                number: "Please enter a valid alternate mobile mumber."
            },
            address1: {
                required: "Flat No, Building No. is required.",
                minlength: "Flat No, Building No. should be atleast 5 characters long.",
                maxlength: "Flat No, Building No. should be 100 characters maximum."
            },
            address2: {
                minlength: "Address 1 should be atleast 5 characters long.",
                maxlength: "Address 1 should be 100 characters maximum."
            },
            city: {
                required: "City is required.",
            },
            postal_code: {
                required: "Postal code is required.",
                minlength: "Postal code has atleast 6 digit long.",
                maxlength: "Postal code should be 6 digit maximum.",
                number: "Please enter a valid postal code."
            },
        },
        errorPlacement: function (error, element) {
            var placement = $(element).data('error');
            if (placement) {
                $(placement).append(error)
            } else {
                error.insertAfter(element);
            }
        },
        submitHandler: function (e) {
            var t = $("#user_id").val(),
                    e = $("#full_name").val(),
                    a = $("#address1").val(),
                    i = $("#address2").val(),
                    r = $("#phone_alternate").val(),
                    n = $("#country").val(),
                    o = $("#city").val(),
                    s = $("#state").val(),
                    l = $("#phone").val(),
                    d = $("#postal_code").val(),
                    df = '';
            if ($("#make-default").is(':checked')) {
                z = 'yes';
            } else {
                z = ''
            }
            $("#button-submit-merchant").attr("disabled", "disabled"), $.ajax({
                url: "site/cart/insert_shipping_address",
                type: "post",
                data: "full_name=" + e + "&address1=" + a + "&address2=" + i + "&phone_alternate=" + r + "&country=" + n + "&state=" + s + "&city=" + o + "&phone=" + l + "&postal_code=" + d + "&user_id=" + t + "&set_default=" + z,
                success: function (t) {
                    if (t.status_code == 200) {
                        if (p_ev) {
                            amplitude.track('Purchase Funnel - Step 3', {
                                "Name": e,
                                "Phone Number": l,
                                "Alternate Phone" : r,
                                "City" : o,
                                "State" : s,
                                "Postal Code" : d
                            });
                        }
                        $("body").overhang({
                            type: 'success',
                            message: 'New address added',
                            duration: 2,
                        });
                        $('.address-box').removeClass('selected');
                        $(".address-box i").hide()
                        $(".proceed-btn").removeAttr("style");
                        $('.address-label').hide();
                        if (t.default == 'Yes') {
                            df = '<span class="address-label default">Default</span>';
                        }
                        ($("#save-add").removeAttr("disabled"), $("#button-submit-merchant").removeAttr("disabled"), $("#saveaddress").prop("checked", !0), $(".addressfrm").css("display", "none"), $(".saveaddresscol").css("display", "inline-block"), $("#empty-address").css("display", "none"),
                                $(".save-address").prepend('<li><div class="address-box flex-full selected" data-current-add-id="' + t.data + '"><i class="icn icn-correct-red"></i><h3>' + e + '</h3><address>' + a.replace('"', "") + ", " + i.replace('"', "") + "<br>" + o + ", " + s + ", india<br> " + d + '</address>' + df + '</div></li>'))
                        $("#addnewAddress").trigger("reset");
                        $("#address_proceed_button").attr("data-address", t.data);
                        toast('Address added.', 'toast bg-success', '5000');
                    } else {
                        toast(t.message, 'toast bg-danger', '5000');
                    }
                }
            })
        }
    })
}


function viewProduct(t) {
    $(".viewdeatilcontent #p-name").empty(), $(".viewdeatilcontent span").empty(), $(".viewdeatilcontent #p-price").empty(), $(".viewdeatilcontent p").remove(), $(".viewdeatilcontent ol").remove(), $(".viewdeatilcontent ul").remove(), $(".viewdeatilcontent #p-image").empty(), $("#sub-product-count").empty(), $(".sizecol").remove(), $.ajax({
        url: "site/product/single_product_details",
        type: "post",
        dataType: "json",
        data: {
            pid: t
        },
        success: function (t) {
            var e = t.image.split(",");
            $("#p-name").text(t.product_name), $("#p-price1").html('<i class="fa fa-inr" aria-hidden="true"></i>' + t.price), $("#viewdeatilcontent #p-price").after(t.description), $("#p-image").attr("src", CDN_URL + "images/product/" + e[0]), "" != t.subproducts && $("#sub-product-count").text(t.subproducts.split(",").length + " item Includes"), null != t.brand && "" != t.brand && $("#sub-product-count").before('<div class="sizecol brandcol"><strong>Brand</strong><span><i class="material-icons">loyalty</i><span>' + t.brand + "</span></span></div>"), "" != t.weight && null != t.weight && $("#sub-product-count").before('<div class="sizecol"><strong>Size</strong><span><i><img src="' + CDN_URL + 'images/size-icn.svg" alt="size"></i><span>' + t.weight + "</span></span></div>"), $(".viewdeatilcontent p").each(function () {
                var t = $(this);
                0 == t.html().replace(/\s|&nbsp;/g, "").length && t.remove()
            })
        }
    })
}

function remove_product(t, e, a) {
    var i = $("#Price_" + e).val(),
            r = ($("#product_quantity_" + t).val(), $("#product_quantity_" + t).val());
    if (r - r != 0 || "" == r || "0" == r || r < "0")
        return alert("Invalid Quantity"), !1;
    $.ajax({
        type: "POST",
        url: baseURL + "site/cart/remove_product",
        data: {
            product_id: t,
            qty: r,
            price: i,
            op: a
        },
        success: function (e) {
            $("#price_table").empty();
            var a = e.split("|");
            0 == a[5] && $(".priceaddon").hide(), 0 == a[9] ? ($("#mobile_cart_row_" + a[10]).fadeOut("slow"), $("#cart-row-" + a[10]).fadeOut("slow"), $("#cart-row-first-" + a[10]).fadeOut("slow"), $("#header-cart-row-" + a[10]).fadeOut("slow"), $("#addon-product-detail-cart-" + a[10]).fadeOut("slow"), $("#all-product-detail-cart-" + a[10]).fadeOut("slow"), $("#image_tab" + a[10]).fadeOut("slow"), $("#product_quantity_" + t).val("0"), delete_addon_cart_product(t)) : $("#product_quantity_" + t).val(a[9]), $("#new_quantity_" + t).html(a[9]), $("#new_quantity1_" + t).html(a[9]), $("#rental_amt").html('<i class="fa fa-inr" aria-hidden="true"></i>' + a[1]), $("#deposit_amt").html('<i id="new_pricesymbl" class="fa fa-inr" aria-hidden="true"></i>' + a[2]), $("#price_table").append('<div class="discol"><label>ADVANCE RENTAL</label><span id="rental_amt"><i class="fa fa-inr" aria-hidden="true"></i>' + a[1] + '</span></div><div class="discol"><label>REFUNDABLE DEPOSIT</label><span id="deposit_amt"><i id="p-price" class="fa fa-inr" aria-hidden="true"></i>' + a[2] + '</span></div><label>TOTAL RENT </label><span id="DetailCartGAmt"> <i id="p-price" class="fa fa-inr" aria-hidden="true"></i>' + a[4] + "</span></div>"), $("#CartGAmt").html('<i id="p-price" class="fa fa-inr" aria-hidden="true"></i>' + a[4]), swal({
                title: "Success!",
                text: "Removed Successfully",
                animation: "slide-from-bottom",
                type: "success",
                showConfirmButton: !0,
                confirmButtonText: "View Cart",
                confirmButtonColor: "#e8e8e8",
                allowOutsideClick: !0
            }, function (t) {
                t && (window.location.href = baseURL + "cart")
            }), setTimeout(function () {
                swal.close()
            }, 5e3)
        }
    })
}

function delete_addon_cart_product(t) {
    $.ajax({
        type: "POST",
        url: baseURL + "site/cart/addon_delete_cart",
        data: {
            product_id: t
        },
        success: function (t) {
            $("#price_table").empty();
            var e = t.split("|");
            e[4] < 1 && ($("#add_new_product").empty(), $("#addon_new_product").empty(), $(".btncartdiv").hide(), $("#subtotal").hide(), $("#add_new_product").append('<div class="emptycartbar"><img src="' + CDN_URL + 'images/empty_cart.webp" alt="Empaty cart"><h5>Your Cart is Empty</h5><p>Looks like you have not chosen <br> any product yet</p></div>'), $("#empty_msg").show(), $("#title").hide(), $(".emptycartbar").show()), (e[4] > 0 ? $("#user_cart_btn").html(`<i class="icn icn-cart"></i><span id="new_count">${t.product_value.length}</span>`) : $("#user_cart_btn").html(`<i class="icn icn-cart"></i>`)), (e[4] > 0 ? $("#user_cart_btn_m").html(`<i class="icn icn-cart-white"></i><span id="new_count">${t.product_value.length}</span>`) : $("#user_cart_btn_m").html(`<i class="icn icn-cart-white"></i>`)), $("#cart_amount").val(e[0]), $("#cart_ship_amount").val(e[1]), $("#cart_tax_amount").val(e[2]), $("#cart_total_amount").val(e[3]), $("#discount_Amt").val(e[5]), $("#CartAmt").html(e[0]), $("#CartAmtFirst").html(e[0]), $("#CartAmtDup").html(e[0]), $("#CartSAmt").html(e[1]), $("#CartSAmtFirst").html(e[1]), $("#deposit_amt").html('<i id="new_pricesymbl" class="fa fa-inr" aria-hidden="true"></i>' + e[1]), $("#CartTAmt").html(e[2]), $("#CartGAmt").html('<i id="new_pricesymbl" class="fa fa-inr" aria-hidden="true"></i>' + e[3]), $("#DetailCartGAmt").html('<i id="new_pricesymbl" class="fa fa-inr" aria-hidden="true"></i>' + e[3]), $("#CartCartGAmt").html('<i class="rupees-symbol">&#x20B9;</i> ' + e[10]), $("#CartCartGAmtFirst").html('<i class="rupees-symbol">&#x20B9;</i> ' + e[10]), $("#Shop_id_count").html(e[4]), $("#Shop_MiniId_count").html(e[4] + " items"), $("#disAmtVal").html('<i class="rupees-symbol">&#x20B9;</i> ' + e[5]), $("#cartdivId_" + e[7]).hide(), $("#cartMindivId_" + e[7]).hide(), 0 == e[0] && ($("#cartSubmit").hide(), 0 == e[4] && $("#EmptyCart").show()), $("#CartAmt1").html(e[0]), $("#CartSAmt1").html(e[1]), $("#gstTaxVal").html('<i class="rupees-symbol">&#x20B9;</i> ' + e[9]), $("#gstTaxValFirst").html('<i class="rupees-symbol">&#x20B9;</i> ' + e[9]), $('#gstTaxVal1').html('&#8377; ' + e[9]), $("#CartCartGAmt1").html('<i class="rupees-symbol">&#x20B9;</i> ' + e[10]), $("#price_table").append(' <div class="discol"><label>ADVANCE RENTAL</label><span id="rental_amt"><i id="p-price" class="fa fa-inr" aria-hidden="true"></i>' + e[0] + '</span></div><div class="discol"><label>REFUNDABLE DEPOSIT</label><span id="deposit_amt"> <i id="p-price" class="fa fa-inr" aria-hidden="true"></i>' + e[1] + '</span></div><label>TOTAL RENT </label><span id="DetailCartGAmt"> <i id="p-price" class="fa fa-inr" aria-hidden="true"></i>' + e[3] + "</span> </div>")
        }
    })
}

function get_prodcut_count() {
    $.ajax({
        type: "post",
        url: baseURL + "site/cart/get_product_quantity",
        data: {
            type: "get"
        },
        success: function (t) {
            for (var e = 0; e < t.count; e++)
                $("#product_quantity_" + t.result[e].product_id).val(t.result[e].quantity)
        }
    })
}

function Delete_BulkOrder(t) {
    $.confirm({
        title: "Delete Confirmation",
        message: "You are about to delete this record. <br />It cannot be restored at a later time! Continue?",
        buttons: {
            Yes: {
                class: "yes",
                action: function () {
                    $.ajax({
                        type: "post",
                        url: baseURL + "admin/order/delete_bulk_order",
                        data: {
                            id: t
                        },
                        success: function (t) {
                            t && location.reload()
                        }
                    })
                }
            },
            No: {
                class: "no",
                action: function () {
                    return !1
                }
            }
        }
    })
}

function Delete_Leadrequest(t) {
    $.confirm({
        title: "Delete Confirmation",
        message: "You are about to delete this record. <br />It cannot be restored at a later time! Continue?",
        buttons: {
            Yes: {
                class: "yes",
                action: function () {
                    $.ajax({
                        type: "post",
                        url: baseURL + "admin/uslead/delete_lead_request",
                        data: {
                            id: t
                        },
                        success: function (t) {
                            t && location.reload()
                        }
                    })
                }
            },
            No: {
                class: "no",
                action: function () {
                    return !1
                }
            }
        }
    })
}

function show_discount_box() {
    var t = $("input.subproduct___1:checked").length;
    if (t < 1 && "1" == $("input[type=checkbox][name=is_package]:checked").val())
        return alert("Please Add Sub Products First"), $("#is_package").prop("checked", !1), $("#tab1").css("display", "none"), $("#tab8").css("display", "block"), $(".link_tab1").removeClass("active_tab"), $(".link_tab8").addClass("active_tab"), !1;
    if ("1" == $("input[type=checkbox][name=is_package]:checked").val())
        $(".package_discount_box").show();
    else {
        if (t > 0)
            return alert("Please Remove Sub Products First"), $("#is_package").prop("checked", !0), !1;
        $(".package_discount_box").hide()
    }
}

function Get_Product_Value() {
    var t = [];
    $("input:checkbox[class=subproduct___1]:checked").each(function () {
        t.push($(this).val())
    }), $("input.subproduct___1:checked").length > 0 && $.ajax({
        type: "POST",
        url: baseURL + "admin/product/calculate_product_price",
        data: {
            product_id: t
        },
        success: function (t) {
            $("#total_subproduct_price").val(t)
        }
    })
}

function Calculate_amount() {
    var t = [],
            e = ($('select[name="product_attribute_name[]"]').map(function () {
                "" != this.value && t.push(this.value)
            }).get(), []),
            a = [],
            i = {},
            r = $("#package_discount").val();
    return "" == r ? (alert("Please Enter Discount %"), !1) : r > 99 ? (alert("Please Enter Valid %"), !1) : ($("input.subproduct___1:checked").length, $("input:checkbox[class=subproduct___1]:checked").each(function () {
        var t = $(this).val(),
                r = $("#package_quantity_" + t).val();
        e.push(t), a.push(r), i[$(this).val()] = $("#package_quantity_" + t).val()
    }), void $.ajax({
        type: "POST",
        url: baseURL + "admin/product/Calculate_total_amount",
        data: {
            product_id: e,
            quantity: a,
            quantity_array: i,
            tenure_array: t
        },
        success: function (t) {
            for (var e = JSON.parse(t), a = 0, i = 0; i < e.length; i++) {
                var n = e[i],
                        o = n - n / 100 * r;
                $("#tenure_value_" + ++a).val(Math.round(o))
            }
            var s = $("#tenure_value_1").val();
            $("#sale_price").val(s), $("#price").val(s)
        }
    }))
}

function Calculate_amount_edit() {
    var city_ids = [];
    var tenure_list = [];
    var t = [],
            e = ($('select[name^="attr_name1"]').map(function () {
                "" != this.value && t.push([$(this).attr('data-city-id'), this.value])
            }).get(), $('select[name^="product_attribute_name"]').map(function () {
                "" != this.value && t.push([$(this).attr('data-city-id'), this.value])
            }).get(), []),
            a = [],
            i = {},
            r = $("#package_discount").val(),
            n = $("#productID").val();
    $.each($('select[name^="attr_name1"]'), function (key, val) {
        city_ids.push($(this).attr('data-city-id'));
    });
    $.each($('select[name^="product_attribute_name"]'), function (key, val) {
        city_ids.push($(this).attr('data-city-id'));
    });
    $.each($('input[name^="attr_val1"]'), function (key, val) {
        tenure_list.push($(this).attr('data-name'));
    });

    if ("" == r)
        return alert("Please Enter Discount %"), !1;
    if (r > 99)
        return alert("Please Enter Valid %"), !1;
    $("input.subproduct___1:checked").length, $("input:checkbox[class=subproduct___1]:checked").each(function () {
        var t = $(this).val(),
                r = $("#package_quantity_" + t).val();
        e.push(t), a.push(r), i[$(this).val()] = $("#package_quantity_" + t).val();
    });

    let unique_cities = [...new Set(city_ids)];
    let unique_tunure = [...new Set(tenure_list)];
    var max_tenure = "";
    var min_tenure = "";
    var tenure = [];
    $.each(unique_tunure, function (key, val) {
        var x = val.split(" ")[0];
        tenure.push(parseInt(x));
    })
    max_tenure = Math.max(...tenure);
    min_tenure = Math.min(...tenure);
    var o = $("#productID").val();
    $.ajax({
        type: "POST",
        url: baseURL + "admin/product/Calculate_total_amount_edit",
        data: {
            product_id: o,
            other_ids: e,
            quantity_array: i,
            package_id: n,
            tenure_array: t
        },
        success: function (e) {
            var pre = '';
            var j = 0;
            for (var a = JSON.parse(e), i = 0, n = 0; n < a.length; n++) {
                if (pre != city_ids[n]) {
                    pre = city_ids[n];
                    j = 1
                }
                var o = a[n][city_ids[n]],
                        s = o - o / 100 * r;

                $("#tenure_value_" + city_ids[n] + "_" + j).val(Math.round(s));
                if (i == 12) {
                    i = 0;
                }
                j++;
            }
            let mrp_price = [];
            $.each(unique_cities, function (key, val) {
                $("#sale_price_" + val).val($(".attribute_price_" + max_tenure + "_Months_" + val).val());
                mrp_price.push($(".attribute_price_" + min_tenure + "_Months_" + val).val());
            })
            // var l = $("#tenure_value_1").val();
            // $("#sale_price").val(l);
            $("#price").val(Math.min(...mrp_price));
            var d = [];
            jQuery(".attribute_price").each(function (e) {
                item = {}, item.attr_id = $(this).attr("data-attribute_id"), item.pid = $(this).attr("data-pid"), item.attr_name = t[e][1], item.city_id = t[e][0], item.attr_price = $(this).val(), d.push(item)
            });
            $.ajax({
                type: "POST",
                url: baseURL + "admin/product/update_attr_price",
                data: {
                    attr: d
                },
                success: function (t) {
                    alert("Price updated successfully");
                }
            })
        }
    })
}

function show_used_count(t) {
    $.ajax({
        url: baseURL + "admin/Couponcards/getUsedCodeUserDetails",
        data: {
            referral_code: t
        },
        type: "post",
        dataType: "json",
        success: function (t) {
            var e = "";
            if (t.length > 0)
                for (var a = 0; a < t.length; a++)
                    e += "<tr><td>" + t[a].user_id + "</td><td>" + t[a].full_name + "</td><td>" + t[a].email + "</td><td>" + t[a].discount_get + "</td><td>" + t[a].order_Status + "</td></tr>";
            else
                e += "No Record Found";
            $("#append_new_user").html(e), $("#model_css").addClass("show-modal"), document.getElementsByTagName("body")[0].style = "overflow: hidden"
        }
    })
}
var deadline, timeinterval;

function Verified_field() {
    if ("" == $("#phone_no").val())
        return toast('Please Enter Number', 'toast bg-danger', 2000), !1;
    $("#new_otp").focus(), $("#setting_mobile").removeAttr("disabled"), $.ajax({
        type: "POST",
        dataType: "json",
        url: baseURL + "site/User/send_otp",
        data: {
            send_to: $("#phone_no").val()
        },
        success: function (response) {
            if (response == 'success') {
                toast('One time OTP is sent on your number', 'toast bg-success', 2300);
                $('.otp_section').removeClass('d-none');
                jQuery("#new_otp").focus();
                $('#clockdiv').show();
                Show_countdown_timer();
            } else {
                toast(response, 'toast bg-danger', 2000);
            }
        }
    })
}

function Show_countdown_timer() {
    $("#clockdiv").removeClass('d-none')
    $('#do_verify').hide();
    var time_in_minutes = 0.50;
    var current_time = Date.parse(new Date());
    deadline = new Date(current_time + time_in_minutes * 60 * 1000);
    run_clock('clockdiv');
}

function run_clock(t) {
    update_clock(); // run function once at first to avoid delay
    timeinterval = setInterval(update_clock, 1000);
}

function update_clock() {
    var t = time_remaining(deadline);
    $("#clockdiv").html("( " + t.minutes + ":" + t.seconds + " Seconds)"), t.total <= 0 && (clearInterval(timeinterval), $("#clockdiv").hide(), $("#do_verify").text('Resend'), $('#do_verify').show())
}

function time_remaining(t) {
    var e = Date.parse(t) - Date.parse(new Date),
            a = Math.floor(e / 1e3 % 60),
            i = Math.floor(e / 1e3 / 60 % 60),
            r = Math.floor(e / 36e5 % 24);
    return {
        total: e,
        days: Math.floor(e / 864e5),
        hours: r,
        minutes: i,
        seconds: a
    }
}

var si_discount = "";

function check_box() {
    $("#is_si_selected").is(":checked") ? $.ajax({
        type: "POST",
        url: baseURL + "site/cart/GiveDiscountOnCI_CC",
        data: {},
        success: function (t) {
            if (0 != t) {
                var e = t.split("|");
                $("#cart_amount").val(e[0]), $("#cart_ship_amount").val(e[1]), $("#cart_tax_amount").val(e[2]), $("#cart_total_amount").val(e[3]), $("#rental_amt").html('<i id="p-price" class="fa fa-inr" aria-hidden="true"></i>' + e[0]), $("#CartTAmt").html(e[2]), $("#CartGAmt").html('<i id="p-price" class="fa fa-inr" aria-hidden="true"></i>' + e[3]), $("#MCartGAmt").html(e[3]), $("#CartCartGAmt").html('<i class="rupees-symbol">&#x20B9;</i> ' + e[3]), $("#CartCartGAmtFirst").html('<i class="rupees-symbol">&#x20B9;</i> ' + e[3]), $("#CartCartGAmt1").html('<i class="rupees-symbol">&#x20B9;</i> ' + e[3]), $(".ajax_discount").show(), $(".ajax_discount").html('<span class="pull-left">Discount for SI</span><span class="pull-right text-righ pricet"><strong><i class="fa fa-inr" aria-hidden="true"></i> <span >' + e[4] + "</strong></span>");
                var a = $("#voucher_money").val();
                si_discount = e[4];
                var i = '<font color="red">Additional discount of Rs ' + e[4] + "  applied for registering for SI on credit card.Gift vouchers of Rs " + a + " will be sent on your registration id.</font>";
                $("#recurring_offer").html(i), $("#without_recurring").empty()
            }
        }
    }) : $.ajax({
        type: "POST",
        url: baseURL + "site/cart/RemoveDiscountOnCI_CC",
        data: {},
        success: function (t) {
            var e = t.split("|");
            $("#cart_amount").val(e[0]), $("#cart_ship_amount").val(e[1]), $("#cart_tax_amount").val(e[2]), $("#cart_total_amount").val(e[3]), $("#rental_amt").html('<i id="p-price" class="fa fa-inr" aria-hidden="true"></i>' + e[0]), $("#CartTAmt").html(e[2]), $("#CartGAmt").html('<i id="p-price" class="fa fa-inr" aria-hidden="true"></i>' + e[3]), $("#MCartGAmt").html(e[3]), $("#CartCartGAmt").html('<i class="rupees-symbol">&#x20B9;</i> ' + e[3]), $("#CartCartGAmtFirst").html('<i class="rupees-symbol">&#x20B9;</i> ' + e[3]), $("#CartCartGAmt1").html('<i class="rupees-symbol">&#x20B9;</i> ' + e[3]), $(".ajax_discount").hide(), $(".row__1234").hide(), $("#recurring_offer").empty();
            var a = "<font color=red>Register for recurring payment on credit card by selecting SI option in first step to get additional discount of Rs " + si_discount + " and gift vouchers worth Rs " + $("#voucher_money").val() + " .</font>";
            $("#without_recurring").html(a), $("#recurring_offer").empty()
        }
    })
}

function SolvedLogs(t, e) {
    $.ajax({
        type: "POST",
        dataType: "json",
        url: baseURL + "admin/order/update_zoho_logs",
        data: {
            log_id: t,
            solved: e
        },
        success: function (t) {
            location.reload()
        }
    })
}

function Delete_logs(t) {
    $.confirm({
        title: "Delete Confirmation",
        message: "You are about to delete this record. <br />It cannot be restored at a later time! Continue?",
        buttons: {
            Yes: {
                class: "yes",
                action: function () {
                    $.ajax({
                        type: "POST",
                        dataType: "json",
                        url: baseURL + "admin/order/delete_logs",
                        data: {
                            log_id: t
                        },
                        success: function (t) {
                            location.reload()
                        }
                    })
                }
            },
            No: {
                class: "no",
                action: function () {
                    return !1
                }
            }
        }
    })
}

function View_Zoho_Logs(t) {
    $.ajax({
        type: "POST",
        dataType: "json",
        url: baseURL + "admin/order/get_all_logs",
        data: {
            log_id: t
        },
        success: function (t) {
            location.reload()
        }
    })
}

function ShowPayout(t) {
    $("#model_css").show(), $("#invlid_amont").html(""), $(".payout_form_ul").show(), $(".show_all_payouts").hide(), $.ajax({
        url: baseURL + "admin/order/get_user_orders",
        data: {
            order_id: t
        },
        type: "post",
        dataType: "json",
        success: function (e) {
            $("#order_id").val(t), $("#user_id").val(e.user_id), $("#full_name").val(e.full_name), $("#email").val(e.email), $("#mobile_number").val(e.phone_no), $("#total_shipping_amount").val(e.shippingcost), $("#link_expire_date").val(e.expire_time), $("#link_expire_date_label").html(e.expire_time), $("#refund_amount").val(""), $("#model_css").addClass("show-modal"), $("#response").hide(), $("#resend").val(!1), document.getElementsByTagName("body")[0].style = "overflow: hidden"
        }
    })
}

function change_shipping_cost(t) {
    if (!/^\d+$/.test(t))
        return $("#invlid_amont").html("Please enter valid price"), !1;
    $("#invlid_amont").html("");
    var e = $("#total_shipping_amount").val();
    Number(t) > Number(e) ? $("#invlid_amont").html("Note : You enter more then refundable amount.") : $("#invlid_amont").html("")
}

function Create_payout() {
    "" == $("#full_name").val().trim() ? (alert("Please Enter Name"), $("#full_name").focus()) : "" == $("#email").val().trim() ? (alert("Please Enter Email"), $("#email").focus()) : $("#mobile_number").val().length < 9 || $("#mobile_number").val().length > 12 ? (alert("Please Enter Valid Number"), $("#mobile_number").focus()) : window.confirm("Are you sure ?") && $.ajax({
        type: "POST",
        url: baseURL + "admin/order/create_payout",
        dataType: "json",
        data: {
            name: $("#full_name").val(),
            email: $("#email").val(),
            mobile_number: $("#mobile_number").val(),
            total_shipping_amount: $("#total_shipping_amount").val(),
            payout_amount: $("#refund_amount").val(),
            customer_remark: $("#customer_remark").val(),
            notify: $("#notify").val(),
            order_id: $("#order_id").val(),
            user_id: $("#user_id").val(),
            expire_time: $("#link_expire_date").val(),
            cashgramId: $("#cashgramId").val(),
            resend: $("#resend").val(),
            payout_status: $("#payout_status").val()
        },
        beforeSend: function () {
            $("#cashgram_button").attr("disabled", "disabled"), $("#admin_loader").show()
        },
        success: function (t) {
            alert(t.message), 200 == t.subCode ? ($("#response").css("color", "green"), $("#model_css").hide()) : $("#response").css("color", "red"), $("#response").show(), $("#response_code").html(t.subCode), $("#response_message").html(t.message), $("#response_status").html(t.status), $("#cashgram_button").removeAttr("disabled", "disabled"), $("#get_referral_data").DataTable().ajax.reload(null, !1), $("#admin_loader").hide()
        }
    })
}

function CheckPayoutStatus(t) {
    $.ajax({
        type: "POST",
        url: baseURL + "admin/order/check_payout_status",
        dataType: "json",
        data: {
            cashgramid: t
        },
        beforeSend: function () {
            $("#admin_loader").show()
        },
        success: function (t) {
            if ("REDEEMED" == t.data.cashgramStatus)
                var e = "Paid";
            "VERIFIED" == t.data.cashgramStatus && (e = "OTP Verified"), "ACTIVE" == t.data.cashgramStatus && (e = "Link Send"), "EXPIRED" == t.data.cashgramStatus && (e = "Expired"), "PENDING" == t.data.cashgramStatus && (e = "PENDING"), alert(t.data.cashgramStatus), $.ajax({
                type: "POST",
                url: baseURL + "/admin/order/update_payout_status_ajax",
                dataType: "json",
                data: {
                    status: e,
                    cashgramid: t.data.cashgramId
                },
                success: function (t) {
                    $("#admin_loader").hide(), $("#model_css").hide(), $("#get_referral_data").DataTable().ajax.reload(null, !1)
                }
            })
        }
    })
}

function ShowOldPayouts(t) {
    $("#model_css").show(), $("#model_css").addClass("show-modal"), $(".show_all_payouts").show(), $(".payout_form_ul").hide(), $.ajax({
        type: "POST",
        url: baseURL + "admin/order/get_all_send_payouts",
        dataType: "json",
        data: {
            order_id: t
        },
        success: function (t) {
            var e = "";
            if (t.data.length > 0)
                for (var a = t.data.length - 1; a >= 0; a--)
                    e += "<tr><td>" + t.data[a].order_id + "</td><td>" + t.data[a].payout_date + "</td><td>" + t.data[a].shippingcost + "</td><td>" + t.data[a].payout_amount + "</td><td>" + t.data[a].cashgramId + "</td>", "Paid" == t.data[a].payout_status ? e += '<td><label style="color:green">' + t.data[a].payout_status + "</label></td>" : e += '<td><label style="color:red">' + t.data[a].payout_status + "</label></td>", e += '<td><button type="button" onclick="return CheckPayoutStatus(\'' + t.data[a].cashgramId + "')\" >Status</button><br><br>", "Paid" !== t.data[a].payout_status && "OTP Verified" !== t.data[a].payout_status && (e += '<button type="button" onclick="return ResendCashgramNew(\'' + t.data[a].cashgramId + "','" + t.data[a].shippingcost + "','" + t.data[a].order_id + "')\">Resend</button>"), "Expired" !== t.data[a].payout_status && "Paid" !== t.data[a].payout_status && "OTP Verified" !== t.data[a].payout_status && (e += '<br><br><button type="button" onclick="return DisableExpireLink(\'' + t.data[a].cashgramId + "')\">Deactivate</button>");
            else
                e += '<tr><td colspan="7" class="no-data-available">No data!</td></tr>';
            $("#payout_table_body").html(e)
        }
    })
}

function DisableExpireLink(t) {
    $.ajax({
        type: "POST",
        dataType: "json",
        url: baseURL + "admin/order/deactivate_cashgram",
        data: {
            cashgramid: t
        },
        beforeSend: function () {
            $("#admin_loader").show()
        },
        success: function (t) {
            alert(t.message), $("#admin_loader").hide(), $("#model_css").hide(), $("#get_referral_data").DataTable().ajax.reload(null, !1)
        }
    })
}

function ResendCashgramNew(t, e, a) {
    $("#model_css").show(), $("#model_css").addClass("show-modal"), $(".payout_form_ul").show(), $(".show_all_payouts").hide(), $.ajax({
        url: baseURL + "admin/order/get_payout_cashgram_details",
        data: {
            cashgramId: t
        },
        type: "post",
        dataType: "json",
        success: function (i) {
            $("#cashgramId").val(t), $("#order_id").val(a), $("#user_id").val(i.user_id), $("#full_name").val(i.full_name), $("#email").val(i.email), $("#mobile_number").val(i.phone_no), $("#total_shipping_amount").val(e), $("#link_expire_date").val(i.link_expired_date), $("#payout_status").val(i.payout_status), $("#resend").val(!0), $("#refund_amount").val(i.payout_amount), $("#model_css").addClass("show-modal")
        }
    })
}

function notifyMe(productid, userid, cityid)
{
    toast('You will be notified once Item is in Stock', 'toast bg-primary', 3000);
    $.ajax({
        type: "POST",
        url: baseURL + "site/product/send_notify_email",
        data: {
            productid: productid,
            userid: userid,
            cityid: cityid
        }, success: function () {
            $("#notifyMessage").show();
            $("#notifyDisable").show();
            $("#notifyEnable").hide();

        }
    })
}

function confirm_clone(path) {
    $.confirm({
        'title': 'Clone Confirmation',
        'message': 'You are about to clone this record?',
        'buttons': {
            'Yes': {
                'class': 'yes',
                'action': function () {
                    window.open(BaseURL + path, '_blank');
                }
            },
            'No': {
                'class': 'no',
                'action': function () {
                    return false;
                }
            }
        }
    });
}




//BD Admin js

function Approvepartneruser(id, flag, email) {
    var verified_user = $('#verified_user').val();
    var verified_doc = $('#verified_doc').val();
    var verified_bank = $('#verified_bank').val();

    if ($('#verified_user').prop("checked") == true && $('#verified_doc').prop("checked") == true && $('#verified_bank').prop("checked") == true) {
        $.confirm({
            'title': 'Approve Confirmation',
            'message': 'Only approved users will able to login to Cityfurnish Partner App. Do you want to approve?',
            'buttons': {
                'Yes': {
                    'class': 'yes',
                    'action': function () {
                        $.ajax({
                            type: 'post',
                            url: baseURL + 'bdadmin/users/approve_bdusers',
                            data: {
                                'id': id, 'email': email
                            },
                            success: function (response) {
                                if (response) {
                                    if (flag == '1') {
                                        location.href = baseURL + 'bdadmin/bdusers/display_bd_users';
                                    } else {
                                        location.href = baseURL + 'bdadmin/users/display_user_list';
                                    }
                                }
                            }
                        });
                        // window.location = BaseURL + path;
                    }
                },
                'No': {
                    'class': 'no',
                    'action': function () {
                        return false;
                    }
                }
            }
        });
    } else {
        alert("Verify user, documents and bank details to approve partner user.");
        return false;
    }
}

function Pendingpartneruser(id, flag) {

    $.confirm({
        'title': 'Pending Confirmation',
        'message': 'User status is approved !. Do you want to change it to pending?',
        'buttons': {
            'Yes': {
                'class': 'yes',
                'action': function () {
                    $.ajax({
                        type: 'post',
                        url: baseURL + 'bdadmin/users/pending_bdusers',
                        data: {
                            'id': id,
                        },
                        success: function (response) {
                            if (response) {
                                if (flag == '1') {
                                    location.href = baseURL + 'bdadmin/bdusers/display_bd_users';
                                } else {
                                    location.href = baseURL + 'bdadmin/users/display_user_list';
                                }
                            }

                        }
                    });
                    // window.location = BaseURL + path;
                }
            },
            'No': {
                'class': 'no',
                'action': function () {
                    return false;
                }
            }
        }
    });

}
var new_index = 1;
function addNewComission() {
    var html = '<tr id="table_row_' + new_index + '"><td><input type="number" name="tenure" placeholder="Tenure Months Only" id="tenure_' + new_index + '"> Months</td> <td><input type="number" name="comission" placeholder="Percentage Only" id="comission_' + new_index + '""> % </td> <td><button onclick="addSubmitNewComission(' + new_index + ')">Add</button><button onclick="removeAddedComission(' + new_index + ')">Remove</button></td></tr>';
    $('#comission_tbody').append(html);
    new_index++;
}

function removeAddedComission(id) {
    $('#table_row_' + id).fadeOut('slow');
}

function addSubmitNewComission(index) {
    var tenure = $('#tenure_' + index).val();
    var comission = $('#comission_' + index).val();
    if (tenure == null || tenure == '') {
        $('#tenure_' + index).focus();
        alert("Please enter tenure");
        return false;
        ;
    } else if (comission == null || comission == '') {
        alert("Please enter comission");
        $('#comission_' + index).focus();
        return false;
    } else {

        $.confirm({
            'title': 'Approve Confirmation',
            'message': 'Want to add new comission?',
            'buttons': {
                'Yes': {
                    'class': 'yes',
                    'action': function () {
                        $.ajax({
                            type: 'post',
                            url: baseURL + 'bdadmin/setting/addNewComission',
                            data: {
                                'tenure': tenure,
                                'comission': comission,
                                'type': 'add'
                            },
                            success: function (response) {
                                if (response) {
                                    location.reload();
                                }

                            }
                        });
                    }
                },
                'No': {
                    'class': 'no',
                    'action': function () {
                        return false;
                    }
                }
            }
        });

    }
}

function updateSubmitNewComission(index) {
    var tenure = $('#static_tenure_td_' + index).val();
    var comission = $('#static_comission_' + index).val();
    if (tenure == null || tenure == '') {
        $('#static_tenure_td_' + index).focus();
        alert("Please enter tenure");
        return false;
        ;
    } else if (comission == null || comission == '') {
        alert("Please enter comission");
        $('#static_comission_' + index).focus();
        return false;
    } else {

        $.confirm({
            'title': 'Approve Confirmation',
            'message': 'Want to update comission?',
            'buttons': {
                'Yes': {
                    'class': 'yes',
                    'action': function () {
                        $.ajax({
                            type: 'post',
                            url: baseURL + 'bdadmin/setting/addNewComission',
                            data: {
                                'id': index,
                                'tenure': tenure,
                                'comission': comission,
                                'type': 'update'
                            },
                            success: function (response) {
                                if (response) {
                                    location.reload();
                                }

                            }
                        });
                    }
                },
                'No': {
                    'class': 'no',
                    'action': function () {
                        return false;
                    }
                }
            }
        });

    }
}


function showComssionEditable(id, tenure, comission) {
    // alert(id)
    var html = '<td> <input type="number" name="tenure" value="' + tenure + '" placeholder="Tenure Months Only" id="static_tenure_td_' + id + '"> Months</td>\
    <td><input type="number" value="' + comission + '" name="comission" placeholder="Percentage Only" id="static_comission_' + id + '""> % </td> \
    <td><button onclick="updateSubmitNewComission(' + id + ')">update</button><button onclick="CancelComissionUpdation(' + id + ',' + tenure + ',' + comission + ')">Cancel\
    </button></td>';
    $('#static_tenure_' + id).html("");
    $('#static_tenure_' + id).html(html);

}

function CancelComissionUpdation(id, tenure, comission) {
    var html = '<td>' + tenure + ' Months<td>' + comission + '%</td> \
    <td><button onclick="showComssionEditable(' + id + ',' + tenure + ',' + comission + ')">Edit</button> <button onclick="deleteComissions(' + id + ')">Delete</button></td>';
    $('#static_tenure_' + id).html("");
    $('#static_tenure_' + id).html(html);
}

function deleteComissions(id) {
    $.confirm({
        'title': 'Approve Confirmation',
        'message': 'Want to delete this row ?',
        'buttons': {
            'Yes': {
                'class': 'yes',
                'action': function () {
                    $.ajax({
                        type: 'post',
                        url: baseURL + 'bdadmin/setting/deleteComissions',
                        data: {
                            'id': id
                        },
                        success: function (response) {
                            if (response) {
                                $('#static_tenure_' + id).fadeOut('slow');
                            }
                        }
                    });
                }
            },
            'No': {
                'class': 'no',
                'action': function () {
                    return false;
                }
            }
        }
    });
}


//Approve user docs
function approveDocuments(id, is_checked, type = null, flag, bdexecuter_id) {
    if (bdexecuter_id == 0) {
        alert('Please select RM before approving documents.');
        $(is_checked).prop('checked', false).attr('checked', false);
        return false;
    }

    var message;
    if (is_checked.checked) {
        message = 'Want to approve as Verified ?'
        value = 1;
    } else {
        message = 'Want to approve as Unverified ?'
        value = 0;
    }
    $.confirm({
        'title': 'Approve Confirmation',
        'message': message,
        'buttons': {
            'Yes': {
                'class': 'yes',
                'action': function () {
                    $.ajax({
                        type: 'post',
                        url: baseURL + 'bdadmin/users/approve_docs',
                        data: {
                            'id': id,
                            'is_approved': value,
                            'type': type
                        },
                        success: function (response) {
                            alert(response.message);
                            if (response.status == 400) {
                                if (is_checked.checked) {
                                    $(is_checked).prop("checked", false);

                                } else {
                                    $(is_checked).prop("checked", true);
                                }
                            }
                        }
                    });
                }
            },
            'No': {
                'class': 'no',
                'action': function () {
                    if (is_checked.checked) {
                        $(is_checked).prop("checked", false);

                    } else {
                        $(is_checked).prop("checked", true);
                    }

                    return false;

                    // $(is_checked).prop("checked", value);
                }
            }
        }
    });
}

function move_to_cart(product_id,seo_url, product_name){
    if (p_ev) {
        amplitude.track('Whishlist To Cart', {
            "Product Name": product_name,
        });
    }
    window.location.href = baseURL + 'things/' + product_id + '/' + seo_url;
}

