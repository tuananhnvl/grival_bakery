import React, { useEffect, useRef } from 'react'
import data from '@/pages/data/brodard.json'
export default function FormatData() {
    const bodyRef = useRef()
   // console.log(data)

    function Check(data) {
        let c = 0
        let arrRe = []
        let xxx  = 0
        let yyy = 0
        let count = 0
        data.single.forEach((item,index) => {
            console.log(item[`type${index+1}`].name)
            let typeVal = item[`type${index+1}`].name
            let typeeVal = item[`type${index+1}`].namee

            const type = Object.keys(item)[0];
            const value = item[type].value;
             
            value.forEach((obj, index) => {
             
              console.log(obj)
            if(count > 35){

                  if(count == 36) {
                    yyy = 40
                  }else{
                    yyy = 100
                  }
                  count++
                  arrRe.push({
                    id:count,
                    info: obj[yyy],
                    name: obj['name'],
                    namee: obj['namee'],
                    type:typeVal,
                    typee:typeeVal
                }) 

            }else{
                for (let ii = 0; ii < 2; ii++) {
                    count++
                    if(ii == 0) {
                        xxx = 200
                    }else if(ii == 1) {
                        xxx = 250
                    }
                  //  console.log(obj[code]);
                  let r = obj[xxx]
             
                    arrRe.push({
                        idb:count,
                        info: r,
                        name: obj['name'],
                        namee: obj['namee'],
                        type:typeVal,
                        typee:typeeVal
                    }) 
                  }
            }
            
            
            });
          });
        //console.log(arrRe)

        var arrayToString = JSON.stringify(Object.assign({}, arrRe));  // convert array to string
        var stringToJsonObject = JSON.parse(arrayToString);  // convert string to json object
    
        console.log(JSON.stringify(arrRe));

          // Printing the updated data
        
    }
  
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
        Check(data)
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
