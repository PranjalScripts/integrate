(function () {
// Create iframe
const iframe = document.createElement('iframe');
iframe.src = "https://chatbot-user.vercel.app";
iframe.style.position = "fixed";
iframe.style.bottom = "20px";
iframe.style.right = "20px";
iframe.style.width = "350px";
iframe.style.height = "500px";
iframe.style.border = "none";
iframe.style.zIndex = "9999";
iframe.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
iframe.setAttribute("allow", "microphone"); // Enable mic access if required

// Append to body
document.body.appendChild(iframe);

// Optional: Add a toggle button for the chatbot
const button = document.createElement('button');
button.textContent = "Chat";
button.style.position = "fixed";
button.style.bottom = "20px";
button.style.right = "380px";
button.style.zIndex = "10000";
button.style.padding = "10px";
button.style.borderRadius = "50%";
button.style.backgroundColor = "#007bff";
button.style.color = "#fff";
button.style.border = "none";
button.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
button.style.cursor = "pointer";

button.onclick = () => {
iframe.style.display = iframe.style.display === "none" ? "block" : "none";
};

document.body.appendChild(button);
})();
