'use client';
import ReactDOM from "react-dom";
import { WarrperModal, ModalView, ImgView, DetailView, TitleBanh, ContentBanh, MaBanh } from '@/components/StylesComponent'
import data from '@/pages/data/brodard.json'
import ImageLoad from "./ImageLoad";

const Modal = ({ onClose, children, id }) => {

    const handleCloseClick = (e) => {
        e.preventDefault();
        onClose();
    };

    const modalContent = (
        <WarrperModal>
            <ModalView >
                <ImgView>
                    <ImageLoad imgUrl={data.code[id - 1].image} />
                </ImgView>
                <DetailView>
                    <TitleBanh>{data.code[id - 1].name}</TitleBanh>
                    <ContentBanh>{data.code[id - 1].content}</ContentBanh>
                    <MaBanh>
                    {(data.code[id - 1].value).map((id, index) => {
                        return (
                            <span key={index}>{data.code[id].name}</span>
                        )
                    })}</MaBanh>
                    <p>{children}</p>
                </DetailView>
                <button onClick={handleCloseClick}>X</button>
            </ModalView>
        </WarrperModal>
    );

    return ReactDOM.createPortal(
        modalContent,
        document.getElementById("modal-root-protal")
    );
};

export default Modal