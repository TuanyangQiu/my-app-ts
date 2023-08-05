import React, { useContext } from "react";
import Styles from './Robot.module.css';
import { appContext } from '../index'


interface RobotProps {
    id: number,
    name: string,
    email: string
}


const Robot: React.FC<RobotProps> = ({ name, id, email }) => {
    const context = useContext(appContext);//useContext hooks
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
            <p>Author: {context.userName}</p>
        </div>

    );
};


export default Robot;