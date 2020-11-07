$('#exampleModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) // Button that triggered the modal
    var recipient = button.data('whatever') // Extract info from data-* attributes
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    
    var modal = $(this)
    modal.find('.modal-title').text(recipient)
  })

  function sendEmail() {
    Email.send({
        Host : "smtp.gmail.com",
        Username : "query.propertyanywhere@gmail.com",
        Password : "Arzoo@1995",
        To : 'query.propertyanywhere@gmail.com',
        From : "query.propertyanywhere@gmail.com",
        Subject : "Test email",
        Body : "<html><h2>Header</h2><strong>Bold text</strong><br></br><em>Italic</em></html>"
    }).then(
      message => alert(message)
    );
    }