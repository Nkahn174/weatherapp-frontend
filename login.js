document.querySelector("#register").addEventListener("click", function () {
  const data = {
    email: document.querySelector("#registerName").value,
    email: document.querySelector("#registerEmail").value,
    password: document.querySelector("#registerPassword").value,
  };

  fetch("https://weatherapp-backend-amber-eta.vercel.app//users/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.result === true) {
        window.location.assign("index.html");
      }
    });
});

document.querySelector("#connection").addEventListener("click", function () {
  const data = {
    email: document.querySelector("#connectionEmail").value,
    password: document.querySelector("#connectionPassword").value,
  };

  fetch("https://weatherapp-backend-amber-eta.vercel.app/users/signin", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.result === true) {
        window.location.assign("index.html");
      }
    });
});
