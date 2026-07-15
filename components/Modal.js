'use client';
import ReactDOM from "react-dom";
import { useContext, useEffect } from "react";
import { WarrperModal, ModalView, ImgView, DetailView, TitleBanh, ContentBanh, MaBanh, RowMaBanh } from '@/components/StylesComponent'
import data from '@/pages/data/brodard.json'
import ImageLoad from "./ImageLoad";
import { LenisContext } from "./LenisProvider";

const Modal = ({ onClose, children, id }) => {
    const lenis = useContext(LenisContext);

    useEffect(() => {
        // Disable body scroll
        document.body.style.overflow = 'hidden';
        
        // Pause Lenis smooth scrolling if active
        if (lenis && typeof lenis.stop === 'function') {
            lenis.stop();
        }

        return () => {
            // Restore body scroll
            document.body.style.overflow = 'unset';
            
            // Resume Lenis smooth scrolling
            if (lenis && typeof lenis.start === 'function') {
                lenis.start();
            }
        };
    }, [lenis]);
 
    const handleCloseClick = (e) => {
        e.preventDefault();
        onClose();
    };

    const renderItemDetail = (iddetail, index) => {
        if (typeof iddetail !== 'string' || !iddetail.includes('_')) {
            // Check if it's numeric/idb, search in single cakes
            const numId = parseInt(iddetail, 10);
            if (!isNaN(numId)) {
                // Find matching cake by idb in any category
                for (const singleType of data.single) {
                    const typeKey = Object.keys(singleType)[0];
                    const typeData = singleType[typeKey];
                    const item = typeData.value.find(i => i.idb === numId);
                    if (item) {
                        // Fallback to 250g or any available weight
                        const weightKey = item["250"] ? "250" : (item["200"] ? "200" : "150");
                        return (
                            <RowMaBanh key={index}>
                                <span>{item[weightKey][1]}</span>
                                <span>{item.name}</span>
                            </RowMaBanh>
                        );
                    }
                }
            }
            return (
                <RowMaBanh key={index}>
                    <span></span>
                    <span>{String(iddetail)}</span>
                </RowMaBanh>
            );
        }

        try {
            const [pr1, pr2, pr3, pr4] = iddetail.split('_');
            const found = data[pr1].find(obj => obj.hasOwnProperty(pr2));
            const item = found[pr2].value.find(i => i.idb == pr3);
            return (
                <RowMaBanh key={index}>
                    <span>{item[pr4][1]}</span>
                    <span>{item.name}</span>
                </RowMaBanh>
            );
        } catch (e) {
            return (
                <RowMaBanh key={index}>
                    <span></span>
                    <span>{String(iddetail)}</span>
                </RowMaBanh>
            );
        }
    };

    let modalContent = null;
    const currentCodeItem = data.code[id - 1];

    if (!currentCodeItem) return null;

    const imageUrl = currentCodeItem.image ? currentCodeItem.image.replace(/^\.\//, '/') : '';

    if (currentCodeItem.type === 'dongday') {
        modalContent = (
            <WarrperModal onClick={onClose}>
                <ModalView onClick={(e) => e.stopPropagation()} data-lenis-prevent>
                    <ImgView>
                        <ImageLoad imgUrl={imageUrl} />
                    </ImgView>
                    <DetailView data-lenis-prevent>
                        <TitleBanh>{currentCodeItem.name}</TitleBanh>
                        <ContentBanh>{currentCodeItem.content}</ContentBanh>
                        <MaBanh>
                            {(currentCodeItem.value || []).map((iddetail, index) => renderItemDetail(iddetail, index))}
                        </MaBanh>
                        <MaBanh>
                            {(currentCodeItem.bonus || []).map((bonuss, index) => {
                                return (
                                    <RowMaBanh key={index}>
                                        <span>+</span>
                                        <span>{bonuss}</span>
                                    </RowMaBanh>
                                );
                            })}
                        </MaBanh>
                    </DetailView>
                    <button onClick={handleCloseClick}>X</button>
                </ModalView>
            </WarrperModal>
        );
    } else {
        modalContent = (
            <WarrperModal onClick={onClose}>
                <ModalView onClick={(e) => e.stopPropagation()} data-lenis-prevent>
                    <ImgView>
                        <ImageLoad imgUrl={imageUrl} />
                    </ImgView>
                    <DetailView data-lenis-prevent>
                        <TitleBanh>{currentCodeItem.name}</TitleBanh>
                        <ContentBanh>{currentCodeItem.content}</ContentBanh>
                        <MaBanh>
                            {(currentCodeItem.value || []).map((iddetail, index) => renderItemDetail(iddetail, index))}
                        </MaBanh>
                        <p>{children}</p>
                    </DetailView>
                    <button onClick={handleCloseClick}>X</button>
                </ModalView>
            </WarrperModal>
        );
    }

    return ReactDOM.createPortal(
        modalContent,
        document.getElementById("modal-root-protal")
    );
};

export default Modal;