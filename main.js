// *1. Bir nömrəni geri çevirən JavaScript funksiyası yazın.  Misal x = 32243;  Gözlənilən nəticə : 34223

// function tersiniTap(reqemler) {
//   var tersi = "";
//   for (var i = reqemler.length - 1; i >= 0; i--) {
//     tersi += reqemler[i];
//   }
//   return tersi;
// }
// console.log(tersiniTap("32243"));





// *2. Bir strinq parametr olaraq qəbul edən və hər sözün ilk hərfini yuxarı hərflərə çevirən
// *JavaScript funksiyasını yazın. Misal strinq : 'tez qəhvəyi tülkü' Gözlənilən nəticə:'Tez Qəhvəyi Tülkü'

// function ilkHerfiBoyelt(dəyişdirilməliOlan) {
// //\b\w ifadesiyle kelimelerin başındaki her herfi seçiriy
// herf => herf.toUpperCase() //ile her harfi büyük harfe çeviririy
//   return dəyişdirilməliOlan.replace(/\b\w/g, (herf) => herf.toUpperCase());
// // \b: Bu ifadə, bir kəlmənin başlama yerini təyin edir.
// // \w: Bu ifadə, hər hansı bir alfanümerik (harf və ya rəqəm) simvolu təmsil edir.
// // g: Bu ifadə, təkrarlanan bütün alınanları tapmaq üçün global axtarışı göstərir.
// }





// let strinq = "tez qəhvəyi tülkü";
// let netice = ilkHerfiBoyelt(strinq);

// console.log("Gözlənilən nəticə:", netice);







// * 3. Bir məbləği qepiklərə çevirmək üçün JavaScript funksiyası yazın.
// * Nümunə funksiyası : amountTocoins ( 46, [ 25, 10, 5, 2, 1 ] )
// * Burada 46 məbləğdir. və 25, 10, 5, 2, 1 sikkələrdir.
// * Çıxış : 25, 10, 10, 1

// function amountToCoins(mebleg, sikkelar) {
//   let netice = [];

//   for (let i = 0; i < sikkelar.length; i++) {
//     const sikke = sikkelar[i];
//     while (mebleg >= sikke) {
//       netice.push(sikke);
//       mebleg -= sikke;
//     }
//   }

//   return netice;
// }

// const mebleg = 46;
// const sikkelerArr = [25, 10, 5, 2, 1];
// const sikkelar = amountToCoins(mebleg, sikkelerArr);

// console.log(sikkelar); // [25, 10, 10, 1]




///4.

// const toggle = document.querySelector(".toggle");
// const circle = document.querySelector(".toggle__circle");

// toggle.addEventListener("click", () => {
//   if (circle.style.transform === "translateX(0px)") {
//     circle.style.transform = "translateX(26px)";
//     toggle.style.backgroundColor = "#66bb6a";
//   } else {
//     circle.style.transform = "translateX(0px)";
//     toggle.style.backgroundColor = "#ccd";
//   }
// });



//5
// const Fill = document.querySelector(".progress__bar-fill");
// function setProqress(neceFaiz) {
//   Fill.style.width = `${neceFaiz}%`;
// }

// setProqress(70);




//* 6. Bir sıra ən yüksək dəyəri tapmaq üçün JavaScript funksiyası yazın.

// function maxNum(array) {
//   if (array.length) {
//     return Math.max(...array);
//   } else {
//     return "Array boşdur";
//   }
// }

// var array = [3, 7, 1, 9, 4, 2, 8];
// var ənBöyükDəyər = maxNum(array);
// console.log("Ən böyük dəyər:", ənBöyükDəyər);
