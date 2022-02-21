// Better way: object literal
var amazon = {
	name: "Amazon",
	ceo: {
		firstName: "Jeff",
		lastName: "Bezos"
	},
	"stock of this": 110
};


var company = {
	ceo: {
		firstName: "Jeff",
		lastName: "Bezos",
	},
	"stok of company": 100,
};

console.log(amazon);
console.log(company);

// var company = new Object();
// company.name = "Facebook";
// company.ceo = new Object();
// company.ceo.firstName = "Mark";
// company.ceo.favColor="Blue";
// console.log(company);
// console.log("company CEO name is: "+ company.ceo.firstName);

// console.log(company["name"]);
// var stockPropName = "stock of company";
// company[stockPropName] = 110;
// console.log("stock price is: "+ company["stock of company"]);

// ****** String concatenation
// var string="Hello";
// string += " " + "World";
// string = string + " World";
// console.log(string + "!")

// var x;
// console.log(x);
// if (x == undefined){
// 	console.log("x is undefined hunty");
// }

// x = 5;
// if (x == undefined) {
//	console.log("x is undefined untucked");
// }
// else {
//	console.log("x is " + x);
// }

// console.log((6+12)/3);
// console.log(undefined / 5);
// function test(a){
// 	console.log(a/5);}
// test()

// // var x=4;
// var y=4;
// // if (x == y){
// // 	console.log(" x and y are equal")
// // }

// var x="4";
// // if (x == y){
// // 	console.log("x and y are equal")
// // }


// if (x === y){
// 	console.log("strict equals x and y")
// }
// else {
// 	console.log("not strict equals x and y")
// }

// if ( false || null || undefined || "" || 0 || NaN){
// 	console.log("This line will not execute")
// }
// else {
// 	console.log("All false")
// }

// if (true && "hello" && 1 && -1 && "false"){
// 	console.log("All true")
// }

// function a()
// {
// 	return
// 	{
// 		name:"Dio"
// 	};
// }
// function b() {
// 	return {
// 		name:"Dio"
// 	};
// }

// console.log(a());
// // console.log(b());

// var sum=0; 
// for (var i = 0; i < 10; i++){
// 	console.log(i);
// 	sum = sum + i ;
// }
// console.log("Sum of 0 through 9 is " + sum);



// function orderChickenWith(sideDish){
// 	if (sideDish === undefined){
// 		sideDish = "whatever"
// 	}
// 	console.log("Chicken with " + sideDish);
// }

// orderChickenWith("Noodle");
// orderChickenWith();



// function orderChickenWith(sideDish){
// 	sideDish = sideDish || "whatever";
// 	console.log("Chicken with " + sideDish);
// }

// orderChickenWith("Noodle");
// orderChickenWith();