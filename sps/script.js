document.getElementById('parking-form').addEventListener('submit', function(event){
    event.preventDefault();
  
    var name = document.getElementById('name').value;
    var plate = document.getElementById('plate').value;
    var color = document.getElementById('color').value;
    var phone = document.getElementById('phone').value;})