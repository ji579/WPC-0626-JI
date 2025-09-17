// CGV PJ 추가기능 JS - main.js

// 로딩확인
console.log("나야나 로딩!");

// 1. 대상 선정
// 1-1. 포스터 링크 이미지 a요소 -> 이벤트 대상
const 링크 = document.querySelectorAll('.poster-menu-box li a');
// 1-2. 영화상영 아이프레임 -> 변경대상
const 아이프레임 = document.querySelector('.screen iframe');

// 2. 이벤트 대상에 클릭이벤트 적용하기 ////
링크.forEach((요소,순번)=>{
    요소.onclick = () => {
        // 3. 아이프레임 소스 변경하기
        아이프레임.src = `https://www.youtube.com/embed/ckHwZNuV-wQ?autoplay=1`;
    };
});


// 원래는 a요소에 직접 이벤트 속성에 코딩해서 테스트했었음!
/* 
    
    onclick="
    // ckHwZNuV-wQ
    document.querySelector('.screen iframe')
    .src = `https://www.youtube.com/embed/ckHwZNuV-wQ?autoplay=1`;
    "
    

    onclick="
    // ckHwZNuV-wQ
    document.querySelector('.screen iframe')
    .src = `https://www.youtube.com/embed/zN8K_uE1LYg?autoplay=1`;
    "
                

*/
