"use client"
import Barcode from 'react-barcode';

const Barcodes = () => {
  return (
    <div >
      <Barcode value="1234 5678 90AS 6543 21CV" width={1} height={100} fontSize={15} />
    </div>
  )
}

const BarcodesRotate = () => {
  return (
    <div className='-rotate-90'>
      <Barcode value="1234 5678 90AS 6543 21CV" width={1} height={100} fontSize={15} />
    </div>
  )
}

export {Barcodes, BarcodesRotate}
