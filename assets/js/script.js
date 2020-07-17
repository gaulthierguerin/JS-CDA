// toogle sidebar

$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        $(this).toggleClass('active');
    });
});

//tooltips BS

$(function () {
    $('[data-toggle="tooltip"]').tooltip() // suivant / précendent sur les flèches de navigation
})



function capitalizeFirstLetter(string) { // met la première lettre d'une string en majuscule
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// base4
let base4 = document.getElementById("base4ex"); // récupération bouton

if (base4) { // s'assure de la page
    base4.addEventListener('click', function () { // sur clic du bouton
        let lastname = prompt("Entrez votrez nom");
        let firstname = prompt("Entrez votre prénom");
        let base4dom = document.getElementById('base4dom');

        if (confirm("Êtes-vous un homme ?") == true) {
            base4dom.innerHTML = "Bonjour Monsieur " + lastname + " " + firstname + "!\nBienvenue sur notre site web !";
        } else {
            base4dom.innerHTML = "Bonjour Madame " + lastname + " " + firstname + "!\nBienvenue sur notre site web !";
        }
    });
}

//base6_1

let base6_1 = document.getElementById("base6_1ex");

if (base6_1) {
    base6_1.addEventListener('click', function () {

        let n = prompt("Entrez un nombre :");
        if (isNaN(n)) { // vérification de l'input
            do {
                n = prompt("Veuillez entrez un nombre");
            } while (isNaN(n)); //boucle jusqu'à l'entrée d'une valeur acceptée (ici, un nombre)
        }
        x = n % 2;
        if (x != 0) {
            base6_1dom.innerHTML = n + " est impair"
        } else {
            base6_1dom.innerHTML = n + " est pair"
        }

    });
}

// base6_2

let base6_2 = document.getElementById("base6_2ex");

if (base6_2) {
    base6_2.addEventListener('click', function () {
        let age = parseInt(prompt("Entrez votre âge : "));
        if (isNaN(age)) {
            do {
                age = parseInt(prompt("Veuillez entrez votre âge : "));
            } while (isNaN(age));
        }

        if (age == 0) {
            base6_2dom.innerHTML = "Vous n'êtes pas encore nés.";
        } else if (age <= 3) {
            base6_2dom.innerHTML = "Vous êtes un bébé.";
        } else if (age <= 10) {
            base6_2dom.innerHTML = "Vous êtes un enfant.";
        } else if (age < 18) {
            base6_2dom.innerHTML = "Vous êtes mineur.";
        } else {
            base6_2dom.innerHTML = "Vous êtes majeur";
        }



    })
}

// base6_3

let base6_3 = document.getElementById("base6_3ex");

if (base6_3) {
    base6_3.addEventListener('click', function () {
        let n1 = parseInt(prompt("Entrez un nombre :")); //nombre
        let op = prompt("Entrez un opérateur (+ , - , * , /) :"); //string
        while (op != "+" && op != "-" && op != "*" && op != "/") {
            op = prompt("Veuillez saisir un opérateur valide (+ , - , * , /) :")
        }
        let n2 = parseInt(prompt("Entrez un deuxième nombre :")); //nombre

        switch (op) {
            case "+":
                n = n1 + n2;
                base6_3dom.innerHTML = "Le résultat est : " + n;
                break;

            case "-":
                n = n1 - n2;
                base6_3dom.innerHTML = "Le résultat est : " + n;
                break;

            case "*":
                n = n1 * n2;
                base6_3dom.innerHTML = "Le résultat est : " + n;
                break;

            case "/":
                n = n1 / n2;
                if (n1 == 0 || n2 == 0) {
                    base6_3dom.innerHTML = "Erreur, division par 0"
                } else {
                    base6_3dom.innerHTML = "Le résultat est : " + n;
                }
                break;

            default:
                base6_3dom.innerHTML = "Opération invalide.";
        }

    })
}

// base6_4

let base6_4 = document.getElementById("base6_4ex")

if (base6_4) {
    base6_4.addEventListener('click', function () {

        let PU;
        let QTECOM;
        let PAP;
        let PORT;
        let REM;
        let TOT;

        PU = parseInt(prompt("Entrez le prix du produit commandé :"));
        TOT = PU;
        QTECOM = parseInt(prompt("Entrez la quantité voulue :"));
        TOT *= QTECOM;

        if (TOT >= 100 && TOT < 200) { // si total entre 100 et 199 -> 5%
            REM = 5 / 100;
        } else if (TOT >= 200) { //sinon si 200 ou plus -> 10%
            REM = 10 / 100
        } else { //sinon vide
            REM = "";
        }

        TOT = TOT - (TOT * REM);
        if (TOT > 500) { //détermination des frais de port en fonction du total
            PORT = 0; // Si > 500€, pas de frais de port
            console.log(PORT)
        } else {
            PORT = (TOT * (2 / 100)); // Sinon frais de port de 2%, mais si <6€, alors port = 6
            if (PORT < 6) {
                PORT = 6;
            }
        }

        PAP = TOT
        PAP += PORT;

        if (REM == 0.05) { //passage de la remise pour des valeurs propres à l'affichage
            REM = 5;
        } else if (REM == 0.10) {
            REM = 10;
        } else {
            REM = 0;
        }

        base6_4dom.innerHTML = "Le total, hors remise et frais de port est de : " + TOT + "€." +
            "\nVous bénéficiez d'une remise de " + REM + "% et vos frais de ports" +
            " s'élèvent à " + PORT + "€." +
            "\nLe total, frais de port et remise calculés est de : " + PAP + "€."
    })


}

// base6_5

let base6_5 = document.getElementById("base6_5ex");

if (base6_5) {
    base6_5.addEventListener('click', function () {
        let participation = 0;

        if (married = confirm("Êtes-vous en couple ?") == true) {
            participation += 25;
        } else {
            participation += 20;
        }

        if (child = confirm("Avez-vous des enfants ?") == true) {
            let nbChild = parseInt(prompt("Combien avez-vous d'enfants ?"));
            participation += nbChild * 10;
        }

        if (salaire = confirm("Votre salaire est-il inférieur à 1200e ?") == true) {
            participation += 10;
        }

        if (participation > 50) {
            participation = 50;
        }

        base6_5dom.innerHTML = "Votre employeur participera à vos repas à hauteur de " + participation + "%.";
    })
}

// base7_1

let base7_1 = document.getElementById("base7_1ex");

if (base7_1) {
    base7_1.addEventListener('click', function () {
        let compteur = 1;
        let listePrenoms = "";
        let prenom;

        do {
            prenom = prompt("Saisissez le prénom n°" + compteur +
                "\nCliquez sur Annuler ou laissez pour arrêter la saisie");

            if (prenom == null || prenom == "") {
                break;
            }

            if (listePrenoms == "") {
                listePrenoms += (prenom);
            } else {
                listePrenoms += (", " + prenom);
            }
            compteur++;
        } while (prenom != "" && prenom != null)

        base7_1dom.innerHTML = "Vous avez saisi " + (compteur - 1) + " prénom(s) : <p>" + listePrenoms + "</p>";

    })
}

// base7_2

let base7_2 = document.getElementById("base7_2ex");

if (base7_2) {
    base7_2.addEventListener('click', function () {
        let i = 0;
        let n = parseInt(prompt("Saisir un nombre"));
        let tableau = []
        for (i = 1; i < n; i++) {
            tableau.push(i); // i va de 1 à n-1 en introduisant sa valeur dans le tableau à chaque boucle
        }


        base7_2dom.innerHTML = "Les entiers inférieurs à " + n + " sont : " +
            tableau.join(", ");
    })
}

// base7_3

let base7_3 = document.getElementById("base7_3ex");

if (base7_3) {
    base7_3.addEventListener('click', function () {
        let n = 0;
        let total = 0;

        n = parseInt(prompt("Entrez un nombre :"));

        for (i = (n - 1); i != 0; i--) {
            total += i;
        }

        base7_3dom.innerHTML = "La somme des entiers inférieurs à " + n + " est : " + total;
    })
}

// base 7_4

let base7_4 = document.getElementById("base7_4ex");

if (base7_4) {
    base7_4.addEventListener('click', function () {
        let n1 = 0;
        let n2 = 0;
        let total = 0;

        n1 = parseInt(prompt("Entrez un premier nombre :"));
        n2 = parseInt(prompt("Entrez un deuxième nombre :"));

        for (i = n1; i <= n2; i++) {
            total += i;
            console.log(total);
        }

        base7_4dom.innerHTML = "La somme de l'intervalle de " + n1 + " à " + n2 +
            " est : " + total

    })
}

// base7_5

let base7_5 = document.getElementById("base7_5ex");

if (base7_5) {
    base7_5.addEventListener('click', function () {
        let total = 0;
        let compteur = 0;
        let moyenne = null;
        let entier = null;

        while (entier != 0) {
            total += entier;
            compteur++;
            entier = parseInt(prompt("Saisissez un nombre entier" +
                "\nArrêtez la saisie avec 0"));
        } // fin while

        // sortie de boucle puis calcul
        moyenne = total / (compteur - 1);
        console.log(total, (compteur - 1));
        base7_5dom.innerHTML = "La somme de vos " + (compteur - 1) + " entrée(s), " +
            "est de " + total + ". La moyenne est donc : " + moyenne;

    })
}

// base7_6

let base7_6 = document.getElementById("base7_6ex");

if (base7_6) {
    base7_6.addEventListener('click', function () {
        function bubbleSort(tabNoTri) {
            let j;
            for (i = 0; i < tabNoTri.length; i++) {
                for (j = 0; j < tabNoTri.length - i - 1; j++) {
                    if (tabNoTri[j] > tabNoTri[j + 1]) {
                        let temp = tabNoTri[j];
                        tabNoTri[j] = tabNoTri[j + 1];
                        tabNoTri[j + 1] = temp;
                    }
                }
            }
            console.log("Trié : " + tabNoTri)
        }

        let tabVal = [];
        let i = 0;
        let tot = 0;

        do {
            tabVal[i] = parseInt(prompt("Entrez une valeur (0 pour arrêter la saisie) :"));
            tot += tabVal[i];
            i++;
            console.log(i);
            console.log(tabVal);
        }
        while (tabVal[i - 1] != 0)
        tabVal.pop();
        console.log(tabVal);

        bubbleSort(tabVal);

        console.log(tabVal[tabVal.length - 1]);
        base7_6dom.innerHTML = "La moyenne de " + tot + "/" + tabVal.length + " est de : " +
            (tot / tabVal.length).toFixed(2) +
            "<br>La valeur minimale rentrée était : " + tabVal[0] +
            "<br>La valeur maximale rentrée était : " + tabVal[tabVal.length - 1];
        /* dans le cas ou les valeurs sont 1(0), 2(1), 3(2), 4(3) et 5(4), tabVal.length renvoie 5, mais l'index pour récupérer 5 est 4, donc -1 */

    })
}

// base 7_7

let base7_7 = document.getElementById("base7_7ex");

if (base7_7) {
    base7_7.addEventListener('click', function () {

        let i;
        let resultat;
        let n = parseInt(prompt("Entrez un nombre N :"));
        let x = parseInt(prompt("À multiplier par X :"))

        base7_7dom.innerHTML = " ";

        base7_7dom.innerHTML = "<p>La table de multiplication de " + n + " par " + x + " est : </p>"
        for (i = 1; i <= x; i++) {
            resultat = n * i;

            base7_7dom.innerHTML += "<p class='tablemult'>" + n + " x " + i + " = " + resultat + "</p>";
        }
    })
}

// base7_8

let base7_8 = document.getElementById("base7_8ex");

if (base7_8) {
    base7_8.addEventListener('click', function () {
        let mot = "";
        let voyelles = 0;
        let i = 0;

        mot = prompt("Entrez un mot");

        while (mot == null || mot == isNaN(mot)) {
            mot = prompt("Veuillez entrer un mot");
        }
        mot = mot.toLocaleLowerCase();
        for (i = 0; i <= mot.length; i++) {
            switch (mot[i]) {
                case "a":
                case "e":
                case "i":
                case "o":
                case "u":
                case "y":
                    voyelles++
                    console.log(voyelles);
                    break;
                default:
                    "";
            }
        }
        base7_8dom.innerHTML = "Le nombre de voyelle du mot '" + capitalizeFirstLetter(mot) +
            "' est de : " + voyelles + ".";
    })
}

// base 7_9

let base7_9 = document.getElementById("base7_9ex")

if (base7_9) {
    base7_9.addEventListener('click', function () {
        let inputAge = 0;
        let jeune = [];
        let moyen = [];
        let vieux = [];

        while (inputAge < 100) {
            inputAge = parseInt(prompt("Entrez des âges un par un. La saisie s'arrête à la saisie d'un centenaire."))
            if (inputAge < 20) {
                jeune.push(inputAge);
            } else if (inputAge >= 20 && inputAge <= 40) {
                moyen.push(inputAge);
            } else if (inputAge >= 41) {
                vieux.push(inputAge);
            }
        }

        jeune = jeune.length;
        console.log(jeune);
        moyen = moyen.length;
        console.log(moyen);
        vieux = vieux.length;
        console.log(vieux);

        base7_9dom.innerHTML = "Votre famille est composée de " + jeune + " jeunes, de " + moyen +
            " moyens, et de " + vieux + " vieux.";

    })
}

// base7_10

let base7_10 = document.getElementById("base7_10ex");

if (base7_10) {
    base7_10.addEventListener('click', function () {
        let n = 0;
        let i = 1
        let compteur = 0;

        n = prompt("Entrez un nombre : ");

        for (i = 1; i <= n; i++) {
            if (n % i == 0) {
                compteur += 1;
            }
        }
        if (compteur == 2) {
            base7_10dom.innerHTML = n + " est un nombre premier.";
        } else {
            base7_10dom.innerHTML = n + " n'est pas un nombre premier.";
        }

    })
}

// base7_11

let base7_11 = document.getElementById("base7_11ex");

if (base7_11) {

    base7_11.addEventListener('click', function () {
        var magic = parseInt(Math.random() * 1000);
        var compteur = 10;

        do {
            console.log(magic);
            console.log(compteur);
            var userNb = parseInt(prompt("Devinez la valeur choisie par l'ordinateur " +
                "(entre 1 et 1000)."));
            compteur--;
            if (compteur == -1) {
                base7_11dom.innerHTML = "Perdu ! La bonne valeur valeur était : " + magic;
                break;
            } else if (userNb > magic && compteur >= 0) {
                alert("Plus bas ! \nIl vous reste " + compteur + " essais." +
                    "\nVotre dernière valeur était : " + userNb);
            } else if (userNb < magic && compteur >= 0) {
                alert("Plus haut !\nIl vous reste " + compteur + " essais." +
                    "\nVotre dernière valeur était : " + userNb);
            } else if (userNb == magic && compteur >= 0) {
                base7_11dom.innerHTML = "Bravo ! La bonne valeur était " + magic +
                    "<br>Il vous restait " + compteur + " essai(s) sur 10."
            }
        }
        while (userNb != magic && compteur > -1);
    })
}

// base8_1

let base8_1 = document.getElementById("base8_1ex")

if (base8_1) {
    base8_1.addEventListener('click', function () {

        function cube(x) { // Calcule le cube d'une valeur entrée lors de l'appel de la fonction
            cube = x * x * x;
            base8_1dom.innerHTML = "Le cube de " + x + " est égal à " + cube + "."; // <p> pour le retour à la ligne car \n ne fonctionne pas dans un document.write
            return cube;
        }

        function produit(x, y) { // Calcule le produit des deux valeurs entrées lors de l'appel de la fonction
            produit = x * y;
            base8_1dom.innerHTML += "<br>Le produit de " + x + " et " + y + " est égal à : " +
                produit + ".";
            return produit;
        }

        function afficheImg(image) { // Appelle une image dans l'html, utilisation de \" pour la source de l'image
            base8_1dom.innerHTML += "<br><img src =\"" + image + "\" title=\"papillon\">";
        }

        cube(3);
        produit(3, 5);
        afficheImg("../assets/img/papillon.jpg")
    })
}

// base8_2

let base8_2 = document.getElementById("base8_2ex");

if (base8_2) {

    function tableMultiplication(n) {
        let i;
        let resultat;

        base8_2dom.innerHTML = " ";
        for (i = 1; i <= 10; i++) {
            resultat = n * i;

            table.innerHTML = "La table de multiplication de " + n + " est :"

            base8_2dom.innerHTML += "<p class='tablemult'>" + n + " x " + i + " = " + resultat + "</p>";

        }
    }


    base8_2.addEventListener('click', function () {
        let x = parseInt(prompt("Entrez un nombre pour connaître sa table de multiplication :"));
        tableMultiplication(x);
    })
}

// base8_3

let base8_3 = document.getElementById("base8_3ex");

if (base8_3) {
    base8_3.addEventListener('click', function () {
        let phraseAsk = prompt("Entrez une phrase :");
        let letterAsk = prompt("Entrez une lettre présente dans la phrase " +
            "pour en connaître le nombre d'occurence");
        letterInPhrase(phraseAsk, letterAsk);


        function letterInPhrase(phrase, letter) {

            phrase = phrase.toLocaleLowerCase();

            let compteur = 0;

            for (i = 0; i < phrase.length; i++) { // i s'incrémente pour chaque lettre présente dans la phrase, mais ne dépassera pas le nombre de lettre présente
                if (phrase[i] == letter) { // i sert d'index pour vérifier chaque lettre une par une
                    compteur++; // incrémente aussi le compteur qui ne dépassera donc jamais le nombre de lettre dans la phrase non plus
                }
            }
            base8_3dom.innerHTML = "La lettre '" + letter + "' est présente " + compteur +
                " fois dans '" + capitalizeFirstLetter(phrase) + "'";
        }

    })

}

// base8_4

let base8_4 = document.getElementById("base8_4ex");

if (base8_4) {

    // Menu 1

    function tableMultiplication(n) {
        let i;
        let resultat;

        base8_4dom.innerHTML = " ";
        for (i = 1; i <= 10; i++) {
            resultat = n * i;

            table.innerHTML = "La table de multiplication de " + n + " est :"
            if (i == 10) {
                base8_4dom.innerHTML += n + " x " + i + " = " + resultat;
            } else {
                base8_4dom.innerHTML += n + " x " + i + " = " + resultat + " <br> ";
            }
        }
    }

    // Menu 2

    function sumAvg() {
        function bubbleSort(tabNoTri) {
            let j;
            for (i = 0; i < tabNoTri.length; i++) {
                for (j = 0; j < tabNoTri.length - i - 1; j++) {
                    if (tabNoTri[j] > tabNoTri[j + 1]) {
                        let temp = tabNoTri[j];
                        tabNoTri[j] = tabNoTri[j + 1];
                        tabNoTri[j + 1] = temp;
                    }
                }
            }
            console.log("Trié : " + tabNoTri)
        }

        let tabVal = [];
        let i = 0;
        let tot = 0;

        do {
            tabVal[i] = parseInt(prompt("Entrez une valeur (0 pour arrêter la saisie) :"));
            tot += tabVal[i];
            i++;
            console.log(i);
            console.log(tabVal);
        }
        while (tabVal[i - 1] != 0)
        tabVal.pop();
        console.log(tabVal);

        bubbleSort(tabVal);

        console.log(tabVal[tabVal.length - 1]);
        base8_4dom.innerHTML = "La moyenne de " + tot + "/" + tabVal.length + " est de : " +
            (tot / tabVal.length).toFixed(2) +
            "<br>La valeur minimale rentrée était : " + tabVal[0] +
            "<br>La valeur maximale rentrée était : " + tabVal[tabVal.length - 1];
    }

    // Menu 3

    function vowelNumber() {
        let mot = "";
        let voyelles = 0;
        let i = 0;

        mot = prompt("Entrez un mot");

        while (mot == null || mot == isNaN(mot)) {
            mot = prompt("Veuillez entrer un mot");
        }
        mot = mot.toLocaleLowerCase();
        for (i = 0; i <= mot.length; i++) {
            switch (mot[i]) {
                case "a":
                case "e":
                case "i":
                case "o":
                case "u":
                case "y":
                    voyelles++
                    console.log(voyelles);
                    break;
                default:
                    "";
            }
        }

        function capitalizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }

        base8_4dom.innerHTML = "Le nombre de voyelle du mot '" +
            capitalizeFirstLetter(mot) + "' est de : " + voyelles + ".";
    }

    // Menu 4

    function charNumber(phrase, letter) {
        let compteur = 0;

        phrase = phrase.toLocaleLowerCase();

        for (i = 0; i < phrase.length; i++) { // i s'incrémente pour chaque lettre présente dans la phrase, mais ne dépassera pas le nombre de lettre présente
            if (phrase[i] == letter) { // i sert d'index pour vérifier chaque lettre une par une
                compteur++; // incrémente aussi le compteur qui ne dépassera donc jamais le nombre de lettre dans la phrase non plus
            }
        }

        function capitalizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }

        base8_4dom.innerHTML = "La lettre '" + letter + "' est présente " + compteur +
            " fois dans '" + capitalizeFirstLetter(phrase) + "'";
    }


    function showMenu() {
        let menu = prompt("1. Multiples \n2. Somme et Moyenne" +
            "\n3. Recherche du nombre de lettres \n4. Recherche du nombre des" +
            " caractères suivants \nEntrez votre option :")

        if (isNaN(menu)) {
            do {
                showMenu();
            } while (isNaN(menu) == false)
        }

        if (menu == 1) {
            let x = parseInt(prompt("Entrez un nombre pour connaître sa table de multiplication :"));
            tableMultiplication(x);
        } else if (menu == 2) {
            table.innerHTML = "";
            sumAvg();
        } else if (menu == 3) {
            table.innerHTML = "";
            vowelNumber();
        } else if (menu == 4) {
            table.innerHTML = " ";
            let phraseAsk = prompt("Entrez une phrase :");
            let letterAsk = prompt("Entrez une lettre présente dans la phrase " +
                "pour en connaître le nombre d'occurence");
            charNumber(phraseAsk, letterAsk);
        }
    }

    base8_4.addEventListener('click', function () {
        showMenu();
    })
}

