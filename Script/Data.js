
const MainMenuItems =[
   "MENU PIZZ", "ZESTAWY OBIADOWE", "PROMOCJE", "GALERIA" , "KONTAKT"
]

const SalatTable = [

   ["GRECKA", "sałata lodowa, ser feta, pomidor, oliwki, sos", 18.90],

   ["TUNA", "sałata lodowa, tuńczyk, ogórek, kukurydza, cebula, sos", 18.90],

   ["TUTTI FRUTTI", "sałata lodowa, ogórek, kukurydza, ananas, kurczak, sos", 18.90]


];

const ColdDrinkTable = [

   ["Cola, Fanta, Sprite  0,5l", 7.00],

   ["Woda gaz. i niegaz.  0,5l", 3.00]

];

const HotDrinkTable = [

   ["Kawa", 6.00],

   ["Herbata", 5.00]

];

const DinerTable = [

   ["Dania dnia(codzienne inne)", 23.00],
   ["Zupa dnia(codzienne inna)", 10.00],
   ["Zestaw dnia(zupa dnia + danie dnia II)", 30.00],
   ["Schabowy, surówka, ziemniaki", 27.00],
   ["Schabowy, surówka, frytki", 33.00],
   ["Pierogi ukraińskie(8 szt.)", 18.00],
   ["Pielmieni", 21.00],
   ["Kapsalon", 33.00],
   ["Frytki 200g", 14.00]

];


const PizzaTable = [

   ["1. MARGHERITA", "Sos pomidorowy, ser, oregano", "18,80", "29,50", "40,50", "58,00"],
   ["2. SALAME", "Sos pomidorowy, salami, ser, oregano", "21,30", "32,20", "43,50", "61,50"],
   ["3. PRESTO", "Sos pomidorowy, ser, szynka, pieczarki, oregano", "21,50", "32,30", "43,30", "61,30"],
   ["4. WENECJA", "Sos pomidorowy, cebula, pieczarki, szynka, papryka, ser, oregano", "23,20", "32,20", "43,20", "61,20"],
   ["5. PRIMA", "Sos pomidorowy, cebula, pieczarki, kukurydza, ser, oregano", "23,20", "32,20", "43,90", "61,90"],
   ["6. VERONA", "Sos pomidorowy, ser gouda, ser mozzarella, ser feta, oregano", "23,40", "32,40", "45,00", "63,00"],
   ["7. SPECIALE", "Sos pomidorowy, cebula, pieczarki, szynka, salami, ser, oregano", "23,90", "33,30", "47,30", "65,30"],
   ["8. PRIMAVERA", "Sos pomidorowy, szynka, szpinak, kukurydza, ser, kurczak, oregano", "23,90", "33,30", "47,30", "66,70"],
   ["10. MARINARA", "Sos pomidorowy, czosnek, cebula, krewetki, ser, oregano", "26,50", "35,30", "47,30", "68,50"],
   ["11. CARUSO", "Sos pomidorowy, cebula, pieczarki, mięso, szynka, ser, oregano", "24,00", "33,50", "47,50", "66,30"],
   ["12. PICCANTE", "Sos pomidorowy, chili, cebula, pieczarki, szynka, peperoni, ser, oregano", "23,90", "33,30", "47,30", "66,30"],
   ["13. FRUTTI DI MARE", "Sos pomidorowy, czosnek, oliwki, owoce morza, ser, oregano", "26,50", "36,80", "49,80", "69,80"],
   ["14. AL CAPONE", "Sos pomidorowy, cebula, pieczarki, szynka, kiełbasa, ser, oregano", "23,90", "33,30", "47,30", "66,30"],
   ["15. RIMINI", "Sos pomidorowy, cebula, pieczarki, szynka, brokuły,ser, sos czosnkowy", "23,90", "33,20", "47,30", "66,20"],
   ["16. HAWAI", "Sos pomidorowy, szynka, kukurydza, ananas, ser, oregano", "23,20", "33,20", "47,20", "66,20"],
   ["17. FIRMOWA", "Sos pomidorowy, cebula, pieczarki, szynka, kukurydza, peperoni, ser, oregano", "23,30", "33,50", "47,50", "66,20"],
   ["18. MONT BLANC", "Sos pomidorowy, czosnek, cebula, brokuły, kurczak, ser", "23,30", "33,50", "47,20", "66,20"],
   ["20. SOLARE", "Sos pomidorowy, szynka, salami, kukurydza, papryka, ser, oregano", "23,20", "33,30", "47,30", "66,30"],
   ["22. CASINO", "Sos pomidorowy, cebula, pieczarki, mięso, papryka, ser, oregano", "26,50", "34,20", "48,20", "66,20"],
   ["23. CREMONA", "Sos pomidorowy, cebula, pieczarki, szynka, kurczak, ser, oregano, sos czosnkowy", "26,00", "33,50", "48,50", "66,50"],
   ["24. DELICE", "Sos pomidorowy, kurczak, czosnek, cebula, ser, oregano", "26,50", "33,90", "47,90", "66,90"],
   ["27. SPINACO", "Sos pomidorowy, pieczarki, oliwki, szpinak, szynka, ser", "26,50", "33,50", "48,50", "67,50"],
   ["28. TUNA", "Sos pomidorowy, cebula, pieczarki, szynka, tuńczyk, szpinak, ser, oregano", "26,00", "32,50", "47,50", "66,20"],
   ["29. VEGETARIANA", "Sos pomidorowy, cebula, pieczarki, szpinak, brokuły, papryka, ser, oregano", "25,30", "33,50", "47,50", "66,50"],
   ["31. FARMERSKA", "Sos pomidorowy, cebula, pieczarki, papryka, kurczak, ser, oregano", "26,00", "33,00", "47,00", "66,50"],
   ["36. ROSA", "Sos pomidorowy, pieczarki, kurczak, pomidory, brokuły, ser, oregano", "26,50", "35,00", "48,00", "66,50"],
   ["37. ZAWIJANA I", "Sos pomidorowy, ser, szynka, kukurydza, oregano", "---", "35,30", "49,30", "---"],
   ["38. ZAWIJANA II", "Sos pomidorowy, ser, szpinak, kurczak, czosnek, oregano", "---", "34,50", "49,90", "---"],
   ["39. RUCOLA", "Sos pomidorowy, ser, szynka, rukola, pomidory, oregano", "26,50", "34,90", "50,90", "67,90"],
   ["40. 4 SERY", "Sos pomidorowy, ser gouda, ser mozzarella, ser feta, ser camembert, pomidor, oregano", "26,90", "34,90", "50,90", "67,90"],
   ["41. WIEJSKA", "Sos pomidorowy, ser, boczek, salami, kiełbasa, cebula, pieczarki, oregano", "26,90", "34,90", "50,90", "67,90"]
]