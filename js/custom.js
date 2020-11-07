$('#exampleModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) // Button that triggered the modal
    var recipient = button.data('whatever') // Extract info from data-* attributes
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    
    var modal = $(this)
    modal.find('.modal-title').text(recipient)
  })
  

  function sendEmail() {
    var userName = document.getElementById("userName").value;
    var userEmail = document.getElementById("userEmail").value;
    var userMobile = document.getElementById("userMobile").value;
    var userMessage = document.getElementById("userMessage").value;
    var userTitle = document.getElementById("exampleModalLabel").innerHTML;

    Email.send({
        Host : "smtp.gmail.com",
        Username : "query.propertyanywhere@gmail.com",
        Password : "Arzoo@1995",
        To : 'query.propertyanywhere@gmail.com',
        From : "PropertyAnywhere <query.propertyanywhere@gmail.com>",
        Subject : "Query | " + userTitle,
        Body : "<html><h2>Name: " + userName + "</h2>\
        <h2>Email: " + userEmail + "</h2>\
        <h2>Moble: " + userMobile + "</h2>\
        <h2>Message:<h2>\
        <p>" + userMessage + "</p></html>"
    }).then(
        
    );
    document.getElementById("userName").value = "";
    document.getElementById("userEmail").value = ""
    document.getElementById("userMobile").value = "";
    document.getElementById("userMessage").value = ""; 
    }