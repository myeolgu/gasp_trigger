gsap.registerPlugin(ScrollTrigger);

// header_section에 대한 이벤트
let header = gsap.timeline({
  scrollTrigger: {
    trigger: ".header_section", // 객체기준범위
    pin: true, // 고정
    start: "top top", // 시작점
    end: `+=400`, // 400은 header_section의 높이 값 [ css에서 400px로 지정 ]
    pinSpacing: false, // 패딩이 자동 추가 되므로 요소가 고정 헤제되면 따라 잡습니다.
    scrub:true, // true 혹은 숫자로 적용된 경우 첫 번째 트윈은 뷰 포트이 100% 지점 0% 지점까지 실행
  }
})

// h1 y 값 및 불투명도 조절
header.to(".header_section h1", {
  yPercent : -400, opacity:0
})

// 4개의 section 이벤트
const scenes = gsap.utils.toArray('.panel');
const height = ((scenes.length) * 100) + '%';// 합이 400이 나와야 함 [ 4개의 section ]
gsap.utils.toArray(".panel").forEach((panel, i) => {
  ScrollTrigger.create({
    trigger: panel,
    start: "center center",
    end: `+=${height}`,
    pin: true,
    pinSpacing: false,
    snap: 1 / 4
  });
});