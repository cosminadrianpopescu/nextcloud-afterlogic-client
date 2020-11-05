function createFrame() {
  const f = document.createElement('iframe');
  f.style = "width: 100%; height: calc(100vh - 50px)";
  f.src = "/apps/afterlogicclient/js/index.html";
  f.frameBorder = "0";
  document.getElementById("content").appendChild(f);
}
window.addEventListener('DOMContentLoaded', () => createFrame());
