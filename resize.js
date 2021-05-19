

function maximize() {
  document.getElementById("mydiv").style.height = "100%";
  document.getElementById("mydiv").style.width = "100%";
  document.getElementById("size").className = "fa fa-compress";
  document.getElementById("size").setAttribute("onclick", "minimize()");
}

function minimize() {
  document.getElementById("mydiv").style.height = "20%";
  document.getElementById("mydiv").style.width = "20%";

  document.getElementById("size").className = "fa fa-compress";
  document.getElementById("size").setAttribute("onclick", "maximize()");
}
