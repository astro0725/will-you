document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('yesButton').addEventListener('click', function() {
    nextPage();
  });

  function nextPage() {
    window.location.href = "yes.html";
  }
});