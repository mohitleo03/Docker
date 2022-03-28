describe("addition",function(){
    it("0 as an argument",function(){
        var sum = add(0);
        expect(0).toEqual(0);
    });
    it("single argument",function(){
        var sum = add(10);
        expect(10).toEqual(sum);
    });
    it("add 2 numbers",function(){
        var sum = add(2,3);
        expect(5).toEqual(sum);
    });
    it("add multiple numbers",function(){
        var sum = add(1,2,3,4,5);
        expect(15).toEqual(sum);
    });
    it("add string & numbers",function(){
        var sum = add("1","2",3,4,5);
        expect(15).toEqual(sum);
    });
    it("add functions, strings & numbers",function(){
        var sum = add("1","2",three,four,5);
        expect(15).toEqual(sum);
    });
    it("add functions, arrays, strings & numbers",function(){
        var sum = add("1","2",three,four,5,[6,7]);
        expect(28).toEqual(sum);
    });
    it("add functions, arrays of functions & numbers, strings & numbers",function(){
        var sum = add("1","2",[three,four,5,6,7]);
        expect(28).toEqual(sum);
    });
});
function three(){
    return 3;
}
function four(){
    return 4;
}