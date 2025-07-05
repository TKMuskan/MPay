document
  .getElementById("btn-login")
  .addEventListener("click", function (event) {
    let phnNo = document.getElementById("phone-number").value.trim();
    let pin = document.getElementById("pin").value.trim();

    let digitOnly = /^\d+$/; // Regex: only digits, no whitespace or letters
    // console.log(typeof phnNo);
    // console.log(pin);
    // console.log('button is clicked');
    event.preventDefault(); //========   Use it only when you need to prevent the browser's default behavior.

    const alertBox = document.getElementById("alertBox");
    const alertBox2 = document.getElementById("alertBox2");
    const alertBox3 = document.getElementById("alertBox3");

    if (phnNo !== "") {
      if (digitOnly.test(phnNo)) {
        if (phnNo === "012345") {
          console.log("Phone number is okay");
          if (pin !== "") {
            if (digitOnly.test(pin)) {
              if (pin === "0000") {
                window.location.href = "./home.html";
                alertBox3.innerHTML = `<div role="alert" class="alert alert-success mt-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>✅ You are logged in!</span>
              </div>
              `;
                setTimeout(() => {
                  alertBox3.innerHTML = ""; // Clear the alert after 3 seconds
                }, 3000);                   // I wanted to hold this alert for 3 secs but , it doesn't work
                console.log("Pin number is okay");
              } else {
                alert("The pin is not correct.");
              }
            } else {
              alert("Please enter numbers only without whitespace.");
            }
          } else {
            alert("Field cannot be empty. Please enter your pin.");
            console.log("Field cannot be empty. Please enter your pin.");
          }
        } else {
          alert("The phone number is not correct.");
        }
      } else {
        alert("Please enter numbers only without whitespace.");
      }
    } else {
      alert("Field cannot be empty. Please enter your phone number.");
      console.log("Field cannot be empty. Please enter your phone number.");
    }
  });
