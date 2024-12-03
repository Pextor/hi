// 단어와 링크를 담고 있는 객체
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
  I: { word: "Instagram", link: "https://www.instagram.com" },
  J: { word: "Jaguar", link: "https://example.com/jaguar" },
  K: { word: "Knife M", link: "https://www.youtube.com/redirect?event=backstage_event&redir_token=QUFFLUhqbndSTS1WLVl0YmNZYXdfc2puUmF5XzF3Vm9Gd3xBQ3Jtc0trczJPX090bm1PSnZBUGJQaV82U19zRmdpdEtvOVI3MVk4XzRObFpFTnk1S3JOa1pUc3Jib25ZamFNTE81NXN5RHllU0wxWVFSSTFkb2hiY3lJdnZuQXJGVWFMSXB1aFNGYm4yT0tnUzA5Q2REazJxZw&q=https%3A%2F%2Fwatchpeopledie.tv%2Fh%2Fselfharm%2Fpost%2F24762%2Fknife-vag" },
  L: { word: "Living Mexico", link: "https://elblogdelnarco.com/2018/07/26/video-horripilante-donde-sicarios-del-mayo-zambada-le-sacaron-el-corazon-a-un-sujeto-y-a-otro-lo-dec/" },
  L1: { word: "LiveGore", link: "https://www.livegore.com" },
  M: { word: "Monkey", link: "https://example.com/monkey" },
  N: { word: "Naver", link: "https://www.naver.com" },
  O: { word: "Octopus", link: "https://example.com/octopus" },
  P: { word: "Penguin", link: "https://example.com/penguin" },
  Q: { word: "Quokka", link: "https://example.com/quokka" },
  R: { word: "Rabbit", link: "https://example.com/rabbit" },
  S: { word: "sponsored by adidas", link: "https://www.vidlii.com/watch?v=yLDszwQxqvr" },
  T: { word: "Twitter", link: "https://www.twitter.com" },
  U: { word: "Ukraine 21", link: "https://watchpeopledie.tv/h/beating/post/24683/3-guys-1-hammer-theync-and" },
  V: { word: "Vulture", link: "https://example.com/vulture" },
  W: { word: "Whale", link: "https://example.com/whale" },
  X: { word: "X Video", link: "https://www.xvideo.com" },
  Y: { word: "Youtube", link: "https://www.youtube.com" },
  Y1: { word: "Yadong Korea", link: "https://www.yako.red" },
  Z: { word: "Zebra", link: "https://example.com/zebra" }
};

// 사용자가 입력한 글자에 따라 관련 결과를 검색하고 표시하는 함수
function searchByLetter(letter) {
  const searchResults = document.getElementById('search-results');
  searchResults.innerHTML = '';  // 검색 결과 초기화

  // 모든 키를 순회하며 입력된 글자와 일치하거나 시작하는 키를 찾기
  Object.keys(words).forEach(key => {
    if (key.startsWith(letter)) {  // 입력된 글자가 키의 시작 부분과 일치하면
      const { word, link } = words[key];
      searchResults.innerHTML += `<a href="${link}" target="_blank">${word}</a><br/>`;
    }
  });

  // 검색 결과가 없는 경우 메시지 출력
  if (searchResults.innerHTML === '') {
    searchResults.textContent = '검색 결과가 없습니다.';
  }
}

// 검색 입력을 처리하는 함수
function searchWord() {
  const input = document.getElementById('searchInput').value.toUpperCase();
  searchByLetter(input);
}
