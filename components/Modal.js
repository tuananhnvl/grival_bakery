'use client';
import ReactDOM from "react-dom";
import { WarrperModal, ModalView, ImgView, DetailView, TitleBanh, ContentBanh, MaBanh,RowMaBanh } from '@/components/StylesComponent'
import data from '@/pages/data/brodard.json'
import ImageLoad from "./ImageLoad";

const Modal = ({ onClose, children, id }) => {
 
    const handleCloseClick = (e) => {
        e.preventDefault();
        onClose();
    };
    let modalContent = null
    if(data.code[id - 1].type == 'dongday') {
        modalContent = (
            <WarrperModal>
                <ModalView >
                    <ImgView /* style={{
                            background:`url(${data.code[id - 1].image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }} */
                    >
                        <ImageLoad imgUrl={data.code[id - 1].image} />
                    </ImgView>
                    <DetailView>
                        <TitleBanh>{data.code[id - 1].name}</TitleBanh>
                        <ContentBanh>{data.code[id - 1].content}</ContentBanh>
                        <MaBanh>
                            
                        {(data.code[id - 1].value).map((iddetail, index) => {
                                     
                            const [pr1, pr2, pr3, pr4] = iddetail.split('_');
                            const found = data[pr1].find(obj => obj.hasOwnProperty(pr2));
                            const item = found[pr2].value.find(i => i.idb == pr3);
                            return (
                                <RowMaBanh  key={index}>
                                              <span>{item[pr4][1]}</span>
                                    <span >{item.name}</span>
                                </RowMaBanh>
                                
                            )
                        })}
                        </MaBanh>
                        <MaBanh>
                        {(data.code[id - 1].bonus).map((bonuss, index) => {
                           
                            return (
                                <RowMaBanh  key={index}>
                                    <span>+</span>
                                    <span >{bonuss}</span>
                                </RowMaBanh>
                                
                            )
                        })}
                        </MaBanh>
                        {/* <p>{children}</p> */}
                    </DetailView>
                    <button onClick={handleCloseClick}>X</button>
                </ModalView>
            </WarrperModal>
        );
    }else{
        modalContent = (
            <WarrperModal>
                <ModalView >
                    <ImgView /* style={{
                            background:`url(${data.code[id - 1].image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }} */
                    >
                        <ImageLoad imgUrl={data.code[id - 1].image} />
                    </ImgView>
                    <DetailView>
                        <TitleBanh>{data.code[id - 1].name}</TitleBanh>
                        <ContentBanh>{data.code[id - 1].content}</ContentBanh>
                        <MaBanh>
                        {(data.code[id - 1].value).map((iddetail, index) => {
                           
                            const [pr1, pr2, pr3, pr4] = iddetail.split('_');
                            const found = data[pr1].find(obj => obj.hasOwnProperty(pr2));
                            const item = found[pr2].value.find(i => i.idb == pr3);
                         

                            return (
                                <RowMaBanh  key={index}>
                                    <span>{item[pr4][1]}</span>
                                    <span >{item.name}</span>
                                </RowMaBanh>
                                
                            )
                        })}</MaBanh>
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

export default Modal