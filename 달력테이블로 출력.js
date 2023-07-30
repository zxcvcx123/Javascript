        /* 달력출력하기 */ 
        let date = new Date(); // Date 객체 선언

        let Year = date.getFullYear(); //달력 년도

        let Month = date.getMonth() + 1; //달력 월

        let Day = date.getDate(); //일

        window.onload = function() {
    		
    		load_Candle();

        }

        function load_Candle() {

            //년도
            let year = document.getElementById('load_year');
            //월
            let month = document.getElementById('load_month');

            //마지막 일 구하기
            let dayDate = new Date(Year, Month, 0);

            //이전 달 마지막 일 구하기
            let lastMonthDayDate = dayDate.getDate();

            //달력 월의 시작 요일 구하기
            let monthStartDay = new Date(Year, date.getMonth(), 1);
            let StartDay = monthStartDay.getDay();
            
            //몇 주 인지 계산
            let weekCount = Math.ceil((StartDay + lastMonthDayDate) / 7);
            

            //년도, 월, 일 뿌려주기
            year.innerHTML = Year + ".";

            if((Month/10)%10 < 1) {
                month.innerHTML = "0" + Month;
            } else {
                month.innerHTML = Month;    
            }

            //날짜 테이블 생성할 ID값 
            let candle_Table_Start_Day = document.getElementById('candle_Table_Start_Day');
            
            let html = "";
            
            //날짜 생성될 위치
            let candleXYZ = 0;

            //날짜
            let candleDay = 0;

            for(let i = 0; i < weekCount; i++) {
                html += "<tr>"; 

                for(let y = 0; y < 7; y++) {
                    html += "<td>";
                    if(StartDay <= candleXYZ && candleDay < lastMonthDayDate) {
                        candleDay++;
                        html += "<sapn>" + candleDay + "</span>";
                    }
                    html += "</td>"; 
                    candleXYZ++;
                }

                html += "</tr>";
            }

            candle_Table_Start_Day.innerHTML = html;
        }
