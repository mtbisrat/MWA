Array.prototype.even = function(){
    
    var temp = new Array();
    var len = this.length;
    var newarr = this;
    setTimeout(function(){
	    for(var i = 0; i<len; i++){
            if(newarr[i] % 2 === 0){               
                temp.push(newarr[i]);
            }
        }
        console.log(temp);
    }, 2000)
}
Array.prototype.odd = function(){
    
    var temp = new Array();
    var len = this.length;
    var newarr = this;

    setTimeout(function(){
	    for(let i = 0; i<len; i++){
           
            if(newarr[i] % 2 !== 0){
                temp.push(newarr[i]);
            }
        }
        console.log(temp);
    }, 2000)
}
console.log('start');
[1,2,3,4,5,6,7,8].even();
[1,2,3,4,5,6,7,8].odd();
console.log('end');