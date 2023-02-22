gsap.timeline({
    scrollTrigger: {
        trigger:".section-02", // 객체기준범위
        pin: true, // 고정
        start: "top top", // 시작점
        end : "bottom bottom", // 끝점
        scrub: 0.5, // 모션바운스
        markers: false, // 개발가이드 선
        onLeave: function() {
            console.log('end');
        }
    }
})

.to('.section-02-tit1', { duration:0.3, opacity:0, y:-30 })

.to('.section-02-tit2', { duration:0.3, opacity:1, y:0, onComplete:function() {
        console.log('두번째 문구 등장!');
    }})

.to('.section-02-tit2', { duration:0, delay: 1})
.to('.section-02-tit2', { duration:0.3, opacity:0, y:-30 })

.to('.section-02-tit3', { duration:0.3, opacity:1, y:0 })
.to('.section-02-tit3', { duration:0, delay:1 })
