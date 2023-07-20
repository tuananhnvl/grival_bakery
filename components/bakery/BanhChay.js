import React from 'react'
import { WrapperTable, TableBanhLeIndex,RowBanhLe,ThBanhLe } from './StylesComponent';import {useContext} from "react";
import {CartContext} from "@/components/CartContext";

export default function BanhChay({data}) {

    const {addProduct} = useContext(CartContext);
  return (
    <WrapperTable>
        <TableBanhLeIndex>
            <thead>
                <tr>
                    <ThBanhLe colSpan='8'>
                        <p><strong>BÁNH {data.name} - {data.namee}</strong></p>
                    </ThBanhLe>
                </tr>
            </thead>
            <tbody>
                {(data.value).map(function(item, i){
                        return (
                            <tr>
                                <RowBanhLe width="5.420%" style={{textAlign:"center"}}>
                                    <p>{item.idb}</p>
                                </RowBanhLe>
                                <RowBanhLe width="42.420%">
                                    <p>{item.name}</p>
                                </RowBanhLe>
                                <RowBanhLe width="20.421%">
                                    <p><strong>{item[200][0]}</strong></p>
{/* <br/> */}
                                    <p>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(Number(item[200][1]))}</p>
                                </RowBanhLe>
                                <RowBanhLe width="20.422%">
                                    <p><strong>{item[250][0]}</strong></p>
{/* <br/> */}
                                    <p>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(Number(item[250][1]))}</p>
                                </RowBanhLe>
                                <RowBanhLe width="10.420420%">
                                    <button onClick={() => addProduct(item.idb)}>Mua</button>
                                </RowBanhLe>
                            </tr>
                        )
                    })}
            </tbody>
        </TableBanhLeIndex>
    </WrapperTable>
  )
}
