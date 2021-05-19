function clone () {
    var itm = document.getElementById("clone").lastChild;
  var cln = itm.cloneNode(true);
  document.getElementById("body").appendChild(cln);
}