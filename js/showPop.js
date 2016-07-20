/* ------------------------------------------------ */
/*   BY helloberries@Github    */
/* ------------------------------------------------ */

;(function ($) {
  $.fn.showPop = function (options) {
    $.fn.showPop.defaults = {
      'width': '300px',
      'height': '200px',
      'containerCls': '', // 设置container的类
      'contentCls': '', // 设置content的类
      'content': '' // 填入html字符串
    };
    var settings = $.extend( {}, $.fn.showPop.defaults, options );
    // 插件里的this，经过了一些封装处理，this就是表示jQuery对象,
    // 而不需要再次使用$()进行包装了
    return this.each(function () {
      // 创建幕布
      var popBg = $('<div />', {id: 'popBg'});
      popBg.appendTo('body');
      $('#popBg').css({
        'position': 'fixed',
        'top': 0,
        'left': 0,
        'width': '100%',
        'height': '100%',
        'background-color': 'rgba(0,0,0,.15)'
      });
      // 创建弹出层
      var pop = $('<div />', {id: 'pop'});
      pop.appendTo(popBg);
      $('#pop').css({
        'position': 'fixed',
        'top': 50 + '%',
        'left': 50 + '%',
        'width': settings.width,
        'height': settings.height,
        'margin-top': -parseInt(settings.height)/2 + 'px',
        'margin-left': -parseInt(settings.width)/2 + 'px'
      });
      $('#pop').addClass(settings.containerCls);
      // 创建内容
      var popContent = $('<div />', {class: settings.contentCls});
      var popCtntText = $(settings.content);
      popCtntText.appendTo(popContent);
      popContent.appendTo(pop);
      // 清除弹出层和幕布
      popBg.click(clearPopBg);
    });
  };
  // clearPopBg: 清除弹出层和幕布
  function clearPopBg () {
    $(this).children().remove();
    $(this).remove();
  }
})(jQuery);
