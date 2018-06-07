---
title: embedIndex.html
tags: ie, 兼容, embed
author: jackdan

---
## embedIndex.html
### Question:
- `<embed></embed>`标签在`ie`上的应用。
- jsp代码:
```jsp
<%@ page contentType="text/html;charset=UTF-8"%>
<%@ include file="/WEB-INF/views/include/taglib.jsp"%>
<html>
<head>
<meta charset="utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge,Chrome=1" />
<!-- IE7 mode -->
<script type="text/javascript">
	var ctx = '${ctx}', ctxStatic = '${ctxStatic}';
</script>
<title>文件预览</title>
<meta name="renderer" content="ie-comp">
<link href="${ctxStatic}/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
<link rel="stylesheet" type="text/css" href="${ctxStatic}/swiper/css/default.css">
<link href="${ctxStatic}/swiper/css/fileinput.css" media="all" rel="stylesheet" type="text/css" />
<script src="${ctxStatic}/assets/js/jquery-2.2.4.min.js" type="text/javascript"></script>
<script src="${ctxStatic}/swiper/js/fileinput.js" type="text/javascript"></script>
<script src="${ctxStatic}/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<link rel="stylesheet" href="${ctxStatic}/swiper/swiper.min.css">
<!-- Demo styles -->
<style>
html, body {
	position: relative;
	height: 100%;
}
body {
	background: #eee;
	font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
	font-size: 14px;
	color: #000;
	margin: 0;
	padding: 0;
}
.swiper-container {
	width: 100%;
	height: 100%;
	margin-left: auto;
	margin-right: auto;
}
.swiper-slide {
	text-align: center;
	font-size: 18px;
	background: #fff;
	/* Center slide text vertically */
	-webkit-box-pack: center;
	-ms-flex-pack: center;
	-webkit-justify-content: center;
	justify-content: center;
	-webkit-box-align: center;
	-ms-flex-align: center;
	-webkit-align-items: center;
	align-items: center;
}
</style>
 <!--[if IE]>
	<style >
        .file-preview{
           height:700px !important;
        }

   .modal-dialog{
       position:absolute;
       top:50%;
       left:50%;
       margin-left:-450px;
       margin-top:-285px;
       z-index:9999;
   }
   .modal-content{
     z-index:9999;
   }
   embed{
      z-index:-999;
   }
   object{
     z-index:-999;
   }
        </style>
        <![endif]-->
</head>
<body>
	<div class="swiper-container">
		<div class="swiper-wrapper">
			<div class="swiper-slide">
				<div class="container kv-main">
					<form enctype="multipart/form-data">
						<hr>
						<div class="form-group">
							<div class="file-input">
								<div class="file-preview" style="height: 85% ;">
									<div class=" file-drop-zone" style="height: 96% !important;">
										<div class="file-preview-thumbnails">
											<div class="file-live-thumbs" style="padding-left: 6% !important; padding-top: 1% !important;">
												<!-- 单个预览div start -->
												<c:forEach items="${page.list}" var="fileInfo">
													<div class="file-preview-frame" id="preview-1502084065708-0" data-fileindex="0"
															data-template="pdf" title="${fileInfo.fileName}" style="width: 99px; height: 160px;">
														<div class="kv-file-content">
														<object height="160px" width="160px" wmode="transparent">

															<c:choose>
															 <c:when test="${fileInfo.fileType == 1}">
															 		<c:if test="${fileInfo.exten1 == 0}">
															 			<img src="/fixed/fileerror.png"
																        	class="kv-preview-data file-preview-image"
																				title="文件存在过期签章"
																		alt="error"
																		style="width:160px;height:160px;">
															 		</c:if>
															 		<c:if test="${fileInfo.exten1 != 0}">
															 		<embed class="kv-preview-data"
																		src=" ${fns:getOnlineUrl()}${fileInfo.filePath}"
																		type="application/pdf" width="160px" height="160px" wmode="transparent">
															 		</c:if>
														    </c:when>
														    <c:when test="${fileInfo.fileType == 2}">
														        <img src="${fns:getOnlineUrl()}${fileInfo.filePath}"
														        	class="kv-preview-data file-preview-image"
																	title="图片" alt="error" style="width:160px;height:160px;">
														    </c:when>
														    <c:otherwise>
														        <img src="/fixed/fileerror.png"
														        	class="kv-preview-data file-preview-image"
																	title="非法文件" alt="error" style="width:160px;height:160px;">
														    </c:otherwise>
														</c:choose>

														</object>

														</div>
														<div class="file-thumbnail-footer">
															<div class="file-footer-caption"
																title="${fileInfo.fileName}"> ${fileInfo.fileName} <br>
																<samp>(${fileInfo.amsArchivesFiles.startPage}-${fileInfo.amsArchivesFiles.endPage}页)</samp>
															</div>
															<div class="file-actions">
																<div class="file-footer-buttons">
																	<button type="button"
																				  id="showModal"
																				  fileName="${fileInfo.fileName}"
																				  fileUrl="${fns:getOnlineUrl()}${fileInfo.filePath}"
																				  fileType="${fileInfo.fileType}"
																				  exten1 = "${fileInfo.exten1}"
																				  filePage="1"
																				  isOverdue="0"
																			class="kv-file-zoom btn btn-xs btn-default" title="预览文件">
																		<i class="glyphicon glyphicon-zoom-in"></i>
																	</button>
																</div>
															</div>
														</div>
													</div>
												</c:forEach>
												<!-- 单个预览div end -->
											</div>
										</div>
										<div class="clearfix"></div>
										<div class="file-preview-status text-center text-success"></div>
										<div class="kv-fileinput-error file-error-message" style="display: none;"></div>
									</div>
								</div>
								<span>第&nbsp; <font id="thisPage" ></font>&nbsp;页，共&nbsp;<font id="pageNum"></font>&nbsp;页</span>
								<div class="kv-upload-progress hide"> <div class="progress"></div></div>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
		<!-- 翻页设置 -->
		<div class="swiper-button-next" id="btnNext"></div>
		<div class="swiper-button-prev " id="btnPrev"></div>
		<form:form id="searchForm" action="${ctx}/ams/fileThumbnai/toPreviewFile" method="post">
			<input id="count" name="count" type="hidden" value="${page.count}" />
			<input id="groupId" name="groupId" type="hidden" value="${groupId}" />
			<input id="pageNo" name="pageNo" type="hidden" value="${page.pageNo}" />
			<input id="pageSize" name="pageSize" type="hidden" value="${page.pageSize}" />
		</form:form>
	</div>

	<!-- 弹出预览 start-->
		<div id="kvFileinputModal" class="file-zoom-dialog modal fade in" tabindex="-1" aria-labelledby="kvFileinputModalLabel" style="display:none;">
			<div class="modal-dialog modal-lg" role="document">
		  	<div class="modal-content">
		    <div class="modal-header">
		      <div class="kv-zoom-actions pull-right">
			      <button type="button" class="btn btn-default btn-borderless"
			      		title="Toggle borderless mode" data-toggle="button" aria-pressed="false" autocomplete="off">
			      	<i class="glyphicon glyphicon-resize-full"></i>
			      </button>
			      <button type="button" class="btn btn-default btn-close"
			      		title="Close detailed preview" data-dismiss="modal" aria-hidden="true">
			      		<i class="glyphicon glyphicon-remove"></i>
			      </button>
		      </div>
		      <h3 class="modal-title"> <small><span class="kv-zoom-title">文件名</span></small></h3>
		    </div>
		    <div class="modal-body">
		      <div class="floating-buttons"></div>
		      <div class="kv-zoom-body file-zoom-content" id="showPdfModel"></div>
			</div>
		  </div>
		</div>
		</div>
	<!-- 弹出预览 end -->

	<script type="text/javascript">
		var no = $('#pageNo').val();
	  	var size = $('#pageSize').val();
	  	var count = $('#count').val();
	  	var pageNum = Math.ceil(count/size); //计算页数，向上取整
		$.onchange= {
				nextButton:function(){
	              	if(no*size < count){
	              		no ++;
	              		$('#pageNo').val(no);
	                  	$("#searchForm").submit();
	              	}
	            },
			    prevButton:function(){
	              	if(no*size != size){
	              		no --;
	              		$('#pageNo').val(no);
	                  	$("#searchForm").submit();
	              	}
				 },
	            initSwiperBtn:function(){
	            	$('#thisPage').text(no);
            		$('#pageNum').text(pageNum);
	            	if(no * size >= count){
	            		$('#btnNext').addClass('swiper-button-disabled');
	            	}
	            	if(no * size == size){
	            		$('#btnPrev').addClass('swiper-button-disabled');
	            	}
	            }
		}
		$(function(){
			//初始化按钮状态
			$.onchange.initSwiperBtn();
			//键盘 翻页
		    $("body").keydown(function(event){ ;
		      if(event.keyCode==37){
		    	  $.onchange.prevButton();
		      }
		      if(event.keyCode==39){
		    	  $.onchange.nextButton();
		      }
		    });
			//下一页
			$('#btnNext').click(function(){
				$.onchange.nextButton();
            });
			//上一页
			$('#btnPrev').click(function(){
				$.onchange.prevButton();
            });
			$('.btn-close').click(function(){
				$('#kvFileinputModal').hide();
            });
			$("[id=showModal]").each(function(){
				$(this).click(function(){
					var isOverdue =$(this).attr('isOverdue');  //是否非法
					if(isOverdue != 1){
						var fileUrl =$(this).attr('fileUrl');  //文件路径
						var fileName =$(this).attr('fileName');  //文件名称
						var fileType =$(this).attr('fileType'); //文件类型
						var exten1 = $(this).attr('exten1'); //签章状态
						var html = '';
						var imageHtm = "<img class='kv-preview-data file-preview-image file-zoom-detail'"
										        + "src='"+fileUrl+"'"
										        + "title='' style='width: auto; height: auto; max-width: 80%; max-height: 100%;'>";
						var pdfHtm =  "<embed class='kv-preview-data file-zoom-detail'"
												+ "src='"+fileUrl+"'"
												+ "type='application/pdf' style='width: 100%; height: 100%; min-height: 480px;'"
												+ "internalinstanceid='9'>";
						var errorHtm = "<img class='kv-preview-data file-preview-image file-zoom-detail'"
					       				        + "src='/fixed/fileerror.png'"
					                            + "title='非法文件' style='width: auto; height: auto; max-width: 80%; max-height: 100%;'>";
						 //切换显示模版
						if(fileType == 2){  //图片
							html += imageHtm;
						}else if(fileType == 1){	    //PDF
							  if(exten1 != 0 || exten1 != '0'){
								  html += pdfHtm;
							  }else{
								  html += errorHtm;
							  }
						}else{
							html += errorHtm;
						}
					    //初始化预览框数据
						$('.kv-zoom-title').text(fileName);
						$('#showPdfModel').html(html);
						$('#kvFileinputModal').show();
					}else{
						alert("非法文件");
					}
				})
			});
			//PDF预览窗口，全屏控制
			$('.btn-borderless').click(function(){
				if($('#kvFileinputModal').hasClass('file-zoom-fullscreen')){
					$('#kvFileinputModal').removeClass('file-zoom-fullscreen');
					$("#showPdfModel").removeAttr("style");
				}else{
					$('#kvFileinputModal').addClass('file-zoom-fullscreen');
					//$('#showPdfModel').find('.file-zoom-content').height($(window).height())
					$('#showPdfModel').attr('style','height:90%!important;');
				}
            });
		})
	</script>
</body>
</html>
```
- 展现的核心部分就是:
```jsp
<object height="160px" width="160px" wmode="transparent">
    <c:choose>
        <c:when test="${fileInfo.fileType == 1}">
	        <c:if test="${fileInfo.exten1 == 0}">
		        <img src="/fixed/fileerror.png"
			        class="kv-preview-data file-preview-image"
					title="文件存在过期签章"
				    alt="error"
				    style="width:160px;height:160px;">
	        </c:if>
		    <c:if test="${fileInfo.exten1 != 0}">
		        <embed class="kv-preview-data"
			        src=" ${fns:getOnlineUrl()}${fileInfo.filePath}"
					type="application/pdf" width="160px" height="160px" wmode="transparent">
		    </c:if>
	    </c:when>
	    <c:when test="${fileInfo.fileType == 2}">
	        <img src="${fns:getOnlineUrl()}${fileInfo.filePath}"
		        class="kv-preview-data file-preview-image"
			    title="图片" alt="error" style="width:160px;height:160px;">
	    </c:when>
	    <c:otherwise>
	        <img src="/fixed/fileerror.png"
		        class="kv-preview-data file-preview-image"
				title="非法文件" alt="error" style="width:160px;height:160px;">
	    </c:otherwise>
    </c:choose>
</object>
```
- `jquery`的核心操作内容是:
```js
var imageHtm = "<img class='kv-preview-data file-preview-image file-zoom-detail'"
                        + "src='"+fileUrl+"'"
					    + "title='' style='width: auto; height: auto; max-width: 80%; max-height: 100%;'>";
var pdfHtm =  "<embed class='kv-preview-data file-zoom-detail'"
					    + "src='"+fileUrl+"'"
					    + "type='application/pdf' style='width: 100%; height: 100%; min-height: 480px;'"
					    + "internalinstanceid='9'>";
var errorHtm = "<img class='kv-preview-data file-preview-image file-zoom-detail'"
					    + "src='/fixed/fileerror.png'"
					    + "title='非法文件' style='width: auto; height: auto; max-width: 80%; max-height: 100%;'>";
```
- 在`chrome`上的展示结果是:

