var sex = {
    sex:'man',
    say:function(sex){
        console.log('my sex is '+ (sex || this.sex));
    }
};

var age = (age) =>{
    console.log('my age is '+ (age||18));
};
let [ , , third] = ["foo", "bar", "baz"];
console.log(third);// "baz"
export {sex,age}
