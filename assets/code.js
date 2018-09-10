
  var config = {
  
    // Initialize Firebase

apiKey: "AIzaSyCMvyM2LbPZwucp_tsx5EWdnt2OV-Kdm_k",
authDomain: "my-awesome-project-75759.firebaseapp.com",
databaseURL: "https://my-awesome-project-75759.firebaseio.com",
projectId: "my-awesome-project-75759",
storageBucket: "my-awesome-project-75759.appspot.com",
messagingSenderId: "551703956843"

};
  firebase.initializeApp(config);


  console.log("firebaseworks");


var database = firebase.database();
  var trainName = "";
  var destination = "";
  var frequency = "";


  $("#submitButton").on("click", function(event){
       event.preventDefault();
       console.log("submitbuttonclicked");
       trainName = $("#trainNameInput").val();
       destination = $("#destinationInput").val();
       frequency = $("#frequencyInput").val();

       console.log(trainName);
       console.log(destination); 
       console.log(frequency);
   

    database.ref().set({
        trainName: trainName,
        destination: destination,
        frequency: frequency,
    });
    console.log("pushedtodatabase");
  });



database.ref().on("value", function(snapshot) {

    
      console.log(snapshot.val().trainName);
      console.log(snapshot.val().destination);
      console.log(snapshot.val().frequency);
     



    $("#trainDisplay").text(snapshot.val().trainName);
    $("#destinationDisplay").text(snapshot.val().destination);
    $("#freqencyDisplay").text(snapshot.val().frequency);


    alert("Train successfully added");
    //$(".row.userBox").text(snapshot.val().password);
    //$(".row.userBox").text(snapshot.val().emailAddress);
    //$(".row.userBox").text(snapshot.val().confirmPassword);

    $("#trainNameInput").val("");
$("#destinationInput").val("");
$("#frequencyInput").val("");

});



// 3. Create Firebase event for adding employee to the database and a row in the html when a user adds an entry
database.ref().on("child_added", function(childSnapshot) {
  console.log("childsnapshotworking");

  // Store everything into a variable.
  var trainName = childSnapshot.val().Name;
  var destination = childSnapshot.val().Destination;
  var frequency = childSnapshot.val().Frequency;


  // Employee Info
  console.log(trainName);
  console.log(destination);
  console.log(frequency);


  var newRow = $("<tr>").append(
    $("<td>").text(trainName),
    $("<td>").text(destination),
    $("<td>").text(frequency),
   
  );

  // Append the new row to the table
  $("#onlyTable > tbody").append(newRow);

});
  

/*
  // Calculate the months worked using hardcore math
  // To calculate the months worked
  var empMonths = moment().diff(moment(empStart, "X"), "months");
  console.log(empMonths);

  // Calculate the total billed rate
  var empBilled = empMonths * empRate;
  console.log(empBilled);

  // Create the new row
  var newRow = $("<tr>").append(
    $("<td>").text(empName),
    $("<td>").text(empRole),
    $("<td>").text(empStartPretty),
    $("<td>").text(empMonths),
    $("<td>").text(empRate),
    $("<td>").text(empBilled)
  );

  // Append the new row to the table
  $("#employee-table > tbody").append(newRow);
});

// Example Time Math
// -----------------------------------------------------------------------------
// Assume Employee start date of January 1, 2015
// Assume current date is March 1, 2016

// We know that this is 15 months.
// Now we will create code in moment.js to confirm that any attempt we use meets this test case


*/


