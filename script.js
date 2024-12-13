const words = {
  A: { word: "Alejandra Iko Chuv", link: "https://www.livegore.com/203129/face-cut-in-half-still-alive" },
  B: { word: "Best Gore Fun", link: "https://www.bsetgore.fun" },
  B1: { word: "Block Site Opener", link: "https://proxyium.com/website-unblocker" },
  C: { word: "CIVI", link: "https://civitai.com/models/7563/alice-nikke" },
  C1: { word: "Carro groce", link: "https://carro-groce.com/" },
  D: { word: "Daily Best", link: "https://ilbe.com" },
  D1: { word: "DuckDuckGo", link: "https://www.duckduckgo.com" },
  D2: { word: "Dcinside", link: "https://www.dcinside.com/" },
  E: { word: "El Blog del Narco", link: "https://elblogdelnarco.com/" },
  F: { word: "FaceBook", link: "https://www.facebook.com" },
  F1: { word: "FunkyTown", link: "https://www.gorecenter.com/funky-town-video/" },
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
  O: { word: "Onion Site Opener", link: "https://proxyium.com/website-unblocker" },
  P: { word: "PornHub", link: "https://pornhub.com" },
  Q: { word: "Quokka", link: "https://example.com" },
  R: { word: "Rabbit", link: "https://example.com/rabbit" },
  S: { word: "sponsored by adidas", link: "https://www.vidlii.com/watch?v=yLDszwQxqvr" },
  S1: { word: "Shotgun him Self", link: "https://www.youtube.com/redirect?event=comments&redir_token=QUFFLUhqbE1TaDcyd0RVQlZ6UHN4b0x4cHdQNVpxTDhCZ3xBQ3Jtc0ttek1lS240ZC04eGFTeXBEazgyNFVVcWVWRzY1ekFDc2czYUwzMGZiVmNLMnFUcGpqWVpWY09fdnVKMHY0cTljTjNXOHktRjgwOE9wN3dLSXpHSkxuWGFSRTV1VlV2OU13RTdmWG5LVVY2Z0NRN1NmSQ&q=https%3A%2F%2Fwatchpeopledie.tv%2Fh%2Fsuicide%2Fpost%2F7325%2Fronnie-mcnutt-full-suicide-video" },
  S2: { word: "Seven Second", link: "https://www.youtube.com/redirect?event=comments&redir_token=QUFFLUhqbnd5T0lTUHp6MUtuUTM4LU9PYUU0ckxCeFBCUXxBQ3Jtc0ttQndxUk9vbkJHaDVORTlGZW9VZjhrUjlUd09OQmx2WjVLaGFJeWdRSDIxS2dERHJFc2VERzh4cWhxeTAtOW1xSFB4T29VLWFPWFpwcndxNW9lV2ZTNmxXN0wtTFY4QlV6eTBOVm4zVVZfdGZYR3ZkOA&q=https%3A%2F%2Fcarro-groce.com%2Fguro-douga%2F11798.html" },
  T: { word: "Twitter", link: "https://www.twitter.com" },
  T: { word: "TheYNC", link: "https://theync.com" },
  U: { word: "Ukraine 21", link: "https://watchpeopledie.tv/h/beating/post/24683/3-guys-1-hammer-theync-and" },
  V: { word: "Vulture", link: "https://example.com/vulture" },
  W: { word: "Whale", link: "https://example.com/whale" },
  X: { word: "X Video", link: "https://www.xvideo.com" },
  Y: { word: "Youtube", link: "https://www.youtube.com" },
  Y1: { word: "Yadong Korea", link: "https://www.yako.red" },
  Z: { word: "Zebra", link: "https://example.com/zebra" }
};

function searchWord() {
  const input = document.getElementById('searchInput').value.toUpperCase();
  const searchResults = document.getElementById('search-results');
  searchResults.innerHTML = '';  // 검색 결과 초기화

  Object.keys(words).forEach(key => {
    const { word, link } = words[key];
    if (word.toUpperCase().startsWith(input)) {
      searchResults.innerHTML += `<a href="${link}" target="_blank">${word}</a><br/>`;
    }
  });

  if (searchResults.innerHTML === '') {
    searchResults.textContent = '검색 결과가 없습니다.';
  }
}
