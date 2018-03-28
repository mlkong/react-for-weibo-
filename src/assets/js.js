import $ from'jquery/dist/jquery.min'
export default $(function(){
    $('.aa').hover(function(){
        $(this).css('backgroundColor','red');
    },function(){
        $(this).css('backgroundColor','#fff');
    });
});