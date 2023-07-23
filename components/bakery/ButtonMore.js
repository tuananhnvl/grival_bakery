'use client';
import React,{useState} from 'react'
import Modal from "@/components/Modal";
export default function ButtonMore({ id }) {
    console.log(id)
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <button onClick={() => setShowModal(true)}>Xem chi tiết</button>
            {showModal &&
                <Modal onClose={() => setShowModal(false)} /* children={'test children on Modal Protal'} */ id={id}/>
            }
        </>
    )
}