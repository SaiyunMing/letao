
//---------------------进度条---------------------

//开启进度条  NProgress.start();
$(document).ajaxStart(function () {
    NProgress.start();
});
//关闭进度条  NProgress.done();
$(document).ajaxStop(function(){
    NProgress.done();
});



