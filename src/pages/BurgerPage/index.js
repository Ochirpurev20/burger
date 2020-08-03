import React, { Component } from 'react';
import Burger from '../../components/Burger';
import BuildControls from '../../components/buildControls';
import Modal from '../../components/general/modal';
import OrderSummary from '../../components/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/general/spinner';


class BurgerBuilder extends Component {
    state = {
        confirmOrder: false,
        
    };
    showConfirmModal = () => {
        this.setState({ confirmOrder: true });
    };
    closeConfirmModal = () => {
        this.setState({ confirmOrder: false });
    };

    continueOrder = () => { this.props.history.push('/ship')};

    render() {
        // console.log("burgerpage s props: ", this.props);
        
        return (
            <div>
                <Modal
                    show={this.state.confirmOrder}
                    hide={this.closeConfirmModal}>
                    {this.state.loading ? (
                        <Spinner />
                    ) : (
                        <OrderSummary
                            onCancel={this.closeConfirmModal}
                            onContinue={this.continueOrder}                            
                        />
                    )}
                </Modal>

                <Burger  />
                <BuildControls
                    showConfirmModal={this.showConfirmModal}  
                    ortsNemeh={this.props.ortsNem}
                    ortsHasah={this.props.ortsHas}
                />
            </div>
        );
    }
}

export default BurgerBuilder;
