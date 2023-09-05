// React – c'est l'API qui permettra de gérer les composants.
// Cette ligne importe la bibliothèque React, qui est utilisée pour créer et gérer des composants dans une application web construite avec React.
// Inutile depuis la dernière version de React.
import React from 'react';

import './main.css';

// React DOM – c’est l'API qui est responsable de générer les composants dans le DOM.
// Cette ligne importe la partie de la bibliothèque React appelée ReactDOM, qui est responsable de la manipulation du DOM (Document Object Model) pour afficher les composants React dans une application web.
import ReactDOM from 'react-dom/client';

// Cette ligne récupère l'élément HTML avec l'ID "root". Cet élément est l'endroit où le composant React sera affiché dans le DOM de la page web. Le contenu du composant sera inséré à l'intérieur de cet élément.
const rootElement = document.getElementById('root');

// Ici, une racine React est créée en utilisant la méthode createRoot. Une racine React est nécessaire pour les nouvelles versions de React (depuis la version 18) et elle remplace l'utilisation précédente de ReactDOM.render.
const root = ReactDOM.createRoot(rootElement);

// Cette ligne effectue le rendu du composant dans la racine React créée précédemment. Le composant est ici défini en utilisant du JSX (JavaScript XML), une extension de syntaxe qui permet d'écrire des éléments React de manière similaire à du HTML. Dans ce cas, le composant est simplement un élément <h1> contenant le texte "C'est du jsx".

function Profil() {
  return (
    <main className="maRace">
      <h1>Hedy Lamarr's TODOS</h1>
      <img src="https://i.imgur.com/yXOvdOSs.jpg" className="avatar" />
      <ul>
        <li>Invent new traffic</li>
        <li>Rehearse a movie</li>
        <li>Improve the spectrum</li>
      </ul>
    </main>
  );
}

function Panier() {
  const title = 'Panier';
  const montres = 985;
  const habits = 1568;
  const chaussures = 150;

  return (
    <div>
      <h1>{title.toUpperCase()}</h1>
      <ul>
        <li>Montres : {montres}€</li>
        <li>Habits : {habits}€</li>
        <li>Chaussures : {chaussures}€</li>
      </ul>
      <div>Total : {montres + habits + chaussures}€</div>
    </div>
  );
}

function User({name, avatar, age}){
  return(
    <section>
      <p>Hi, my name is {name}</p>
      <img src={avatar} alt={name} />
      <p>Age : {age}</p>
    </section>
  )
}

function App(){
  return(
    <>
      <User name="Bob" age="15" />
    </>
  )
}

root.render(
  <>
    <App />
  </>
);
