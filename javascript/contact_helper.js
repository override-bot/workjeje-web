function sendMessage() {
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    var name = document.getElementById('name').value;
    if (email.length > 6 && message.length > 6) {
        db.collection('userMessages').add({
            email: email,
            name: name,
            message: message
        }).then(() => {
            alert("message sent succesfully")
        }).catch((error) => {
            alert(error.message);
        });
    }
}