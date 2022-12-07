import React,{useState,useEffect} from 'react';

import items from '../data'
import Cards from './Card';
import '../styles/main.css'
const Main = () => {

    const [cart, setCart] = useState([]);

    const handleClick = (item)=>{
        cart.push(item)
        // setCart([...cart,item])
        console.log(cart);
    }
    return (
           <section >
                {
                    items.map((item)=>(<Cards key={item.id} item= {item} handleClick = {handleClick}/>
                    ))
                }
            </section>
    );
}

export default Main;
