import "./styles/index.scss";
import { AreaCard } from "../molecules/Card";
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

function Index() {
useEffect(() => {


}, []);

const navigate = useNavigate();

const goToRoute = (route) => {
  navigate(route);
};
  return (
    <div>
      <h1>DUAM</h1>
        <p>Welcome to the home page!</p>
        <section className="AreasGrid">
        <AreaCard
            name="Matemáticas y ciencias naturales"
            image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
            description=" Las matem&aacute;ticas y las ciencias naturales son un equipo inseparable: un lenguaje universal para descifrar y un grupo de exploradores para descubrir los secretos del universo. ¡Juntas nos permiten armar el rompecabezas y entender la maravillosa complejidad del mundo que nos rodea!."
            link="/Matematicasyciencias"/>

        <AreaCard
            name="Ciencias sociales y humanidades"
            image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
            description="Las ciencias sociales y las humanidades son como un espejo que nos permite ver y comprender la historia, la cultura y la sociedad en la que vivimos. Nos ayudan a entender quiénes somos, de dónde venimos y hacia dónde vamos."
            link="/Matematicasyciencias"/>
        
        <AreaCard
            name="Artes y letras"
            image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
            description="Las artes y las letras son la forma en la que expresamos nuestra creatividad, emociones y pensamientos. Son una ventana al mundo y una puerta al corazón. ¡Nos permiten soñar, imaginar y crear un universo lleno de posibilidades infinitas!"
            link="https://www.pokemon.com/el/pokedex/squirtle"/>
        
        <AreaCard
            name="Educación física y deportes"
            image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
            description="La educación física y los deportes son una combinación perfecta para mantenernos activos, sanos y felices. Nos enseñan a trabajar en equipo, a superar desafíos y a disfrutar de la vida al máximo. ¡Juntos somos invencibles!"
            link="https://www.pokemon.com/el/pokedex/bulbasaur"/>
          
        <AreaCard
            name="Tecnología y programación"
            image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png"
            description="La tecnología y la programación son el futuro: nos permiten crear, innovar y transformar el mundo que nos rodea. Son una herramienta poderosa para resolver problemas, comunicarnos y colaborar en equipo. ¡Juntos podemos cambiar el mundo!"
            link="https://www.pokemon.com/el/pokedex/caterpie"/>

        <AreaCard
            name="Idiomas y comunicación"
            image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png"
            description="Los idiomas y la comunicación son la clave para conectarnos con el mundo: nos permiten expresarnos, entendernos y colaborar con personas de todas partes. Son una puerta abierta a nuevas culturas, ideas y oportunidades. ¡Juntos somos más fuertes!"
            link="https://www.pokemon.com/el/pokedex/pidgey"/>
                <AreaCard
            name="Educación física y deportes"
            image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
            description="La educación física y los deportes son una combinación perfecta para mantenernos activos, sanos y felices. Nos enseñan a trabajar en equipo, a superar desafíos y a disfrutar de la vida al máximo. ¡Juntos somos invencibles!"
            link="https://www.pokemon.com/el/pokedex/bulbasaur"/>
          
        <AreaCard
            name="Tecnología y programación"
            image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png"
            description="La tecnología y la programación son el futuro: nos permiten crear, innovar y transformar el mundo que nos rodea. Son una herramienta poderosa para resolver problemas, comunicarnos y colaborar en equipo. ¡Juntos podemos cambiar el mundo!"
            link="https://www.pokemon.com/el/pokedex/caterpie"/>

        <AreaCard
            name="Idiomas y comunicación"
            image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png"
            description="Los idiomas y la comunicación son la clave para conectarnos con el mundo: nos permiten expresarnos, entendernos y colaborar con personas de todas partes. Son una puerta abierta a nuevas culturas, ideas y oportunidades. ¡Juntos somos más fuertes!"
            link="https://www.pokemon.com/el/pokedex/pidgey"/>
        </section>

        <button onClick={goToRoute("/Matematicasyciencias")}></button>
    </div>
  );
}

export {Index};