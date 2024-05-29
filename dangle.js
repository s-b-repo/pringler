// Check if the website has already been pinged
if (!window.localStorage.getItem('pinged')) {
  // Ping the website
  fetch('https://example.com', {
    mode: 'no-cors'
  })
  .catch(err => console.error('Error pinging website:', err));
  
  // Store the ping status in the localStorage for 1 day
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  window.localStorage.setItem('pinged', true);
  window.localStorage.setItem('pingedExpire', tomorrow.toISOString());
}

// Check the stored timestamp and re-ping if necessary
const pingedExpire = window.localStorage.getItem('pingedExpire');
if (pingedExpire && new Date() > new Date(pingedExpire)) {
  // Ping the website again
  fetch('https://example.com', {
    mode: 'no-cors'
  })
  .catch(err => console.error('Error re-pinging website:', err));
  
  // Update the expiration timestamp by 1 day
  const newExpiration = new Date();
  newExpiration.setDate(newExpiration.getDate() + 1);
  window.localStorage.setItem('pingedExpire', newExpiration.toISOString());
}
