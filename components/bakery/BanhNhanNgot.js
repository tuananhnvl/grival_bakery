import React from 'react'
import { WrapperTable, TableBanhLeIndex,RowBanhLe,ThBanhLe,TypeBanhLe,DivTd } from './StylesComponent';import ButtonAdd from './ButtonAdd';

export default function BanhNhanNgot({data}) {


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
                        return (
                            <tr>
                                <RowBanhLe width="5.420%" style={{textAlign:"center"}}>
                                    <p>{item.idb}</p>
                                </RowBanhLe>
                                <RowBanhLe width="42.420%">
                                    <p>{item.name}</p>
                                    <p style={{fontStyle: "italic"}}>{item.namee}</p>
                                </RowBanhLe>
                                <RowBanhLe width="20.421%">
                                    <DivTd>
                                        <p><strong>{item[200][1]}</strong><br/>-<br/>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(Number(item[200][2]))}</p>
                                        <ButtonAdd id={item[200][0]} />
                                    </DivTd>
                                </RowBanhLe>
                                <RowBanhLe width="20.422%">
                                    <DivTd>
                                        <p><strong>{item[250][1]}</strong><br/>-<br/>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(Number(item[250][2]))}</p>
                                        <ButtonAdd id={item[250][0]} />
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
