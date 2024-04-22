<?php
  // Get the form data
  $email = $_POST['email'];
  $information = $_POST['information'];

  // Set the email recipient and subject
  $mailheader = "From:" .$email;
  $recipient = "gab.gg98@gmail.com";
  $subject = 'Form submission';

  // Create the email message
  $message = "Email address: $email\n";
  $message.= "Comment: $information\n";

  // Send the email
  mail($recipient, $subject, $message) or die("Error!");

  echo'Message Sent';
?>
