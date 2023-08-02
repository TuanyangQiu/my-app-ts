import React from 'react';
//import logo from './logo.svg';
import logo from './assets/images/logo.svg';
//import './App.css';
import robots from './mockdata/robots.json';
import Robot from './components/Robot';
import styles from './App.module.css';
import ShoppingCart from './components/ShoppingCart';


interface Props { }

interface State {

  robotGallery: any

}

class App extends React.Component<Props, State> {

  constructor(props: Props) {

    super(props);

    this.state = {
      robotGallery: []
    };
  }


  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => this.setState({ robotGallery: data }));
  }

  render() {
    return (
      <div className={styles.app}>
        <div className={styles.appHeader}>
          <img src={logo} alt="logo" className={styles.appLogo} />
          <h1>罗伯特机器人炫酷吊炸天online购物平台的名字一定要很长</h1>
        </div>

        <ShoppingCart />
        <div className={styles.robotList}>
          {
            this.state.robotGallery.map(r => (<Robot id={r.id} name={r.name} email={r.email} />))
          }
        </div>
      </div>
    );
  };

}

export default App;
