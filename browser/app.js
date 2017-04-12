$('#punch-in').on('click', function() {
  let date = new Date();
  let hour = date.getHours();
  //let resultHour = hour > 12 ? hour - 12 : hour;
  let minutes = date.getMinutes();

  $('#punch-in-display').val(hour + ':' + minutes);
  $('#punch-in-display').text(hour + ':' + minutes);
})

//display punched out time
$('#punch-out').on('click', function() {
  let date = new Date();
  let hour = date.getHours();
  //let resultHour = hour > 12 ? hour - 12 : hour;
  let minutes = date.getMinutes();

  $('#punch-out-display').val(hour + ':' + minutes);
  $('#punch-out-display').text(hour + ':' + minutes);
})

$('#timesheet').on('submit', function(){
  let employeeId = document.forms['timesheetForm']['employee-id'].value;
  let timeIn = document.forms['timesheetForm']['punch-in-display-name'].value;
  let timeOut = document.forms['timesheetForm']['punch-out-display-name'].value;
  let comments = document.forms['timesheetForm']['comments'].value;

  if (timeIn && timeOut || !timeIn && !timeOut) {
    alert("Please punch ONE time (in or out)");
    return;
  } else {
    const baseUrl = "https://docs.google.com/forms/d/e/1FAIpQLScajYV2SKGd6MOnPGSfhzL0tJ8ijuet2s3fJqv9dV7hbcLEkA/formResponse?";
    const submitRef = '&submit=Submit';

    const employeeId_g = encodeURIComponent(employeeId);
    const employeeId_id = 'entry.1697824569';
    const timeIn_g = encodeURIComponent(timeIn);
    const timeIn_id = 'entry.2141302491';

    const submitUrl = (baseUrl + employeeId_id + '=' + employeeId_g + '&' + timeIn_id + '=' + timeInd_g + submitRef);
    console.log(submitUrl)
    $(this)[0].action = submitUrl;

  }

});
