# Vérification de cohérence des 28 activités

Chaque activité a été relue en comparant son titre, son objectif, les explications, les cellules exécutables et le résultat demandé. Les exemples existants sont conservés ; les cellules ajoutées pour démontrer une notion ou observer un résultat sont identifiées.

## 1. Exécuter un notebook dans l’ordre

Explications et consigne reliées aux cellules existantes.

Manipulation : Exécutez les cellules 1 puis 2. Remplacez ensuite a=3 par a=5 sans exécuter la cellule 1, puis réexécutez la cellule 2. Enfin, exécutez les cellules 1 puis 2.

Résultat : Le résultat reste 6 tant que la nouvelle affectation n’a pas été exécutée. Il devient ensuite 10. Un redémarrage efface les variables : réexécutez les cellules dans l’ordre.

## 2. Python comme calculatrice

Explications et consigne reliées aux cellules existantes.

Manipulation : Exécutez les trois cellules, puis comparez 9*2 et 9**2.

Résultat : Les résultats sont respectivement 11, 18 et 81.

## 3. Les types de données

Explications et consigne reliées aux cellules existantes.

Manipulation : Exécutez les quatre cellules. Remplacez ensuite type(2) par type("2").

Résultat : Sans guillemets, 2 est un entier ; avec guillemets, "2" est une chaîne de caractères.

## 4. Print, commentaires et variables

Explications et consigne reliées aux cellules existantes.

Manipulation : Exécutez les deux exemples. Doublez ensuite l dans le calcul du photon et réexécutez la cellule.

Résultat : Le message s’affiche avec print. Lorsque la longueur d’onde double, l’énergie est divisée par deux.

## 5. Diagnostiquer et corriger un NameError

Remplacement de l’exemple sans erreur par un vrai diagnostic ; titre limité à NameError.

Manipulation : Exécutez la cellule 1, puis la cellule 2. Comparez le nom affiché dans l’erreur avec celui défini dans la cellule 1 et corrigez-le.

Résultat : La seconde cellule produit d’abord un NameError pour Concentration. Après remplacement par concentration, elle affiche 0.02.

## 6. Les listes

Explications et consigne reliées aux cellules existantes.

Manipulation : Exécutez les cellules dans l’ordre. Repérez les éléments retenus par L1[2::3], puis observez L2 et le résultat de L1+L2.

Résultat : La tranche L1[2::3] donne ["bleu", "rouge"]. Dans L2, 2-5 est un calcul et vaut −3 : L2 contient donc [3, −3].

## 7. Modifier une liste

Explications et consigne reliées aux cellules existantes.

Manipulation : Comparez les listes affichées avant et après chaque opération. Dans la dernière cellule, expliquez pourquoi pop(1) supprime 2.5.

Résultat : L’indice 1 désigne le deuxième élément. Après la suppression de "rouge", la liste vaut [3, 2.5, "bleu"].

## 8. Tuples et dictionnaires

Explications et consigne reliées aux cellules existantes.

Manipulation : Exécutez les cellules dans l’ordre, puis ajoutez dans une cellule d’essai print(dict1["O"]).

Résultat : La recherche par la clé "O" affiche 15.999 ; il n’est pas nécessaire de connaître sa position dans le dictionnaire.

## 9. Définir et utiliser une fonction

Explications et consigne reliées aux cellules existantes.

Manipulation : Exécutez les exemples puis appelez volume_molaire(293.15,2e5) dans une nouvelle cellule. Comparez avec la pression 1e5 Pa à la même température.

Résultat : La fonction reçoit de nouvelles valeurs sans être réécrite. À température constante, doubler la pression divise le volume molaire par deux.

## 10. Les conditions

Ajout de tests des trois cas, au lieu d’un seul cas positif.

Manipulation : Exécutez la définition, puis les trois appels complémentaires. Associez chaque résultat à la branche if, elif ou else.

Résultat : Les appels donnent deux racines (2 et 1), une racine double (1), puis l’absence de solution réelle.

## 11. Les boucles

Explications et consigne reliées aux cellules existantes.

Manipulation : Prévoyez les valeurs affichées dans chaque cellule. Expliquez pourquoi la boucle while affiche 18 alors que sa condition est a&lt;=8.

Résultat : for affiche 0, 2, 4, 6 et 8. while entre dans son second passage avec a=6, puis calcule et affiche 18 avant le prochain test.

## 12. Les modules

Explications et consigne reliées aux cellules existantes.

Manipulation : Comparez la façon d’appeler le logarithme dans les deux cellules, puis remplacez 0.1 par 100.

Résultat : Les deux exemples calculent le logarithme décimal : −1 pour 0.1 et 2 pour 100.

## 13. Créer des tableaux NumPy

Ajout du linspace annoncé dans les explications mais absent des cellules.

Manipulation : Exécutez les quatre cellules et comparez leurs tableaux. Remplacez ensuite le dernier argument de linspace par 6.

Résultat : Les exemples initiaux produisent les valeurs 0, 10, 20, 30 et 40. Avec six points entre 0 et 40, le pas devient 8.

## 14. Extremums et réarrangement

Explications et consigne reliées aux cellules existantes.

Manipulation : Distinguez les valeurs et les indices affichés dans la première cellule. Dans la seconde, comparez reshape(3,2) à reshape(2,3).

Résultat : Le minimum et le maximum sont 0 et 40, aux indices 0 et 4. Les deux formes du second tableau contiennent les mêmes six valeurs.

