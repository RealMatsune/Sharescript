
document.addEventListener("DOMContentLoaded", function () {
  fetch("data/posts.json")
    .then(res => res.json())
    .then(data => {
      const container = document.getElementById("scripts-container");
      const search = document.getElementById("search");

      function renderScripts(filter = "") {
        container.innerHTML = "";
        data
          .filter(post => post.title.toLowerCase().includes(filter.toLowerCase()))
          .forEach(post => {
            const div = document.createElement("div");
            div.className = "card";
            div.innerHTML = \`<h2>\${post.title}</h2><a href="\${post.link}">View Script</a>\`;
            container.appendChild(div);
          });
      }

      renderScripts();

      search.addEventListener("input", (e) => {
        renderScripts(e.target.value);
      });
    });
});
