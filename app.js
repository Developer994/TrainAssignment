var trainName;
var trainDest;
// Var for first train time
var ftt;
var freq;


var config = {
    apiKey: "AIzaSyD_nWYGpwXctG5kUU0gnOPwPIoIY5xDo3Q",
    authDomain: "trainassignment-cd851.firebaseapp.com",
    databaseURL: "https://trainassignment-cd851.firebaseio.com",
    projectId: "trainassignment-cd851",
    storageBucket: "trainassignment-cd851.appspot.com",
    messagingSenderId: "606380286761"
};
firebase.initializeApp(config);
var database = firebase.database;

$(document).ready(function () {
    // Waits for the submit button is clicked
    $("#submit").on("click", function (e) {
        e.preventDefault();
        getInfo();
        WriteToDataBase();
    });
});

function getInfo() {
    trainName = $("#trainName").val().trim();
    trainDest = $("#trainDest").val().trim();
    ftt = $("#firstTrainTime").val().trim();
    freq = $("#frequency").val().trim();
    console.log(trainName, trainDest, ftt, freq);
}
