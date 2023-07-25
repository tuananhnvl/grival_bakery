'use client';
import React,{Children, useState} from 'react'
import Modal from "@/components/Modal";
import ModalCheckOut from "@/components/ModalCheckOut";
export default function ButtonMore({ id,children }) {
    console.log(id)
    const [showModal, setShowModal] = useState(false);
    if(id == 'checkout') {
        return (
            <>
                <button onClick={() => setShowModal(true)}>{children}</button>
                {showModal &&
                    <ModalCheckOut onClose={() => setShowModal(false)} /* children={'test children on Modal Protal'} */ id={id}/>
                }
            </>
        )
    }else{
        return (
            <>
                <button onClick={() => setShowModal(true)}>{children}</button>
                {showModal &&
                    <Modal onClose={() => setShowModal(false)} /* children={'test children on Modal Protal'} */ id={id}/>
                }
            </>
        )
    }
    
}