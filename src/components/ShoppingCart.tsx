import React from 'react';
import Styles from './ShoppingCart.module.css';
import { FiShoppingCart } from 'react-icons/fi';
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

    HandleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        //console.log("e.target = ", e.target);
        //console.log("e.currentTarget = ", e.currentTarget);

        //just to verify the difference between 'target' and 'currentTarget'
        if ((e.target as HTMLElement).nodeName === "SPAN") {
            this.setState({ isOpen: !this.state.isOpen });
        }


    }

    render() {
        return (

            //every time click on the button, the isOpen state will change. 
            //the isOpen is used to decide whether show shopping cart list
            <div className={Styles.cartContainer} >
                <button className={Styles.button}
                    onClick={this.HandleClick} >

                    <FiShoppingCart />
                    <span>2 items in Shopping Cart</span>
                </button>

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
