const copyright = document.getElementById("copyright");
const year = document.createTextNode(new Date().getFullYear());

// Append current year to the copyright text
copyright.appendChild(year);
