import QRCode from "qrcode"

const generateQrCode = async (text) =>{
    try{
        //Generate QR code as data URL
        const qrDataUrl = await QRCode.toDataURL(text);
        console.log("QR code generated successfully!");
        console.log(qrDataUrl);

        return qrDataUrl;
    }catch(error){
        console.log('Error in generating the qrcode',error);
    }
}

export default generateQrCode;