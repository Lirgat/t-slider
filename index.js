if (window.outerWidth < 620) {
  let currentPageMobile = 1;
  let currentSlideMobile = 1;
  const totalNewsCards = document.querySelectorAll(".news-card").length;
  const newsCardsPerPage = 1;

  function showMobilePage(index) {
    for (let i = 0; i < totalNewsCards; i++) {
      document.querySelectorAll(".news-card")[i].style.display = "none";
    }
    if (index <= totalNewsCards) {
      for (let j = 0; j < newsCardsPerPage; j++) {
        if (index + j <= totalNewsCards) {
          document.querySelectorAll(".news-card")[index + j - 1].style.display =
            "block";
        }
      }
    }
  }

  function updatePageDisplay() {
    document.querySelectorAll(".page").forEach((page) => {
      const hasActiveNewsCard = page.querySelector(
        '.news-card[style*="display: block;"]'
      );
      hasActiveNewsCard
        ? (page.style.display = "flex")
        : (page.style.display = "none");
    });
  }

  function nextMobilePage() {
    currentSlideMobile++;
    if (currentSlideMobile > newsCardsPerPage) {
      currentPageMobile++;
      currentSlideMobile = 1;
    }
    if (currentPageMobile > Math.ceil(totalNewsCards / newsCardsPerPage)) {
      currentPageMobile = 1;
    }
    showMobilePage(
      currentPageMobile * newsCardsPerPage -
        newsCardsPerPage +
        currentSlideMobile
    );
    updatePageDisplay();
  }

  function previousMobilePage() {
    currentSlideMobile--;
    if (currentSlideMobile < 1) {
      currentPageMobile--;
      currentSlideMobile = newsCardsPerPage;
    }
    if (currentPageMobile < 1) {
      currentPageMobile = Math.ceil(totalNewsCards / newsCardsPerPage);
    }
    showMobilePage(
      currentPageMobile * newsCardsPerPage -
        newsCardsPerPage +
        currentSlideMobile
    );
    updatePageDisplay();
  }

  const screenWidth = window.innerWidth;

  if (screenWidth < 620) {
    showMobilePage(1);
    document
      .querySelectorAll(".arrow-slideBlock_arrows button")
      .forEach((btn) => {
        btn.addEventListener("click", function () {
          if (btn.classList.contains("prev-slide")) {
            previousMobilePage();
          } else if (btn.classList.contains("next-slide")) {
            nextMobilePage();
          }
        });
      });
  }
} else {
  let currentPage = 1;
  const totalPages = document.querySelectorAll(".page").length;

  function showPage(index) {
    for (let i = 0; i < totalPages; i++) {
      document.querySelectorAll(".page")[i].style.display = "none";
    }
    document.querySelectorAll(".page")[index - 1].style.display = "flex";
  }

  function nextPage() {
    currentPage++;
    if (currentPage > totalPages) {
      currentPage = 1;
    }
    showPage(currentPage);
  }

  function previousPage() {
    currentPage--;
    if (currentPage < 1) {
      currentPage = totalPages;
    }
    showPage(currentPage);
  }

  document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
      previousPage();
    } else if (event.key === "ArrowRight") {
      nextPage();
    }
  });
}
