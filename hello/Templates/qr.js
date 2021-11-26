// qrData = document.getElementById('dataInput');
// qrLastname = document.getElementById('lastname');
// qrdob = document.getElementById('dob');
// qrnat = document.getElementById('nat');
// qrblank = document.getElementById('blank');
// qrImage = document.getElementById('imageInput');
// qrColor = document.getElementById('colorInput');
// qrType = document.getElementById('typeInput');

// const qrCode = new QRCodeStyling({
//   width: 300,
//   height: 300,
//   data: "Please enter the data and then try to scan me.",
//   image: "",
//   dotsOptions: {
//     color: "#000",
//     type: "square"
//   },
// });

// const updateQrData = () => {
//   newQrData = qrData.value;
//   qrCode.update({
//     data: newQrData
//   });
// };
// const updateQrlastname = () => {
//   newQrData = qrData.value+qrLastname.value;
//   qrCode.update({
//     data: newQrData
//   });
// };
// const updateQrdob = () => {
//   newQrData = qrData.value+qrLastname.value+qrdob.value;
//   qrCode.update({
//     data: newQrData
//   });
// };
// const updateQrnat = () => {
//   newQrData = qrData.value+qrLastname.value+qrdob.value+qrnat.value;
//   qrCode.update({
//     data: newQrData
//   });
// };
// const updateQrblank = () => {
//   newQrData = "Customer Name:"+qrData.value+"   "+"Contact No:"+qrLastname.value+"   "+"Issued Date:"+qrdob.value+"   "+"Order Status:"+qrnat.value+"   "+"Remarks:"+qrblank.value;
//   qrCode.update({
//     data: newQrData
//   });
// };


// const updateQrImg = () => {
//   newQrImage = URL.createObjectURL(qrImage.files[0]);
//   console.log(newQrImage);
//   qrCode.update({
//     image: newQrImage
//   });
// };

// const updateQrColor = () => {
//   newQrColor = qrColor.value;
//   qrCode.update({
//     dotsOptions: {
//       color: newQrColor
//     }
//   });
// };

// const updateQrType = () => {
//   newQrType = qrType.value;
//   qrCode.update({
//     dotsOptions: {
//       type: newQrType
//     }
//   });
// };

// const download = () => qrCode.download("jpeg");

// qrCode.append(document.getElementById('canvas'));