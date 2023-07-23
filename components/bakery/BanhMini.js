import React from 'react'
import { WrapperTable, TableBanhLeIndex,RowBanhLe,ThBanhLe,TypeBanhLe,DivTd } from './StylesComponent';
import ButtonAdd from './ButtonAdd';

export default function BanhMini({data}) {

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
                {(data.value).map(function(item, i){
                        let u = 0
                        if(i === 0) {
                            u = 40
                        }else{
                            u = 100
                        }
                        return (
                            <tr key={i}>
                                <RowBanhLe width="5.420%" style={{textAlign:"center"}}>
                                    <p>{item.idb}</p>
                                </RowBanhLe>
                                <RowBanhLe width="42.420%">
                                    <p>{item.name}</p>
                                    <p style={{fontStyle: "italic"}}>{item.namee}</p>
                                </RowBanhLe>
                                <RowBanhLe width="20.421%">
                                    <p><strong>{item[u][1]}</strong></p>
                                </RowBanhLe>
                                <RowBanhLe>
                                    <p>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(Number(item[u][2]))}</p>
                                </RowBanhLe>
                                <RowBanhLe width="10.420420%">
                                    <DivTd>
                                        <ButtonAdd id={item[u][0]}/>
                                    </DivTd>
                                </RowBanhLe>
                            </tr>
                        )
                    })}
            </tbody>
        </TableBanhLeIndex>
    </WrapperTable>
  )
}