import React from 'react'
import { WrapperTable, TableBanhLeIndex,RowBanhLe,ThBanhLe } from './StylesComponent';import {useContext} from "react";
import {CartContext} from "@/components/CartContext";

export default function BanhMini({data}) {
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
                        let u = 0
                        if(i === 0) {
                            u = 40
                        }else{
                            u = 100
                        }
                        return (
                            <tr>
                                <RowBanhLe width="5.420%" style={{textAlign:"center"}}>
                                    <p>{item.idb}</p>
                                </RowBanhLe>
                                <RowBanhLe width="42.420%">
                                    <p>{item.name}</p>
                                </RowBanhLe>
                                <RowBanhLe width="20.421%">
                                    <p><strong>{item[u][0]}</strong></p>
                                </RowBanhLe>
                                <RowBanhLe>
                                    <p>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(Number(item[u][1]))}</p>
                                </RowBanhLe>
                                <RowBanhLe width="5.420420%">
                                    <p></p>
                                </RowBanhLe>
                            </tr>
                        )
                    })}
            </tbody>
        </TableBanhLeIndex>
    </WrapperTable>
  )
}
