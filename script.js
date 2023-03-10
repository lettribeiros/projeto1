function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light, add img light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    // sem light, manter img normal
    img.setAttribute("src", "./assets/avatar.png")
  }
}
