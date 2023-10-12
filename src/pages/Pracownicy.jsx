import React, { useState } from "react";

import "../../styles/styles.css";


 // Zmienić całośc na angielski

const BazaPracownikow = () => {
    const employees = [
        { id: 1, name: "Paweł Adamiak", dateofbirth: "1976.06.30", age: "", position: "Spawacz", address: "33-171, Pleśna 111", phone: "728 333 285", GVATIN: "48 192 061 573", knowsgerman: "TAK", sccvca: "brak", certificates: ["141 FM5 1.50-3.00 i >=12 (23.09.2023)", "141 FM4 (15.04.2024)", "141 FM5 2.00-4.00>=25 (23.09.2024)"], driverslicense: "B", forklift: "-", hydraulicramp: "-", comments: "", contractorscomments: "" },
        { id: 2, name: "Dominik Augustyński", dateofbirth: "1994.10.06", age: "", position: "Spawacz", address: "33-133 Wał-Ruda, bł. Karoliny Kózkówny 35", phone: "570 218 067", GVATIN: "36 842 576 090", knowsgerman: "NIE", sccvca: "brak", certificates:"", driverslicense: "B", forklift: "", hydraulicramp: "", comments: "", contractorscomments: "" },
        { id: 3, name: "Mateusz Badowski", dateofbirth: "1993.12.06", age: "", position: "Spawacz", address: "97-425 Zelów, Poznańska 84", phone: "795 480 090", GVATIN: "91 505 264 753", knowsgerman: "NIE", sccvca: "-", certificates: ["141 FM5 1.50-3.00>=25.00 (18.12.2025)", "141 FM5 3.00-7.20>=30.15 (18.12.2025)", "141 FM3 3.00-10.00>=31.75 (18.12.2025)"], driverslicense: "B", forklift: "-", hydraulicramp: "-", comments: "", contractorscomments: "" },
        { id: 4, name: "Mariusz Bąk", dateofbirth: "1975.09.04", age: "", position: "Monter", address: "33-121 Bogumiłowice, Łętowice 6A", phone: "794 967 140", GVATIN: "-", knowsgerman: "TAK", sccvca: "-", certificates:"VCA (01.01.2024)", driverslicense: "-", forklift: "-", hydraulicramp: "-", comments: "", contractorscomments: "" },
        { id: 5, name: "Piotr Błaszczyk", dateofbirth: "1971.07.21", age: "", position: "Spawacz", address: "62-710 Władysławów, Russocice 72", phone: "605 927 499", GVATIN: "97 382 415 021", knowsgerman: "NIE", sccvca: "brak", certificates: ["141/11 FM3 (06.01.2023)", "141 FM3 3>=3.00 >= 25.00 (17.09.2024)"], driverslicense: "B", forklift: "-", hydraulicramp: "-", comments: "", contractorscomments: "" },
        { id: 6, name: "Andrzej Boruta", dateofbirth: "1971.02.05", age: "", position: ["Monter",", ", "Ślusarz"], address: "33-121 Wierzchosławice, Mikołajowice 110", phone: "607 607 941", GVATIN: "44 032 714 568", knowsgerman: "TAK", sccvca: "25.11.2023", certificates:"", driverslicense: "B", forklift: "", hydraulicramp: "", comments: "", contractorscomments: "" },
        { id: 7, name: "Tomasz Brocki", dateofbirth: "1981.05.21", age: "", position: "Spawacz", address: "28-200 Staszów, Komisji Edukacji Narodowej 1/18", phone: "+31 649 305 856", GVATIN: "67 150 308 202", knowsgerman: "NIE", sccvca: "brak", certificates:["141 FM5 (01.11.2025)", "141 FM3 (02.11.2025)"], driverslicense: "B", forklift: "-", hydraulicramp: "-", comments: "", contractorscomments: "" },
        { id: 8, name: "Wojciech Cecot", dateofbirth: "1994.04.07", age: "", position: "Spawacz", address: "28-225 Szydłów, Korytnica 16", phone: "502 750 584", GVATIN: "13 962 057 430", knowsgerman: "NIE", sccvca: "16.11.2030", certificates:["141 FM5 (29.06.2023)"], driverslicense: "B", forklift: "-", hydraulicramp: "-", comments: "", contractorscomments: "" },
        { id: 9, name: "Kacper Domagała", dateofbirth: "2002.03.25", age: "", position: "Monter", address: "26-900 Kozienice, Mickiewicza 1/28", phone: "668 248 952", GVATIN: "58 174 623 221", knowsgerman: "NIE", sccvca: "brak", certificates:"", driverslicense: "-", forklift: "-", hydraulicramp: "-", comments: "", contractorscomments: "" },
        { id: 10, name: "Jerzy Dominik", dateofbirth: "1963.06.17", age: "", position: "Monter", address: "38-130 Frysztak, Widacz 45", phone: "500 418 847", GVATIN: "98 564 137 251", knowsgerman: "TAK", sccvca: "brak", certificates:"", driverslicense: "B", forklift: "-", hydraulicramp: "-", comments: "", contractorscomments: "" },
        { id: 11, name: "Janusz Franczyk", dateofbirth: "1965.12.26", age: "", position: "Spawacz", address: "32-865 Gnojnik, Uszew 81", phone: "500 013 330", GVATIN: "87 456 098 236", knowsgerman: "NIE",sccvca: "24.11.2024", certificates:["141 FM5 (30.03.2023)"], driverslicense: "B", forklift: "-", hydraulicramp: "-", comments: "", contractorscomments: "" },
        { id: 12, name: "Marcin Grabowski", dateofbirth: "1988.11.21", age: "", position: "Spawacz", address: "32-825 Borzęcin Górny, Waryś 355 B", phone: "667 206 964", GVATIN: "58 619 047 734", knowsgerman: "TAK", sccvca: "brak", certificates:["141 FM4 D48 (29.08.2024)"], driverslicense: "B", forklift: "TAK", hydraulicramp: "TAK", comments: "", contractorscomments: "" },
        { id: 13, name: "Piotr Janik", dateofbirth: "1981.05.16", age: "", position: "Spawacz", address: "38-460 Jedlicze, Chlebna 122", phone: "787 022 144", GVATIN: "41 357 044 627", knowsgerman: "NIE", sccvca: "brak", certificates:["141 FM3 D48 (03.09.2025)"], driverslicense: "B", forklift: "-", hydraulicramp: "-", comments: "", contractorscomments: "" },
        { id: 14, name: "Wojciech Kalina", dateofbirth: "1994.06.10", age: "", position: "Spawacz", address: "28-236 Rytwiany, Staszowska 55", phone: "799 718 303", GVATIN: "33 905 467 817", knowsgerman: "TAK", sccvca: "brak", certificates:["141 FM3 (23.09.2024)"], driverslicense: "B", forklift: "-", hydraulicramp: "-", comments: "", contractorscomments: "" },
        { id: 15, name: "Rafał Kalinowski", dateofbirth: "1978.11.20", age: "", position: "Monter", address: "32-820 Szczurowa, Lwowska 52", phone: "603 938 860", GVATIN: "67 538 022 417", knowsgerman: "NIE", sccvca: "brak", certificates:"", driverslicense: "B", forklift: "-", hydraulicramp: "-", comments: "", contractorscomments: "" },
        { id: 16, name: "Patryk Kielar", dateofbirth: "1994.01.18", age: "", position: ["Monter", ", ", "Spawacz"], address: "38-500 Sanok, Kochanowskiego 22/20", phone: "534 396 165", GVATIN: "63 124 857 334", knowsgerman: "NIE", sccvca: "brak", certificates:["141 FM5, D12, D48 (28.09.2025)", "141 FM5 D60 (28.09.2025)", "141 FM3 D48.3 (15.02.2026)"], driverslicense: "-", forklift: "-", hydraulicramp: "TAK", comments: "", contractorscomments: "" },
        { id: 17, name: "Robert Klatka", dateofbirth: "1968.07.25", age: "", position: "Monter", address: "33-100 Tarnów, Źródlana 13c", phone: "664 864 078", GVATIN: "-", knowsgerman: "NIE", sccvca: "brak", certificates:"", driverslicense: "B", forklift: "-", hydraulicramp: "-", comments: "", contractorscomments: "" },
        { id: 18, name: "Paweł Kowal", dateofbirth: "1975.07.01", age: "", position: "Spawacz", address: "37-200 Przeworsk, Gorliczyna 735", phone: "607 236 880", GVATIN: "51 011 248 637 ", knowsgerman: "NIE", sccvca: "brak", certificates:["141 FM1 D48.3 (19.02.2026)"], driverslicense: "B", forklift: "-", hydraulicramp: "-", comments: "", contractorscomments: "" },
        { id: 19, name: "Robert Kowalski", dateofbirth: "1984.04.08" ,age: "", position: "Spawacz (Działalność)", address: "//////////////", phone: "663 036 929", GVATIN: "-", knowsgerman: "NIE", sccvca: "", certificates:"", driverslicense: "-", forklift: "-", hydraulicramp: "-", comments: "", contractorscomments: "" },
        { id: 20, name: "Paweł Krzywoń", dateofbirth: "1991.01.27" ,age: "", position: "Spawacz (Działalność)", address: "////////////////", phone: "795 824 900", GVATIN: "-", knowsgerman: "NIE", sccvca: "", certificates:"", driverslicense: "-", forklift: "-", hydraulicramp: "-", comments: "", contractorscomments: "" },
        { id: 21, name: "Tomasz Kurzawa", dateofbirth: "1974.12.07", age: "", position: "Spawacz", address: "46-113 Wilków, Ogrodowa 21/2", phone: "782 533 802", GVATIN: "78 629 340 654", knowsgerman: "NIE", sccvca: "brak", certificates:["141 FM3 D64 (18.12.2025)", "141 FM5 D60 (18.12.2025)"], driverslicense: "-", forklift: "-", hydraulicramp: "-", uwagi: "", contractorscomments: "" },
        { id: 22, name: "Jan Kuś", dateofbirth: "1961.12.12", age: "", position: "Monter", address: "38-124 Wiśniowa, Kalembina 78", phone: "606 329 071", GVATIN: "98 432 561 012", knowsgerman: "NIE", sccvca: "brak", certificates:"", driverslicense: "B", forklift: "-", hydraulicramp: "-", comments: "", contractorscomments: "" },
        { id: 23, name: "Piotr Łucki", dateofbirth: "1963.04.08", age: "", position: "Monter", address: "33-100 Tarnów, Lwowska 61/95", phone: "600 599 767", GVATIN: "73 765 948 201", knowsgerman: "NIE", sccvca: "brak", certificates:"Flanche (12.02.2026)", driverslicense: "B", forklift: "-", hydraulicramp: "TAK", comments: "", contractorscomments: "" },
        { id: 24, name: "Adrian Majewski", dateofbirth: "1994.10.19", age: "", position: ["Spawacz", ", ", "Monter"], address: "28-340 Sędziszów, Klonowa 1", phone: "575 058 438", GVATIN: "36 842 576 910", knowsgerman: "NIE", sccvca: "brak", certificates:["135 FM2 (30.08.2022)"], driverslicense: "B", forklift: "-", hydraulicramp: "-", comments: "", contractorscomments: "" },
        { id: 25, name: "Grzegorz Marszał", dateofbirth: "1974.10.19", age: "", position: "Monter", address: "38-462 Kobylany, Sulistrowa 6", phone: "663 396 125", GVATIN: "-", knowsgerman: "NIE", sccvca: "brak", certificates:"", driverslicense: "B", forklift: "-", hydraulicramp: "-", comments: "", contractorscomments: "" },
        { id: 26, name: "Sebastian Nowak", dateofbirth: "1982.05.11", age: "", position: "Spawacz", address: "46-100 Namysłów 59A", phone: "607 585 257", GVATIN: "36 279 518 468", knowsgerman: "NIE", sccvca: "brak", certificates: ["141 FM4 D21.3 (11.01.2026)", "141/111 FM3 D88.9 (28.03.2026)"], driverslicense: "B", forklift: "-", hydraulicramp: "-", comments: "", contractorscomments: ""},
        { id: 27, name: "Paweł Opioła", dateofbirth: "1971.11.22", age: "", position: "Spawacz", address: "32-865 Gnojnik, Uszew 156", phone: "506 230 302", GVATIN: "19 930 856 749", knowsgerman: "NIE", sccvca: "brak", certificates: ["141 FM5 D12 (19.12.2024)"], driverslicense: "-", forklift: "-", hydraulicramp: "-", comments: "", contractorscomments: ""},
        { id: 28, name: "Mateusz Peszko", dateofbirth: "1985.06.09", age: "", position: "Spawacz", address: "38-460 Jedlicze, Długie 14", phone: "781 270 410", GVATIN: "-", knowsgerman: "NIE", sccvca: "brak", certificates: ["141 FM3 Ss7.1 D38", "141 FM5 Ss1.5 D38"], driverslicense: "-", forklift: "-", hydraulicramp: "-", comments: "", contractorscomments: ""},
        { id: 29, name: "Miłosz Pierzchała", dateofbirth: "1995.03.06", age: "", position: "Spawacz", address: "43-600 Jaworzno, Stefanii i Franciszka Mazur 4/37", phone: "537 467 274", GVATIN: "-", knowsgerman: "NIE", sccvca: "brak", certificates: "", driverslicense: "", forklift: "-", hydraulicramp: "-", comments: "", contractorscomments: ""},
        { id: 30, name: "Józef Piłat", dateofbirth: "1962.03.12", age: "", position: "Monter", address: "33-122 Wierzchosławice 47", phone: "509 217 436", GVATIN: "14 862 957 349", knowsgerman: "NIE", sccvca: "brak", certificates: "", driverslicense: "B", forklift: "-", hydraulicramp: "-", comments: "", contractorscomments: ""},
        { id: 31, name: "Dawid Pochroń", dateofbirth: "1996.09.27", age: "", position: "Spawacz (Działalność)", address: "/////////////", phone: "794 360 467", GVATIN: "-", knowsgerman: "NIE", sccvca: "", certificates: "", driverslicense: "", forklift: "-", hydraulicramp: "-", comments: "", contractorscomments: ""},
        { id: 32, name: "Paweł Rojek", dateofbirth: "1980.12.24", age: "", position: "Monter", address: "33-122 Wierzchosławice, Bobrowniki Małe 81", phone: "", GVATIN: "38 245 891 701", knowsgerman: "TAK", sccvca: "11.10.2027", certificates: "", driverslicense: "B", forklift: "-", hydraulicramp: "-", comments: "", contractorscomments: ""},
        { id: 33, name: "Rafał Różański", dateofbirth: "1980.08.23", age: "", position: "Spawacz", address: "32-800, Szczurowa, Górka 134", phone: "601 810 075", GVATIN: "83 987 412 657", knowsgerman: "NIE", sccvca: "brak", certificates: ["141 FM4 D60 (29.05.2024), 141 FM5 D48 (28.09.2025)"], driverslicense: "-", forklift: "-", hydraulicramp: "-", comments: "", contractorscomments: ""},
        { id: 34, name: "Jan Siegmund", dateofbirth: "1975.10.09", age: "", position: "Spawacz", address: "Spawacz", phone: "602 743 623", GVATIN: "48 296 031 548", knowsgerman: "NIE", sccvca: "31.08.2025", certificates: ["141 FM6 D50 (2025.03.23)"], driverslicense: "B", forklift: "-", hydraulicramp: "-", comments: "", contractorscomments: ""},
        { id: 35, name: "Janusz Sobierajski", dateofbirth: "1959.01.21", age: "", position: "Spawacz", address: "74-100 Gryfino, Łużycka 27A/5", phone: "608 656 475", GVATIN: "57 981 426 012", knowsgerman: "NIE", sccvca: "brak", certificates: "141 FM3 >=3.00 >=25.00 (17.09.2024)", driverslicense: "B", forklift: "", hydraulicramp: "", comments: "", contractorscomments: ""},
        { id: 36, name: "Stanisław Sobierajski", dateofbirth: "1957.05.11", age: "", position: "Spawacz", address: "28-2B30 Połaniec, Okrągła 27", phone: "723 381 459", GVATIN: "48 956 723 608", knowsgerman: "NIE", sccvca: "brak", certificates: ["141 FM5 D60 (18.12.2025)", "141 FM3 D64 (18.12.2025)", "141 FM3 D21(18.12.2025)", "141 FM5 D48 (07.07.2024)"], driverslicense: "B", forklift: "-", hydraulicramp: "-", comments: "", contractorscomments: ""},
        { id: 37, name: "Jacek Soćko", dateofbirth: "1960.11.26", age: "", position: "Spawacz", address: "42-520 Dąbrowa Górnicza, Olimpijska 1", phone: "693 862 504", GVATIN: "17 258 076 435", knowsgerman: "NIE", sccvca: "23.09.2030", certificates: "Flange (22.09.2025)", driverslicense: "B", forklift: "-", hydraulicramp: "-", comments: "", contractorscomments: ""},
        { id: 38, name: "Jakub Stanek", dateofbirth: "1988.11.26", age: "", position: "Spawacz", address: "38-471 Wojaszówka, Bajdy 169", phone: "534 059", GVATIN: "87 943 602 257", knowsgerman: "NIE", sccvca: "11.02.2031", certificates: ["141 FM5 D27 D12 (19.12.2024)"], driverslicense: "-", forklift: "-", hydraulicramp: "-", comments: "", contractorscomments: ""},
        { id: 39, name: "Sławomir Stanek", dateofbirth: "1979.09.10", age: "", position: "Spawacz", address: "38-200 Jasło, Na Kotlinę 9/14", phone: "666 034 656", GVATIN: "97 086 253 487", knowsgerman: "TAK", sccvca: "11.02.2031", certificates: ["141 FM4 (26.08.2022)", "141 FM5 D12 (19.12.2024)"], driverslicense: "B", forklift: "-", hydraulicramp: "-", comments: "", contractorscomments: ""},
        { id: 40, name: "Kamil Stefan", dateofbirth: "1988.01.31", age: "", position: "Spawacz", address: "39-204 Nagoszyn, Bobrowa 130", phone: "731 308 482", GVATIN: "76 052 143 552", knowsgerman: "TAK", sccvca: "23.07.2030", certificates: ["141 FM4 D48 (28.09.2025)", "141 FM4 D84 (28.09.2025)"], driverslicense: "-", forklift: "-", hydraulicramp: "-", comments: "", contractorscomments: ""},
        { id: 41, name: "Marcin Tarnawski", dateofbirth: "1975.01.18", age: "", position: "Główny Spawalnik", address: "33-240 Żabno, Generała Andersa 2", phone: "600 232 437", GVATIN: "-", knowsgerman: "NIE", sccvca: "", certificates: "", driverslicense: "-", forklift: "-", hydraulicramp: "-", comments: "", contractorscomments: ""},
        { id: 42, name: "Paweł Tucki", dateofbirth: "1968.07.09", age: "", position: "Monter", address: "33-101 Tarnów, Ks. Indyka 12/8", phone: "", GVATIN: "-", knowsgerman: "NIE", sccvca: "", certificates: "-", driverslicense: "-", forklift: "-", hydraulicramp: "-", comments: "", contractorscomments: ""},
        { id: 43, name: "Zdzisław Wojnarowski", dateofbirth: "1974.09.20", age: "", position: "Spawacz", address: "30-693 Kraków, Adama Bochenka 10/110", phone: "500 497 614", GVATIN: "48 791 506 374", knowsgerman: "NIE", sccvca: "07.08.2030", certificates: ["141 FM5 D34 (14.09.2024)", "141 FM5 D12, D27 (14.09.2024)"], driverslicense: "-", forklift: "-", hydraulicramp: "-", comments: "", contractorscomments: ""},
        { id: 44, name: "Kamil Zgrzywa", dateofbirth: "1991.09.05", age: "", position: "Monter", address: "28-200 Staszów, Komisji Edukacji Narodowej 5/1", phone: "666 593 390", GVATIN: "36 892 576 018", knowsgerman: "NIE", sccvca: "brak", certificates: "", driverslicense: "B", forklift: "-", hydraulicramp: "-", comments: "", contractorscomments: ""},
        { id: 45, name: "Jerzy Żebracki", dateofbirth: "1962.10.08", age: "", position: "Spawacz", address: "38-222 Cieklin, Wola Cieklińska 64", phone: "607 576 408", GVATIN: "46 370 258 818", knowsgerman: "NIE", sccvca: "13.02.2028", certificates: ["141 FM3 D51 (02.11.2025)", "141 FM5 D12, D60 (18.12.2925)", "141 FM3 D21 (18.12.2025)"], driverslicense: "-", forklift: "-", hydraulicramp: "-", comments: "", contractorscomments: ""},
        { id: 46, name: "Krystian Żero", dateofbirth: "1981.05.30", age: "", position: "Monter", address: "38-200 Gorajowice 88", phone: "792 562 073", GVATIN: "72 430 864 540", knowsgerman: "NIE", sccvca: "brak", certificates: "", driverslicense: "B", forklift: "-", hydraulicramp: "-", comments: "", contractorscomments: ""},
        { id: 47, name: "Grzegorz Kaczmarek", dateofbirth: "1973.05.13", age: "", position: "Monter", address: "98-355 Działoszyn, Piłsudskiego 21/7", phone: "886 393 266", GVATIN: "-", knowsgerman: "TAK", sccvca: "-", certificates: "", driverslicense: "B", forklift: "-", zwyzka: "-", comments: "Zlecenie",contractorscomments: ""},
        { id: 48, name: "Aleksander Wantuch", dateofbirth: "1988.11.21", age: "", position: "Spawacz (Działalność - zawieszona)", address: "33-100 Tarnów, Narutowicza 15/23", phone: "537 690 860", GVATIN: "", knowsgerman: "TAK", sccvca: "", certificates: ["141 FM4 2.00-4.00 i 21.30-42.60 (2022.11.11)", "141 FM4 >=3.00 >=30.15 (2022.11.11)", "141 FM5 1.5-3.00 i 12.00-24.00 (2021.12.09)", "141 FM5 1.5-3.0 >= 25.0 (2023.05.24)", "141 FM5 >=3.00 >=25.00 (2023.06.29)" ], driverslicense: "B", forklift: "", zwyzka: "", comments: "Uzależniony od alkoholu (po odwyku)",contractorscomments: ""},
       // { id: 49, name: "", dateofbirth: " ,age: "", position: "", address: "", phone: "", GVATIN: "", knowsgerman: "", sccvca: "", certificates: "", driverslicense: "", forklift: "", zwyzka: "", comments: "", contractorscomments: ""},
       // { id: 50, name: "", dateofbirth: " ,age: "", position: "", address: "", phone: "", GVATIN: "", knowsgerman: "", sccvca: "", certificates: "", driverslicense: "", forklift: "", zwyzka: "", comments: "", contractorscomments: ""},
       // { id: 51, name: "", dateofbirth: " ,age: "", position: "", address: "", phone: "", GVATIN: "", knowsgerman: "", sccvca: "", certificates: "", driverslicense: "", forklift: "", zwyzka: "", comments: "", contractorscomments: ""},
       // { id: 52, name: "", dateofbirth: " ,age: "", position: "", address: "", phone: "", GVATIN: "", knowsgerman: "", sccvca: "", certificates: "", driverslicense: "", forklift: "", zwyzka: "", comments: "", contractorscomments: ""},
       // { id: 53, name: "", dateofbirth: " ,age: "", position: "", address: "", phone: "", GVATIN: "", knowsgerman: "", sccvca: "", certificates: "", driverslicense: "", forklift: "", zwyzka: "", comments: "", contractorscomments: ""},
       // { id: 54, name: "", dateofbirth: " ,age: "", position: "", address: "", phone: "", GVATIN: "", knowsgerman: "", sccvca: "", certificates: "", driverslicense: "", forklift: "", zwyzka: "", comments: "", contractorscomments: ""},
       // { id: 55, name: "", dateofbirth: " ,age: "", position: "", address: "", phone: "", GVATIN: "", knowsgerman: "", sccvca: "", certificates: "", driverslicense: "", forklift: "", zwyzka: "", comments: "", contractorscomments: ""},
       // { id: 56, name: "", dateofbirth: " ,age: "", position: "", address: "", phone: "", GVATIN: "", knowsgerman: "", sccvca: "", certificates: "", driverslicense: "", forklift: "", zwyzka: "", comments: "", contractorscomments: ""},
       // { id: 57, name: "", dateofbirth: " ,age: "", position: "", address: "", phone: "", GVATIN: "", knowsgerman: "", sccvca: "", certificates: "", driverslicense: "", forklift: "", zwyzka: "", comments: "", contractorscomments: ""},
    ];

    const employees1 = JSON.parse(localStorage.getItem('employees'));

    const today = new Date();

    for (const employee of employees) {
        const birthdate = new Date(employee.dateofbirth);
        employee.age = today.getFullYear() - birthdate.getFullYear();
    }

    localStorage.setItem('employees', JSON.stringify(employees));

    const [showWelders, setShowWelders] = useState(true);
    const [showEngineers, setShowEngineers] = useState(true); // tutaj //
    const [showLocksmiths, setShowLocksmiths] = useState(true); // tutaj //

    const [showOther, setShowOther] = useState(false);
    const [showCertyfikatySpawalnicze, setShowCertyfikatySpawalnicze] = useState(false); // tutaj //
    const [showInneCertyfikaty, setShowInneCertyfikaty] = useState(false) // tutaj //
    const [showAgeButtons, setShowAgeButtons] = useState(false);

    const [showOnlyDriversLicenseHolders, setShowOnlyDriversLicenseHolders] = useState(false);
    const [showOnlyHydraulicRampUsers, setShowHydraulicRampUsers] = useState (false);
    const [showOnlyForkliftUsers, setShowOnlyForkliftUsers] = useState (false);
    const [showOnlyHasGVATIN, setShowOnlyHasGVATIN] = useState (false);
    const [showOnlyKnowsGerman, setShowOnlyKnowsGerman] = useState(false);

    const [showOnlyHas141, setShowOnlyHas141] = useState(false);
    const [showOnlyHas135, setShowOnlyHas135] = useState(false);
    const [showOnlyHas111, setShowOnlyHas111] = useState(false);
    const [showOnlyFoodGradeWelding, setShowOnlyFoodGradeWelding] = useState(false);
    const [showOnlyIndustrialGradeWelding, setShowOnlyIndustrialGradeWelding] = useState(false);

  //  const [showOnlyUpTo30, setShowOnlyUpTo30] = useState(false);
  //  const [] = useState(false);
  //  const [] = useState(false);
  //  const [] = useState(false);
  //  const [] = useState(false);

    const [expandedEmployee, setExpandedEmployee] = useState(null);
    const [search, setSearch] = useState("")


    const visibleEmployees = employees.filter((employee) => {
        const filterByPosition =
            (showWelders && employee.position.includes("Spawacz")) ||
            (showEngineers && employee.position.includes("Monter")) ||
            (showLocksmiths && employee.position.includes("Ślusarz"));

        if (showOnlyHydraulicRampUsers && employee.hydraulicramp === "TAK") {
            return true;
        }

        if (showOnlyDriversLicenseHolders && employee.driverslicense === "B") {
            return true;
        }

        if (showOnlyForkliftUsers && employee.forklift === "TAK") {
            return true;
        }

        if (showOnlyHasGVATIN) {
            const hasGVATIN = /[0-9]/.test(employee.GVATIN);
            return hasGVATIN;
        }


        if (showOnlyKnowsGerman && employee.knowsgerman === "TAK") {
            return true;
        }

        if (Array.isArray(employee.certificates) && showOnlyHas141) {
            const has141Certificate = employee.certificates.some(cert => cert.includes("141"));
            if (has141Certificate) {
                return true;
            }
        }

        if (Array.isArray(employee.certificates) && showOnlyHas135) {
            const has135Certificate = employee.certificates.some(cert => cert.includes("135"));
            if (has135Certificate) {
                return true;
            }
        }

        if (Array.isArray(employee.certificates) && showOnlyHas111) {
            const has111Certificate = employee.certificates.some(cert => cert.includes("111"));
            if (has111Certificate) {
                return true;
            }
        }

        const searchFoodGradeStrings = ["FM1", "FM2", "FM3", "FM4"];

        if (Array.isArray(employee.certificates) && showOnlyFoodGradeWelding) {
            return searchFoodGradeStrings.some((searchString) =>
            employee.certificates.some((cert) => cert.includes(searchString))
            );
        }

        const searchIndustrialGradeStrings = ["FM5", "FM6"];

        if (Array.isArray(employee.certificates) && showOnlyIndustrialGradeWelding) {
            return searchIndustrialGradeStrings.some((searchString) =>
            employee.certificates.some((cert) => cert.includes(searchString))
            );
        }

        return filterByPosition;
    });

    const filteredEmployees = visibleEmployees.filter((el) =>
        !el ? el : el.name.includes(search)
    );

    const toggleExpand = (employeeId) => {
        if (expandedEmployee === employeeId) {
            setExpandedEmployee(null);
        } else {
            setExpandedEmployee(employeeId);
        }
    };

    return (
        <div>
            <h1>Lista Pracowników</h1>
            <div className="filter-buttons">
                <div>
                    <label className="search_bar" htmlFor="filtr">Filtruj pracowników:</label>
                    <input
                        type="text"
                        id="filtr"
                        placeholder="Pole tekstowe..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)} // Aktualizacja stanu po wpisaniu tekstu
                    />
                </div>
                <button onClick={() => {
                    setShowWelders(true);
                    setShowEngineers(true);
                    setShowLocksmiths(true);
                    setShowOnlyDriversLicenseHolders(false);
                    setShowHydraulicRampUsers(false);
                    setShowOnlyForkliftUsers(false);
                    setShowOnlyHasGVATIN(false);
                    setShowOnlyKnowsGerman(false);
                    setShowOnlyHas141(false);
                    setShowOnlyHas135(false);
                    setShowOnlyHas111(false);
                    setShowOnlyFoodGradeWelding(false);
                    setShowOnlyIndustrialGradeWelding(false);
                    setShowOnlyUpTo30(false);
                }}>Pokaż Wszystkich</button>
                <button onClick={() => {
                    setShowWelders(true);
                    setShowEngineers(false);
                    setShowLocksmiths(false);
                    setShowOnlyDriversLicenseHolders(false);
                    setShowHydraulicRampUsers(false);
                    setShowOnlyForkliftUsers(false);
                    setShowOnlyHasGVATIN(false);
                    setShowOnlyKnowsGerman(false);
                    setShowOnlyHas141(false);
                    setShowOnlyHas135(false);
                    setShowOnlyHas111(false);
                    setShowOnlyFoodGradeWelding(false);
                    setShowOnlyIndustrialGradeWelding(false);
                    setShowOnlyUpTo30(false);
                }}>Pokaż Spawaczy</button>
                <button onClick={() => {
                    setShowWelders(false);
                    setShowEngineers(true);
                    setShowLocksmiths(false);
                    setShowOnlyDriversLicenseHolders(false);
                    setShowHydraulicRampUsers(false);
                    setShowOnlyForkliftUsers(false);
                    setShowOnlyHasGVATIN(false);
                    setShowOnlyKnowsGerman(false);
                    setShowOnlyHas141(false);
                    setShowOnlyHas135(false);
                    setShowOnlyHas111(false);
                    setShowOnlyFoodGradeWelding(false);
                    setShowOnlyIndustrialGradeWelding(false);
                    setShowOnlyUpTo30(false);
                }}>Pokaż Monterów</button>
                <button onClick={() => {
                    setShowLocksmiths(true);
                    setShowEngineers(false);
                    setShowWelders(false);
                    setShowOnlyDriversLicenseHolders(false);
                    setShowHydraulicRampUsers(false);
                    setShowOnlyForkliftUsers(false);
                    setShowOnlyHasGVATIN(false);
                    setShowOnlyKnowsGerman(false);
                    setShowOnlyHas141(false);
                    setShowOnlyHas135(false);
                    setShowOnlyHas111(false);
                    setShowOnlyFoodGradeWelding(false);
                    setShowOnlyIndustrialGradeWelding(false);
                    setShowOnlyUpTo30(false);
                }}>Pokaż Ślusarzy</button>
                <button onClick={() => {
                    setShowWelders(true);
                    setShowEngineers(true);
                    setShowLocksmiths(true);
                    setShowOther(true);
                    setShowCertyfikatySpawalnicze(false);
                    setShowInneCertyfikaty(false);
                    setShowOnlyDriversLicenseHolders(false);
                    setShowHydraulicRampUsers(false);
                    setShowOnlyForkliftUsers(false);
                    setShowOnlyHasGVATIN(false);
                    setShowOnlyKnowsGerman(false);
                    setShowOnlyHas141(false);
                    setShowOnlyHas135(false);
                    setShowOnlyHas111(false);
                    setShowOnlyFoodGradeWelding(false);
                    setShowOnlyFoodGradeWelding(false);
                    setShowOnlyIndustrialGradeWelding(false);
                    setShowOnlyUpTo30(false);
                }}>Inne</button>
                <div>
                    {showOther && (
                        <>
                            <button onClick={() => {
                                setShowCertyfikatySpawalnicze(true);
                                setShowInneCertyfikaty(false);
                            }}>Certyfikaty Spawalnicze</button>
                            <button onClick={() => {
                                setShowCertyfikatySpawalnicze(false);
                                setShowInneCertyfikaty(true);
                            }}>Więcej</button>
                        </>
                    )}
                </div>
                <div>
                    {showCertyfikatySpawalnicze && (
                        <>
                        <button onClick={() => {
                            setShowOnlyHas141(true);
                            setShowOnlyDriversLicenseHolders(false);
                            setShowHydraulicRampUsers(false);
                            setShowLocksmiths(false);
                            setShowWelders(false);
                            setShowEngineers(false);
                            setShowOnlyForkliftUsers(false);
                            setShowOnlyHasGVATIN(false);
                            setShowOnlyKnowsGerman(false);
                            setShowOnlyHas135(false);
                            setShowOnlyHas111(false);
                            setShowOnlyFoodGradeWelding(false);
                            setShowOnlyIndustrialGradeWelding(false);
                            setShowOnlyUpTo30(false);
                        }}>141</button>
                            <button onClick={() =>{
                                setShowWelders(false);
                                setShowEngineers(false);
                                setShowLocksmiths(false);
                                setShowOnlyDriversLicenseHolders(false);
                                setShowHydraulicRampUsers(false);
                                setShowOnlyForkliftUsers(false);
                                setShowOnlyHasGVATIN(false);
                                setShowOnlyKnowsGerman(false);
                                setShowOnlyHas141(false);
                                setShowOnlyHas135(true);
                                setShowOnlyHas111(false);
                                setShowOnlyFoodGradeWelding(false);
                                setShowOnlyIndustrialGradeWelding(false);
                                setShowOnlyUpTo30(false);
                            }}>135</button>
                            <button onClick={() =>{
                                setShowOnlyHas111(true);
                                setShowWelders(false);
                                setShowEngineers(false);
                                setShowLocksmiths(false);
                                setShowOnlyDriversLicenseHolders(false);
                                setShowHydraulicRampUsers(false);
                                setShowOnlyForkliftUsers(false);
                                setShowOnlyHasGVATIN(false);
                                setShowOnlyKnowsGerman(false);
                                setShowOnlyHas141(false);
                                setShowOnlyHas135(false);
                                setShowOnlyFoodGradeWelding(false);
                                setShowOnlyIndustrialGradeWelding(false);
                                setShowOnlyUpTo30(false);

                            }}>111</button>
                            <button onClick={() => {
                                setShowOnlyHas111(false);
                                setShowWelders(false);
                                setShowEngineers(false);
                                setShowLocksmiths(false);
                                setShowOnlyDriversLicenseHolders(false);
                                setShowHydraulicRampUsers(false);
                                setShowOnlyForkliftUsers(false);
                                setShowOnlyHasGVATIN(false);
                                setShowOnlyKnowsGerman(false);
                                setShowOnlyHas141(false);
                                setShowOnlyHas135(false);
                                setShowOnlyFoodGradeWelding(true);
                                setShowOnlyIndustrialGradeWelding(false);
                                setShowOnlyUpTo30(false);
                            }}>Rury Białe</button>
                            <button onClick={() => {
                                setShowOnlyDriversLicenseHolders(false);
                                setShowHydraulicRampUsers(false);
                                setShowLocksmiths(false);
                                setShowWelders(false);
                                setShowEngineers(false);
                                setShowOnlyForkliftUsers(false);
                                setShowOnlyHasGVATIN(false);
                                setShowOnlyKnowsGerman(false);
                                setShowOnlyHas141(false);
                                setShowOnlyHas135(false);
                                setShowOnlyFoodGradeWelding(false);
                                setShowOnlyIndustrialGradeWelding(true);
                                setShowOnlyUpTo30(false);
                            }}>Rury Czarne</button>
                        </>
                    )}
                </div>

                <div>
                    {showInneCertyfikaty && (
                        <>
                            <button onClick={() =>{
                                setShowOnlyDriversLicenseHolders(false);
                                setShowHydraulicRampUsers(false);
                                setShowLocksmiths(false);
                                setShowWelders(false);
                                setShowEngineers(false);
                                setShowOnlyForkliftUsers(false);
                                setShowOnlyHasGVATIN(true);
                                setShowOnlyKnowsGerman(false);
                                setShowOnlyHas141(false);
                                setShowOnlyHas135(false);
                                setShowOnlyFoodGradeWelding(false);
                                setShowOnlyIndustrialGradeWelding(false);
                                setShowOnlyUpTo30(false);
                            }}>NIP DE</button>
                        <button onClick={() => {
                            setShowHydraulicRampUsers(false);
                            setShowOnlyDriversLicenseHolders(false);
                            setShowEngineers(false);
                            setShowLocksmiths(false);
                            setShowWelders(false);
                            setShowOnlyForkliftUsers(true);
                            setShowOnlyHasGVATIN(false);
                            setShowOnlyKnowsGerman(false);
                            setShowOnlyHas141(false);
                            setShowOnlyHas135(false);
                            setShowOnlyFoodGradeWelding(false);
                            setShowOnlyIndustrialGradeWelding(false);
                            setShowOnlyUpTo30(false);
                        }}>Wózek Widłowy</button>
                            <button onClick={() => {
                                setShowHydraulicRampUsers(true);
                                setShowOnlyDriversLicenseHolders(false);
                                setShowEngineers(false);
                                setShowLocksmiths(false);
                                setShowWelders(false);
                                setShowOnlyForkliftUsers(false);
                                setShowOnlyHasGVATIN(false);
                                setShowOnlyKnowsGerman(false);
                                setShowOnlyHas141(false);
                                setShowOnlyHas135(false);
                                setShowOnlyFoodGradeWelding(false);
                                setShowOnlyIndustrialGradeWelding(false);
                                setShowOnlyUpTo30(false);
                            }}>Zwyżka</button>
                            <button onClick={() => {setShowOnlyDriversLicenseHolders(false);
                                setShowHydraulicRampUsers(false);
                                setShowLocksmiths(false);
                                setShowWelders(false);
                                setShowEngineers(false);
                                setShowOnlyForkliftUsers(false);
                                setShowOnlyHasGVATIN(false);
                                setShowOnlyKnowsGerman(true);
                                setShowOnlyHas141(false);
                                setShowOnlyHas135(false);
                                setShowOnlyFoodGradeWelding(false);
                                setShowOnlyIndustrialGradeWelding(false);
                                setShowOnlyUpTo30(false);
                            }}>Znajomośc Języka Niemieckiego</button>

                            <button onClick={() => {
                                setShowOnlyDriversLicenseHolders(true);
                                setShowHydraulicRampUsers(false);
                                setShowLocksmiths(false);
                                setShowWelders(false);
                                setShowEngineers(false);
                                setShowOnlyForkliftUsers(false);
                                setShowOnlyHasGVATIN(false);
                                setShowOnlyKnowsGerman(false);
                                setShowOnlyHas141(false);
                                setShowOnlyHas135(false);
                                setShowOnlyFoodGradeWelding(false);
                                setShowOnlyIndustrialGradeWelding(false);
                                setShowOnlyUpTo30(false);
                            }}>Prawo Jazdy</button>
                            <div>
                                <button onClick={() => setShowAgeButtons(!showAgeButtons)}>Wiek</button>

                                {showAgeButtons && (
                                    <div>
                                        <button>do 30</button>
                                        <button>30-40</button>
                                        <button>40-45</button>
                                        <button>45-50</button>
                                        <button>50+
                                        </button>
                                    </div>
                                )}
                            </div>
                                </>

                    )}
                </div>
            </div>
            <div className="employee-list-container">
                <ul className="employee-list">
                    {visibleEmployees.filter(el => !el ? el : el.name.includes(search)).map((employee) => (
                        <li key={employee.id} className={expandedEmployee === employee.id ? "expanded" : ""} onClick={() => toggleExpand(employee.id)}>
                            <span className="imie_i_nazwisko">{employee.name}</span>
                            <span className="arrow">{expandedEmployee === employee.id ? "▼" : "►"}</span>
                            {expandedEmployee === employee.id && (
                                <div>
                                    <p className="employee_data_list">Wiek: {employee.age}</p>
                                    <p className="employee_data_list">Stanowisko: {employee.position}</p>
                                    <p className="employee_data_list">Adres zamieszkania: {employee.address}</p>
                                    <p className="employee_data_list">Telefon: {employee.phone}</p>
                                    <p className="employee_data_list">Niemiecki Numer Podatkowy: {employee.GVATIN}</p>
                                    <p className="employee_data_list">SCC/VCA: {employee.sccvca}</p>
                                    <p className="employee_data_list">Znajomość Niemieckiego: {employee.knowsgerman}</p>
                                    <p className="employee_data_list">Certyfikaty:</p>
                                    {employee.certificates && Array.isArray(employee.certificates) && (
                                        <ul>
                                            {employee.certificates.map((certificate, index) => (
                                                <li key={index}>{certificate}</li>
                                            ))}
                                        </ul>
                                    )}
                                    <p className="employee_data_list">Prawo Jazdy: {employee.driverslicense}</p>
                                    <p className="employee_data_list">Wózek widłowy: {employee.forklift}</p>
                                    <p className="employee_data_list">Podnośnik: {employee.hydraulicramp}</p>
                                    <p className="employee_data_list">Uwagi: {employee.comments}</p>
                                    <p className="employee_data_list">Uwagi Kontrahenta: {employee.contractorscomments}</p></div>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default function Pracownicy() {
    return <BazaPracownikow />;
}