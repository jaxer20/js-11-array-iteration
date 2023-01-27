// const salaries = [5500, 8000, 6500, 9000, 10000, 15000, 25000]
// const moreThan10000 = salaries.filter(s => s>10000)
// console.log(moreThan10000);
// const arasi = salaries.filter(s => s >= 6000 && s <= 10000)
// console.log(arasi);
// // const raise = salaries.filter (r => r < 9000).map(y => Math.trunc(y*1.1)) 
// console.log(raise);
// salaries
// .filter(x=> x<9000)
// .map(x=> Math.trunc(x*1.1))
// .forEach(x=> console.log(x))

// reduce 
// const salaries = [5500, 8000, 6500, 9000, 10000, 15000, 25000]
// const totalsalary = salaries.reduce((t, s) => t + s)
// console.log("TOTAL: ", totalsalary);
// 
// const ages = [18, 22, 78, 34, 78, 85, 12]   
// const check = [ages.every((x) => x >=18)]
// // check ? console.log("all ages are over 18") : console.log("Sum are under 18");
// console.log(check);

const salaries = [5500, 8000, 6500, 9000, 10000, 15000, 25000]
// const max9bin = salaries.filter(c => c < 9000);
// console.log("ESKI MAX 9 BIN MAASLAR:", max9bin);
// 
// const yuzde10 = max9bin.map ((a)=> Math.trunc(a *1.1))
// console.log("GUNCEL MAASLAR:", yuzde10);
// const fark = yuzde10.reduce ((a, b)=> a+b)- max9bin.reduce ((a, b)=> a + b)
// console.log("ODENECEK MAAS FARKI :", fark);
// 
const max9bin = salaries
.filter(c => c < 9000)
.map ((c)=> Math.trunc(c *1.1))
.reduce ((c,a)=> c + a, 0)
console.log(max9bin);