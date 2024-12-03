const words = {
  A: { word: "Alejandra Iko Chuv", link: "https://www.livegore.com/203129/face-cut-in-half-still-alive" },
  B: { word: "Best Gore Fun", link: "https://www.bsetgore.fun" },
  C: { word: "CIVI", link: "https://civitai.com/models/7563/alice-nikke" },
  D: { word: "Daily Best", link: "https://ilbe.com" },
  D1: { word: "DuckDuckGo", link: "https://www.duckduckgo.com" },
  E: { word: "Elephant", link: "https://example.com/elephant" },
  F: { word: "FaceBook", link: "https://www.facebook.com" },
  F1: { word: "FunkyTown", link: "https://www.wjswogkr.com" },
  G: { word: "Gleb Korablyov", link: "https://archive.org/details/0508_20240514" },
  G1: { word: "Google", link: "https://www.google.com" },
  H: { word: "Horse", link: "https://example.com/horse" },
  // 나머지 단어 추가
};

// 알파벳 버튼 클릭 시 검색
function searchByLetter(letter) {
  const searchResults = document.getElementById('search-results');
  searchResults.innerHTML = ''; // 검색 결과 초기화
  const query = letter.toUpperCase();

  let found = false;

  Object.keys(words).forEach(key => {
    if (key.startsWith(query)) {
      const { word, link } = words[key];
      searchResults.innerHTML += `<a href="${link}" target="_blank">${word}</a><br/>`;
      found = true;
    }
  });

  if (!found) {
    searchResults.textContent = '검색 결과가 없습니다.';
  }
}

// 단어 입력 후 검색
function searchWord() {
  const input = document.getElementById('searchInput').value.toUpperCase();
  const searchResults = document.getElementById('search-results');
  searchResults.innerHTML = ''; // 검색 결과 초기화

  Object.keys(words).forEach(letter => {
    const { word, link } = words[letter];
    if (word.toUpperCase().startsWith(input)) {
      searchResults.innerHTML += `<a href="${link}" target="_blank">${word}</a><br/>`;
    }
  });

  if (searchResults.innerHTML === '') {
    searchResults.textContent = '검색 결과가 없습니다.';
  }
}
