<?php
  // Get the form data
  $email = $_POST['email'];
  $information = $_POST['information'];

  // Set the email recipient and subject
  $to = 'gabrielle.gauci.16@um.edu.mt';
  $subject = 'Form submission';

  // Create the email message
  $message = "Email address: $email\n";
  $message.= "Comment: $information\n";

  // Send the email
  mail($to, $subject, $message);

  // Redirect the user to a thank-you page
  header('Location: contact_us.html');
  exit;
?>