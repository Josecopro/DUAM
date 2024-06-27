import "./styles/index.scss";

import { AreaCard } from "../molecules/Card";

function Index() {

  return (
    <div>
      <h1>DUAM</h1>
        <p>Welcome to the home page!</p>
        <section className="AreasGrid">
        <AreaCard
            name="Matem&aacute;ticas y ciencias naturales"
            image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
            description="Explora la belleza de los patrones, descubre las leyes que rigen el cosmos y entiende la danza de la vida."
            link="/Matematicasyciencias"/>

        <AreaCard
            name="Ciencias de la educaci&oacute;n"
            image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
            description="Comprende los procesos del aprendizaje, guía a las mentes jóvenes y transforma vidas."
            link="/Matematicasyciencias"/>
        
        <AreaCard
            name="Ingenier&iacute;a, arquitectura y urbanismo"
            image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
            description="Diseña soluciones innovadoras, construye infraestructuras resilientes y modela espacios urbanos prósperos."
            link="https://www.pokemon.com/el/pokedex/squirtle"/>
        
        <AreaCard
            name="Econom&iacute;a, administraci&oacute;n, contadur&iacute;a"
            image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
            description="Comprende las fuerzas económicas que impulsan el mercado, gestiona recursos de manera eficiente y toma decisiones estratégicas."
            link="https://www.pokemon.com/el/pokedex/bulbasaur"/>
          
        <AreaCard
            name="Ciencias sociales y humanas"
            image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png"
            description="Explora las complejidades de la sociedad, desvela los misterios de la mente y descubre la riqueza de las culturas."
            link="https://www.pokemon.com/el/pokedex/caterpie"/>

        <AreaCard
            name="Bellas artes"
            image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png"
            description="Despierta tu creatividad, explora tu sensibilidad y plasma tu visión única del mundo."
            link="https://www.pokemon.com/el/pokedex/pidgey"/>
        <AreaCard
            name="Agronom&iacute;a veterinaria y afines"
            image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png"
            description="Para la sociedad es esencial nutrir y proteger la vida en la Tierra."
            link="https://www.pokemon.com/el/pokedex/caterpie"/>

        <AreaCard
            name="Ciencias de la salud"
            image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png"
            description="Si te apasiona cuidar a los demás y contribuir al bienestar de la humanidad, las ciencias de la salud te ofrecen una carrera desafiante y gratificante."
            link="https://www.pokemon.com/el/pokedex/pidgey"/>
        </section>

    </div>
  );
}

export {Index};