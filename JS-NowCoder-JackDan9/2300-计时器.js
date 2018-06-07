/**
 *
 * @param start
 * @param end
 * @returns {{cancel: cancel}}
 */
function count(start, end) {
    console.log(start)  
    var timer = setInterval(  
        function(){  
            if(start<end) console.log(start+=1);  
        },100)  
    return {cancel:function(){clearInterval(timer)}}  
  
}  
