/**
 * ITCAST WEB
 * Created by zhousg on 2016/7/16.
 */
$(function(){
    /*轮播图*/
    banner();
});

/*动态响应式轮播图*/
function banner(){
    /*
    * 1.准备数据    json格式的数组
    * 2.解析数据转化成html结构  之前的做法：拼接字符串  （现在：模版引擎  underscore template方法）
    *   判断当前是移动端还是非移动端  决定你要渲染的html结构
    * 3.渲染到页面当中
    * 4.监听到屏幕的宽度  html结构的切换  渲染
    * */


    /*准备数据 */
    var imageList = [
        {
            bac:'images/slide_01_2000x410.jpg',
            img:'images/slide_01_640x340.jpg'
        },
        {
            bac:'images/slide_02_2000x410.jpg',
            img:'images/slide_02_640x340.jpg'
        },
        {
            bac:'images/slide_03_2000x410.jpg',
            img:'images/slide_03_640x340.jpg'
        },
        {
            bac:'images/slide_04_2000x410.jpg',
            img:'images/slide_04_640x340.jpg'
        }
    ]

    /*2.解析数据转化成html结构*/
    /*3.渲染到页面当中*/
    /*渲染html结构到页面道中*/
    var renderHtml = function(){
        /*你是移动端还是非移动端*/
        var width = $(window).width();
        /*宽度小于768咱们都认为是移动端*/
        var isMobile = width < 768 ? true : false;

        /*准备好模版*/
        var pointTemplate = $('#point_template').html();
        var imageTemplate = $('#image_template').html();
        /*模版方法*/
        var pointFuc = _.template(pointTemplate);
        var imageFuc = _.template(imageTemplate);
        /*解析数据成html结构*/
        var pointHtml = pointFuc({model:imageList});
        var imageHtml = imageFuc({
            model:{
                list:imageList,
                isM:isMobile
            }
        });
        /*渲染到页面当中*/
        $('.carousel-indicators').html(pointHtml);
        $('.carousel-inner').html(imageHtml);
    }

    /*4.监听到屏幕的宽度  html结构的切换  渲染*/
    /*屏幕尺寸改变事件*/
    $(window).on('resize',function(){
        renderHtml();
    }).trigger('resize');
}
