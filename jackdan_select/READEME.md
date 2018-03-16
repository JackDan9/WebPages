---
title: jackdan_select
tags: select, spider, python
author: jackdan

---
- 同使爬虫的时候遇到的问题:
- 在模拟用户操作浏览器的时候遇到了困难, 如何处理`<select></select>`元素中的`<optgroup></optgrounp>`以及`<optgroup></optgroup>`下的`<group></group>`。
```html
<label>From</label>
<select class="form-control select2-hidden-accessible" name="cboFrom" id="find-flight-purple-from" required="" tabindex="-1" aria-hidden="true" aria-required="true">
	<option></option>
    <optgroup label="Australia">
    	<option value="MEL">Melbourne (MEL)</option>
    	<option value="SYD">Sydney (SYD)</option>
    </optgroup>
    <optgroup label="Cambodia">
    	<option value="PNH">Phnom Penh (PNH)</option>
    	<option value="REP">Siem Reap (REP)</option>
    	<option value="KOS">Sihanoukville (KOS)</option>
    </optgroup>
    <optgroup label="China">
    	<option value="PEK">Beijing (PEK)</option>
    	<option value="CAN">Guangzhou (CAN)</option>
    	<option value="HAK">Haikou (HAK)</option>
    	<option value="HGH">Hangzhou (HGH)</option>
    	<option value="NNG">Nanning (NNG)</option>
    	<option value="PVG">Shanghai (PVG)</option>
    	<option value="CGO">Zhengzhou (CGO)</option>
    </optgroup>
    <optgroup label="France">
    	<option value="CDG">Charles de Gaulle (CDG)</option>
    	<option value="PAR">Paris (PAR)</option>
    </optgroup>
    <optgroup label="Hong Kong">
    	<option value="HKG">Hong Kong (HKG)</option>
    </optgroup>
    <optgroup label="Laos">
    	<option value="LPQ">Luang prabang (LPQ)</option>
    	<option value="PKZ">Pakse (PKZ)</option>
    	<option value="VTE">Vientiane (VTE)</option>
    </optgroup>
    <optgroup label="London">
    	<option value="LON">Heathrow (LON)</option>
    </optgroup>
    <optgroup label="Malaysia">
    	<option value="KUL">Kuala Lumpur (KUL)</option>
    </optgroup>
    <optgroup label="Singapore">
    	<option value="SIN">Singapore (SIN)</option>
    </optgroup>
    <optgroup label="South Korea">
    	<option value="PUS">Busan (PUS)</option>
    	<option value="SEL">Seoul (SEL)</option>
    </optgroup>
    <optgroup label="Thailand">
    	<option value="BKK">Bangkok - Suvarnabhumi (BKK)</option>
    </optgroup>
    <optgroup label="Vietnam">
    	<option value="DAD">Da Nang (DAD)</option>
    	<option value="HAN">Hanoi (HAN)</option>
    	<option value="SGN">Ho Chi Minh city (SGN)</option>
    </optgroup>
</select>
```
- 如何去处理这样的标签获取数据, 同事遇到的问题是: 选取了始发地,但是无法选择目的地。

------

### 标签介绍:
#### `<select></select>`标签:
- **实例**:
```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <title>select_sample</title>
    </head>
    <body>
        <select>
            <option value ="volvo">Volvo</option>
            <option value ="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
        </select>
    </body>
</html>
```
- **浏览器支持**:

|  IE  | 火狐  | 谷歌 | Safari | 欧朋 |
|---| --- | --- | --- | --- |
| IE | Firefox | Chrome | Safari | Opera |

- 所有的主流浏览器都支持`<select></select>`标签。

- **定义和用法**:
- `<select></select>`元素可以创建或多选菜单。
- `<select>...</select>`元素中的`<option></option>`标签用于定义列表中的可用选项。

- **`HTML 4.01`与`HTML 5`之间的差异**:
- `HTML5`添加了一些新属性。

