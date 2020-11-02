
// Hovedfunksjon
function isDateValid(dato) {
    let day = dato.slice(0,2);
    let month = dato.slice(3,5);
    let year = dato. slice(6,10);

    return (isLength(dato)&&
        thirdAndSixth(dato)&&
        isYear(year)&&
        isMonth(month)&&
        isDay(dato));
}

// Funksjon som sjekker om lengden er 10
function isLength(dato) {
    return (dato.length === 10) 
}
// Funksjon som sjekker om det er punktum i tredje og sjette posisjon
function thirdAndSixth(dato) {
    return (dato.charAt(2) === '.' && dato.charAt(5) === '.') 
}

// Funksjon som sjekker om år er 0000 eller større
function isYear(year) {
    return (year.length === 4 && year >= '0000' && year <= '9999')
}

// Funksjon som sjekker om måned er fra og med 01 til og med 12
function isMonth(month) {
    return month >= '01' && month <= '12' ? true : false;
}

// Funksjon som sjekker om dagen er gyldig
function isDay(day, month, year) {
    return isDayfrom1To28(day, month, year) === true || (isLeapYear(year) && month === '02' && day === '29') === true || is31(day, month) === true || is30NotFeb(day, month) === true ? true : false;
}

// Funksjon som sjekker om dag er fra og med 01 til og med 28
function isDayfrom1To28(day, month, year) {
    return (day >= '01' && day <= '28' || 
    day === '29' && month === '02' && 
    isLeapYear(year) === true ||
    day === '30' && month != '02')
}
// Funksjon som sjekker om det er skuddår
function isLeapYear(year)
{
  return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}
// Funksjon som sjekker om dag 31 er gyldig
function is31(day, month) {
    return (day == '31' && month == '01' ||
        day == '31' && month == '03' ||
        day == '31' && month == '05' ||
        day == '31' && month == '07' ||
        day == '31' && month == '08' ||
        day == '31' && month == '10' ||
        day == '31' && month == '12')
}
// Funksjon som sjekker om dag er 30 og måned ikke er februar
function is30NotFeb(day, month) {
    return day == '30' && month != '02' ? true : false;
}
