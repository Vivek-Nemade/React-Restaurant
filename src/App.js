
import './App.css';
import Filters from './Compo/Filters';
import Navbar from './Compo/Navbar';
import Offers from './Compo/Offers';
// import Restaurant from './Compo/Restaurant';
import Restaurants from './Compo/Restaurants';

import userInfo from "./data/userInfo.json"
import offers from  "./data/offers.json"
import restaurants from "./data/restaurant.json"
import { useState } from 'react';



const filters ={
   1 :"Cost High to Lost",
   2 :"Cost Lost to High",
   3 :"Ratings",
   4 :"Card Only",
   5 :"Cash Only",
   6 :"Reset Filter"
}
function App() {
  const [filterby, setFilterby]= useState("")
  const [data, setData]=useState(restaurants);

  const updateFilter =(newfilter)=>{

    switch(newfilter){
      case "1": {
        setFilterby(1)
        console.log(1)
        data.sort((a, b)=> b.costForTwo - a.costForTwo);
        setData([...data])
        break;
      }
      case "2": {
        setFilterby(2)
        console.log(2)
        data.sort((a, b)=> a.costForTwo - b.costForTwo);
        setData([...data])
        break;
      }
      case "3": {
        setFilterby(3)
        console.log(3)
        data.sort((a, b)=> b.rating - a.rating);
        setData([...data])
        break;
      }
      case "4": {
        setFilterby(4)
        console.log(4)
        let cardData = data.filter(cardData=> cardData.card_payment===true)
        setData([...cardData])
        break;
      }
      case "5": {
        setFilterby(5)
        console.log(5)
        let cashData = data.filter(cashData=> cashData.cash_payment===true)
        setData([...cashData])
        break;
      }
      case "6": {
        setFilterby(6)
        console.log(6)
        setData(restaurants)
        break;
      }
      default:{
        setData(restaurants)
      break;
      }
    }
  };
  return (
    <div > 
      <Navbar {...userInfo.location}/>
      <Offers offers={offers}/>
      {/* <Filters/>
      <Restaurant restaurants={restaurants}/> */}
      <section className="near-you">
      <Filters filters={filters}  currentFilter={filterby} updateFilter={updateFilter}/>
      <Restaurants restaurants={data}/>
      </section>
    </div>
  );
}

export default App;
