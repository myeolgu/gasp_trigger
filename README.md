## GASP_TRIGGER
--------------------------

### 작성하면서 배웠던 부분



``` CSS

:root {
    --sec2_Height : 199vh /* 섹션 스크롤모션 범위 기준 */
}

```

### transition 속성

ease : 기본값으로, 전환(transition) 효과가 천천히 시작되어, 그다음에는 빨라지고, 마지막에는 다시 느려집니다.

ease-in : 전환(transition) 효과가 천천히 시작됩니다.

ease-out : 전환(transition) 효과가 천천히 끝납니다.

ease-in-out : 전환(transition) 효과가 천천히 시작되어, 천천히 끝납니다.

cubic-bezier(n,n,n,n) : 전환(transition) 효과가 사용자가 정의한 cubic-bezier 함수에 따라 진행됩니다.


### HTNL defer

``` html

<script type="text/javascript" defer src="./js/javascript.js"></script>

```

<script> 태그의 defer 속성은 페이지가 모두 로드된 후에 해당 외부 스크립트가 실행됨을 명시합니다.

defer 속성은 불리언(boolean) 속성으로 명시하지 않으면 false 값을 가지게 되고, 명시하면 true 값을 가지게 됩니다.

이 속성은 <script> 요소가 외부 스크립트를 참조하는 경우에만 사용할 수 있으므로, src 속성이 명시된 경우에만 사용할 수 있습니다.


참조된 외부 스크립트 파일을 다음과 같이 여러 가지 방법으로 실행시킬 수 있습니다.

async 속성이 명시된 경우 : 브라우저가 페이지를 파싱되는 동안에도 스크립트가 실행됨.

async 속성은 명시되어 있지 않고 defer 속성만 명시된 경우 : 브라우저가 페이지의 파싱을 모두 끝내면 스크립트가 실행됨.

async 속성과 defer 속성이 모두 명시되어 있지 않은 경우 : 브라우저가 페이지를 파싱하기 전에 스크립트를 가져와 바로 실행시킴.