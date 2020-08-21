import React from "react";
import styles from './QtyDisplay.module.sass';


export default class QtyDisplay extends React.Component {
    constructor(props) {
        super(props);
    }

    onClickHandler = (modifier) => {
      const { amount, id } = this.props;
      const total = amount + modifier;

      if (total<=50 && total>0){
        this.props.updateProductAmount({
            id,
            amount: total
        })
      } else {
          alert('Range Error');
      }
    };
    render() {
        return(
            <div className={styles.quantityDisplayContainer}>
                <button type="button" className={styles.quantityButton} onClick={() => this.onClickHandler(-1)}>-</button>
                <input type="number" value={this.props.amount} className={styles.quantityDisplay} readOnly/>
                <button type="button" className={styles.quantityButton} onClick={() => this.onClickHandler(1)}>+</button>
            </div>
        )
    }

};
