window.onload = function () {

    load_Candle(Year, Month);

}

/* 달력에 필요한 객체 선언 및 변수 만들기 */

let date = new Date(); // Date 객체 선언

let Year = date.getFullYear(); //달력 년도

let Month = date.getMonth() + 1; //달력 월

let Day = date.getDate(); //일

/* 달력출력하기 */
function load_Candle(Year, Month) {

    //년도
    let year = document.getElementById('load_year');

    //월
    let month = document.getElementById('load_month');

    //마지막 일 구하기
    let dayDate = new Date(Year, Month, 0);

    //이전 달 마지막 일 구하기
    let lastMonthDayDate = dayDate.getDate();

    //달력 월의 시작 요일 구하기
    let monthStartDay = new Date(Year, Month - 1, 1);
    let StartDay = monthStartDay.getDay();

    //몇 주 인지 계산
    let weekCount = Math.ceil((StartDay + lastMonthDayDate) / 7);


    //년도, 월, 일 뿌려주기
    year.innerHTML = Year + ".";

    if ((Month / 10) % 10 < 1) {
        month.innerHTML = "0" + Month;
    } else {
        month.innerHTML = Month;
    }

    //날짜 테이블 생성할 ID값 
    let candle_Table_Start_Day = document.getElementById('candle_Table_Start_Day');

    candle_Table_Start_Day.innerHTML = ""; // 기존 테이블 초기화

    let html = "";

    //날짜 생성될 위치
    let candleXYZ = 0;

    //날짜
    let candleDay = 0;

    for (let i = 0; i < weekCount; i++) {
        html += "<tr>";

        for (let y = 0; y < 7; y++) {
            html += "<td>";
            if (StartDay <= candleXYZ && candleDay < lastMonthDayDate) {
                candleDay++;
                html += "<span style='display: block; width: 100%; height: 100%'><a href=" + "id=" + Year + Month + candleDay + ">" + candleDay + "</a></span>";
            }
            html += "</td>";
            candleXYZ++;
        }

        html += "</tr>";
    }

    candle_Table_Start_Day.innerHTML = html;


}
/* 여기까지 출력부분 */

/* 버튼 눌렀을때 월 및 년도 바뀌게 하기 */
function right_Btn() {

    Month++; // Month 변수를 증가시킵니다.

    // 월이 12월을 넘어가면 (12보다 크면), 월을 1월로 초기화하고 연도도 증가시킵니다.
    if (Month > 12) {
        Month = 1;
        Year++; // 월이 초기화되면 연도도 증가시킵니다.
    }

    // "load_Candle()" 함수를 호출하여 새로운 Month 값으로 달력을 업데이트합니다.
    load_Candle(Year, Month);
}

function left_Btn() {

    Month--; // Month 변수를 증가시킵니다.

    // 월이 01월보다 아래로 내려가면 (1보다 작으면), 월을 12월로 초기화하고 연도도 차감시킨다.
    if (Month < 1) {
        Month = 12;
        Year--; // 월이 초기화되면 연도도 증가시킵니다.
    }

    // "load_Candle()" 함수를 호출하여 새로운 Month 값으로 달력을 업데이트합니다.
    load_Candle(Year, Month);
}
