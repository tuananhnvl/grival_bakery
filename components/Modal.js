'use client';
import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "@/components/CartContext";
import ReactDOM from "react-dom";
import { WarrperModel } from '@/components/StylesComponent'
import data from '@/pages/data/brodard.json'

const Modal = ({ onClose, children, id }) => {

    const { addProduct, cartProducts } = useContext(CartContext);
    console.log('Modal re-render', cartProducts)
    const [counter, setCounter] = useState(0)

    const handleClickAdd = () => {
        // Counter state is incremented
        setCounter(counter + 1)
    }

    // Function is called everytime decrement button is clicked
    const handleClickRemove = () => {
        // Counter state is decremented
        setCounter(counter - 1)
    }

    const handleCloseClick = (e) => {
        e.preventDefault();
        onClose();
    };

    const addToCart = (e) => {
        addProduct(id, counter)
        handleCloseClick(e)
    };
    const modalContent = (
        <WarrperModel>
            <button onClick={handleCloseClick}>X</button>
            <p>SẢN PHẨM SỐ :{id}</p>
            <p>{children}</p>
            <p>DANH SÁCH SẢN PHẨM TRONG GIỎ: {JSON.stringify(cartProducts)}</p>

            <p>Hiện có trong giỏ hàng:
                {cartProducts.reduce((count, current) => { if (current === id) { return count + 1; } return count; }, 0)}
            </p>
            <p>Detail : {JSON.stringify(data.code[id - 1])}</p>
            <div>
                <button onClick={handleClickRemove}>Decre -</button>
                {counter}
                <button onClick={handleClickAdd}>Incre +</button>
            </div>

            <button onClick={(e) => addToCart(e)}>Thêm vào giỏ hàng</button>
        </WarrperModel>
    );

    return ReactDOM.createPortal(
        modalContent,
        document.getElementById("modal-root-protal")
    );
};

export default Modal