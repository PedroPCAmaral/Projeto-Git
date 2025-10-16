document.getElementById("buscar").addEventListener("click", function() {
  const cidade = document.getElementById("cidade").value;

  if (!cidade) return alert("Please type a city name");

  const xhr = new XMLHttpRequest();
  
  xhr.open("GET", `https://wttr.in/${cidade}?format=j1`);

  xhr.onload = function() {
    if (xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      const clima = data.current_condition[0];
      const temp = clima.temp_C;
      const desc = clima.weatherDesc[0].value;

      document.getElementById("info").innerHTML = `
        <h2>${cidade}</h2>
        <p>${desc}</p>
        <p>${temp}°C</p>
      `;

      
      if (desc.toLowerCase().includes("rain")) {
        document.body.style.background = "#4a90e2"; 
      } else if (desc.toLowerCase().includes("cloud")) {
        document.body.style.background = "#95a5a6"; 
      } else if (desc.toLowerCase().includes("sun") || desc.toLowerCase().includes("clear")) {
        document.body.style.background = "#f6d365"; 
      } else {
        document.body.style.background = "#fda085"; 
      }
    } else {
      alert("Error fetching weather data 😿");
    }
  };

  xhr.onerror = function() {
    alert("Connection error with API.");
  };

  xhr.send();
});
