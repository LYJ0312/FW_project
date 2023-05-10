let day_temp = ["A", "B", "C"];//옷 종류 구분함수 [아침, 점심, 저녁]

function Cloth_change(gender) {
    for(let ic = 0;ic<3;ic++){
        const clothes = gender === 'M' ? Cloths_M(day_temp[ic]):Cloths_W(day_temp[ic]);

        document.getElementById(`chara-img${[ic]}`).src = gender === 'M' ? 'Img/Human_M.png' : 'Img/Human_W.png';
        document.getElementById(`chara-clo${[ic]}`).src = `Img/${clothes[0]}.png`;
        document.getElementById(`chara-pan${[ic]}`).src = `Img/${clothes[1]}.png`;
    }
}

function GenderToggle() {
    const isFemale = document.getElementById('toggle').checked;
    Cloth_change(isFemale ? 'W' : 'M');
}// 성별 토글 스위치

(() => {
    const set_toggle = document.getElementById('toggle');
    set_toggle.addEventListener('change', GenderToggle);

    Cloth_change('M');// 초기화
})();

function dustMask(mask){
    let masks = document.getElementsByClassName('chara-mask');
    for (let i = 0; i < masks.length; i++) {
        masks[i].src = mask ? 'Img/Mask.png' : 'Img/Clean.png';
    }
}//마스크 착용여부 true or false


/*
기온별로 A,B,C,D,E단계
성별 선택 랜덤추천
상의(원피스여부) 하의
모자 마스크
*/