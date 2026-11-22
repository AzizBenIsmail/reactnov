import "./App.css";
import Menu from "./composant/Menu";
import { useState } from "react";
function App() {
  //logic => js

  //constante
  //const name = "Maryem";
  //const age = 25;
  const [name, setName] = useState("");
  const [age, setAge] = useState(25);
  const isMarried = false;
  const nom = <h1>Aziz</h1>;

  //object
  const etudiant = {
    nom: " Mohamed Aziz",
    prenom: "Ben Ismail",
    age: 24,
  };

  //function
  function sayHello() {
    return "Hello";
  }

  function getObject(obj) {
    return (
      <div>
        <h1>{obj.nom}</h1>
        <h2>{obj.prenom}</h2>
        <h3>{obj.age}</h3>
      </div>
    );
  }

  //liste object
  const etudiants = [
    { nom: "Mohamed Aziz", prenom: "Ben Ismail", age: 24 },
    { nom: "Maryem", prenom: "Ben Ismail", age: 25 },
    { nom: "Ahmed", prenom: "Ben Ismail", age: 26 },
  ];

  return (
    <div className="App">
      <header className="App-header">
        {name} <br />
        {age} <br />
        <input onChange={(e) => setName(e.target.value)} />
        <input onChange={(e) => setAge(e.target.value)} />
        {isMarried ? "Married" : "Single"} <br />
        {nom} <br />
        {/* {etudiant.nom} <br />
        {etudiant.prenom} <br />
        {etudiant.age} <br /> */}
        {sayHello()} <br />
        {getObject(etudiant)} <br />
        <caption>Liste des etudiants</caption>
        <table border="1">
          <tr>
            <th>Nom</th>
            <th>Prenom</th>
            <th>Age</th>
          </tr>
          {etudiants.map((etudiant, index) => (
            <tr key={index}>
              <td>{etudiant.nom}</td>
              <td>{etudiant.prenom}</td>
              <td>{etudiant.age}</td>
            </tr>
          ))}
        </table>
          Composant Menu
        <Menu menu1="Pizza" menu2="Burger" menu3="Salade" />
        <Menu menu1="baquette" menu2="Pain" menu3="Fromage" />

      </header>
    </div>
  );
}

export default App;