![chrome_normal][1]


  
  
- 但是在`ie`上的展示结果就是:

![ie_error][2]

- 无法在`ie`浏览器上覆盖`object`中的`embed`的标签效果。
- 想让它在`ie`浏览器上显示效果与`chrome`浏览器上一致。
- 本人想出了`display`的方法控制:
```js
$(function() {
    $("#showModal").click(function(){
        $(".previewFrame").hide()
    });
    $(".btn-close").click(function() {
        $(".previewFrame").show()
    });
})
```
- 但是这样的效果是这样的:

![display_ie][3]

- **缩小的**`embed`中的`image`标签和**放大的**`embed`标签中的`image`标签也消失了, 这里问题是`className`是`previewFrame`是同一个**缩小的**和**放大的**,但是排除这个可能展示结果还是没有覆盖住的。

- 加入`iframe`标签:

![iframe_position][4]

- 但是效果也是不行的:

![iframe][5]

- **缩小的**效果图中`embed`和`image`的效果都没有显示出来。

------

- `<embed></embed>`标签:
- **定义和用法**:
- `<embed></embed>`标签定义嵌入的内容, 比如插件。
```html
<!doctype html PUBLIC "-//W3c//DTD XHTML 1.1//EN"
  "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
<head>
    <meta charset="UTF-8">
    <title>cloud</title>
</head>
<body>
    <embed src="http://player.youku.com/player.php/Type/Folder/Fid/19188186/Ob/1/sid/XNTQ3NDQyMTY4/v.swf"
        quality="high" width="480" height="400" align="middle" allowScriptAccess="always"
        allowFullScreen="true" mode="transparent" type="application/x-shockwave-flash">
    </embed>
</body>
</html>
```
- 可以`copy`以上代码进行测试。

