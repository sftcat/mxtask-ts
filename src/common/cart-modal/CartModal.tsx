// CartModal.js
import React from "react";
import { Button, Modal } from "antd";
import Products from "../product/Products";

const CartModal = ({ isVisible, onClose }) => {
    return (
        <Modal
            title="Корзина"
            open={isVisible}
            onOk={onClose}
            onCancel={onClose}
            className="flex items-center justify-center"
            footer={[
                <Button key="back" onClick={onClose}>
                    Закрыть
                </Button>
            ]}
            >
            <Products />
        </Modal>
    );
};

export default CartModal;
