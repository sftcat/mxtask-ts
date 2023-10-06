// CartModal.js
import React, { FC } from "react";
import { Button, Modal } from "antd";
import Products from "../product/components/Products";

interface IProps{
    isVisible:boolean,
    onClose: () => void
}


const CartModal: FC<IProps> = ({ isVisible, onClose }) => {
    return (
        <Modal
            title="Корзина"
            open={isVisible}
            onOk={onClose}
            onCancel={onClose}
            className="flex items-center justify-center"
            footer={[
                <Button key="back" onClick={onClose} className="border-red-400 border-2 text-red-400 font-mono font-bold">
                    Закрыть
                </Button>
            ]}
            >
            <div>
                <Products />
            </div>
        </Modal>
    );
};

export default CartModal;


