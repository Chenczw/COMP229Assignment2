/*
app.js
Chen Chen
301082159
25/10/2020
*/

// IIFE -- Immediately Invoked Function Expression
(function(){

    function Start()
    {
        console.log("App Started...");
        
        let deleteButtons = document.querySelectorAll('.btn-outline-danger');

        for (button of deleteButtons) {
            button.addEventListener('click', (event) => {
                if (!confirm("Please confirm to perfom delete")) {
                    event.preventDefault();
                    window.location.assign('/contact-list');
                }
            });
        }
    }

    window.addEventListener("load", Start);

})();

var contactOjbject = {};
function sendContactObject() {


    $('#contactListModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget); 
        var type = button.data('type');

        var modal = $(this);
        if(type == "edit"){
            modal.find('.modal-title').text('Edit');
            
            contactOjbject = {};
            var contactOjbject = button.data('detail');
                      
            modal.find('#nameTextField').val(contactOjbject.name);
            modal.find('#numberTextField').val(contactOjbject.pNumber);
            modal.find('#emailTextField').val(contactOjbject.email);
            document.getElementById('modalDeleteBtn').href = "/contact-list/delete/" + contactOjbject._id;
            document.getElementById("modalForm").action = '/contact-list/edit/' + contactOjbject._id;
            document.getElementById('modalDeleteBtn').style.display="inline";
        } 
        if(type == "add") {
            modal.find('.modal-title').text('New');
            modal.find('#nameTextField').val('');
            modal.find('#numberTextField').val('');
            modal.find('#emailTextField').val('');
            document.getElementById("modalForm").action = '/contact-list/add';
            document.getElementById('modalDeleteBtn').style.display="none";
        }
        
    })
}