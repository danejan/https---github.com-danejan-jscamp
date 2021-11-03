console.log("Merhaba Kodlama.io")

//JS type safe değildir.
let dolarBugun = 9.30

let dolarDun = 9.20
{
    let dolarDun = 9.10
}

console.log(dolarDun)

// const ile bir veri/değişken atanırsa değer sabit kalır.Tekrar değer atanmaz.
const euroDun = 11.2
//euroDun = 11 // hata böyle yapılmaz.

console.log(euroDun)

//Array
//camelCasing
//PascalCasing

//Birden fazla veriyi aynı değişkende kullanmak için  Array'lerden yararlanıyoruz

let konutKredileri =["Konut kredisi" , "Emlak konut Kredisi","Kamu Konut Kredileri","Özel Konut Kredileri"];

console.log("<ul>")
for (let i = 0; i<konutKredileri.length; i++) {
    console.log("<li>"+konutKredileri[i] +"</li>")
    
    
}
console.log("</ul>")


console.log(konutKredileri)

