# 更改Input的样式

- 下面分别是对单选框和上传文件的input的样式做了改变

## Example

``` html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="referrer" content="origin" />
        <meta property="og:description" content="Input样式框" />
        <meta http-equiv="Cache-Control" content="no-transform" />
        <meta http-equiv="Cache-Control" content="no-siteapp" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <title>Input样式框</title>
        <style type="text/css">
            /* 此为单选框样式 */
            .label{
                width: 70px;
                height: 40px;
                line-height: 40px;
                margin-top: 10px;
                display: block;
                position: relative;
                padding-left:20px;
                box-sizing: border-box; 
                color: #999;
            }
            .label::after{
                content: "";
                border:1px solid #999;
                width: 10px;
                height: 10px;
                display: block;
                position: absolute;
                top: 15px;
                left: 0px;
                border-radius: 50%;
            }
            .label::before{
                content:"";
                background: #00ff00;
                border-radius: 50%;
                display: block;
                width: 6px;
                height: 6px;
                position: absolute;
                top: 18px;
                left: 3px;
                opacity: 0;
            }
            label input{
                display: none;
            }
            label input:checked + .label:after{
                border-color: #09f;
            }
            label input:checked + .label:before{
                opacity: 1;
                transition: opacity 0.5s ease;
            }
            label input:checked + .label{
                color: #0f00ff;
                transition: color 0.6s ease;
            }
            /* 此为上传文件样式 */
            .file-wraps{
                background: orange;
                width: 100px;
                height: 45px;
                position: relative;
                color: white;
                text-align: center;
                line-height: 45px;
            }
            .file-wraps input{
                position: absolute;
                top: 0;
                bottom: 0;
                bottom: 0;  
                right: 0;
                opacity: 0;
            }
        </style>
    </head>
    <body>
        <div>
            <label class="label-one"><input name="nex" type="radio"/><span class="label">别失眠1</span><br></label>
            <label class="label-two"><input name="nex" type="radio"/><span class="label">别失眠2</span></label>
        </div>
        <div class="file-wraps">
            上传文件
            <input type="file" />
        </div>
</html>

```