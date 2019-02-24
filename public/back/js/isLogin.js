
//判断是否登录
$.ajax({
    type: 'GET',
    url: '/employee/checkRootLogin',
    dataType: 'json',
    success: function(info){
        if(info.error == 400){
            location.href = 'login.html'
        }

    }


})