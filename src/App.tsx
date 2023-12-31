import React, { useState, useEffect } from 'react';
//import logo from './logo.svg';
import logo from './assets/images/logo.svg';
//import './App.css';
import robots from './mockdata/robots.json';
import Robot from './components/Robot';
import styles from './App.module.css';
import ShoppingCart from './components/ShoppingCart';
import RobotDiscount from './components/RobotDiscount';

interface Props { }

interface State {

  robotGallery: any

}

const App: React.FC = (props) => {

  const [count, setCount] = useState<number>(0);
  const [robotGallery, setRobotGallery] = useState<any>([]);
  const [error, setError] = useState<string>();

  useEffect(() => {
    document.title = `click counts is ${count}`;
  }, [count]);//[count] means only listen to the 'count' change

  useEffect(() => {

    setError("");
    //cannot use async and await directly in useEffect, 
    //but we can capsulate the async process as a function, then call this function.


    //Asynchronize request
    const fetchData = async function () {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const jsonData = await response.json();
        setRobotGallery(jsonData);
      } catch (e) {
        if (e instanceof Error)
          setError(e.message);
      }
    }
    fetchData();

    //Synchronized request
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then(response => response.json())
    //   .then(data => setRobotGallery(data));
  }, []);
  //empty array [] equals to componentDidAmount
  //but if array is not given, the result equals to componentDidUpate, sometimes it will cause dead loop

  return (
    <div className={styles.app}>
      <div className={styles.appHeader}>
        <img src={logo} alt="logo" className={styles.appLogo} />
        <h1>罗伯特机器人炫酷吊炸天online购物平台的名字一定要很长</h1>
      </div>

      <button onClick={() => { setCount(count + 1) }}>Click to count</button>

      <span>Count = {count}</span>
      <ShoppingCart />
      {
        (error !== "") ? (<div>something wrong happened: {error}</div>) :
          (<div className={styles.robotList}>
            {
              robotGallery.map((r, index) =>
                (index % 2 === 0) ?
                  (<Robot id={r.id} name={r.name} email={r.email} />) :
                  (<RobotDiscount id={r.id} name={r.name} email={r.email} />)

              )
            }
          </div>)
      }
    </div>
  );


}

export default App;
