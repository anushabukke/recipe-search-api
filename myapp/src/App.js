import { useEffect,useState } from 'react';
import './App.css';
import Recipe from './Card' 
import Title from './title';
import Footer from './footer';
const App = () =>{
  const APP_ID = "fe00b73a";
  const APP_KEY = "de6acd179253ed591baa85bb9a79d66d	"

  const [recipes,setRecipes]=useState([]);
  const [search,setSearch]=useState("");
  const [query,setQuery] =useState("ramen");

  useEffect( () => {
    getRecipes();
    console.log('hi')
    // eslint-disable-next-line
  },[query])
  

  const getRecipes = async()=>{
    const res = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await res.json();
    setRecipes(data.hits)
  };
  
  const updateSearch =(e)=>{
     setSearch(e.target.value);
  };
  const getSearch =(e) =>{
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  //changing search button on mouse over and out
  const buttonOver = (e) => {
    e.target.innerHTML = "Go";
  }
  const buttonOut = (e) => {
    e.target.innerHTML = "Search";
  }
 
  return(
    <div className="App">
      <Title/>
      <form className="search-form" onSubmit={getSearch}>
        <input className="search-bar" placeholder="Enter your favourite dish here..." value={search} onChange={updateSearch} type="text" />
        <button 
           className="search-btn" 
           type="submit" 
           onMouseOver={buttonOver}
           onMouseOut={buttonOut}>
            Search
        </button>
      </form>
      <div className='note'>
          <em>*Note: The API only allows a maximum of 10 searches per minute</em></div>
      <div className="recipes">
      {
        recipes.map(recipe =>(
          <Recipe
          key ={recipe.recipe.label}
          title={recipe.recipe.label} 
          calories={recipe.recipe.calories} 
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
           />
        ))
      }
      </div>
      <Footer/>
    </div>
  );
}

export default App;