// base8_5

let base8_5 = document.getElementById("base8_5ex");

if (base8_5) {

    function strTok(str1, str2, n) {
        let liste;

        liste = str1.split(str2);

        if (str2 == " ") {
            str2 = "espace";
        }

        base8_5dom.innerHTML = "<p class='text-center'>Vous avez entré : " + str1 + "</p>" +
            "<p class='text-center'>Votre séparateur était \"" + str2 + "\".</p>" +
            "<p class='text-center'>Vous avez choisi d'extraire le mot n°" + n +
            " qui était : \"" + liste[n - 1] + "\".</p>";
    }

    base8_5.addEventListener('click', function () {

        let phrase = prompt("Entrez plusieurs mots, séparés par le caractère" +
            " de votre choix.");
        let separateur = prompt("Entrez le séparateur que vous avez choisi.")
        let num = prompt("Entrez la position (numérique : 1, 2, 3...)" +
            "du mot que vous voulez extraire")

        strTok(phrase, separateur, num);

    })
}

// base9_1

let base9_1 = document.getElementById("base9_1ex");

if (base9_1) {
    base9_1.addEventListener('click', function () {
        let n = parseInt(prompt("Saisir la taille du tableau"));
        let tableau = [n]; // taille du tableau définie par l'utilisateur
        let i = 0;

        while (i < n) {
            tableau[i] = prompt("Valeur de la case n°" + (i + 1) + "/" + n); // Saisie des données jusqu'à atteindre la taille max définie
            i++;
        }

        base9_1dom.innerHTML = "Tableau : " + tableau.join(", ")

    })
}

