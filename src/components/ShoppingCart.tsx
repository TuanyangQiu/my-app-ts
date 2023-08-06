import React from 'react';
import Styles from './ShoppingCart.module.css';
import { FiShoppingCart } from 'react-icons/fi';
import { appContext, AppStateProvider } from '../AppState';

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
            <appContext.Consumer>
                {(value) => {
                    return <div className={Styles.cartContainer} >
                        <button className={Styles.button}
                            onClick={this.HandleClick} >

                            <FiShoppingCart />
                            <span>{value.ShoppingCart.items.length} items in Shopping Cart</span>
                        </button>

                        <div className={Styles.cartDropDown}
                            style={{ display: this.state.isOpen ? "block" : "none" }}   >
                            <ul>
                                {
                                    value.ShoppingCart.items.map(i =>
                                        <li>{i.name}</li>
                                    )
                                }
                            </ul>
                        </div>
                    </div>
                }}
            </appContext.Consumer>


        )

    }


}

export default ShoppingCart;
