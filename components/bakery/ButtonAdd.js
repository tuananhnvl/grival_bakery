'use client';
import React,{useState} from 'react'
import Modal from "@/components/Modal";
export default function ButtonAdd({ id }) {
    
    const [showModal, setShowModal] = useState(false);
    
    
    return (
        <>

        <div>
            <button onClick={() => setShowModal(true)}>Open Modal</button>
            {showModal &&
                <Modal onClose={() => setShowModal(false)} /* children={'test children on Modal Protal'} */ id={id}/>
            }
        </div>
            
        </>
    )
}