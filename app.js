var trainName;
var trainDest;
// Var for first train time
var FTT;
var Freq;

var currentHour = moment().hour();
console.log(currentHour);
var currentMinute = moment().minute();
console.log(currentMinute);
var currentTime = (currentHour + ":" + currentMinute);
console.log(currentTime);
// var endTime = moment("06:12:07 pm", "HH:mm:ss a");
// var duration = moment.duration(endTime.diff(currentTime));
// var hours = parseInt(duration.asHours());
// var minutes = parseInt(duration.asMinutes()) - hours * 60;
// console.log(hours + ' hour and ' + minutes + ' minutes.');

// var result = endTime.diff(currentTime, 'hours') + " Hrs and " +
//     endTime.diff(currentTime, 'minutes') + " Mns";
// console.log(result)
// var oneMin;

var config = {
    apiKey: "AIzaSyD_nWYGpwXctG5kUU0gnOPwPIoIY5xDo3Q",
    authDomain: "trainassignment-cd851.firebaseapp.com",
    databaseURL: "https://trainassignment-cd851.firebaseio.com",
    projectId: "trainassignment-cd851",
    storageBucket: "trainassignment-cd851.appspot.com",
    messagingSenderId: "606380286761"
};
firebase.initializeApp(config);
var database = firebase.database();

$(document).ready(function () {
    // Waits for the submit button is clicked
    $("#submit").on("click", function (e) {
        e.preventDefault();
        getInfo();
        writeToDataBase();
    });
});

function getInfo() {
    trainName = $("#trainName").val().trim();
    trainDest = $("#trainDest").val().trim();
    Freq = $("#frequency").val().trim();
    FTT = $("#firstTrainTime").val().trim();
    console.log(trainName, trainDest, FTT, Freq);
}

function writeToDataBase() {
    database.ref().push({
        trainname: trainName,
        traindest: trainDest,
        freq: Freq,
        ftt: FTT
    })
}


// To kill the interval and restart the info on firebase.
// function intervalKill() {
//     oneMin = setInterval(timeFunc, 60000)
// }

// function timeFunc() {
//     alert("saved data reseted");
// }

// const moment = require('moment');

// let d1 = moment('2018-06-12');
// let d2 = moment('2018-06-28');

// let hours = d2.diff(d1, 'hours');
// console.log(`Difference in hours: ${hours}`);


database.ref().on("child_added", function (snapshot) {
    console.table(snapshot.val());
    var trainName = snapshot.val().trainname;
    var trainDest = snapshot.val().traindest;
    var Freq = snapshot.val().freq;
    var FTT = snapshot.val().ftt;
    var row = $("<tr>");
    var tdTrainName = $("<td>").append(trainName);
    var tdTrainDest = $("<td>").append(trainDest);
    var tdFreq = $("<td>").append(Freq);
    var tdFTT = $("<td>").append(FTT);

    row
        .append(tdTrainName)
        .append(tdTrainDest)
        .append(tdFreq)
        .append(tdFTT);
    $("#table").append(row);
})
