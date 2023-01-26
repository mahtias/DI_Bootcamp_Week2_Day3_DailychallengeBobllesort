// Des Instructions

// 1.À l'aide de la .toString()méthode, convertissez le tableau en chaîne.

const numbers = [5,0,9,1,7,4,2,6,3,8]
console.log(numbers.toString())

// 2.À l'aide de la .join()méthode, convertissez le tableau en chaîne. Essayez de transmettre 
// différentes valeurs dans la jointure.
// Par exemple .join("+"), .join(" "), .join("")

const numbers1 = [5,0,9,1,7,4,2,6,3,8].join("+")
const numbers2 = [5,0,9,1,7,4,2,6,3,8].join(" ")
const numbers3 = [5,0,9,1,7,4,2,6,3,8].join("")

console.log(numbers1)
console.log(numbers2)
console.log(numbers3)



// Bonus : Pour ce faire, regardez comment travailler avec des boucles for imbriquées
// . Triez le numberstableau dans l'ordre décroissant, faites-le en utilisant des boucles for (sans utiliser les méthodes de tri intégrées).
// La sortie devrait être : [9,8,7,6,5,4,3,2,1,0]
// Astuce : L'algorithme est appelé "Bubble Sort"
// Utilisez une variable temporaire pour échanger des valeurs dans le tableau.
// Utilisez 2 boucles for "imbriquées" (imbriquées signifie l'une dans l'autre).
// Ajoutez des commentaires et console.log le résultat pour chaque étape, cela vous aidera à comprendre.