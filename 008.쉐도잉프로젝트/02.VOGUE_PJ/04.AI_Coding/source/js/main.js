// ========== Swiper 초기화 ========== 
// Swiper CDN을 먼저 HTML head에 추가해야 합니다
// <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"/>
// <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>

document.addEventListener('DOMContentLoaded', function() {
    const heroSwiper = new Swiper('.heroSwiper', {
        // 자동 슬라이드
        autoplay: {
            delay: 3000, // 3초마다 자동 전환
            disableOnInteraction: false, // 사용자 상호작용 후에도 자동 재생 유지
        },
        
        // 슬라이드 속도
        speed: 800,
        
        // 무한 루프
        loop: true,
        
        // 페이지네이션
        pagination: {
            el: '.swiper-pagination',
            clickable: true, // 클릭 가능하게
        },
        
        // 이전/다음 버튼
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        
        // 효과 (원하는 효과로 변경 가능)
        effect: 'fade', // 'slide', 'fade', 'cube', 'coverflow', 'flip' 중 선택
        fadeEffect: {
            crossFade: true
        },
        
        // 키보드 제어
        keyboard: {
            enabled: true,
        },
        
        // 마우스 휠 제어 (선택사항)
        // mousewheel: {
        //     enabled: true,
        // },
    });
});