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
