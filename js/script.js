// INTRO

const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".hide", { opacity: 1, duration: 1.5 });
tl.to(".intro", { y: "-100%", duration: 1 }, "+=1.5");

// WYBRIERANIE KLASY

$(document).ready(function(){
    $("select").change(function(){
        $(this).find("option:selected").each(function(){
            var optionValue = $(this).attr("value");
            if(optionValue){
                $(".box").not("." + optionValue).hide();
                $("." + optionValue).show();
            } else{
                $(".box").hide();
            }
        });
    }).change();
});

// EKWIPUNEK - MENU

const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
});

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)
    })
});

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
        closeModal(modal)
    })
});

function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
};

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
};

// EKWIPUNEK - MODEL

$(document).ready(function() {
    // MIECZE - JEDNORĘCZE
    
    $('.m1').click(function() {
        $('.bron').css("display", "none");
        $('#m1-bb, #m1-ryc, #m1-dr, #m1-vd').fadeToggle();
    });
    $('.m2').click(function() {
        $(".bron").css("display", "none");
        $('#m2-bb, #m2-ryc, #m2-dr, #m2-vd').fadeToggle();
    });
    $('.m3').click(function() {
        $(".bron").css("display", "none");
        $('#m3-bb, #m3-ryc, #m3-dr, #m3-vd').fadeToggle();
    });
    $('.m4').click(function() {
        $(".bron").css("display", "none");
        $('#m4-bb, #m4-ryc, #m4-dr, #m4-vd').fadeToggle();
    });
    $('.m5').click(function() {
        $(".bron").css("display", "none");
        $('#m5-bb, #m5-ryc, #m5-dr, #m5-vd').fadeToggle();
    });
    $('.m6').click(function() {
        $(".bron").css("display", "none");
        $('#m6-bb, #m6-ryc, #m6-dr, #m6-vd').fadeToggle();
    });
    $('.m7').click(function() {
        $(".bron").css("display", "none");
        $('#m7-bb, #m7-ryc, #m7-dr, #m7-vd').fadeToggle();
    });
    $('.m8').click(function() {
        $(".bron").css("display", "none");
        $('#m8-bb, #m8-ryc, #m8-dr, #m8-vd').fadeToggle();
    });
    $('.m9').click(function() {
        $(".bron").css("display", "none");
        $('#m9-bb, #m9-ryc, #m9-dr, #m9-vd').fadeToggle();
    });
    $('.m10').click(function() {
        $(".bron").css("display", "none");
        $('#m10-bb, #m10-ryc, #m10-dr, #m10-vd').fadeToggle();
    });
    $('.m11').click(function() {
        $(".bron").css("display", "none");
        $('#m11-bb, #m11-ryc, #m11-dr, #m11-vd').fadeToggle();
    });
    $('.m12').click(function() {
        $(".bron").css("display", "none");
        $('#m12-bb, #m12-ryc, #m12-dr, #m12-vd').fadeToggle();
    });
    $('.m13').click(function() {
        $(".bron").css("display", "none");
        $('#m13-bb, #m13-ryc, #m13-dr, #m13-vd').fadeToggle();
    });
    $('.m14').click(function() {
        $(".bron").css("display", "none");
        $('#m14-bb, #m14-ryc, #m14-dr, #m14-vd').fadeToggle();
    });
    $('.m15').click(function() {
        $(".bron").css("display", "none");
        $('#m15-bb, #m15-ryc, #m15-dr, #m15-vd').fadeToggle();
    });
    $('.m16').click(function() {
        $(".bron").css("display", "none");
        $('#m16-bb, #m16-ryc, #m16-dr, #m16-vd').fadeToggle();
    });
    $('.m17').click(function() {
        $(".bron").css("display", "none");
        $('#m17-bb, #m17-ryc, #m17-dr, #m17-vd').fadeToggle();
    });
    $('.m18').click(function() {
        $(".bron").css("display", "none");
        $('#m18-bb, #m18-ryc, #m18-dr, #m18-vd').fadeToggle();
    });
    $('.m19').click(function() {
        $(".bron").css("display", "none");
        $('#m19-bb, #m19-ryc, #m19-dr, #m19-vd').fadeToggle();
    });
    $('.m20').click(function() {
        $(".bron").css("display", "none");
        $('#m20-bb, #m20-ryc, #m20-dr, #m20-vd').fadeToggle();
    });
    $('.m21').click(function() {
        $(".bron").css("display", "none");
        $('#m21-bb, #m21-ryc, #m21-dr, #m21-vd').fadeToggle();
    });

    // MIECZE - DWURĘCZNE
    $('.md1').click(function() {
        $('.bron').css("display", "none");
        $('#md1-bb, #md1-ryc').fadeToggle();
    });
    $('.md2').click(function() {
        $('.bron').css("display", "none");
        $('#md2-bb, #md2-ryc').fadeToggle();
    });
    $('.md3').click(function() {
        $('.bron').css("display", "none");
        $('#md3-bb, #md3-ryc').fadeToggle();
    });
    $('.md4').click(function() {
        $('.bron').css("display", "none");
        $('#md4-bb, #md4-ryc').fadeToggle();
    });
    $('.md5').click(function() {
        $('.bron').css("display", "none");
        $('#md5-bb, #md5-ryc').fadeToggle();
    });
    $('.md6').click(function() {
        $('.bron').css("display", "none");
        $('#md6-bb, #md6-ryc').fadeToggle();
    });
    $('.md7').click(function() {
        $('.bron').css("display", "none");
        $('#md7-bb, #md7-ryc').fadeToggle();
    });
    $('.md8').click(function() {
        $('.bron').css("display", "none");
        $('#md8-bb, #md8-ryc').fadeToggle();
    });
    $('.md9').click(function() {
        $('.bron').css("display", "none");
        $('#md9-bb, #md9-ryc').fadeToggle();
    });
    $('.md10').click(function() {
        $('.bron').css("display", "none");
        $('#md10-bb, #md10-ryc').fadeToggle();
    });

    // TOPORY - JEDNORĘCZNE
    $('.t1').click(function() {
        $('.bron').css("display", "none");
        $('#t1-bb, #t1-ryc').fadeToggle();
    });
    $('.t2').click(function() {
        $('.bron').css("display", "none");
        $('#t2-bb, #t2-ryc').fadeToggle();
    });
    $('.t3').click(function() {
        $('.bron').css("display", "none");
        $('#t3-bb, #t3-ryc').fadeToggle();
    });
    $('.t4').click(function() {
        $('.bron').css("display", "none");
        $('#t4-bb, #t4-ryc').fadeToggle();
    });
    $('.t5').click(function() {
        $('.bron').css("display", "none");
        $('#t5-bb, #t5-ryc').fadeToggle();
    });
    $('.t6').click(function() {
        $('.bron').css("display", "none");
        $('#t6-bb, #t6-ryc').fadeToggle();
    });
    $('.t7').click(function() {
        $('.bron').css("display", "none");
        $('#t7-bb, #t7-ryc').fadeToggle();
    });
    $('.t8').click(function() {
        $('.bron').css("display", "none");
        $('#t8-bb, #t8-ryc').fadeToggle();
    });
    $('.t9').click(function() {
        $('.bron').css("display", "none");
        $('#t9-bb, #t9-ryc').fadeToggle();
    });
    $('.t10').click(function() {
        $('.bron').css("display", "none");
        $('#t10-bb, #t10-ryc').fadeToggle();
    });
    $('.t11').click(function() {
        $('.bron').css("display", "none");
        $('#t11-bb, #t11-ryc').fadeToggle();
    });
    $('.t12').click(function() {
        $('.bron').css("display", "none");
        $('#t12-bb, #t12-ryc').fadeToggle();
    });
    $('.t13').click(function() {
        $('.bron').css("display", "none");
        $('#t13-bb, #t13-ryc').fadeToggle();
    });

    // TOPORY - DWURĘCZNE
    $('.td1').click(function() {
        $('.bron').css("display", "none");
        $('#td1-bb, #td1-ryc').fadeToggle();
    });
    $('.td2').click(function() {
        $('.bron').css("display", "none");
        $('#td2-bb, #td2-ryc').fadeToggle();
    });
    $('.td3').click(function() {
        $('.bron').css("display", "none");
        $('#td3-bb, #td3-ryc').fadeToggle();
    });
    $('.td4').click(function() {
        $('.bron').css("display", "none");
        $('#td4-bb, #td4-ryc').fadeToggle();
    });
    $('.td5').click(function() {
        $('.bron').css("display", "none");
        $('#td5-bb, #td5-ryc').fadeToggle();
    });
    $('.td6').click(function() {
        $('.bron').css("display", "none");
        $('#td6-bb, #td6-ryc').fadeToggle();
    });
    $('.td7').click(function() {
        $('.bron').css("display", "none");
        $('#td7-bb, #td7-ryc').fadeToggle();
    });
    $('.td8').click(function() {
        $('.bron').css("display", "none");
        $('#td8-bb, #td8-ryc').fadeToggle();
    });
    $('.td9').click(function() {
        $('.bron').css("display", "none");
        $('#td9-bb, #td9-ryc').fadeToggle();
    });
    $('.td10').click(function() {
        $('.bron').css("display", "none");
        $('#td10-bb, #td10-ryc').fadeToggle();
    });
    $('.td11').click(function() {
        $('.bron').css("display", "none");
        $('#td11-bb, #td11-ryc').fadeToggle();
    });
    $('.td12').click(function() {
        $('.bron').css("display", "none");
        $('#td12-bb, #td12-ryc').fadeToggle();
    });

    // MŁOTY - JEDNORĘCZNE
    $('.ml1').click(function() {
        $('.bron').css("display", "none");
        $('#ml1-bb, #ml1-ryc').fadeToggle();
    });
    $('.ml2').click(function() {
        $('.bron').css("display", "none");
        $('#ml2-bb, #ml2-ryc').fadeToggle();
    });
    $('.ml3').click(function() {
        $('.bron').css("display", "none");
        $('#ml3-bb, #ml3-ryc').fadeToggle();
    });
    $('.ml4').click(function() {
        $('.bron').css("display", "none");
        $('#ml4-bb, #ml4-ryc').fadeToggle();
    });
    $('.ml5').click(function() {
        $('.bron').css("display", "none");
        $('#ml5-bb, #ml5-ryc').fadeToggle();
    });
    $('.ml6').click(function() {
        $('.bron').css("display", "none");
        $('#ml6-bb, #ml6-ryc').fadeToggle();
    });
    $('.ml7').click(function() {
        $('.bron').css("display", "none");
        $('#ml7-bb, #ml7-ryc').fadeToggle();
    });
    $('.ml8').click(function() {
        $('.bron').css("display", "none");
        $('#ml8-bb, #ml8-ryc').fadeToggle();
    });
    $('.ml9').click(function() {
        $('.bron').css("display", "none");
        $('#ml9-bb, #ml9-ryc').fadeToggle();
    });
    $('.ml10').click(function() {
        $('.bron').css("display", "none");
        $('#ml10-bb, #ml10-ryc').fadeToggle();
    });
    $('.ml11').click(function() {
        $('.bron').css("display", "none");
        $('#ml11-bb, #ml11-ryc').fadeToggle();
    });
    $('.ml12').click(function() {
        $('.bron').css("display", "none");
        $('#ml12-bb, #ml12-ryc').fadeToggle();
    });
    $('.ml13').click(function() {
        $('.bron').css("display", "none");
        $('#ml13-bb, #ml13-ryc').fadeToggle();
    });

    // MŁOTY - DWURĘCZNE
    $('.mld1').click(function() {
        $('.bron').css("display", "none");
        $('#mld1-bb, #mld1-ryc').fadeToggle();
    });
    $('.mld2').click(function() {
        $('.bron').css("display", "none");
        $('#mld2-bb, #mld2-ryc').fadeToggle();
    });
    $('.mld3').click(function() {
        $('.bron').css("display", "none");
        $('#mld3-bb, #mld3-ryc').fadeToggle();
    });
    $('.mld4').click(function() {
        $('.bron').css("display", "none");
        $('#mld4-bb, #mld4-ryc').fadeToggle();
    });
    $('.mld5').click(function() {
        $('.bron').css("display", "none");
        $('#mld5-bb, #mld5-ryc').fadeToggle();
    });
    $('.mld6').click(function() {
        $('.bron').css("display", "none");
        $('#mld6-bb, #mld6-ryc').fadeToggle();
    });
    $('.mld7').click(function() {
        $('.bron').css("display", "none");
        $('#mld7-bb, #mld7-ryc').fadeToggle();
    });
    $('.mld8').click(function() {
        $('.bron').css("display", "none");
        $('#mld8-bb, #mld8-ryc').fadeToggle();
    });
    $('.mld9').click(function() {
        $('.bron').css("display", "none");
        $('#mld9-bb, #mld9-ryc').fadeToggle();
    });
    $('.mld10').click(function() {
        $('.bron').css("display", "none");
        $('#mld10-bb, #mld10-ryc').fadeToggle();
    });
    $('.mld11').click(function() {
        $('.bron').css("display", "none");
        $('#mld11-bb, #mld11-ryc').fadeToggle();
    });
    $('.mld12').click(function() {
        $('.bron').css("display", "none");
        $('#mld12-bb, #mld12-ryc').fadeToggle();
    });

    //HEŁMY
    $('.h1').click(function() {
        $('.helm-bb').css("display", "none");
        $('#h1-bb, #h1-ryc, #h1-sh, #h1-dr, #h1-mo, #h1-uk, #h1-vd').fadeToggle();
    });
    $('.h2').click(function() {
        $('.helm-bb').css("display", "none");
        $('#h2-bb, #h2-ryc, #h2-sh, #h2-dr, #h2-mo, #h2-uk, #h2-vd').fadeToggle();
    });
    $('.h3').click(function() {
        $('.helm-bb').css("display", "none");
        $('#h3-bb, #h3-ryc, #h3-sh, #h3-dr, #h3-mo, #h3-uk, #h3-vd').fadeToggle();
    });
    $('.h4').click(function() {
        $('.helm-bb').css("display", "none");
        $('#h4-bb, #h4-ryc, #h4-sh, #h4-dr, #h4-mo, #h4-uk, #h4-vd').fadeToggle();
    });
    $('.h5').click(function() {
        $('.helm-bb').css("display", "none");
        $('#h5-bb, #h5-ryc, #h5-sh, #h5-dr, #h5-mo, #h5-uk, #h5-vd').fadeToggle();
    });
    $('.h6').click(function() {
        $('.helm-bb').css("display", "none");
        $('#h6-bb, #h6-ryc, #h6-sh, #h6-dr, #h6-mo, #h6-uk, #h6-vd').fadeToggle();
    });
    $('.h7').click(function() {
        $('.helm-bb').css("display", "none");
        $('#h7-bb, #h7-ryc, #h7-sh, #h7-dr, #h7-mo, #h7-uk, #h7-vd').fadeToggle();
    });
    $('.h8').click(function() {
        $('.helm-bb').css("display", "none");
        $('#h8-bb, #h8-ryc, #h8-sh, #h8-dr, #h8-mo, #h8-uk, #h8-vd').fadeToggle();
    });
    $('.h9').click(function() {
        $('.helm-bb').css("display", "none");
        $('#h9-bb, #h9-ryc, #h9-sh, #h9-dr, #h9-mo, #h9-uk, #h9-vd').fadeToggle();
    });
    $('.h10').click(function() {
        $('.helm-bb').css("display", "none");
        $('#h10-bb, #h10-ryc, #h10-sh, #h10-dr, #h10-mo, #h10-uk, #h10-vd').fadeToggle();
    });
    $('.h11').click(function() {
        $('.helm-bb').css("display", "none");
        $('#h11-bb, #h11-ryc, #h11-sh, #h11-dr, #h11-mo, #h11-uk, #h11-vd').fadeToggle();
    });
    $('.h12').click(function() {
        $('.helm-bb').css("display", "none");
        $('#h12-bb, #h12-ryc, #h12-sh, #h12-dr, #h12-mo, #h12-uk, #h12-vd').fadeToggle();
    });
    $('.h13').click(function() {
        $('.helm-bb').css("display", "none");
        $('#h13-bb, #h13-ryc, #h13-sh, #h13-dr, #h13-mo, #h13-uk, #h13-vd').fadeToggle();
    });
    $('.h14').click(function() {
        $('.helm-bb').css("display", "none");
        $('#h14-bb, #h14-ryc, #h14-sh, #h14-dr, #h14-mo, #h14-uk, #h14-vd').fadeToggle();
    });
    $('.h15').click(function() {
        $('.helm-bb').css("display", "none");
        $('#h15-bb, #h15-ryc, #h15-sh, #h15-dr, #h15-mo, #h15-uk, #h15-vd').fadeToggle();
    });
    $('.h16').click(function() {
        $('.helm-bb').css("display", "none");
        $('#h16-bb, #h16-ryc, #h16-sh, #h16-dr, #h16-mo, #h16-uk, #h16-vd').fadeToggle();
    });
    $('.h17').click(function() {
        $('.helm-bb').css("display", "none");
        $('#h17-bb, #h17-ryc, #h17-sh, #h17-dr, #h17-mo, #h17-uk, #h17-vd').fadeToggle();
    });
    $('.h18').click(function() {
        $('.helm-bb').css("display", "none");
        $('#h18-bb, #h18-ryc, #h18-sh, #h18-dr, #h18-mo, #h18-uk, #h18-vd').fadeToggle();
    });
    $('.h19').click(function() {
        $('.helm-bb').css("display", "none");
        $('#h19-bb, #h19-ryc, #h19-sh, #h19-dr, #h19-mo, #h19-uk, #h19-vd').fadeToggle();
    });
    $('.h20').click(function() {
        $('.helm-bb').css("display", "none");
        $('#h20-bb, #h20-ryc, #h20-sh, #h20-dr, #h20-mo, #h20-uk, #h20-vd').fadeToggle();
    });
    $('.h21').click(function() {
        $('.helm-bb').css("display", "none");
        $('#h21-bb, #h21-ryc, #h21-sh, #h21-dr, #h21-mo, #h21-uk, #h21-vd').fadeToggle();
    });
    $('.h22').click(function() {
        $('.helm-bb').css("display", "none");
        $('#h22-bb, #h22-ryc, #h22-sh, #h22-dr, #h22-mo, #h22-uk, #h22-vd').fadeToggle();
    });
    $('.h23').click(function() {
        $('.helm-bb').css("display", "none");
        $('#h23-bb, #h23-ryc, #h23-sh, #h23-dr, #h23-mo, #h23-uk, #h23-vd').fadeToggle();
    });
    $('.h24').click(function() {
        $('.helm-bb').css("display", "none");
        $('#h24-bb, #h24-ryc, #h24-sh, #h24-dr, #h24-mo, #h24-uk, #h24-vd').fadeToggle();
    });
    $('.h25').click(function() {
        $('.helm-bb').css("display", "none");
        $('#h25-bb, #h25-ryc, #h25-sh, #h25-dr, #h25-mo, #h25-uk, #h25-vd').fadeToggle();
    });
    $('.h26').click(function() {
        $('.helm-bb').css("display", "none");
        $('#h26-bb, #h26-ryc, #h26-sh, #h26-dr, #h26-mo, #h26-uk, #h26-vd').fadeToggle();
    });
    $('.h27').click(function() {
        $('.helm-bb').css("display", "none");
        $('#h27-bb, #h27-ryc, #h27-sh, #h27-dr, #h27-mo, #h27-uk, #h27-vd').fadeToggle();
    });
    $('.h28').click(function() {
        $('.helm-bb').css("display", "none");
        $('#h28-bb, #h28-ryc, #h28-sh, #h28-dr, #h28-mo, #h28-uk, #h28-vd').fadeToggle();
    });
    $('.h29').click(function() {
        $('.helm-bb').css("display", "none");
        $('#h29-bb, #h29-ryc, #h29-sh, #h29-dr, #h29-mo, #h29-uk, #h29-vd').fadeToggle();
    });
    $('.h30').click(function() {
        $('.helm-bb').css("display", "none");
        $('#h30-bb, #h30-ryc, #h30-sh, #h30-dr, #h30-mo, #h30-uk, #h30-vd').fadeToggle();
    });
    $('.h31').click(function() {
        $('.helm-bb').css("display", "none");
        $('#h31-bb, #h31-ryc, #h31-sh, #h31-dr, #h31-mo, #h31-uk, #h31-vd').fadeToggle();
    });
    $('.h32').click(function() {
        $('.helm-bb').css("display", "none");
        $('#h32-bb, #h32-ryc, #h32-sh, #h32-dr, #h32-mo, #h32-uk, #h32-vd').fadeToggle();
    });
    $('.h33').click(function() {
        $('.helm-bb').css("display", "none");
        $('#h33-bb, #h33-ryc, #h33-sh, #h33-dr, #h33-mo, #h33-uk, #h33-vd').fadeToggle();
    });
    $('.h34').click(function() {
        $('.helm-bb').css("display", "none");
        $('#h34-bb, #h34-ryc, #h34-sh, #h34-dr, #h34-mo, #h34-uk, #h34-vd').fadeToggle();
    });
    $('.h35').click(function() {
        $('.helm-bb').css("display", "none");
        $('#h35-bb, #h35-ryc, #h35-sh, #h35-dr, #h35-mo, #h35-uk, #h35-vd').fadeToggle();
    });
    $('.h36').click(function() {
        $('.helm-bb').css("display", "none");
        $('#h36-bb, #h36-ryc, #h36-sh, #h36-dr, #h36-mo, #h36-uk, #h36-vd').fadeToggle();
    });
    $('.h37').click(function() {
        $('.helm-bb').css("display", "none");
        $('#h37-bb, #h37-ryc, #h37-sh, #h37-dr, #h37-mo, #h37-uk, #h37-vd').fadeToggle();
    });
    $('.h38').click(function() {
        $('.helm-bb').css("display", "none");
        $('#h38-bb, #h38-ryc, #h38-sh, #h38-dr, #h38-mo, #h38-uk, #h38-vd').fadeToggle();
    });
    $('.h39').click(function() {
        $('.helm-bb').css("display", "none");
        $('#h39-bb, #h39-ryc, #h39-sh, #h39-dr, #h39-mo, #h39-uk, #h39-vd').fadeToggle();
    });
    $('.h40').click(function() {
        $('.helm-bb').css("display", "none");
        $('#h40-bb, #h40-ryc, #h40-sh, #h40-dr, #h40-mo, #h40-uk, #h40-vd').fadeToggle();
    });
    $('.h41').click(function() {
        $('.helm-bb').css("display", "none");
        $('#h41-bb, #h41-ryc, #h41-sh, #h41-dr, #h41-mo, #h41-uk, #h41-vd').fadeToggle();
    });
    $('.h42').click(function() {
        $('.helm-bb').css("display", "none");
        $('#h42-bb, #h42-ryc, #h42-sh, #h42-dr, #h42-mo, #h42-uk, #h42-vd').fadeToggle();
    });
    $('.h43').click(function() {
        $('.helm-bb').css("display", "none");
        $('#h43-bb, #h43-ryc, #h43-sh, #h43-dr, #h43-mo, #h43-uk, #h43-vd').fadeToggle();
    });
    $('.h44').click(function() {
        $('.helm-bb').css("display", "none");
        $('#h44-bb, #h44-ryc, #h44-sh, #h44-dr, #h44-mo, #h44-uk, #h44-vd').fadeToggle();
    });
    $('.h45').click(function() {
        $('.helm-bb').css("display", "none");
        $('#h45-bb, #h45-ryc, #h45-sh, #h45-dr, #h45-mo, #h45-uk, #h45-vd').fadeToggle();
    });
    $('.h46').click(function() {
        $('.helm-bb').css("display", "none");
        $('#h46-bb, #h46-ryc, #h46-sh, #h46-dr, #h46-mo, #h46-uk, #h46-vd').fadeToggle();
    });
    $('.h47').click(function() {
        $('.helm-bb').css("display", "none");
        $('#h47-bb, #h47-ryc, #h47-sh, #h47-dr, #h47-mo, #h47-uk, #h47-vd').fadeToggle();
    });
    $('.h48').click(function() {
        $('.helm-bb').css("display", "none");
        $('#h48-bb, #h48-ryc, #h48-sh, #h48-dr, #h48-mo, #h48-uk, #h48-vd').fadeToggle();
    });
    $('.h49').click(function() {
        $('.helm-bb').css("display", "none");
        $('#h49-bb, #h49-ryc, #h49-sh, #h49-dr, #h49-mo, #h49-uk, #h49-vd').fadeToggle();
    });
    $('.h50').click(function() {
        $('.helm-bb').css("display", "none");
        $('#h50-bb, #h50-ryc, #h50-sh, #h50-dr, #h50-mo, #h50-uk, #h50-vd').fadeToggle();
    });
    $('.h51').click(function() {
        $('.helm-bb').css("display", "none");
        $('#h51-bb, #h51-ryc, #h51-sh, #h51-dr, #h51-mo, #h51-uk, #h51-vd').fadeToggle();
    });
    $('.h52').click(function() {
        $('.helm-bb').css("display", "none");
        $('#h52-bb, #h52-ryc, #h52-sh, #h52-dr, #h52-mo, #h52-uk, #h52-vd').fadeToggle();
    });
    $('.h53').click(function() {
        $('.helm-bb').css("display", "none");
        $('#h53-bb, #h53-ryc, #h53-sh, #h53-dr, #h53-mo, #h53-uk, #h53-vd').fadeToggle();
    });
    $('.h54').click(function() {
        $('.helm-bb').css("display", "none");
        $('#h54-bb, #h54-ryc, #h54-sh, #h54-dr, #h54-mo, #h54-uk, #h54-vd').fadeToggle();
    });
    $('.h55').click(function() {
        $('.helm-bb').css("display", "none");
        $('#h55-bb, #h55-ryc, #h55-sh, #h55-dr, #h55-mo, #h55-uk, #h55-vd').fadeToggle();
    });
    $('.h56').click(function() {
        $('.helm-bb').css("display", "none");
        $('#h56-bb, #h56-ryc, #h56-sh, #h56-dr, #h56-mo, #h56-uk, #h56-vd').fadeToggle();
    });
    $('.h57').click(function() {
        $('.helm-bb').css("display", "none");
        $('#h57-bb, #h57-ryc, #h57-sh, #h57-dr, #h57-mo, #h57-uk, #h57-vd').fadeToggle();
    });
    $('.h58').click(function() {
        $('.helm-bb').css("display", "none");
        $('#h58-bb, #h58-ryc, #h58-sh, #h58-dr, #h58-mo, #h58-uk, #h58-vd').fadeToggle();
    });
    $('.h59').click(function() {
        $('.helm-bb').css("display", "none");
        $('#h59-bb, #h59-ryc, #h59-sh, #h59-dr, #h59-mo, #h59-uk, #h59-vd').fadeToggle();
    });
    $('.h60').click(function() {
        $('.helm-bb').css("display", "none");
        $('#h60-bb, #h60-ryc, #h60-sh, #h60-dr, #h60-mo, #h60-uk, #h60-vd').fadeToggle();
    });
    $('.h61').click(function() {
        $('.helm-bb').css("display", "none");
        $('#h61-bb, #h61-ryc, #h61-sh, #h61-dr, #h61-mo, #h61-uk, #h61-vd').fadeToggle();
    });
    $('.h62').click(function() {
        $('.helm-bb').css("display", "none");
        $('#h62-bb, #h62-ryc, #h62-sh, #h62-dr, #h62-mo, #h62-uk, #h62-vd').fadeToggle();
    });
    $('.h63').click(function() {
        $('.helm-bb').css("display", "none");
        $('#h63-bb, #h63-ryc, #h63-sh, #h63-dr, #h63-mo, #h63-uk, #h63-vd').fadeToggle();
    });
    $('.h64').click(function() {
        $('.helm-bb').css("display", "none");
        $('#h64-bb, #h64-ryc, #h64-sh, #h64-dr, #h64-mo, #h64-uk, #h64-vd').fadeToggle();
    });
    $('.h65').click(function() {
        $('.helm-bb').css("display", "none");
        $('#h65-bb, #h65-ryc, #h65-sh, #h65-dr, #h65-mo, #h65-uk, #h65-vd').fadeToggle();
    });
    $('.h66').click(function() {
        $('.helm-bb').css("display", "none");
        $('#h66-bb, #h66-ryc, #h66-sh, #h66-dr, #h66-mo, #h66-uk, #h66-vd').fadeToggle();
    });
    $('.h67').click(function() {
        $('.helm-bb').css("display", "none");
        $('#h67-bb, #h67-ryc, #h67-sh, #h67-dr, #h67-mo, #h67-uk, #h67-vd').fadeToggle();
    });
    $('.h68').click(function() {
        $('.helm-bb').css("display", "none");
        $('#h68-bb, #h68-ryc, #h68-sh, #h68-dr, #h68-mo, #h68-uk, #h68-vd').fadeToggle();
    });
    $('.h69').click(function() {
        $('.helm-bb').css("display", "none");
        $('#h69-bb, #h69-ryc, #h69-sh, #h69-dr, #h69-mo, #h69-uk, #h69-vd').fadeToggle();
    });
    $('.h70').click(function() {
        $('.helm-bb').css("display", "none");
        $('#h70-bb, #h70-ryc, #h70-sh, #h70-dr, #h70-mo, #h70-uk, #h70-vd').fadeToggle();
    });
    $('.h71').click(function() {
        $('.helm-bb').css("display", "none");
        $('#h71-bb, #h71-ryc, #h71-sh, #h71-dr, #h71-mo, #h71-uk, #h71-vd').fadeToggle();
    });
    $('.h72').click(function() {
        $('.helm-bb').css("display", "none");
        $('#h72-bb, #h72-ryc, #h72-sh, #h72-dr, #h72-mo, #h72-uk, #h72-vd').fadeToggle();
    });
    $('.h73').click(function() {
        $('.helm-bb').css("display", "none");
        $('#h73-bb, #h73-ryc, #h73-sh, #h73-dr, #h73-mo, #h73-uk, #h73-vd').fadeToggle();
    });
    $('.h74').click(function() {
        $('.helm-bb').css("display", "none");
        $('#h74-bb, #h74-ryc, #h74-sh, #h74-dr, #h74-mo, #h74-uk, #h74-vd').fadeToggle();
    });
    $('.h75').click(function() {
        $('.helm-bb').css("display", "none");
        $('#h75-bb, #h75-ryc, #h75-sh, #h75-dr, #h75-mo, #h75-uk, #h75-vd').fadeToggle();
    });
    $('.h76').click(function() {
        $('.helm-bb').css("display", "none");
        $('#h76-bb, #h76-ryc, #h76-sh, #h76-dr, #h76-mo, #h76-uk, #h76-vd').fadeToggle();
    });
    $('.h77').click(function() {
        $('.helm-bb').css("display", "none");
        $('#h77-bb, #h77-ryc, #h77-sh, #h77-dr, #h77-mo, #h77-uk, #h77-vd').fadeToggle();
    });
    $('.h78').click(function() {
        $('.helm-bb').css("display", "none");
        $('#h78-bb, #h78-ryc, #h78-sh, #h78-dr, #h78-mo, #h78-uk, #h78-vd').fadeToggle();
    });
    $('.h79').click(function() {
        $('.helm-bb').css("display", "none");
        $('#h79-bb, #h79-ryc, #h79-sh, #h79-dr, #h79-mo, #h79-uk, #h79-vd').fadeToggle();
    });
    $('.h80').click(function() {
        $('.helm-bb').css("display", "none");
        $('#h80-bb, #h80-ryc, #h80-sh, #h80-dr, #h80-mo, #h80-uk, #h80-vd').fadeToggle();
    });
    $('.h81').click(function() {
        $('.helm-bb').css("display", "none");
        $('#h81-bb, #h81-ryc, #h81-sh, #h81-dr, #h81-mo, #h81-uk, #h81-vd').fadeToggle();
    });
    $('.h82').click(function() {
        $('.helm-bb').css("display", "none");
        $('#h82-bb, #h82-ryc, #h82-sh, #h82-dr, #h82-mo, #h82-uk, #h82-vd').fadeToggle();
    });

    //ZBROJE
    $('.z1').click(function() {
        $('.zbroja-bb, .rekaw-bb').css("display", "none");
        $('#z1-bb, #z1-1-bb, #z1-2-bb, #z1-ryc, #z1-sh, #z1-dr, #z1-mo, #z1-uk, #z1-vd').fadeToggle();
    });
    $('.z2').click(function() {
        $('.zbroja-bb, .rekaw-bb').css("display", "none");
        $('#z2-bb, #z2-1-bb, #z2-2-bb, #z2-ryc, #z2-sh, #z2-dr, #z2-mo, #z2-uk, #z2-vd').fadeToggle();
    });
    $('.z3').click(function() {
        $('.zbroja-bb, .rekaw-bb').css("display", "none");
        $('#z3-bb, #z3-ryc, #z3-sh, #z3-dr, #z3-mo, #z3-uk, #z3-vd').fadeToggle();
    });
    $('.z4').click(function() {
        $('.zbroja-bb, .rekaw-bb').css("display", "none");
        $('#z4-bb, #z4-ryc, #z4-sh, #z4-dr, #z4-mo, #z4-uk, #z4-vd').fadeToggle();
    });
    $('.z5').click(function() {
        $('.zbroja-bb, .rekaw-bb').css("display", "none");
        $('#z5-bb, #z5-ryc, #z5-sh, #z5-dr, #z5-mo, #z5-uk, #z5-vd').fadeToggle();
    });
    $('.z6').click(function() {
        $('.zbroja-bb, .rekaw-bb').css("display", "none");
        $('#z6-bb, #z6-ryc, #z6-sh, #z6-dr, #z6-mo, #z6-uk, #z6-vd').fadeToggle();
    });
    $('.z7').click(function() {
        $('.zbroja-bb, .rekaw-bb').css("display", "none");
        $('#z7-bb, #z7-ryc, #z7-sh, #z7-dr, #z7-mo, #z7-uk, #z7-vd').fadeToggle();
    });
    $('.z8').click(function() {
        $('.zbroja-bb, .rekaw-bb').css("display", "none");
        $('#z8-bb, #z8-ryc, #z8-sh, #z8-dr, #z8-mo, #z8-uk, #z8-vd').fadeToggle();
    });
    $('.z9').click(function() {
        $('.zbroja-bb, .rekaw-bb').css("display", "none");
        $('#z9-bb, #z9-1-bb, #z9-2-bb, #z9-ryc, #z9-sh, #z9-dr, #z9-mo, #z9-uk, #z9-vd').fadeToggle();
    });
    $('.z10').click(function() {
        $('.zbroja-bb, .rekaw-bb').css("display", "none");
        $('#z10-bb, #z10-1-bb, #z10-2-bb, #z10-ryc, #z10-sh, #z10-dr, #z10-mo, #z10-uk, #z10-vd').fadeToggle();
    });
    $('.z11').click(function() {
        $('.zbroja-bb, .rekaw-bb').css("display", "none");
        $('#z11-bb, #z11-1-bb, #z11-2-bb, #z11-ryc, #z11-sh, #z11-dr, #z11-mo, #z11-uk, #z11-vd').fadeToggle();
    });
    $('.z12').click(function() {
        $('.zbroja-bb, .rekaw-bb').css("display", "none");
        $('#z12-bb, #z12-1-bb, #z12-ryc, #z12-sh, #z12-dr, #z12-mo, #z12-uk, #z12-vd').fadeToggle();
    });
    

    //SPODNIE
    $('.s1').click(function() {
        $('.spodnie-bb').css("display", "none");
        $('#s1-1-bb, #s1-2-bb, #s1-3-bb, #s1-4-bb').fadeToggle();
    });
    $('.s2').click(function() {
        $('.spodnie-bb').css("display", "none");
        $('#s2-1-bb, #s2-2-bb, #s2-3-bb, #s2-4-bb').fadeToggle();
    });
    $('.s3').click(function() {
        $('.spodnie-bb').css("display", "none");
        $('#s3-1-bb, #s3-2-bb, #s3-3-bb, #s3-4-bb').fadeToggle();
    });
    $('.s4').click(function() {
        $('.spodnie-bb').css("display", "none");
        $('#s4-1-bb, #s4-2-bb, #s4-3-bb, #s4-4-bb').fadeToggle();
    });
    $('.s5').click(function() {
        $('.spodnie-bb').css("display", "none");
        $('#s5-1-bb, #s5-2-bb, #s5-3-bb, #s5-4-bb').fadeToggle();
    });
    $('.s6').click(function() {
        $('.spodnie-bb').css("display", "none");
        $('#s6-1-bb, #s6-2-bb, #s6-3-bb, #s6-4-bb').fadeToggle();
    });
    $('.s7').click(function() {
        $('.spodnie-bb').css("display", "none");
        $('#s7-1-bb, #s7-2-bb, #s7-3-bb, #s7-4-bb').fadeToggle();
    });
    $('.s8').click(function() {
        $('.spodnie-bb').css("display", "none");
        $('#s8-1-bb, #s8-2-bb, #s8-3-bb, #s8-4-bb').fadeToggle();
    });
    $('.s9').click(function() {
        $('.spodnie-bb').css("display", "none");
        $('#s9-1-bb, #s9-2-bb, #s9-3-bb, #s9-4-bb').fadeToggle();
    });
    $('.s10').click(function() {
        $('.spodnie-bb').css("display", "none");
        $('#s10-1-bb, #s10-2-bb, #s10-3-bb, #s10-4-bb').fadeToggle();
    });
    $('.s11').click(function() {
        $('.spodnie-bb').css("display", "none");
        $('#s11-1-bb, #s11-2-bb, #s11-3-bb, #s11-4-bb').fadeToggle();
    });
    $('.s12').click(function() {
        $('.spodnie-bb').css("display", "none");
        $('#s12-1-bb, #s12-2-bb, #s12-3-bb, #s12-4-bb').fadeToggle();
    });

    //BUTY
    $('.b1').click(function() {
        $('.buty-bb').css("display", "none");
        $('#b1-1-bb, #b1-2-bb').fadeToggle();
    });
    $('.b2').click(function() {
        $('.buty-bb').css("display", "none");
        $('#b2-1-bb, #b2-2-bb').fadeToggle();
    });
    $('.b3').click(function() {
        $('.buty-bb').css("display", "none");
        $('#b3-1-bb, #b3-2-bb').fadeToggle();
    });
    $('.b4').click(function() {
        $('.buty-bb').css("display", "none");
        $('#b4-1-bb, #b4-2-bb').fadeToggle();
    });
    $('.b5').click(function() {
        $('.buty-bb').css("display", "none");
        $('#b5-1-bb, #b5-2-bb').fadeToggle();
    });
    $('.b6').click(function() {
        $('.buty-bb').css("display", "none");
        $('#b6-1-bb, #b6-2-bb').fadeToggle();
    });
    $('.b7').click(function() {
        $('.buty-bb').css("display", "none");
        $('#b7-1-bb, #b7-2-bb').fadeToggle();
    });
    $('.b8').click(function() {
        $('.buty-bb').css("display", "none");
        $('#b8-1-bb, #b8-2-bb').fadeToggle();
    });
    $('.b9').click(function() {
        $('.buty-bb').css("display", "none");
        $('#b9-1-bb, #b9-2-bb').fadeToggle();
    });
    $('.b10').click(function() {
        $('.buty-bb').css("display", "none");
        $('#b10-1-bb, #b10-2-bb').fadeToggle();
    });
    $('.b11').click(function() {
        $('.buty-bb').css("display", "none");
        $('#b11-1-bb, #b11-2-bb').fadeToggle();
    });
    $('.b12').click(function() {
        $('.buty-bb').css("display", "none");
        $('#b12-1-bb, #b12-2-bb').fadeToggle();
    });

    //PELERYNY
    $('.p1').click(function() {
        $('.peleryna').css("display", "none");
        $('#p1').fadeToggle();
    });
    $('.p2').click(function() {
        $('.peleryna').css("display", "none");
        $('#p2').fadeToggle();
    });
    $('.p3').click(function() {
        $('.peleryna').css("display", "none");
        $('#p3').fadeToggle();
    });
    $('.p4').click(function() {
        $('.peleryna').css("display", "none");
        $('#p4').fadeToggle();
    });
    $('.p5').click(function() {
        $('.peleryna').css("display", "none");
        $('#p5').fadeToggle();
    });
    $('.p6').click(function() {
        $('.peleryna').css("display", "none");
        $('#p6').fadeToggle();
    });
    $('.p7').click(function() {
        $('.peleryna').css("display", "none");
        $('#p7').fadeToggle();
    });
    $('.p8').click(function() {
        $('.peleryna').css("display", "none");
        $('#p8').fadeToggle();
    });
    $('.p9').click(function() {
        $('.peleryna').css("display", "none");
        $('#p9').fadeToggle();
    });
    $('.p10').click(function() {
        $('.peleryna').css("display", "none");
        $('#p10').fadeToggle();
    });
});