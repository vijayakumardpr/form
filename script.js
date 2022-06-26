const getQuery = document.querySelector(".form")

getQuery.addEventListener("submit", (e) => {
  e.preventDefault()
  var params = {
    from_name: document.getElementById("fullname").value,
    email_id: document.getElementById("email").value,
    to_name: document.getElementById("phone").value,
    reply_to: document.getElementById("city").value,
    message: document.getElementById("textarea").value,
  }
  emailjs
    .send("service_uwsx35j", "template_fjvby1g", params)
    .then(() => alert("success!"))
    .catch(() => alert("something wrong"))

  document.getElementById("fullname").value = ""
  document.getElementById("email").value = ""
  document.getElementById("phone").value = ""
  document.getElementById("city").value = ""
  document.getElementById("textarea").value = ""
})
