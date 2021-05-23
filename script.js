var a = '5';
console.log(a, typeof(a))

var b;
console.log(b, typeof(b))

var c = 10;
console.log(c, typeof(c))

var d = null;
console.log(d, typeof(d))

var e = true;
console.log(e, typeof(e))

var f = Symbol;
console.log(f, typeof(f))


function add (a,b) {
    var sum = a+b;
    console.log('the value of sum is'+sum);
};

add(50,100);

var a=5, b=10;
if( a> b){
    console.log(a)
}
else{
    console.log(b)
}