document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('noButton').addEventListener('mouseover', function() {
    document.getElementById('changingImage').src = 'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExeXZ5c3VmNnNha2t3dzY1b2Eyd2NxZmVza2ZkbWxodzlxZW9rdWE0dCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/8AoEtk2orOyNk0ZzVq/giphy.gif'; 
    moveButton();
  });
  
  document.getElementById('noButton').addEventListener('mouseout', function() {
    document.getElementById('changingImage').src = 'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExeDZkNzR4dHI3d3BlZ2lja3NtNHkxbmxoMDFsbmF4OXl1ZW9nb255OSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/RzymBjbmsSHM3a6rot/giphy.gif';
  });

  function moveButton() {
    var x = Math.random() * (window.innerWidth - document.getElementById('noButton').offsetWidth);
    var y = Math.random() * (window.innerHeight - document.getElementById('noButton').offsetHeight);
    document.getElementById('noButton').style.left = `${x}px`;
    document.getElementById('noButton').style.top = `${y}px`;
  }
});