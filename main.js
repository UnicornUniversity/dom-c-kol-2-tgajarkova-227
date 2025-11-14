/**
 * Název: prevodsoustav.js
 * Autor: Tereza Gajárková
 * Spuštění: node prevodsoustav.js [binární číslo]
 */

//krok 1: definice proměnných
let bin = "010100";
let vysledek = 0;
let bit = 0;

//krok 2: cyklus procházející jednotlivé bity
for (i = 0; i < bin.length; i++){
    bit = bin[i] === "1" ? 1 : 0;
    vysledek = vysledek * 2 + bit;
}

//krok 3: výpis výsledku
console.log("Desítkový tvar:", vysledek)
