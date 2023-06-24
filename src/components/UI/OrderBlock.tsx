import React from 'react'
import {Link} from "react-router-dom";

const OrderBlock = () => {
    return (
        // <Link to={`/order_detail${UUID}`}>
            <section className={"order_block"}>
                <p className={"order_block_head_text"}>Убрать комнату</p>
                <p className={"order_block_description_text"}>Уборка помещения 16 кв метров</p>
                <p className={"order_block_description_price"}>15000₸</p>
            </section>
        //</Link>
    )
}

export default OrderBlock
