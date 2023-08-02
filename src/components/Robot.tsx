import React from "react";
import Styles from './Robot.module.css';

interface RobotProps {
    id: number,
    name: string,
    email: string
}


const Robot: React.FC<RobotProps> = ({ name, id, email }) => {
    return (
        <div className={Styles.cardContainer}>
            <img src={`https://robohash.org/${id}`} alt="robot" />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    );
};


export default Robot;