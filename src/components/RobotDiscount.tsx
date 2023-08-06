import React, { useContext } from "react";
import Styles from './Robot.module.css';
import { appContext, appSetStateContext } from '../AppState'
import { withAddToCart } from "./AddToCart";


interface RobotProps {
    id: number,
    name: string,
    email: string,
    addToCart: (id, name) => void;
}


const RobotDiscount: React.FC<RobotProps> = ({ name, id, email, addToCart }) => {
    const value = useContext(appContext);//useContext hooks

    return (

        //1: get data from context through context consumer
        // <appContext.Consumer>{(value) => {
        //     return <div className={Styles.cardContainer}>
        //         <img src={`https://robohash.org/${id}`} alt="robot" />
        //         <h2>{name}</h2>
        //         <p>{email}</p>
        //         <p>Author: {value.userName}</p>
        //     </div>
        // }}</appContext.Consumer>

        //2: get data from context through useContext hooks, which is easier
        <div className={Styles.cardContainer}>
            <img src={`https://robohash.org/${id}`} alt="robot" />
            <p>Special Offer</p>
            <h2>{name}</h2>
            <p>{email}</p>
            <p>Designer: {value.userName}</p>
            <button onClick={() => addToCart(id, name)}>Add to Cart</button>
        </div>

    );
};


export default withAddToCart(RobotDiscount);