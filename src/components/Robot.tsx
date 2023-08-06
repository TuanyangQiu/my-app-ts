import React, { useContext } from "react";
import Styles from './Robot.module.css';
import { appContext, appSetStateContext } from '../AppState'


interface RobotProps {
    id: number,
    name: string,
    email: string
}


const Robot: React.FC<RobotProps> = ({ name, id, email }) => {
    const value = useContext(appContext);//useContext hooks
    const setState = useContext(appSetStateContext);
    const addToCart = () => {
        if (setState) {
            setState(state => {
                return {
                    ...state,
                   // userName:"fdds",
                    ShoppingCart: { items: [...state.ShoppingCart.items, { id, name }] }
                }
            })
        }

    }
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
            <h2>{name}</h2>
            <p>{email}</p>
            <p>Designer: {value.userName}</p>
            <button onClick={addToCart}>Add to Cart</button>
        </div>

    );
};


export default Robot;