function addScript() {
  const name = document.getElementById("script-name").value.trim();
  const code = document.getElementById("script-code").value.trim();

  if (!name || !code) {
    alert("Vui lòng điền đầy đủ tên và script.");
    return;
  }

  const container = document.getElementById("scripts-container");

  const card = document.createElement("div");
  card.className = "script-card";

  const title = document.createElement("h3");
  title.textContent = name;

  const pre = document.createElement("pre");
  pre.textContent = code;

  const copyBtn = document.createElement("button");
  copyBtn.className = "copy-btn";
  copyBtn.textContent = "Copy";
  copyBtn.onclick = () => {
    navigator.clipboard.writeText(code);
    copyBtn.textContent = "Đã Copy!";
    setTimeout(() => copyBtn.textContent = "Copy", 1500);
  };

  card.appendChild(title);
  card.appendChild(pre);
  card.appendChild(copyBtn);
  container.prepend(card);

  // Reset form
  document.getElementById("script-name").value = "";
  document.getElementById("script-code").value = "";
}
