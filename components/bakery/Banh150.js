import { useContext, useEffect, useState } from "react";
import { CartContext } from "@/components/CartContext";
import { WrapperTable, TableBanhLeIndex, RowBanhLe, ThBanhLe, TypeBanhLe, DivTd, TrBanhLe } from './StylesComponent';

export default function Banh150({ data }) {
    const { cartProducts, stateCustom, addProduct } = useContext(CartContext);
    const [clickedItemId, setClickedItemId] = useState(null); 
    const [showAnimation, setShowAnimation] = useState(false);

    useEffect(() => {
        if (clickedItemId === null) return;
        setShowAnimation(true);
        const timer = setTimeout(() => {
            setShowAnimation(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, [clickedItemId, stateCustom]);

    const addToCart = (id) => {
        addProduct(id, 1);
        setClickedItemId(id); 
    };

    if (!data || !data.value) return null;

    return (
        <WrapperTable>
            <TableBanhLeIndex>
                <thead>
                    <tr>
                        <ThBanhLe colSpan='3'>
                            <TypeBanhLe>
                                <span>Bánh Trung Thu</span>
                                <h4>{data.name}</h4>
                                <p>{data.namee}</p>
                            </TypeBanhLe>
                        </ThBanhLe>
                    </tr>
                </thead>
                <tbody>
                    {data.value.map(function(item, i) {
                        return (
                            <TrBanhLe key={i}>
                                <RowBanhLe width="5.420%" style={{ textAlign: "center" }}>
                                    <p>{item.idb}</p>
                                </RowBanhLe>
                                <RowBanhLe width="42.420%">
                                    <p>{item.name}</p>
                                    <p style={{ fontStyle: "italic" }}>{item.namee}</p>
                                </RowBanhLe>
                                <RowBanhLe width="40.843%">
                                    <DivTd style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                                        <p style={{ margin: 0 }}>
                                            <strong>{item["150"][1]}</strong> (150g) - {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(Number(item["150"][2]))}
                                        </p>
                                        <button id="customBtn1" onClick={() => addToCart(item["150"][0])}>
                                            <span className="v1xx">Thêm vào giỏ hàng</span>
                                            {showAnimation && clickedItemId === item["150"][0] ? (
                                                <span className="animate-opacity">{stateCustom}</span>
                                            ) : null}
                                        </button>
                                    </DivTd>
                                </RowBanhLe>
                            </TrBanhLe>
                        );
                    })}
                </tbody>
            </TableBanhLeIndex>
        </WrapperTable>
    );
}
