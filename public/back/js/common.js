
//---------------------进度条---------------------

//开启进度条  NProgress.start();
$(document).ajaxStart(function () {
    NProgress.start();
});
//关闭进度条  NProgress.done();
$(document).ajaxStop(function(){
    NProgress.done();
});


//---------------------顶部菜单---------------------
//菜单按钮
$('.icon_menu').on('click',function(){
    // 切换左侧导航栏的显示隐藏
    $('.lt_aside').toggleClass('hidemenu');
    $('.lt_main').toggleClass('hidemenu');
    $('.lt_main .topbar').toggleClass('hidemenu');
});
//退出按钮
$('.icon_logout').on('click',function(){

    $('.logoutModal').modal('show');
})
// 模态框退出按钮
$('#logoutBtn').on('click',function(){
    console.log(21);
    
    $.ajax({
        type:'GET',
        url: '/employee/employeeLogout',
        dataType: 'json',
        success: function(info) {
            if(info.success){
                $('.logoutModal').modal('hide');
                location.href = "login.html";
            }
            
        }


    })


})