- **`HTML 4.01`与`HTML5`之间的差异**:
- `<embed></embed>`标签是`HTML5`中的新标签, 只是非常多的开发人员习惯于去用它, 所以应用的范围十分广泛。

- **提示和注释**:
- **注释**: `<embed>`标签必须有`src`属性。
- **提示**: 无法在**开始标签**和**结束标签**之间写文本, 来说明旧式浏览器不支持该标签, 就像`<audio>`和`<video>`标签。
- 与此同时, 需要注意`src`中的`MIME`类型:[Media-Types][6], 这个链接说明了`MIME`类型的常用形式和`type`。

- **属性**:

|  属性   |  值   |  描述   |
| --- | --- | --- |
|  `height`   |   `pixels`  |  设置嵌套内容的高度.   |
|  `src`   |  `url`   |  嵌入内容的URL   |
|  `type`   |  `type`   |  定义嵌入内容的类型  |
| `width` | `pixels` | 设置嵌入内容的宽度 |

------

- `<object></object>`标签:
- **实例**:
```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <title>object_example</title>
    </head>
    <body>
        <object classid="clsid:F08DF954-8592-11D1-B16A-00C0F0283628" id="Slider1"
        width="100" height="50">
            <param name="BorderStyle" value="1" />
            <param name="MousePointer" value="0" />
            <param name="Enabled" value="1" />
            <param name="Min" value="0" />
            <param name="Max" value="10" />
        </object>
    </body>
</html>
```
- **浏览器支持**:

