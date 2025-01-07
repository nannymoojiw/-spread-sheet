  function doGet() {
  return HtmlService.createTemplateFromFile('index')
  .evaluate()
  .addMetaTag('viewport', 'width=device-width, initial-scale=1')
  .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
}
function submitData(obj){
  var ss = SpreadsheetApp.openById("19M6Sag4irwFgBWvWmg0XEyTNHIOoFlAOQGjNVsgM4KU");
  var sheet = ss.getSheetByName("Sheet1");
  var  flag  =  1 ;
  var lr = sheet.getLastRow();
      for(var i = 1;i <= lr;i++){
  var id = sheet.getRange(i, 1).getValue();
      if(id == obj){
      flag = 0;
  var colB = sheet.getRange(i, 2).getValue();      
  var colC = sheet.getRange(i, 3).getValue();
  var colD = sheet.getRange(i, 4).getValue();
  var colE = sheet.getRange(i, 5).getValue();
  var colF = sheet.getRange(i, 6).getDisplayValue();
  var data ="<table><tr><th colspan=2>ข้อมูลส่วนตัว.</th></tr><tr><td>ไอดี:</td><td>"
+obj+"</td></tr><tr><td>ชื่อ สกุล:</td><td>"+colB+"</td></tr><tr><td>เบอร์โทร:</td><td>"
+colC+"</td></tr><tr><td>อีเมล:</td><td>"+colD+"</td></tr><tr><td>ชื่อเล่น:</td><td>"+colE+"</td></tr><tr><td>วันเกิด:</td><td>"+colF+"</td></tr></table>";
  return data;
    }
   }
     if(flag==1){
  var data ="ไม่พบข้อมูล.";
      return data;
    } 
