
// ACTIVE BTNS
const myBtn = document.querySelectorAll('.option-buttonformat');
for (let i = 0; i < myBtn.length; i++) {
    myBtn[i].addEventListener("click", function() {
    if (this.classList.contains("active")) {
    this.classList.remove("active");
    } else {
    this.classList.add("active");
    }
});
}
// // ACTIONS
function makebold() {
    document.execCommand('bold',false,null);  
}
function makeitalic(){
    document.execCommand('italic',false,null);
}
function makeUnderLine(){
    document.execCommand('underline',false,null);
}
function makeUndo(){
    document.execCommand('undo',false,null);
}
function makeRedo(){
    document.execCommand('redo',false,null);
}
function makestrikethrough(){
    document.execCommand('strikethrough',false,null);
}
function makeAlignRight(){
    document.execCommand('justifyRight',false,null);
}
function makeAlignLeft(){
    document.execCommand('justifyLeft',false,null);
}
function makeAlignCenter(){
    document.execCommand('justifyCenter',false,null);
}
function makejustify(){
    document.execCommand('justifyFull',false,null);
}
function setFontName(fontName) {
    document.execCommand('fontName',false,fontName);
}
function setFontSize(fontSize) {
    document.execCommand('fontSize',false,fontSize);
}
function insertOrderedList() {
    document.execCommand('insertOrderedList');
}
function insertUnorderedList() {
    document.execCommand('insertUnorderedList');
}
function setFontColor(color) {
    document.execCommand('forecolor',false,color);
}