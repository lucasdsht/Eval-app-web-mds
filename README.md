# Eval application web
## Questions de cours
1. Quel composant vu en cours permet la gestion des routes avec React ?
- le composant `<Route/>` de la librairie `react-router-dom`
2. Quel hook permet de récupérer un paramètre passé dans l’url ?
- le hook permettant de recuperer un parametre passe dans l'url est le hook `useParams` de la librairie `react-router-dom`
3. Qu’est-ce qu’un fragment ?
- Un fragment ou React.Fragment est une partie de code qui ne renvoie pas d'html c'est utile si on ne veut pas revoyer un composant en ayant une `<div>` encapsulee
4. Quel hook permet de déclencher une action à un moment précis du cycle de vie du composant ?
- Le hook `useEffect`
5. React manipule-t-il directement le DOM de l’application ? expliquez ?
- React utilise un DOM virtuel pour rendre l'interface utilisateur. Lorsque l'état d'un composant change, le DOM virtuel est d'abord mis à jour. Ensuite, React compare le DOM virtuel mis à jour avec une version pré-mise à jour du DOM virtuel. React met ensuite à jour le DOM réel avec les modifications apportées au DOM virtuel. Le DOM virtuel permet à React de mettre à jour le DOM réel de manière efficace, ce qui se traduit par de meilleures performances.
## Questions pratiques
1. Vous mettez en place un routeur sur votre projet react, écrivez la route qui permet de lancer le composant Post en lui transmettant le slug du post à afficher en paramètre
```js
    <Route path="/post/:id" element={<Post slug={postId}/>}/>
```
2. Vous utilisez useReducer dans votre projet. Dans le code JSX, quel code permet d’afficher un bouton qui, lorsque l’on clique dessus, lance l’action « SET_ITEM »
```js
    <button onClick={()=>dispatch({type: 'SET_ITEM'})}>Click me</button>
```
3. Votre composant nécessite un state isAdmin. Ecrivez la ligne qui permet de le créer et de lui affecter la valeur « false » par dafaut.
```js
    const [isAdmin, setIsAdmin] = useState(false)
```
4. En JSX, une div affiche le texte du state « message », elle possède du style inline déterminant sa couleur de police à rouge.
```js
    <div style={{display: "inline", color: "red"}}>{message}</div>
```
5. En JSX, créez un input qui est rattaché au state « ville » et qui stockera ce que saisit l’utilisateur dans le state
```js
    <input type="text" id='ville' value={ville} onChange={e => setVille(e.target.value)}/>
```
