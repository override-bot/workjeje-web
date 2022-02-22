var firebaseConfig = {
    apiKey: "AIzaSyAe4SU0m-pyATSn9MKW8hZxJD_ZzHp-eCM",
    authDomain: "workjeje-dcd73.firebaseapp.com",
    projectId: "workjeje-dcd73",
    storageBucket: "workjeje-dcd73.appspot.com",
    messagingSenderId: "55701912183",
    appId: "1:55701912183:web:bdeb3c825a4c321f8ba472",
    measurementId: "G-FDSN74MTY7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
//upload image


function sendMessage() {
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    var name = document.getElementById('name').value;
    var subject = document.getElementById('subject').value;
    if (email.length > 6 && message.length > 6) {
        db.collection('userMessages').add({
            "email": email,
            "name": name,
            "subject": subject,
            "message": message
        }).then(() => {
            alert("message sent succesfully")
        }).catch((error) => {
            alert(error.message);
        });
    }
}