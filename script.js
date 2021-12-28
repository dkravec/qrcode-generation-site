// Gets QrCode div element
var qrCodeElement = document.getElementById('qrcode');

// Checks for params in URL
const params = new URLSearchParams(window.location.search)

// checks for a size request in URL
const qrSize = params.has('size')? params.get('size') : 200

// Gets current date
var dateRef = new Date();
// Sets the date to the first of current month.
dateRef.setDate(1);
// Sets the time to midnight.
dateRef.setHours(0, 0, 0, 0);
// Timestamp since first of month.
var dateRefMs = dateRef.getTime();

// Runs function to create + apply qrcode to element. 
// Checks for a speed request in URL, otherwise runs every 50ms by default.
createAndApplyQRCode()
setInterval(createAndApplyQRCode, params.has('speed')? params.get('speed') : 50);

// Generates Timestamp since 1st of the month at midnight, from current time.
function generateTimestamp() {
    return (new Date().getTime() - dateRefMs)
}

// Creates new QR Code and applies it to the div, to display on the site.
function createAndApplyQRCode() {
    // Removes previous QR Code
    qrCodeElement.innerHTML='';
    console.log(generateTimestamp())
    // Uses API to create a new QR Code, and applies it to the div called qrcode
    new QRCode('qrcode', {
        text: `${generateTimestamp()}`,
        width: qrSize,
        height: qrSize,
    });
};
