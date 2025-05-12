// 방문자 IP 추적 (ipify API 사용)
fetch('https://api64.ipify.org?format=json')
  .then(res => res.json())
  .then(data => {
    console.log('방문자 IP:', data.ip);

    // 예: 추적된 IP를 서버로 전송하려면 여기에 fetch 추가 가능
    // fetch('https://yourserver.com/log', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ ip: data.ip, time: Date.now() })
    // });
  })
  .catch(err => {
    console.error('IP 추적 실패:', err);
  });

// 민원창 표시 (3초 후)
setTimeout(() => {
  alert("민원 넣기 창입니다. 내용을 입력하세요.");
}, 3000);
