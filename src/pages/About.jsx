import React from 'react';
import Banner from '../components/Banner';
import banner from '../assets/banner2.png'
import Collapse from '../components/Collapse';


let infos = [
  { adjectif: "Fiabilité", description: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes." },
  { adjectif: "Respect", description: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." },
  { adjectif: "Service", description: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." },
  { adjectif: "Sécurité", description: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." }
];


const About = () => {
  return (
    <div>
      <Banner src={banner} />      
      {infos.map((item)=>{
        return (
          <Collapse key={item.adjectif} title={item.adjectif} content={item.description} />
        )
      })}
    </div>
  );
};

export default About;