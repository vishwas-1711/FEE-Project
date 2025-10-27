// Log Out button redirect
document.addEventListener("DOMContentLoaded", () => {
  const logoutBtn = document.querySelector(".logout-btn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      window.location.href = "index.html"; // redirect to landing page
    });
  }
});
// Banner swap feature
document.addEventListener("DOMContentLoaded", () => {
  const banner = document.querySelector(".banner");
  const bannerTitle = document.querySelector(".banner-title");
  const bannerDesc = document.querySelector(".banner-desc");

  // Dummy descriptions for demo (can expand later)
  const descriptions = {
    "9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg": "Experience the epic saga of Avatar like never before.",
    "6kbAMLteGO8yyewYau6bJ683sw7.jpg": "Avengers unite once more to save the universe..",
    "lPsD10PP4rgUGiGR4CCXA6iY0QQ.jpg": "The magical story of Coco that celebrates family and music.",
    "4q2hz2m8hubgvijz8Ez0T2Os2Yv.jpg": "Mortal Kombat brings brutal battles to the big screen.",
    "1g0dhYtq4irTY1GPXvft6k4YLjm.jpg": "Spider-Man faces new challenges in this Marvel hit. ",
    "9yBVqNruk6Ykrwc32qrK2TIE5xw.jpg": "A thrilling space adventure filled with mystery.",
    "5Zv5KmgZzdIvXz2KC3n0MyecSNL.jpg": "Nobody is just another ordinary action hero story.",
    "jHo2M1OiH9Re33jYtUQdfzPeUkx.jpg": "Venom returns in an action-packed sequel."
  };

  // Add click event to thumbnails
  document.querySelectorAll(".row-posters img").forEach(img => {
    img.addEventListener("click", () => {
      // Set new banner background
      banner.style.backgroundImage = `url(${img.src.replace("w200", "original")})`;

      // Set new title (use alt if available, else fallback)
      bannerTitle.textContent = img.alt || "Selected Show";

      // Set new description (based on filename if found)
      const filename = img.src.split("/").pop();
      bannerDesc.textContent = descriptions[filename] || "An amazing show you’ll love!";
    });
  });
});
