function add (...arguments){
    var sum = 0;
    for (var i =0; i<arguments.length ; i++){
        if(typeof(arguments[i])=="function"){
            sum+=arguments[i]();
        }
        else if(arguments[i] instanceof Array){
            for (var j = 0 ; j < arguments[i].length ; j++){
                if(typeof(arguments[i][j])=="function"){
                    sum+=parseInt(arguments[i][j]());
                }
                else{
                    sum+=parseInt(arguments[i][j]);
                }
            }
        }
        else{
            sum+=parseInt(arguments[i]);
        }
    }
    return sum;
}
function three(){
    return 3;
}
function four(){
    return 4;
}
console.log(add("1","2",three,four,5,[6,7]));