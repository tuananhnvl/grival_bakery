import React, { useEffect, useRef } from 'react'
import data from '@/pages/data/brodard.json'
export default function FormatData() {
    const bodyRef = useRef()
   // console.log(data)

    function Check(data) {
        let c = 0
        data.single.forEach((item,index) => {
          //  console.log(index)
            if(index === 0) {
                c = 0
            }else if(index === 1) {
                c = 6
            }else if(index === 2) {
                c = 11
            }
            
            const type = Object.keys(item)[0];
            const value = item[type].value;
          
            value.forEach((obj, index) => {
              obj.id = index + c;
            });
          });
          
          // Printing the updated data
          console.log(JSON.stringify(data, null, 2));
    }
    Check(data)
    const typeW = `
    {
        "single":[
            {
                "type1":{
                    "name":"Nhân Mặn, Có Trứng",
                    "namee":"Savory Mooncake with Egg Yolk",
                    "value": [null]
                }
            }
        ]
    }`
    const typeInputObj = `
    {
        "name":"Bánh trung thu Thập Cẩm (2 trứng)",
        "namee":"Assored Delights 2 Yolks",
        "200g":["1B",180000],
        "250g":["1A",210000]
    }`

    useEffect(() => {
        const listItem = Array.prototype.slice.call(bodyRef.current.children)
        let arrayOutput = []
       /*  for (let i = 0; i < listItem.length; i++) {
           // console.log(listItem[i].children) 
            let listInfoChild = Array.prototype.slice.call(listItem[i].children)
            console.log(listInfoChild[1].children[0].textContent)
            arrayOutput.push({
                "name":listInfoChild[1].children[0].textContent,
                "namee":null,
                "200g":[listInfoChild[2].children[0].textContent ,Number((listInfoChild[3].children[0].textContent).replace(',', ''))],
                "250g":[listInfoChild[4].children[0].textContent ,Number((listInfoChild[5].children[0].textContent).replace(',', ''))]
            })
        } 

       const result = `
       {
           "single":[
               {
                   "type1":{
                       "name":"Nhân Mặn, Có Trứng",
                       "namee":"Savory Mooncake with Egg Yolk",
                       "value": ${JSON.stringify(arrayOutput)}
                   }
               }
           ]
       }`
       console.log(result)
       */
       for (let i = 0; i < listItem.length; i++) {
        // console.log(listItem[i].children) 
         let listInfoChild = Array.prototype.slice.call(listItem[i].children)
         console.log(listInfoChild[1].children[0].textContent)
         arrayOutput.push({
             "name":listInfoChild[1].children[0].textContent,
             "namee":null,
             "200g":[listInfoChild[2].children[0].textContent ,Number((listInfoChild[3].children[0].textContent).replace(',', ''))],
             "250g":[listInfoChild[4].children[0].textContent ,Number((listInfoChild[5].children[0].textContent).replace(',', ''))]
         })
     } 

    },[bodyRef])
    return (
        <>
            <div>
                <table>
                    <tbody ref={bodyRef}>
                    <tr>
            <td>
                <p>18</p>
            </td>
            <td>
                <p>Bánh Lava Trứng Muối Tan Chảy</p>
            </td>
            <td>
                <p><strong>LV</strong></p>
            </td>
            <td>
                <p>48Gr</p>
            </td>
            <td colSpan='3'>
                <p>120,000</p>
            </td>
            <td>
                <p></p>
            </td>
        </tr>
        <tr>
            <td>
                <p>19</p>
            </td>
            <td>
                <p>Bánh Trung Thu Đậu Xanh (Hình Gấu)</p>
            </td>
            <td>
                <p><strong>TN1</strong></p>
            </td>
            <td>
                <p>100Gr</p>
            </td>
            <td colSpan='3'>
                <p>50,000</p>
            </td>
            <td>
                <p></p>
            </td>
        </tr>
        <tr>
            <td>
                <p>20</p>
            </td>
            <td>
                <p>Bánh Trung Thu Đậu Xanh (Hình Heo)</p>
            </td>
            <td>
                <p><strong>TN2</strong></p>
            </td>
            <td>
                <p>100Gr</p>
            </td>
            <td colSpan='3'>
                <p>50,000</p>
            </td>
            <td>
                <p></p>
            </td>
        </tr>
        <tr>
            <td>
                <p>21</p>
            </td>
            <td>
                <p>Bánh Trung Thu Đậu Xanh (Hình Mèo)</p>
            </td>
            <td>
                <p><strong>TN3</strong></p>
            </td>
            <td>
                <p>100Gr</p>
            </td>
            <td colSpan='3'>
                <p>50,000</p>
            </td>
            <td>
                <p></p>
            </td>
        </tr>
                    </tbody>
                </table>

            </div>
            <div>{JSON.stringify(data)}</div>
        </>


    )
}