let base9_2 = document.getElementById("base9_2ex");

if (base9_2) {
    base9_2.addEventListener('click', function () {
        let tableau;
        let tabSize;
        let menu;
        let i;
        let n;
        let max;
        let tot;

        function getInteger() { // sert dans le menu pour exécuter la fonction voulue
            let x = parseInt(prompt("1. Affichage du contenu de tout les postes du tableau " +
                "\n2. Affichage du contenu d'un poste dont l'index est saisi au clavier" +
                "\n3. Affichage du maximum et de la moyenne des postes du tableau" +
                "\n \nEntrez votre option :"));
            if (isNaN(x)) {
                do {
                    x = parseInt(prompt("1. Affichage du contenu de tout les postes du tableau " +
                        "\n2. Affichage du contenu d'un poste dont l'index est saisi au clavier" +
                        "\n3. Affichage du maximum et de la moyenne des postes du tableau" +
                        "\n \nEntrez une option valide :"));
                } while (isNaN(x));
            }
            return x;
        }

        function iniTab() { //initialise le tableau et sa taille
            tabSize = parseInt(prompt("Entrez un nombre pour déterminer la taille" +
                " du tableau"));
            if (isNaN(tabSize)) {
                while (isNaN(tabSize)) {
                    tabSize = parseInt(prompt("Entrée invalide\nEntrez un nombre pour déterminer la taille" +
                        " du tableau"));
                };
            }
            tableau = Array(tabSize);
            return tableau;
        }

        function saisieTab(tableau) {
            console.log(tableau.length);
            for (i = 0; i < tableau.length; i++) {
                n = parseInt(prompt("Entrez une valeur numérique pour la case n°" + (i + 1)));
                if (isNaN()) {
                    while (isNaN(n)) {
                        n = parseInt(prompt("Entrée invalide\nEntrez une valeur numérique pour la case n°" + (i + 1)));
                    };
                }
                tableau[i] = n;
                console.log(tableau);
            }
            return tableau;
        }

        function dispTab(tableau) { // Affiche toutes les cases du tableau
            base9_2dom.innerHTML = "Tableau complet : " + tableau.join(", ")
        }

        function srcTab(tableau) { // Affiche la valeur de la case voulue
            i = parseInt(prompt("Choisissez le numéro de la case du tableau" +
                " dont vous voulez connaître la valeur :"));
            if (isNaN(i)) {
                while (isNaN(i)) {
                    i = parseInt(prompt("Entrée invalide\nChoisissez le numéro de la case du tableau" +
                        " dont vous voulez connaître la valeur :"));
                };
            }

            base9_2dom.innerHTML = "Vous avez choisi d'afficher la case n°" +
                i + " dont le contenu est : " + tableau[(i - 1)];
        }

        function maxSum(tableau) {
            i = 0;
            max = 0;
            tot = 0;
            while (i < tableau.length) {
                tot += tableau[i]; // ajoute au total la valeur de la case
                if (max < tableau[i]); // à chaque fois que la valeur de la case dépasse le max, 
                max = tableau[i]; // max est remplacée par la nouvelle valeur
                i++;
            }
            base9_2dom.innerHTML = "La valeur la plus haute est : " + max +
                "<br>La moyenne des valeurs est de : " + (tot / i);
        }

        function showMenu() { // menu 
            menu = getInteger();
            if (menu == 1) {
                dispTab(tableau);
            } else if (menu == 2) {
                srcTab(tableau);
            } else if (menu == 3) {
                maxSum(tableau);
            }
        }

        iniTab();
        saisieTab(tableau);
        showMenu();
    })
}

