var addPeoData = {
    showMask: false,
    showQQOrWX: 1
};

Object.defineProperty(addPeoData, 'showMask', {
    get() {
        console.log('北方')
    },
    set(Val) {
        console.log('1方' + Val)
        if (Val) {
            // 显示mask
            $('.mask').fadeIn();
        } else {
            $('.mask').fadeOut();
        }
    }
})

Object.defineProperty(addPeoData, 'showQQOrWX', {
    get() {
        console.log('北方')
    },
    set(Val) {
        console.log('1方' + Val)
        if (Val == 1) {
            // 显示mask
            $('.mask_panel.WX').show();
            $('.mask_panel.QQ').hide();
            $('.mask_panel.BF').hide();
        } else if (Val == 2) {
            $('.mask_panel.QQ').show();
            $('.mask_panel.WX').hide();
            $('.mask_panel.BF').hide();
        } else if (Val == 3) {
            $('.mask_panel.QQ').hide();
            $('.mask_panel.WX').hide();
            $('.mask_panel.BF').show();
        }
    }
})
$('.mask').click(function () {
    addPeoData.showMask = false;
})

function showMask(event, num) {
    // event.preventDefault();
    addPeoData.showMask = true;
    addPeoData.showQQOrWX = num;
}