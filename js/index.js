/**
 * ITCAST WEB
 * Created by zhousg on 2016/7/16.
 */
$(function(){
    /*�ֲ�ͼ*/
    banner();
});

/*��̬��Ӧʽ�ֲ�ͼ*/
function banner(){
    /*
    * 1.׼������    json��ʽ������
    * 2.��������ת����html�ṹ  ֮ǰ��������ƴ���ַ���  �����ڣ�ģ������  underscore template������
    *   �жϵ�ǰ���ƶ��˻��Ƿ��ƶ���  ������Ҫ��Ⱦ��html�ṹ
    * 3.��Ⱦ��ҳ�浱��
    * 4.��������Ļ�Ŀ��  html�ṹ���л�  ��Ⱦ
    * */


    /*׼������ */
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

    /*2.��������ת����html�ṹ*/
    /*3.��Ⱦ��ҳ�浱��*/
    /*��Ⱦhtml�ṹ��ҳ�����*/
    var renderHtml = function(){
        /*�����ƶ��˻��Ƿ��ƶ���*/
        var width = $(window).width();
        /*���С��768���Ƕ���Ϊ���ƶ���*/
        var isMobile = width < 768 ? true : false;

        /*׼����ģ��*/
        var pointTemplate = $('#point_template').html();
        var imageTemplate = $('#image_template').html();
        /*ģ�淽��*/
        var pointFuc = _.template(pointTemplate);
        var imageFuc = _.template(imageTemplate);
        /*�������ݳ�html�ṹ*/
        var pointHtml = pointFuc({model:imageList});
        var imageHtml = imageFuc({
            model:{
                list:imageList,
                isM:isMobile
            }
        });
        /*��Ⱦ��ҳ�浱��*/
        $('.carousel-indicators').html(pointHtml);
        $('.carousel-inner').html(imageHtml);
    }

    /*4.��������Ļ�Ŀ��  html�ṹ���л�  ��Ⱦ*/
    /*��Ļ�ߴ�ı��¼�*/
    $(window).on('resize',function(){
        renderHtml();
    }).trigger('resize');
}
