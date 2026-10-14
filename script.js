// Waitlist form — placeholder handling.
// There's no backend wired up yet: this just shows a confirmation message
// in the browser so the design can be demoed end to end. Swap the TODO
// below for a real submit (Tally, a database, your existing "Get Notified"
// endpoint, etc.) before this goes live.

document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('waitlist-form');
  var confirmMsg = document.getElementById('confirm-msg');

  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // TODO: replace with a real submission (fetch to your form backend / API).
    console.log('Waitlist signup (not actually sent anywhere yet):', {
      name: form.name.value,
      email: form.email.value,
      linkedin: form.linkedin.value
    });

    form.hidden = true;
    if (confirmMsg) confirmMsg.hidden = false;
  });
});
