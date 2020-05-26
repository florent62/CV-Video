/*Popup*/
var btnPopup_loisirs = document.getElementById('btnPopup_loisirs');
var overlay_loisirs = document.getElementById('overlay_loisirs');
var btnClose_loisirs = document.getElementById('btnClose_loisirs');

btnPopup_loisirs.addEventListener('click' ,openModal);

btnClose_loisirs.addEventListener('click' ,closePopup);

function openModal(){

    overlay_loisirs.style.display = 'block';
}

function closePopup(){
    overlay_loisirs.style.display = 'none';
}