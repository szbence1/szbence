//1 feladat

function keszito() {
  console.log("Sztahó Bence");
  console.log("Junior frontend és webfejlesztő");
  console.log("#11 team");
}
keszito();

//2 feladat

function hatvanyozo(szam, hatvany) {
  return Math.pow(szam, hatvany);
}

//3 feladat

function parosLetrehoz(also, felso) {
  //let random = Math.floor(Math.random() * (felso - also + 1)) + also;
  let random;
  do {
    random = Math.floor(Math.random() * (felso - also + 1)) + also;
  } while (random % 2 != 0);
  console.log(random);
}
parosLetrehoz(10, 100);

//4 feladat

function testTomegIndex(suly, magassag) {
  let testTomeg = suly / magassag;

  if (testTomeg < 16) {
    return "sulyosSovanysag";
  } else if (16 < testTomeg && testTomeg < 16.99) {
    return "mersekeltSovanysag";
  } else if (17 < testTomeg && testTomeg < 18.49) {
    return "enyheSovanysag";
  } else if (18.5 < testTomeg && testTomeg < 24.99) {
    return "normalisTestsuly";
  } else if (25 < testTomeg && testTomeg < 29.99) {
    return "tulsulyos";
  } else if (30 < testTomeg && testTomeg < 34.99) {
    return "IfokuElhizas";
  } else if (35 < testTomeg && testTomeg < 39.99) {
    return "IIfokuElhizas";
  } else if (testTomeg >= 40) {
    return "IIIfokuElhizas";
  }
}

//5 feladat
function egeszOszto(szam, oszto) {
  return szam % oszto == 0 ? true : false;
}
