// Created by:Shem Irekpita
// Created on:Aiprl 2025
// This file contains the JS functions for index.html

"use strict";
function enterClicked() {
    // this function gets user's amount of hours worked and hourly rate and displays it back to user

    // get hours worked from text field
  let hoursWorked = parseFloat(document.getElementById("hours-worked").value)
  
    // get hourly rate from text field
  let hourlyRate = parseFloat(document.getElementById("hourly-rate").value)
  
  // display money taken to user
  const TAX = 20.05 / 100;
  let totalBeforeTax = hoursWorked * hourlyRate;
  let moneyTaken = hoursWorked * hourlyRate * TAX;
  let moneyEarned = totalBeforeTax - moneyTaken;
  // display money earned back to user
    document.getElementById('money-earned').innerHTML = " You earn " + '$' + moneyEarned.toFixed(2) + " per day " + "."
    document.getElementById('money-taken').innerHTML = " The government will take " + '$' + moneyTaken.toFixed(2) + "."
}