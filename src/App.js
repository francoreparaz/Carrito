
import React, { useEffect, useState } from "react";
import Cart from "./Cart";
import "./App.css";

export const App = () => {  
  
  const productos = [
    {
      id: 0,
      name: "zanahoria",
      cantidad:0,
      precio:15
    },
    {
      id: 1,
      name: "papa",
      cantidad:0,
      precio:25
    },
    {
      id: 2,
      name: "tomate",
      cantidad:0,
      precio:30,
    },
    {
      id: 3,
      name: "cebolla",
      cantidad:0,
      precio:10
    },
  ];
  

  const [prod,setProd]=useState(productos)
  console.log("prodsss",prod)
  const counter=(id)=>{
   if(productos){
    let filter= prod.filter(producto=>producto.id===id)
     filter[0].cantidad++
     console.log(filter,"filter")
     setProd([...prod,filter])
    console.log("prod",prod)
     return
    }
    alert("no product")
  }

  const borrar=(id)=>{
    if(productos){
      let filter= prod.filter(producto=>producto.id===id)
      if(filter[0].cantidad === 0){
      return
      }else{
        filter[0].cantidad--
      }
       console.log(filter,"filter")
       setProd([...prod,filter])
      console.log("prod",prod)
       return
      }
      alert("no product")
    }
  
                                                      
  return <div className="App">
  
    <Cart prod={prod}/>
    <div className="box">
    <ul>
      {
        productos.map(producto=>
          <div>
          <div className="lista">
          
            <p className="name"><strong>{producto.name} ${producto.precio}</strong></p>
          
          </div>
          <div>
            
            <div className="buttons">
          <button className="buton" onClick={()=>counter(producto.id)}>INCREMENTAR</button> 
          <button className="buton2" onClick={()=>borrar(producto.id)} >BORRAR</button>
            </div>
          </div>
          </div>
          )
      }
    </ul>
          <ul className="cant">
            {prod.map(x=><p className="cantNum">{x.cantidad}</p>)}
            </ul>
            
    <div className="subtotal">
     
            <p>{prod.map(x=>
            
              <p className="num">${Number?x.precio*x.cantidad:0}</p>)
              }</p>

            </div>
    </div>
      
  
  </div>;
};

export default App;