|  IE  | 火狐  | 谷歌 | Safari | 欧朋 |
|---| --- | --- | --- | --- |
| IE | Firefox | Chrome | Safari | Opera |

- 几乎所有的主流浏览器都拥有部分对`<object></object>`标签的支持。

- **定义和用法**:
- **定义一个嵌入的对象**。请使用此元素向您的`XHTML`页面添加多媒体(`Media`)。此元素允许您规定插入`HTML`文档中的对象的数据和参数, 以及可用来显示和操作数据的代码。
- `<object></object>`标签用于包含**对象**, 比如**图像**、**音频**、**视频**、**Java applets**、**ActiveX**、**PDF**以及**Flash**。
- `<object></object>`标签的初衷是取代`img`和`applet`元素。不过由于漏洞以及缺乏浏览器支持, 这一点并没有实现。
- 浏览器的对象支持有赖于**对象类型**。不幸的是, 主流浏览器都使用不同的代码来加载相同的对象类型。
- 而幸运的是, `<object></object>`对象提供了解决方案。如果未显示`<object></object>`元素, 就会执行位于`<object>`和`</object>`之间的代码。
- 通过这种方式, 能够嵌套多个`<object></object>`元素(每个对应一个浏览器)。

- `HTML`和`XHTML`中`<object></object>`元素并没有差异。

