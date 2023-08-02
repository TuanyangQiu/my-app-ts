import React from 'react';
import Styles from './ShoppingCart.module.css';

interface Props {


}

interface State {

    isOpen: boolean
}

class ShoppingCart extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {

            isOpen: false
        };
    }

    render() {
        return (
            
//every time click on the button, the isOpen state will change. 
//the isOpen is used to decide whether show shopping cart list
            <div className={Styles.cartContainer} >
                <button className={Styles.button}
                    onClick={() => {
                        this.setState({ isOpen: !this.state.isOpen });  }} >2 items in Shopping Cart</button>

                <div className={Styles.cartDropDown}
                    style={{ display: this.state.isOpen ? "block" : "none" }}   >
                    <ul>
                        <li>Robot 1</li>
                        <li>Robot 2</li>
                    </ul>
                </div>
            </div>
        )

    }


}

export default ShoppingCart;
