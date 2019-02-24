

$(function () {
    var currentPage = 1;
    var pageSize = 5;

    //渲染页面
    render();
    function render() {
        $.ajax({
            type: 'GET',
            url: '/user/queryUser',
            data: {
                page: currentPage,
                pageSize: pageSize
            },
            dataType: 'json',
            success: function (info) {
                //获取数据
                var htmlStr = template('userTpl', info);
                //渲染页面
                $('tbody').html(htmlStr);

                $("#paginator").bootstrapPaginator({
                    bootstrapMajorVersion: 3,//默认是2，如果是bootstrap3版本，这个参数必填
                    currentPage: info.page,//当前页
                    totalPages:  Math.ceil(info.total / info.size),//总页数
                    size: "small",//设置控件的大小，mini, small, normal,large
                    onPageClicked: function (a,b,c, page) {
                        //为按钮绑定点击事件 page:当前点击的按钮值
                        currentPage = page;
                        render();

                    }
                });
            }
        })
    }
    

    // 变更状态  事件委托
    $('.lt_main tbody').on('click','.btn',function(){
        var id = $(this).parents('tr').data('id');
        console.log(id);
        
        $.ajax({
            type:'POST',
            url: '/user/updateUser',
            data:{
                id:$(this).parents('tr').data('id'),
                isDelete: $(this).text() == '禁用' ? 0 : 1
            },
            dataType: 'json',
            success: function(info){
                if(info.success){
                    render();
                }
            }
        })
    })
});