import React from 'react'
import ButtonAdd from './ButtonAdd'
export default function BanhNhanMan() {
    
  return (
    <div>
        <table>
            <tbody>
            <tr>
            <td colSpan='8'>
                <p><strong>BÁNH TRUNG THU NHÂN MẶN (CÓ TRỨNG) - COMBINATION (WITH EGG YOLK)</strong></p>
            </td>
        </tr>
        <tr>
            <td>
                <p>1</p>
            </td>
            <td>
                <p>Bánh trung thu Thập Cẩm (2 trứng)</p>
            </td>
            <td>
                <p><strong>1B</strong></p>
            </td>
            <td>
                <p>180,000</p>
            </td>
            <td colSpan='2'>
                <p><strong>1A</strong></p>
            </td>
            <td>
                <p>210,000</p>
            </td>
            <td>
            <ButtonAdd id={'1A'} />
            </td>
        </tr>
        <tr>
            <td>
                <p>2</p>
            </td>
            <td>
                <p>Bánh trung thu Thập Cẩm Gà Quay (2 trứng)</p>
            </td>
            <td>
                <p><strong>3B</strong></p>
            </td>
            <td>
                <p>200,000</p>
            </td>
            <td colSpan='2'>
                <p><strong>3A</strong></p>
            </td>
            <td>
                <p>240,000</p>
            </td>
            <td>
                <ButtonAdd id={1} />
            </td>
        </tr>
        <tr>
            <td>
                <p>3</p>
            </td>
            <td>
                <p>Bánh trung thu Gà Quay Jambon Bát Bửu (1 trứng)</p>
            </td>
            <td>
                <p><strong>7B</strong></p>
            </td>
            <td>
                <p>230,000</p>
            </td>
            <td colSpan='2'>
                <p><strong>7A</strong></p>
            </td>
            <td>
                <p>290,000</p>
            </td>
            <td>
                <ButtonAdd id={1} />
            </td>
        </tr>
        <tr>
            <td>
                <p>4</p>
            </td>
            <td>
                <p>Bánh trung thu Tom Yum Hải Sản (2 trứng)</p>
            </td>
            <td>
                <p><strong>9B</strong></p>
            </td>
            <td>
                <p>240,000</p>
            </td>
            <td colSpan='2'>
                <p><strong>9A</strong></p>
            </td>
            <td>
                <p>300,000</p>
            </td>
            <td>
                <ButtonAdd id={1} />
            </td>
        </tr>
        <tr>
            <td>
                <p>5</p>
            </td>
            <td>
                <p>Bánh trung thu Bào Ngư Vi Cá (1 trứng)</p>
            </td>
            <td>
                <p><strong>11B</strong></p>
            </td>
            <td>
                <p>380,000</p>
            </td>
            <td colSpan='2'>
                <p><strong>11A</strong></p>
            </td>
            <td>
                <p>470,000</p>
            </td>
            <td>
                <ButtonAdd id={1} />
            </td>
        </tr>
        <tr>
            <td>
                <p>6</p>
            </td>
            <td>
                <p>Bánh trung thu Gà Quay Vi Cá (2 trứng)</p>
            </td>
            <td>
                <p><strong>13B</strong></p>
            </td>
            <td>
                <p>280,000</p>
            </td>
            <td colSpan='2'>
                <p><strong>13A</strong></p>
            </td>
            <td>
                <p>360,000</p>
            </td>
            <td>
                <ButtonAdd id={1} />
            </td>
        </tr>
            </tbody>
        </table>

    </div>
  )
}
