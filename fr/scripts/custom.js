var mainText = document.getElementById("mainText");
var submitBtn = document.getElementById("submitBtn");

function submitClick() {

    window.alert('HELLO');

    console.log('TEST 1');
    const rootRef = firebase.database.ref();

    rootRef.child("Child").set("Example Value");
    console.log('TEST 2');

}