## 15. Calculer une dérivée numérique

Explications et consigne reliées aux cellules existantes.

Manipulation : Exécutez le tracé, puis remplacez les 100 points par 10 et comparez les extrémités des courbes.

Résultat : Les courbes sont proches. Une grille plus grossière rend les écarts aux extrémités plus visibles.

## 16. Les nombres aléatoires

Explications et consigne reliées aux cellules existantes.

Manipulation : Réexécutez les cellules. Dans la deuxième, diminuez N de 1000 à 10 et observez la variabilité de m et s entre les exécutions.

Résultat : Les entiers changent tout en restant dans l’intervalle prévu. Avec un petit échantillon, moyenne et écart-type fluctuent davantage autour des paramètres choisis.

## 17. Tracer une courbe

Explications et consigne reliées aux cellules existantes.

Manipulation : Exécutez le code, puis limitez la borne supérieure du tableau x à 10 et réexécutez.

Résultat : Le même calcul est représenté sur un domaine plus court. La fonction reste inchangée.

## 18. Les couleurs Matplotlib

Ajout d’un code de tracé à l’activité jusque-là limitée au nuancier.

Manipulation : Remplacez darkorange par navy, puis par seagreen. Réexécutez la cellule après chaque modification.

Résultat : Seule la couleur change ; les valeurs calculées et les axes restent les mêmes.

## 19. Tracer un histogramme

Explications et consigne reliées aux cellules existantes.

Manipulation : Comparez le graphique avec bins=100, puis bins=20, en conservant range=(0,20).

Résultat : Avec moins de classes, les barres sont plus larges et regroupent davantage d’observations.

## 20. Tracer un camembert

Explications et consigne reliées aux cellules existantes.

Manipulation : Exécutez le graphique puis changez uniquement la première couleur. Identifiez le secteur correspondant.

Résultat : La première position correspond au diazote N₂, qui représente environ 78 % du mélange.

## 21. Régression polynomiale

Explications et consigne reliées aux cellules existantes.

Manipulation : Comparez les coefficients affichés aux coefficients utilisés pour construire y. Vérifiez la superposition des points et de la courbe.

Résultat : Les coefficients sont proches de 1, −3.2 et 1.8 ; l’ajustement retrouve la relation utilisée pour générer les données.

## 22. Régression linéaire

Explications et consigne reliées aux cellules existantes.

Manipulation : Exécutez le code puis affichez regression.rvalue**2 dans une nouvelle cellule. Comparez pente et ordonnée à l’origine à la définition de y.

Résultat : La pente vaut 4, l’ordonnée à l’origine 2 et R² vaut 1 pour ces données parfaitement alignées.

## 23. Les tableaux Pandas

Explications et consigne reliées aux cellules existantes.

Manipulation : Comparez les affichages array et dataframe. Dans une nouvelle cellule, affichez dataframe["c2"].

Résultat : La colonne c2 contient 5, 20 et 35, avec les étiquettes de ligne l1, l2 et l3.

## 24. Lire un CSV et sélectionner ses données

Explications et consigne reliées aux cellules existantes.

Manipulation : Exécutez les deux cellules dans l’ordre. Remplacez ensuite le seuil 22 par 23 dans le filtre.

Résultat : Le filtre initial conserve les mesures à 10 s et 20 s. Avec le seuil 23, seule la mesure à 20 s subsiste.

## 25. Ouverture de fichier (NumPy)

Ajout d’un affichage pour rendre l’importation observable.

Manipulation : Exécutez les cellules dans l’ordre. Comparez les trois premières lignes de B avec les premiers éléments de X, Y1 et Y2.

Résultat : B contient 100 lignes et 3 colonnes ; X, Y1 et Y2 correspondent respectivement à x, sin(x) et cos(x).

## 26. Sauvegarde de fichier (NumPy)

Ajout d’une vérification du fichier et clarification de son emplacement dans Basthon.

Manipulation : Exécutez les trois cellules. Identifiez la ligne d’en-tête et les trois colonnes numériques.

Résultat : La première ligne est # x sin cos. Les lignes suivantes contiennent les valeurs numériques écrites par savetxt.

## 27. Loi normale et dispersion des mesures

Ajout de la simulation et du graphique annoncés ; titre rendu précis.

Manipulation : Exécutez la cellule puis remplacez N=10000 par N=100. Comparez s et u_m.

Résultat : La dispersion reste proche de 0.5 ; l’incertitude de la moyenne augmente quand le nombre de mesures diminue. La proportion dans μ±σ fluctue autour de 0.68.

## 28. Suppression de colonnes (Pandas)

Ajout d’une observation après chaque suppression ; séparation claire des quatre essais.

Manipulation : Pour chacun des quatre essais, exécutez la préparation, la suppression et l’observation. Comparez une sélection par nom et une sélection par position.

Résultat : Les noms spécifiés disparaissent du tableau. Les positions 0, 2 et 5 correspondent aux première, troisième et sixième colonnes du tableau initial.

## Vérification d’exécution

69 cellules exécutées localement. Une seule erreur attendue : le NameError volontaire de l’activité de diagnostic. Sa correction a été vérifiée. Contrôles complémentaires des résultats des tranches, des trois branches de deg2, des régressions, du tableau relu et des colonnes supprimées. La syntaxe JavaScript est valide. Aucun test en navigateur réalisé dans cette session.
