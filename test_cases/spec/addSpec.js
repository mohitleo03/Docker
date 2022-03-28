describe("my add function",function(){
    it("add 0 argument",function(){
        var result = add();
        expect(result).toEqual(0);
    });
    it("add 1 argument",function(){
        var result = add(1);
        expect(result).toEqual(1);
    })
    it("add multiple arguments",function(){
        var result = add(1,2);
        expect(result).toEqual(3);
    });
    it("add multiple arguments with integer and integers in string",function(){
        var result = add(1,2,"4");
        expect(result).toEqual(7);
    });
    it("add previous arguments and pre-defined functions which return number",function(){
        var result = add(1,2,"4",three,four);
        expect(result).toEqual(14);
    });
    it("add previ",function(){
        var result = add(1,2,"4",three,four,[2,3]);
        expect(result).toEqual(18);
    });
    it("add with string numbers",function(){
        var result = add(1,2,"4",three,four,[2,3],[2,"2",three]);
        expect(result).toEqual(25);
    });
});
function three(){
    return 3;
}
function four(){
    return 4;
}