- **提示和注释**:
- 注释: `<param>`标签定义用于对象的`run-time`设置。
- 注释: 不要对图像使用`<object></object>`标签, 请使用`<img />`标签代替。

- **可选的属性**:

| 属性 | 值 | 描述 |
| --- | --- | --- |
| align | left; right; top; bottom | 定义围绕该对象的文本对齐方式 |
| archive | URL | 由空格分隔的指向档案文件的URL列表。 这列档案文件包含了与对象相关的资源。|
| border | pixels | 定义对象周围的边框 |
| classid | class ID | 定义嵌入`Windows Registry`中或某个`URL`中的类的`ID`值, 此属性可用来指定浏览器中包含的对象的位置, 通常是一个`Java`类。 |
| codebase | URL | 定义在何处可找到对象所需的代码, 提供一个基准`URL`。 |
| codetype | MIME type | 通过`classid`属性所引用的代码的`MIME`类型。|
| data | URL | 定义引用对象数据的`URL`。如果有需要对象处理的数据文件, 要用`data`属性来指定这些数据文件。 |
| declare | declare | 可定义此对象仅可被声明, 但不能被创建或者示例, 直到此对象得到应用为止。|
| form | form_id | 规定对象所属的一个或者多个表单 |
| height | pixels | 定义对象的高度 |
| width | pixels | 定义对象的宽度 |
| hspace | pixels | 定义对象周围水平方向的空白 |
| name | unique_name | 为对象定义唯一的名称(以便在脚本中使用) |
| standby | text | 定义当对象正在加载时所显示的文本。|
| type | MIME_type | 定义被规定在`data`属性中指定的文件中出现的数据的`MIME`类型。|
| usemap | URL | 规定与对象一同使用的客户端图像映射的`URL`。|
| vspace | pixels | 定义对象周围垂直方向的空白。|

------

- `<iframe></iframe>`标签:
- **浏览器支持**:

|  IE  | 火狐  | 谷歌 | Safari | 欧朋 |
|---| --- | --- | --- | --- |
| IE | Firefox | Chrome | Safari | Opera |

- 所有的浏览器都支持`<iframe></iframe>`标签。

- **定义和用法**:
- `<iframe></iframe>`元素会创建包含另外一个文档的内联框架(即行内框架)。

- `HTML`和`XHTML`之间的差异:
- 在`HTML 4.1 Strict DTD`和`XHTML 1.0 Strict DTD`中, 不支持`<iframe></iframe>`元素。

- **提示和注释**:
- **提示**: 可以把需要放置在`<iframe>`和`</iframe>`之间, 这样就可以应对无法理解`<iframe></iframe>`的浏览器。

- **属性**:

| 属性 | 值 | 描述 |
| --- | --- | --- |
| align | left; right; top; middle; bottom | 规定如何根据周围的元素来对齐此框架。 **强烈不建议使用**。推荐使用样式进行控制。|
| frameborder | 1 or 0 | 规定是否显示框架周围的边框。 |
| height | pixels or % | 定义`iframe`的高度 |
| width | pixels or % | 定义`iframe`的宽度 |
| longdesc | URL | 规定一个页面, 该页面包含了有关`iframe`的较长描述。|
| marginheight | pixels | 定义`iframe`的顶部和底部的边距。 |
| marginwidth | pixels | 定义`iframe`的左侧和右侧的边距。 |
| name | frame_name | 规定`iframe`的名称。 |
| sandbox(h5新属性) | ""; allow-forms; allow-same-origin; allow-scripts; allow-top-navigation | 启用一系列对`<iframe></iframe>`中内容的额外限制。|
| scrolling | yes; no; auto | 规定是否在`<iframe></iframe>`中显示滚动条。
| seamless(h5新属性) | seamless | 规定`<iframe></iframe>`看上去像是包含文档的一部分。|
| src | URL | 规定在`<iframe></iframe>`中显示的文档的`URL`。|
| srcdoc(h5新属性) | HTML_code | 规定在`<iframe></iframe>`中显示的页面的`HTML`内容。|

------

- 检查了所用标签的属性之后发现并没有引用不对的地方。但是显示的效果却非常地差强人意。

  [1]: ./images/questions/chrome_normal.png "chrome_normal"
  [2]: ./images/questions/ie_error.jpg "ie_error"
  [3]: ./images/questions/iframe_effects.png "iframe_effects"
  [4]: ./images/questions/iframe_position.png "iframe_position"
  [5]: ./images/questions/iframe.png "iframe"
  [6]: https://www.iana.org/assignments/media-types/media-types.xhtml