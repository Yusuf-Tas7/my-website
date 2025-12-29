const posts = [
  {
    title: "İlk Yazım",
    file: "ilk-yazim.html"
  },
  {
    title: "İkinci Yazım",
    file: "ikinci-yazim.html"
  },
  {
    title: "Üçüncü Yazım",
    file: "ucuncu-yazim.html"
  }
];

const postList = document.getElementById("postList");

posts.forEach(post => {
  const li = document.createElement("li");
  li.innerHTML = `<a href="posts/${post.file}">${post.title}</a>`;
  postList.appendChild(li);
});
