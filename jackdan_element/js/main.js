$(document).ready(function() {
    bindListener();
})

function add() {
    let con = $('#container');

    let addContent = '<li id="default" class="default"><span class="default-content">1111</span><button class="default-btn" name="default-btn">删除</button></li>';

    con.append(addContent);

    bindListener();
}

function bindListener() {
    $("button[name=default-btn]").unbind().click(function(){
        $(this).parent().remove();
    })
}