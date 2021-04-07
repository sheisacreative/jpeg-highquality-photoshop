// ------------------------------------------------------------------------------------------------------------------------------------------------------------------- //
// ----------------------------------------- DEVELOPED BY MAIANE ARAUJO | GRAPHIC DESIGNER ----------------------------------------- //
// ------------------------------------------------------------  :)      www.maiane.com.br    :)  ------------------------------------------------------------- //
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------- //

#target photoshop
app.bringToFront();

function saveJPEG(fileName) {

  var myFile = new File(doc.path + "/" + fileName + ".jpeg")

  var JPEGOptions = new ExportOptionsSaveForWeb()


  // -------------------------------------------- jpeg-24 | CHANGE YOUR SETTINGS HERE -------------------------------------------- //

  //This defines that you're saving a jpeg. You can try to change "jpeg" for: JPEG, COMPUTERSERVEGIF or BMP.
  JPEGOptions.format = SaveDocumentType.JPEG;

  //Embed color profile. Can be true of false.
  JPEGOptions.embedColorProfile = false;

  //The number of bits. Options: OPTIMIZEDBASELINE, PROGRESSIVE and STANDARDBASELINE
  JPEGOptions.formatOptions = FormatOptions.OPTIMIZEDBASELINE;

  //Valid only when FormatOptions.PROGRESSIVE
  //JPEGOptions.scans = true;

  //The color that will fill transparent areas when transparency is turned off.
  JPEGOptions.matte = MatteType.BLACK;

  //From 0 to 12
  JPEGOptions.quality = 12;


  // -------------------------------------------------------------------------------------------- //

  doc.exportDocument(myFile, ExportType.SAVEFORWEB, JPEGOptions);

}

if (documents.length > 0) {

  var doc = activeDocument;
  var fileName = doc.name.replace(/.\w+$/, "");
  saveJPEG(fileName);
  alert("A happy potato says:" + "\n" + "Your jpeg file is saved. Have a nice day! :D\n\nDeveloped by: www.maiane.com.br", "Woooow");

} else {

  alert("I was thinking...\n\nMaybe you should open a document before you try to save a jpeg. Why don't you give a try? s2", "Are you ok??");

}