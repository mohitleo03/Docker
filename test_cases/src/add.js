function add(){
    var sum = 0;
    for(var i = 0 ; i<arguments.length ; i++){
        if(typeof(arguments[i])=="function"){
            arguments[i] = arguments[i]();
            sum+=isNaN(parseInt(arguments[i]))?0:parseInt(arguments[i]);
        }
        else if(arguments[i] instanceof Array){
            for(var j = 0 ; j<arguments[i].length ; j++ )
            if(typeof(arguments[i][j])=="function"){
                arguments[i][j] = arguments[i][j]();
                sum+=isNaN(parseInt(arguments[i][j]))?0:parseInt(arguments[i][j]);
            }
            else{
                sum+=isNaN(parseInt(arguments[i]))?0:parseInt(arguments[i]);
            }
        }
        else{
            sum+=isNaN(parseInt(arguments[i]))?0:parseInt(arguments[i]);
        }
    }
    return sum;
}