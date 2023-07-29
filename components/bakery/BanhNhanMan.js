import { useContext, useEffect, useState } from "react";
import { CartContext } from "@/components/CartContext";
import { WrapperTable, TableBanhLeIndex, RowBanhLe, ThBanhLe, TypeBanhLe, DivTd, TrBanhLe } from './StylesComponent';
import ButtonAdd from './ButtonAdd';

export default function BanhNhanMan({ data }) {
    const {cartProducts, stateCustom, addProduct } = useContext(CartContext);
    const [clickedItemId, setClickedItemId] = useState(null); 
    const [showAnimation, setShowAnimation] = useState(false); // Initialize the state variable

    useEffect(() => {
        // Whenever stateCustom changes, trigger the animation
        setShowAnimation(true);
      
        // Clear the animation state after 1 second
        const timer = setTimeout(() => {
            setShowAnimation(false);
        }, 1000);
      
        // Clean up the timer to avoid memory leaks
        return () => clearTimeout(timer);
      }, [clickedItemId,stateCustom]);


    const addToCart = (id) => {
        addProduct(id, 1)
        setClickedItemId(id); 
    };

    return (
        <WrapperTable>
            <TableBanhLeIndex>
                <thead>
                    <tr>
                        <ThBanhLe colSpan='8'>
                            <TypeBanhLe>
                                <span>Bánh Trung Thu</span>
                                <h4>{data.name}</h4>
                                <p>{data.namee}</p>
                            </TypeBanhLe>
                        </ThBanhLe>
                    </tr>
                </thead>
                <tbody>
                    {(data.value).map(function (item, i) {
                        return (
                            <TrBanhLe key={i}>
                                <RowBanhLe width="5.420%" style={{ textAlign: "center" }}>
                                    <p>{item.idb}</p>
                                </RowBanhLe>
                                <RowBanhLe width="42.420%">
                                    <p>{item.name}</p>
                                    <p style={{ fontStyle: "italic" }}>{item.namee}</p>
                                </RowBanhLe>
                                <RowBanhLe width="20.421%">
                                    <DivTd>
                                        <p><strong>{item[200][1]}</strong> - {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(Number(item[200][2]))}</p>
                                        <button id="customBtn1" onClick={() => addToCart(item[200][0])} >
                                            <span className="v1xx">Thêm vào giỏ hàng</span>
                                            {showAnimation ? (
                                                        <>
                                                          {clickedItemId === item[200][0] ? (
                                                            <span className="animate-opacity">{stateCustom}</span>
                                                          ) : null}
                                                        </>
                                                    ):(null)}
                                        </button>
                                    </DivTd>
                                </RowBanhLe>
                                <RowBanhLe width="20.422%">
                                    <DivTd>
                                        <p><strong>{item[250][1]}</strong> - {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(Number(item[250][2]))}</p>
                                        <button id="customBtn1" onClick={() => addToCart(item[250][0])} >
                                            <span className="v1xx">Thêm vào giỏ hàng</span>
                                            {showAnimation ? (
                                                        <>
                                                          {clickedItemId === item[250][0] ? (
                                                            <span className="animate-opacity">{stateCustom}</span>
                                                          ) : null}
                                                        </>
                                                    ):(null)}
                                        </button>
                                    </DivTd>
                                </RowBanhLe>
                            </TrBanhLe>
                        )
                    })}
                </tbody>
            </TableBanhLeIndex>
        </WrapperTable>
    )
}
