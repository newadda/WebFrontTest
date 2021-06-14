<script>
 // 전파는 부모에서 자식으로 전파이다. 자식에서 부모로 전파는 Vuejs에서 오류를 출력한다.
        Vue.component('custom01',{
             /// value.number 의 경우 value값을 number로 자동 형변환 한다.
            template : '#tp_login'
            }

        );




<template id="tp_login">
<div>
    <div> <span>id : </span> <input></input></div>
    <div> <span>pass : </span> <input></input></div>
    <button>로그인</button>
</div>
</template>


</script>