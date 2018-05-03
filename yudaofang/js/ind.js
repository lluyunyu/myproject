
$(document).ready(function(e) {
    // 以下轮播
    var unslider = $('.banner').unslider({
            dots: true
        }),
        data = unslider.data('unslider');
    $('.unslider-arrow').click(function() {
        var fn = this.className.split(' ')[1];
        data[fn]();
    });
    // 轮播结束

});