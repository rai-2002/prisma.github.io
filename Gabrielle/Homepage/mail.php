<?php
  // Get the form data
  $email = $_POST['email'];
  $text2 = $_POST['text2'];

  // Set the email recipient and subject
  $to = 'gabrielle.gauci.16@um.edu.mt';
  $subject = 'Form submission';

  // Create the email message
  $message.= "Comment: $text2\n";

  // Send the email
  mail($to, $subject, $message);

  exit;
?>