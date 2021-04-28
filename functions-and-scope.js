// Je gaat functies schrijven die we kunnen hergebruiken om een lijst met eindcijfers van studenten te checken. Je zult over de cijfers heen moeten itereren (hoe pak je dat aan?),
// maar ook een manier moeten vinden om hetgeen dat je verzamelt ergens te bundelen. Op deze manier zul je ontdekken hoe je omgaat met scope. Pak vooral het hoofdstuk op EdHub over for-loops er nog eens bij!
// Tip: je mag hier geen ingebouwde object methoden gebruiken, dus daar hoef je niet naar te kijken.

const grades = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];


/* Opdracht  1: Cum Laude */

/* 1a: Script schrijven  */
// De administratie moet weten hoeveel studenten er dit blok cum laude zijn afgestudeerd (8 of hoger). Daar moeten namelijk speciale diploma's voor besteld worden.
// Schrijf de stapjes om dit te kunnen checken eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array checken op deze conditie?
// * Hoe zorg ik ervoor dat dit ook werkt wanneer de array 100 entries bevat?
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan bijhouden?
// Log het antwoord in de terminal.


// MIJN NOTES
// 1. if gelijk of hoger dan 8, dan top. dit loopen
// 2. tellen hoeveel grades er ubehaubt zijn (.length)
// 3. index nummer bijhouden

const cumLaudeAantal = []

for (let i = 0; i < grades.length; i++) {
    if (grades[i] >= 8) {
        cumLaudeAantal.push (grades[i])
    }
}

console.log(cumLaudeAantal.length)


// ---- Verwachte uitkomst: 6


/*  1b: Omschrijven tot een herbruikbare functie   */
// Schrijf een functie genaamd cumLaude, die een array van cijfers verwacht (zoals grades) en het aantal Cum laude studenten teruggeeft. Gebruik hiervoor jouw antwoord van 1a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array met eindcijfers willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// cumLaude(grades) geeft 6
// cumLaude([6, 4, 5]) geeft 0
// cumLaude([8, 9, 4, 6, 10]) geeft 3


// OUD
// function cumLaude(array) {
//     const functionSize = cumLaude(array.length)
//     const cumLaudeFlex = []
//
//     for (let i = 0; i < functionSize; i++) {
//         if (cumLaude([i]) >= 8) {
//             cumLaudeFlex.push(cumLaude([i]))
//         } else { cumLaudeFlex.push('')
//         }
//
//         return cumLaudeFlex.length
//     }
// }
// console.log(cumLaude(8,8,8,8,8))

console.log('OPDRACHT 1B')


function cumLaude(arr) {

    const functionSize = arr.length
    const cumLaudeOutput = []

    for (let i = 0; i < functionSize; i++) {

            if (arr[i] >= 8) { cumLaudeOutput.push (arr[i])
            }
            else { cumLaudeOutput.push ()
            }

    }
    return cumLaudeOutput.length

}

const cumlaudeResult = cumLaude([8, 9, 4, 6, 10])

console.log(cumlaudeResult)

// const cumLaudeAantal = []


/* Opdracht  2: Gemiddeld cijfer */

/* 2a: Script schrijven  */
// De studenten-administratie moet ieder blok opnieuw berekenen wat het gemiddelde eindcijfer is, maar we beginnen met de grades array van hierboven.
// Schrijf de stapjes om dit te kunnen berekenen eerst uit en vraag jezelf de volgende dingen af:
// * Hoe wordt een gemiddelde berekend?
// * Wat moet ik verzamelen uit de array van cijfers om uiteindelijk een gemiddelde te kunnen berekenen?
// * Hoe zorgt ik ervoor dat ik alle waardes uit de array kan langslopen, ook als de array wel 100 entries zou bevatten?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 6.642857142857143
console.log('OPDRACHT 2A')

    function average(array) {

        const divider = array.length
        let gradePile = 0


        for (let i = 0; i < array.length; i++) {
                gradePile += array[i];
        }

        const output = gradePile / divider
        return output.toFixed(2)
    }


    console.log(average(grades))


/* 2b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd averageGrade, die een array van cijfers verwacht (zoals grades) en het gemiddelde cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 2a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

console.log('OPDRACHT 2B: check')

console.log(average([2,5,2,5]))

// ---- Verwachte uitkomsten:
// averageGrade(grades) geeft 6.642857142857143
// averageGrade([6, 4, 5]) geeft xxxx
// averageGrade([8, 9, 4, 6, 10]) geeft xxxx

console.log('OPDRACHT 2C: check')


/* 2c: Afronden op twee decimalen */
// Zorg ervoor dat het gemiddelde cijfer dat wordt teruggegeven uit de functie netjes wordt afgerond op twee decimalen.
// Tip: Google is your best friend!




/* Bonusopdracht: hoogste cijfer */

/* 3a: Script schrijven  */
// Schrijf een script die op basis van de grades array (hierboven) checkt wat het hoogst behaalde cijfer is. Je mag hier geen bestaande methoden voor gebruiken. Schrijf de stapjes eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array langsgaan?
// * Op welke conditie moet ik checken?
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan opslaan?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 9
console.log('OPDRACHT 3A')

function max(array) {

    // const divider = array.length
    let gradePile = Number.NEGATIVE_INFINITY


    for (let i = 0; i < array.length; i++) {
        if (array[i] > gradePile) {
            gradePile = array[i]
        }
    }

    // const output = gradePile / divider
    return gradePile.toFixed(2)
}

console.log(max([345, 457887, 4, 6, 10]))

/* 3b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd highestGrade, die een array van cijfers verwacht (zoals grades) en het hoogste cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 3a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.
console.log('OPDRACHT 3B: check')


console.log(max([345, 457887, 4, 6, 10, 5969, 0483, 394, 2049, 999999]))


// ---- Verwachte uitkomsten:
// highestGrade(grades) geeft 9
// highestGrade([6, 4, 5]) geeft 6
// highestGrade([8, 9, 4, 6, 10]) geeft 10
