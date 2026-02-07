async function send() {
  const input = document.getElementById("input").value;

  const res = await fetch("http://localhost:3000/teach", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      input,
      context: "Beginner level student, slow pace preferred"
    })
  });

  const data = await res.json();
  document.getElementById("output").textContent = data.reply;
}
