import { useState, useEffect } from 'react'
import axios from "axios";

import { CardRecipe } from "./CardRecipe"


const apiKey:string = "78b7d44ea28e49d2a5c9e5be33d38a1d";
const baseUrl:string = `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=4`

interface PropsCard {
  recipes: [];
  title: string;
  image: string;
  servings: number,
  readyInMinutes: number;
}

export const Recipe = () => {
  

  const [get, setGet] = useState< PropsCard | null >(null);
  
  useEffect(() => {
    axios.get(baseUrl).then((response) => {
      setGet(response.data);
    });
  }, []);

  if (!get) return null;

  // console.log(get)

  return (
    <section className="recipes">
      <div className="container">
        <header className="recipes__header subtitle">
          <h2>Nuevas Recetas</h2>
        </header>
      </div>

      <div className="container">
        <div className="flex flex-wrap">
          {
            get.recipes.map((item:PropsCard, index:number) => (
              <CardRecipe
                key={index}
                {...item}
              />
            ))
          }
        </div>
      </div>
    </section>
  )
}

export {}