- **提示和注释**:
- **提示**: `<select></select>`元素是一种表单控件, 可用于在表单中接受用户输入。

- **属性**:

| 属性 | 值 | 描述 |
| --- | --- | --- |
| `autofocus`(html5新属性) | `autofocus` | 规定在页面加载后文本区域自动获得焦点。 |
| `disabled` | `disabled` | 规定禁用下拉列表。 |
| `form`(html5新属性) | `form_id` | 规定文本区域所属的一个或者多个表单。 |
| `multiple` | `multiple` | 规定可选择多个选项。 |
| `name` | `name` | 规定下拉列表的名称。|
| `required`(html5新属性) | `required` | 规定文本区域是必填的。|
| `size` | `number` | 规定下拉列表中可见选项的数目。|

------

#### `<optgroup></optgroup>`标签:
- **实例**:
- 通过`<optgroup></optgroup>`标签把相关的选项组合在一起:
```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <title>optgroup_sample</title>
    </head>
    <body>
        <select>
            <optgroup label="Swedish Cars">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
            </optgroup>

            <optgroup label="German Cars">
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
            </optgroup>
        </select>
    </body>
</html>
```
- **浏览器支持**:

|  IE  | 火狐  | 谷歌 | Safari | 欧朋 |
|---| --- | --- | --- | --- |
| IE | Firefox | Chrome | Safari | Opera |

- 所有主浏览器都支持`<optgroup></optgroup>`标签。

- **定义和用法**:
- `<optgroup></optgroup>`标签定义选项组。
- `<optgroup></optgroup>`元素用于组合选项。当使用一个长的选项列表时, 对相关的选项进行组合会使处理更加容易。

- **`HTML`和`XHTML`之间的差异**:
- `HTML`和`XHTML`之间并不存在差异。

- **必需的属性**:

| 属性 | 值 | 描述 |
| --- | --- | --- |
| `label` | `text` | 为选项组规定描述。 |

- **可选的属性**:

| 属性 | 值 | 描述 |
| --- | --- | --- |
| `disabled` | `disabled` | 规定禁用该选项组。 |

------

#### `<option></option>`标签:
- **实例**:
- 创建带有4个选项的选择列表:
```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <title>option_sample</title>
    </head>
    <body>
        <select>
            <option value ="volvo">Volvo</option>
            <option value ="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
        </select>
    </body>
</html>
```

- **浏览器支持**:

|  IE  | 火狐  | 谷歌 | Safari | 欧朋 |
|---| --- | --- | --- | --- |
| IE | Firefox | Chrome | Safari | Opera |

- 所有主流浏览器都支持`<option></option>`标签。

- **定义和用法**:
- `<option></option>`元素定义下拉列表的一个选项(一个条目)。
- 浏览器将`<option></option>`标签中的内容作为`<select></select>`标签的菜单或者是滚动列表中的一个元素显示。
- `<option></option>`元素位于`<select></select>`元素内部。

- **`HTML`和`XHTML`之间的差异**:
- 在`HTML`中, `<option>`没有结束标签。
- 在`XHTML`中, `<option></option>`必须被正确关闭。

- **提示和注释**:
- **注释**: `<option></option>`标签可以在不带有任何属性的情况下使用,但是通常需要使用`value`属性, 此属性会指示出被送往服务器的内容。
- **注释**: 请与`<select></select>`标签配合使用此标签, 否则这个标签是没有意义的。
- **提示**: 如果列表选项很多, 可以使用`<optgroup><optgroup>`标签对相关选项进行组合。

- **可选的属性**:

| 属性 | 值 | 描述 |
| --- | --- | --- |
| disabled | disabled | 规定此选项应在首次加载时被禁用。 |
| label | text | 定义当使用`<optgroup></optgroup>`时所使用的标注。 |
| selected | selected | 规定选项(在首次显示在列表中时)表现为选中状态。|
| value | text | 定义送往服务器的选项值。|

------

### 获取数据:
- 如何取得`<option></option>`当中的数据?