

$(function () {

    // 1.进行表单校验

    //使用表单插件校验
    $('#form').bootstrapValidator({

        //校验图标
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },


        //校验字段
        fields: {
            //校验用户名 写对应的 name 属性
            username: {
                validators: {
                    //不能为空
                    notEmpty: {
                        // 为空时显示的提示信息
                        message: '用户名不能为空'
                    },
                    //长度验证
                    stringLength: {
                        min: 2,
                        max: 6,
                        message: '用户名长度必须在2-6位之间'

                    },
                    callback: {
                        message: '用户名不存在'
                    }
                }
            },
            //校验密码
            password: {
                validators: {
                    notEmpty: {
                        //为空时会提示不能为空
                        message: '密码不能为空'
                    },
                    //长度验证
                    stringLength: {
                        min: 6,
                        max: 12,
                        message: '密码长度必须在6-12位之间'
                    },
                    callback: {
                        message: '密码错误'
                    }
                }
            }

        }

    });

    // 2.进行登录请求
    //通过ajax 进行登录请求

    //注册表单验证成功事件
    $("#form").on('success.form.bv', function ( e ) {
        //阻止 submit 按钮跳转
        e.preventDefault();
        
        //通过 ajax 进行登录请求
        $.ajax({
            type: 'post',
            url: '/employee/employeeLogin',
            dataType: 'json',
            data: $('#form').serialize(),
            success: function(info){
                if(info.success){
                    location.href = 'index.html';
                }
                if(info.error == 1000){
                    alert('用户名不存在');
                }
                if(info.error == 1001){
                    alert('密码错误');
                }

            }

        })
        
    });




















})