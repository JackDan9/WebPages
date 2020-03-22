# div+css布局与table布局比较

## Table:
### 优点
- 1、可观性好，当用户插入一个Table的时候就可以立即看到效果。
- 2、简单方便，适合初入门的用户操作，用表格不需要过多了解代码，只需插入表格，然后设置长宽，对齐方式，表格属性等等。
- 3、可读性好，稍懂些html语言的都可以看的懂，无非就是"table /table、td /td、tr /tr"等等。

### 缺点
- 1、代码冗余，"table tr td /td /tr /table"这是构成一个表格的最基本元素（此为一行一列的表格）。
- 2、无法再利用，比方上面已用到一个表格了 下面还要再用个和上面相同的表格，此时不好调用，造成代码太多，导致网站打开速度慢。

### Example

``` html
<table id="blogCalendar" class="Cal" cellspacing="0" cellpadding="0" title="Calendar" border="0">
    <tbody>
        <tr>
            <td colspan="7">
                <table class="CalTitle" cellspacing="0" border="0">
                    <tbody>
                        <tr>
                            <td class="CalNextPrev">
                                <a href="javascript:void(0);" onclick="loadBlogCalendar('2010/10/23'); return false;">&lt;</a>
                            </td>
                            <td align="center">2010年11月</td>
                            <td align="right" class="CalNextPrev">
                                <a href="javascript:void(0);" onclick="loadBlogCalendar('2010/12/23'); return false;">&gt;</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
        <tr>
                    <th class="CalDayHeader" align="center" abbr="日" scope="col">日</th>
                    <th class="CalDayHeader" align="center" abbr="一" scope="col">一</th>
                    <th class="CalDayHeader" align="center" abbr="二" scope="col">二</th>
                    <th class="CalDayHeader" align="center" abbr="三" scope="col">三</th>
                    <th class="CalDayHeader" align="center" abbr="四" scope="col">四</th>
                    <th class="CalDayHeader" align="center" abbr="五" scope="col">五</th>
                    <th class="CalDayHeader" align="center" abbr="六" scope="col">六</th>
        </tr>
            <tr>
                            <td class="CalOtherMonthDay" align="center">31</td>
                        <td class="" align="center">
                            <a href="https://www.cnblogs.com/ulex/archive/2010/11/01.html"><u>1</u></a>
                        </td>
                        <td class="" align="center">
                            2
                        </td>
                        <td class="" align="center">
                            3
                        </td>
                        <td class="" align="center">
                            4
                        </td>
                        <td class="" align="center">
                            5
                        </td>
                    <td class="CalWeekendDay" align="center">
                        6
                    </td>
            </tr>
                <tr>
                        <td class="CalWeekendDay" align="center">
                            7
                        </td>
                            <td class="" align="center">
                                8
                            </td>
                            <td class="" align="center">
                                9
                            </td>
                            <td class="" align="center">
                                <a href="https://www.cnblogs.com/ulex/archive/2010/11/10.html"><u>10</u></a>
                            </td>
                            <td class="" align="center">
                                11
                            </td>
                            <td class="" align="center">
                                12
                            </td>
                        <td class="CalWeekendDay" align="center">
                            13
                        </td>
                </tr>
                <tr>
                        <td class="CalWeekendDay" align="center">
                            14
                        </td>
                            <td class="" align="center">
                                <a href="https://www.cnblogs.com/ulex/archive/2010/11/15.html"><u>15</u></a>
                            </td>
                            <td class="" align="center">
                                16
                            </td>
                            <td class="" align="center">
                                <a href="https://www.cnblogs.com/ulex/archive/2010/11/17.html"><u>17</u></a>
                            </td>
                            <td class="" align="center">
                                18
                            </td>
                            <td class="" align="center">
                                19
                            </td>
                        <td class="CalWeekendDay" align="center">
                            20
                        </td>
                </tr>
                <tr>
                        <td class="CalWeekendDay" align="center">
                            21
                        </td>
                            <td class="" align="center">
                                22
                            </td>
                            <td class="" align="center">
                                <a href="https://www.cnblogs.com/ulex/archive/2010/11/23.html"><u>23</u></a>
                            </td>
                            <td class="" align="center">
                                <a href="https://www.cnblogs.com/ulex/archive/2010/11/24.html"><u>24</u></a>
                            </td>
                            <td class="" align="center">
                                <a href="https://www.cnblogs.com/ulex/archive/2010/11/25.html"><u>25</u></a>
                            </td>
                            <td class="" align="center">
                                26
                            </td>
                        <td class="CalWeekendDay" align="center">
                            27
                        </td>
                </tr>
                <tr>
                        <td class="CalWeekendDay" align="center">
                            28
                        </td>
                            <td class="" align="center">
                                29
                            </td>
                            <td class="" align="center">
                                30
                            </td>
                            <td class="CalOtherMonthDay" align="center">
                                1
                            </td>
                            <td class="CalOtherMonthDay" align="center">
                                2
                            </td>
                            <td class="CalOtherMonthDay" align="center">
                                3
                            </td>
                        <td class="CalOtherMonthDay" align="center">
                            4
                        </td>
                </tr>
                <tr>
                        <td class="CalOtherMonthDay" align="center">
                            5
                        </td>
                            <td class="CalOtherMonthDay" align="center">
                                6
                            </td>
                            <td class="CalOtherMonthDay" align="center">
                                7
                            </td>
                            <td class="CalOtherMonthDay" align="center">
                                8
                            </td>
                            <td class="CalOtherMonthDay" align="center">
                                9
                            </td>
                            <td class="CalOtherMonthDay" align="center">
                                10
                            </td>
                        <td class="CalOtherMonthDay" align="center">
                            11
                        </td>
                </tr>
    </tbody>
</table>
```

## DiV+CSS:

### 优点
- 1、代码精简，div /div"和Table相比较代码简单了许多。
- 2、可再利用，比如一个网页中需要用到2-3个Div，用户只需在css里定义一个样式，比如定义个样式名为：abc，插入div的时候只需`div id="abc /div"`此形式即可，可多次利用。
- 3、网站打开速度快，因为代码精简了，服务器读取代码的时候省了不少时间，所以网站打开速度要比table快的很多。

### 缺点
- 1、可观性差，用户在编辑的时候并不能立即看到编辑效果，需要预览才可看到效果。
- 2、可读性差，网站代码几乎全是div /div"而且在代码页面看不到此样式。必须要进css样式才可看到定义样式。
- 3、操作繁琐，相对于初入门的用户，对代码不是很了解的人来说，操作起来很是麻烦。

