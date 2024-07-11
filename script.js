


//   power bi
document
  .getElementById("show-powerbi-btn-uvesh")
  .addEventListener("click", function () {
    toggleIframe("uvesh");
  });
document
  .getElementById("show-powerbi-btn-internship")
  .addEventListener("click", function () {
    toggleIframe("internship");
  });
document
  .getElementById("show-powerbi-btn-smit")
  .addEventListener("click", function () {
    toggleIframe("smit");
  });
document
  .getElementById("show-powerbi-btn-vidhi")
  .addEventListener("click", function () {
    toggleIframe("vidhi");
  });
document
  .getElementById("show-powerbi-btn-ankit")
  .addEventListener("click", function () {
    toggleIframe("ankit");
  });
document
  .getElementById("show-powerbi-btn-ansh")
  .addEventListener("click", function () {
    toggleIframe("ansh");
  });

function toggleIframe(id) {
  var container = document.getElementById(`powerbi-container-${id}`);
  var btn = document.getElementById(`show-powerbi-btn-${id}`);
  var spinner = document.getElementById(`loading-spinner-${id}`);

  if (container.style.display === "none") {
    spinner.style.display = "block";
    container.style.display = "block";
    btn.innerText = "Hide";

    var iframe = document.getElementById(`powerbi-iframe-${id}`);
    iframe.onload = function () {
      spinner.style.display = "none";
    };
  } else {
    container.style.display = "none";
    btn.innerText = "Show More";
  }
}
