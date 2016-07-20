# showPop
showpop是一个基于jQuery的弹出层插件。

##	调用方法
```
$('#btn').click(function (e) { 
  $(this).showPop({ 
    'width': '200px',
    'height': '50px',  
    'containerCls': 'pop-container',  
    'contentCls': 'pop-content',  
    'content': '<p>' + '我是弹出层' + '</p>'  
  });
});
```

##	参数
参数 | 类型 | 描述 | 默认值
------------ | ------------- | ------------ | ------------
width | String | 弹出层宽度，目前仅支持px单位 | '300px'
height | String | 弹出层高度，目前仅支持px单位 | '200px'
containerCls | String | 弹出层的class，自己为其设置css | ''
contentCls | String | 弹出层中内容的class，自己为其设置css | ''
content | String | html字符串，弹出层的内容 | ''
