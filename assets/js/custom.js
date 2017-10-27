$(function () {

    //Anasayfadaki Bom yazı
    $("#js-rotating").Morphext({
        animation: "bounceIn",
        separator: ",",
        speed: 2000,
    });

    $('.example-tabs').on('click', 'a', function (e) {
        e.preventDefault();
        var indexOfLink = $(this).parent().parent().find('a').index($(this));
        console.log(indexOfLink);
        $(this).parent().parent().parent().find('.tab-content .tab-pane.active').removeClass('active')
        $(this).parent().parent().parent().find('.tab-content .tab-pane:eq('+indexOfLink+')').addClass('active');
    })

    

    // Menülere Active class'ı ekleme işlemi
    $('.sidebar').find('a').each(function () {
        var cUrl = String(window.location).split('?')[0];
        if (cUrl.substr(cUrl.length - 1) == '#') {
            cUrl = cUrl.slice(0, -1);
        }
        if ($($(this))[0].href == cUrl) {
            $(this).parents('li').addClass('active');
            // $(this).parents('li').add(this).each(function () {
            //     $(this).parent().addClass('active');
            // });
        }
    });


    hljs.configure({
        tabReplace: '   ', // 4 spaces
    })
    hljs.initHighlighting();






})