import React from "react";
import Styles from './Robot.module.css';
import { appContext } from '../index'


interface RobotProps {
    id: number,
    name: string,
    email: string
}


const Robot: React.FC<RobotProps> = ({ name, id, email }) => {
    return (

        //get data from context
        <appContext.Consumer>{(value) => {
            return <div className={Styles.cardContainer}>
                <img src={`https://robohash.org/${id}`} alt="robot" />
                <h2>{name}</h2>
                <p>{email}</p>
                <p>Author: {value.userName}</p>
            </div>

        }}</appContext.Consumer>

    );
};


export default Robot;