// base9_3

let base9_3 = document.getElementById("base9_3ex");

if (base9_3) {

    let arrayNames = ["Gaulthier", "Quentin", "Cassandre", "Romain", "Sébastien", "Juliet",
        "Simon", "Yoann", "Charlotte", "Ségolène", "Anna", "Mélissa", "Kévin", "Jonathan",
        "Maxime", "Noémie", "Joeffrey", "Ophélie", "Erwan", "Manu"
    ]

    base9_3.addEventListener('click', function () {
        let input;
        input = prompt("Saisissez un des prénoms listés sur la page");

        input = capitalizeFirstLetter(input);

        if (arrayNames.includes(input)) {
            arrayNames.splice(arrayNames.indexOf(input), 1);
            arrayNames[arrayNames.length] = "'dernière case à blanc'";
            base9_3dom.innerHTML = arrayNames.join(", ");
        }

    })
}

// base9_4

let base9_4 = document.getElementById("base9_4ex");

if (base9_4) {
    base9_4.addEventListener('click', function () {
        function bubbleSort(tabNoTri) {
            var j;
            for (i = 0; i < tabNoTri.length; i++) {
                for (j = 0; j < tabNoTri.length - i - 1; j++) {
                    if (tabNoTri[j] > tabNoTri[j + 1]) {
                        let temp = tabNoTri[j];
                        tabNoTri[j] = tabNoTri[j + 1];
                        tabNoTri[j + 1] = temp;
                    }
                }
            }
            console.log("sorted:" + tabNoTri)
        }
        let tab9_4 = [25, 65, 23, 1, 50, 15, 10, 59];

        base9_4dom.innerHTML = "Tableau avant le tri : " + tab9_4.join(", ")
        bubbleSort(tab9_4);
        base9_4dom.innerHTML += "<br>Tableau après le tri : " + tab9_4.join(", ");
        console.log(tab9_4);
    })
}

