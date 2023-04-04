# exo-fil-rouge

# But de l'exercice 1 :

Afficher le state "hello" qui a comme valeur "coucou" depuis le component5

Pour faire cela, passez le state "hello" à travers les différents components et remplacez la valeur du console.log('test') par le state passé en props.


# aller plus loin
# exercice 2

Passez le setState "setHello" jusqu'au component5 et créer un button qui permet de modifier le nom au click la valeur de "hello".
Au click, si la valeur est "coucou" on doit pouvoir afficher "salut" et vice versa. 

Si vous avez du mal à réaliser la fonction permettant le changement de valeur j'ai mis une façon en ternaire plus bas dans ce fichier












































const handleclick = () => { leDernier === 'coucou' ? setHello('salut') : setHello('coucou') }