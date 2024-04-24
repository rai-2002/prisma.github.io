function submitForm() {
    // Get the form data
    const email = document.getElementById('email').value;
    const information = document.getElementById('text2').value;
  
    // Create the mailto URL
    const url = `mailto:gabrielle.gauci.16@um.edu.mt?subject=Form%20submission&body=Email%20address:%20${email}%0AComment:%20${information}`;
  
    // Open the mailto URL in a new window or tab
    window.open(url);
}