//formulaire

let contactForm = document.getElementById("formEx");

if (contactForm) {

    contactForm.addEventListener('click', function () {
        document.getElementById("exoform").style.display = "block";
        document.getElementById("consignes").style.display = "none";
    })

    let formulaire = document.getElementById("formulaire");
    console.log(formulaire);
    let resetForm = document.getElementById("buttonReset");
    let submitForm = document.getElementById("buttonSubmit");

    //recupération des id des inputs
    let inputSociete = document.getElementById("inputSociete");
    let inputContact = document.getElementById("inputContact");
    let inputAdresse = document.getElementById("inputAdresse");
    let inputCodePostal = document.getElementById("inputCodePostal");
    let inputVille = document.getElementById("inputVille");
    let inputEmail = document.getElementById("inputEmail");
    let selectTechEnv = document.getElementById("selectTechEnv");
    let inputTechEnv = document.getElementById("inputTechEnv");

    //récupération des id des alerts
    let alertSociete = document.getElementById("alertSociete");
    let alertContact = document.getElementById("alertContact");
    let alertAdresse = document.getElementById("alertAdresse");
    let alertCodePostal = document.getElementById("alertCodePostal");
    let alertVille = document.getElementById("alertVille");
    let alertEmail = document.getElementById("alertEmail");
    let alertTechEnv = document.getElementById("alertTechEnv");
    let alertForm = document.getElementById("alertForm")

    //récupération des champs valides

    let validField = [false, false, false, false, false, false, false];
    console.log(validField);
    let validForm = false;


    //création des regex
    let RegExCP = /^\d{5}$/; //n'accepte qu'une valeur à 5 chiffres
    let RegExMail = /^(\S+@\S+)\.\S+$/; //n'autorise pas les espaces avant/après le "@" et le "."
    let RegExNomVille = /^[\D\-\s]+$/; //accepte lettres, tirets, espaces
    let RegExSteAdresseTech = /^[(\s\D)*\d]+$/;

    // event listener

    //reset formulaire


    resetForm.addEventListener('click', function () { //remet à 0 tout les champs d'erreurs
        alertSociete.style.display = "none";
        inputSociete.style.borderColor = "";
        inputSociete.style.boxShadow = "";

        alertContact.style.display = "none";
        inputContact.style.borderColor = "";
        inputContact.style.boxShadow = "";

        alertAdresse.style.display = "none";
        inputAdresse.style.borderColor = "";
        inputAdresse.style.boxShadow = "";

        alertCodePostal.style.display = "none";
        inputCodePostal.style.borderColor = "";
        inputCodePostal.style.boxShadow = "";

        alertVille.style.display = "none";
        inputVille.style.borderColor = "";
        inputVille.style.boxShadow = "";

        alertEmail.style.display = "none";
        inputEmail.style.borderColor = "";
        inputEmail.style.boxShadow = "";

        alertTechEnv.style.display = "none";
        inputTechEnv.style.borderColor = "";
        inputTechEnv.style.boxShadow = "";
        inputTechEnv.innerHTML = "";

        alertForm.style.display = "none";

        validField = [false, false, false, false, false, false, false];

    })

    //vérification champs Société
    inputSociete.addEventListener('blur', function () {
        console.log(inputSociete.value);
        if (inputSociete.value == "") {
            alertSociete.style.display = "block";
            alertSociete.innerHTML = "Ce champs doit être renseigné.";
            inputSociete.style.borderColor = "red";
            inputSociete.style.boxShadow = "0px 0px 5px red";
            validField[0] = false;


        } else if (RegExSteAdresseTech.test(inputSociete.value) == false) {
            alertSociete.style.display = "block";
            alertSociete.innerHTML = "Ce champs n'accepte que les lettres, tirets, nombres et espaces.";
            inputSociete.style.borderColor = "red";
            inputSociete.style.boxShadow = "0px 0px 5px red";
            validField[0] = false;

        } else if (RegExSteAdresseTech.test(inputSociete.value) == true) {
            alertSociete.innerHTML = "";
            alertSociete.style.display = "none";
            inputSociete.style.borderColor = "green";
            inputSociete.style.boxShadow = "0px 0px 5px green";
            validField[0] = true;
        }

    })

    // vérification champs Contact
    inputContact.addEventListener('blur', function () {
        console.log(inputContact.value);
        if (inputContact.value == "") {
            alertContact.style.display = "block";
            alertContact.innerHTML = "Ce champs doit être renseigné.";
            inputContact.style.borderColor = "red";
            inputContact.style.boxShadow = "0px 0px 5px red";
            validField[1] = false;

        } else if (RegExNomVille.test(inputContact.value) == false) {
            alertContact.style.display = "block";
            alertContact.innerHTML = "Ce champs n'accepte que les lettres, tirets et espaces.";
            inputContact.style.borderColor = "red";
            inputContact.style.boxShadow = "0px 0px 5px red";
            validField[1] = false;

        } else if (RegExNomVille.test(inputContact.value) == true) {
            alertContact.innerHTML = "";
            alertContact.style.display = "none";
            inputContact.style.borderColor = "green";
            inputContact.style.boxShadow = "0px 0px 5px green";
            validField[1] = true;
        }

    })

    // vérification champs Adresse
    inputAdresse.addEventListener('blur', function () {
        console.log(inputAdresse.value);
        if (inputAdresse.value == "") {
            alertAdresse.style.display = "block";
            alertAdresse.innerHTML = "Ce champs doit être renseigné.";
            inputAdresse.style.borderColor = "red";
            inputAdresse.style.boxShadow = "0px 0px 5px red";
            validField[2] = false;

        } else if (RegExSteAdresseTech.test(inputAdresse.value) == false) {
            alertAdresse.style.display = "block";
            alertAdresse.innerHTML = "Ce champs n'accepte que les lettres, tirets, nombres, et espaces.";
            inputAdresse.style.borderColor = "red";
            inputAdresse.style.boxShadow = "0px 0px 5px red";
            validField[2] = false;

        } else if (RegExSteAdresseTech.test(inputAdresse.value) == true) {
            alertAdresse.innerHTML = "";
            alertAdresse.style.display = "none";
            inputAdresse.style.borderColor = "green";
            inputAdresse.style.boxShadow = "0px 0px 5px green";
            validField[2] = true;
        }

    })

    // vérification champs Code Postal
    inputCodePostal.addEventListener('blur', function () {
        console.log(inputCodePostal.value);
        if (inputCodePostal.value == "") {
            alertCodePostal.style.display = "block";
            alertCodePostal.innerHTML = "Ce champs doit être renseigné.";
            inputCodePostal.style.borderColor = "red";
            inputCodePostal.style.boxShadow = "0px 0px 5px red";
            validField[3] = false;

        } else if (RegExCP.test(inputCodePostal.value) == false) {
            alertCodePostal.style.display = "block";
            alertCodePostal.innerHTML = "Ce champs doit contenir 5 caractères.";
            inputCodePostal.style.borderColor = "red";
            inputCodePostal.style.boxShadow = "0px 0px 5px red";
            validField[3] = false;

        } else if (RegExCP.test(inputCodePostal.value) == true) {
            alertCodePostal.innerHTML = "";
            alertCodePostal.style.display = "none";
            inputCodePostal.style.borderColor = "green";
            inputCodePostal.style.boxShadow = "0px 0px 5px green";
            validField[3] = true;
        }

    })

    // vérification champs Ville
    inputVille.addEventListener('blur', function () {
        console.log(inputVille.value);
        if (inputVille.value == "") {
            alertVille.style.display = "block";
            alertVille.innerHTML = "Ce champs doit être renseigné.";
            inputVille.style.borderColor = "red";
            inputVille.style.boxShadow = "0px 0px 5px red";
            validField[4] = false;

        } else if (RegExNomVille.test(inputVille.value) == false) {
            alertVille.style.display = "block";
            alertVille.innerHTML = "Ce champs n'accepte que les lettres, tirets et espaces.";
            inputVille.style.borderColor = "red";
            inputVille.style.boxShadow = "0px 0px 5px red";
            validField[4] = false;

        } else if (RegExNomVille.test(inputVille.value) == true) {
            alertVille.innerHTML = "";
            alertVille.style.display = "none";
            inputVille.style.borderColor = "green";
            inputVille.style.boxShadow = "0px 0px 5px green";
            validField[4] = true;
        }

    })

    // vérification champs Email
    inputEmail.addEventListener('blur', function () {
        console.log(inputEmail.value);
        if (inputEmail.value == "") {
            alertEmail.style.display = "block";
            alertEmail.innerHTML = "Ce champs doit être renseigné.";
            inputEmail.style.borderColor = "red";
            inputEmail.style.boxShadow = "0px 0px 5px red";
            validField[5] = false;

        } else if (RegExMail.test(inputEmail.value) == false) {
            alertEmail.style.display = "block";
            alertEmail.innerHTML = "Ce champs doit contenir une adresse mail au format xx(.x)@yy.zz";
            inputEmail.style.borderColor = "red";
            inputEmail.style.boxShadow = "0px 0px 5px red";
            validField[5] = false;

        } else if (RegExMail.test(inputEmail.value) == true) {
            alertEmail.innerHTML = "";
            alertEmail.style.display = "none";
            inputEmail.style.borderColor = "green";
            inputEmail.style.boxShadow = "0px 0px 5px green";
            validField[5] = true;
        }

    })

    // vérification select
    selectTechEnv.addEventListener('change', function () {
        console.log(selectTechEnv.value);
        if (selectTechEnv.value == "Autres") {
            inputTechEnv.textContent += selectTechEnv.value + " : ";
            inputTechEnv.focus();
        } else {
            inputTechEnv.textContent += selectTechEnv.value + ", ";
            inputTechEnv.style.borderColor = "green";
            inputTechEnv.style.boxShadow = "0px 0px 5px green";
            inputTechEnv.focus();
        }
    })

    // vérification champs Environnement Technique
    inputTechEnv.addEventListener('blur', function () {
        if (inputTechEnv.value == "") {
            alertTechEnv.style.display = "block";
            alertTechEnv.innerHTML = "Ce champs doit être renseigné.";
            inputTechEnv.style.borderColor = "red";
            inputTechEnv.style.boxShadow = "0px 0px 5px red";
            validField[6] = false;
        } else if (RegExSteAdresseTech.test(inputTechEnv.value) == false) {
            alertTechEnv.style.display = "block";
            alertTechEnv.innerHTML = "Ce champs n'accepte que les lettres, tirets, nombres, et espaces.";
            inputTechEnv.style.borderColor = "red";
            inputTechEnv.style.boxShadow = "0px 0px 5px red";
            validField[6] = false;
        } else if (RegExSteAdresseTech.test(inputTechEnv.value) == true) {
            alertTechEnv.innerHTML = "";
            alertTechEnv.style.display = "none";
            inputTechEnv.style.borderColor = "green";
            inputTechEnv.style.boxShadow = "0px 0px 5px green";
            validField[6] = true;
        }
    })

    //envoi du formulaire

    function checkValidField() {
        console.log(validField);


        for (let i = 0; i < validField.length; i++) {
            if (validField[i] == true) {
                validForm = true;
            } else {
                alertForm.style.display = "block";
                alertForm.innerHTML = "Veuillez remplir les champs obligatoires"
                validForm = false;
                return validForm;
            }
        }

    }

    submitForm.addEventListener('click', function (e) {
        e.preventDefault();
        checkValidField();

        if (validForm == true) {
            formulaire.submit();
        } else {
            e.preventDefault();
        }

    })

}