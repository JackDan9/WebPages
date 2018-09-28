# jackdan_De-weight
## Description
```bash
## index.html
display page

## style.css
Render page

## main.js
De-weight algorithm used by JavaScript

Array.prototype.unique4 = function () {
    this.sort();
    var re = [this[0]];

    for(var i = 1; i < this.length; i++)
    {
        if( this[i] !== re[re.length-1] )
        {
            re.push(this[i]);
        }
    }
    return re;
}
```

------

## Result

![result][1]


  [1]: ./images/result.png "result.png"
  
 ------
 
 ## Thanks
 - If you like it, please give me a **star**!
- This will support me to keep updating!