// 1
// 이 문제에는 표준 입력으로 두 개의 정수 n과 m이 주어집니다.
// 별(*) 문자를 이용해 가로의 길이가 n, 세로의 길이가 m인 직사각형 형태를 출력해보세요.

// 제한 조건
// n과 m은 각각 1000 이하인 자연수입니다.
// process.stdin.setEncoding('utf8');
// process.stdin.on('data', data => {
//     const n = data.split(" ");
//     const a = Number(n[0]), b = Number(n[1]);
//     for(let i=0; i<b; i++){
//         let star = "";
//         for(let j=0; j<a; j++){
//             star += '*'
//         }
//         console.log(star);
//     }    
// });



// 2
// 정수 num이 짝수일 경우 "Even"을 반환하고 홀수인 경우 "Odd"를 반환하는 함수, solution을 완성해주세요.

// 제한 조건
// num은 int 범위의 정수입니다.
// 0은 짝수입니다.
// function solution(num) {
//     let answer = num%2 == 0 ? 'Even' : 'Odd';
//     return answer;
// }
// solution(10);



// 3
// 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

// 재한사항
// s는 길이가 1 이상, 100이하인 스트링입니다.
// function solution(s) {
//     let answer = s.length%2 == 0 ? s.slice(s.length/2-1, s.length/2+1) : s.charAt(s.length/2, 1) ;
    
//     return answer;
// }
// solution('1111331111')



// 4
// 두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.
// 예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.

// 제한 조건
// a와 b가 같은 경우는 둘 중 아무 수나 리턴하세요.
// a와 b는 -10,000,000 이상 10,000,000 이하인 정수입니다.
// a와 b의 대소관계는 정해져있지 않습니다.
// function solution(a, b) {
//     var answer = 0;
//     let before = 0;
//     let after = 0;
//     if(a > b){
//       before = b;
//       after = a;
//     }else {
//       before = a;
//       after = b;
//     }

//     for(let i=before; i<=after; i++ ){
//       answer+=i;
//     }

//     return answer;
// }
// solution(5,3)



// 5
// 문자열 s를 숫자로 변환한 결과를 반환하는 함수, solution을 완성하세요.

// 제한 조건
// s의 길이는 1 이상 5이하입니다.
// s의 맨앞에는 부호(+, -)가 올 수 있습니다.
// s는 부호와 숫자로만 이루어져있습니다.
// s는 "0"으로 시작하지 않습니다.
// function solution(s) {
//     var answer = Number(s);
//     return answer;
// }
// solution('1234')



// 6
// 0부터 9까지의 숫자 중 일부가 들어있는 배열 numbers가 매개변수로 주어집니다. numbers에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수를 return 하도록 solution 함수를 완성해주세요.
// 제한사항
// 1 ≤ numbers의 길이 ≤ 9
// 0 ≤ numbers의 모든 수 ≤ 9
// numbers의 모든 수는 서로 다릅니다.
// function solution(numbers) {

//     let sum = 0;
//     let sum2 = 0;
//     for(let i=0; i<=9; i++){
//       sum2 += i;
//       for(let j=0; j<numbers.length; j++){
//         if(i == numbers[j]){
//           sum += i;
//         }        
//       }
//     }

//     let answer = sum2-sum;

//     return answer;
// }
// solution([1,2,3,4,6,7,8,0])



// 7
// 문제 설명
// 어떤 정수들이 있습니다. 이 정수들의 절댓값을 차례대로 담은 정수 배열 absolutes와 이 정수들의 부호를 차례대로 담은 불리언 배열 signs가 매개변수로 주어집니다.
//  실제 정수들의 합을 구하여 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// absolutes의 길이는 1 이상 1,000 이하입니다.
// absolutes의 모든 수는 각각 1 이상 1,000 이하입니다.
// signs의 길이는 absolutes의 길이와 같습니다.
// signs[i] 가 참이면 absolutes[i] 의 실제 정수가 양수임을, 그렇지 않으면 음수임을 의미합니다.

// function solution(absolutes, signs) {
//     var answer = 0;

//     for(let i=0; i<absolutes.length; i++){
//       if(signs[i] == false) {
//          absolutes[i] *= -1
//       }

//       answer += absolutes[i]

//     }

//     return answer;
// }
// solution([1,2,3], [false,false,true]);




// 8
// 문제 설명
// 정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.

// 제한사항
// arr은 길이 1 이상, 100 이하인 배열입니다.
// arr의 원소는 -10,000 이상 10,000 이하인 정수입니다.
// function solution(arr) {
//     var answer = 0;
//     let sum = 0;
//     arr.forEach((item, index) => {
//       sum += item;
//     });
//       answer = sum/arr.length;

//     return answer;
// }
// console.log(solution([1,2,3,4]));



// 9
// 문제 설명
// 프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다.
// 전화번호가 문자열 phone_number로 주어졌을 때, 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수, solution을 완성해주세요.

// 제한 조건
// s는 길이 4 이상, 20이하인 문자열입니다.

// function solution(phone_number) {
//     var answer = '';

//     let laststr = phone_number.slice(phone_number.length-4, phone_number);
//     let str = '';
//     for(let i=0; i<phone_number.length-4; i++){
//         answer += '*'
//     }

//     return answer + laststr;
// }
// console.log(solution("027778888"));



// 10
// 문제 설명
// 행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더한 결과가 됩니다.
// 2개의 행렬 arr1과 arr2를 입력받아, 행렬 덧셈의 결과를 반환하는 함수, solution을 완성해주세요.

// 제한 조건
// 행렬 arr1, arr2의 행과 열의 길이는 500을 넘지 않습니다.

// function solution(arr1, arr2) {
//     const answer = [];
    
//     for(let i=0; i<arr1.length; i++){
//         answer.push([]);
//         for(let j=0; j<arr1[i].length; j++){
//             answer[i].push(arr1[i][j]+arr2[i][j]);
//             console.log(arr1[i][j])
//             console.log(arr2[i][j])
//             console.log(arr1[i][j]+arr2[i][j])
//             // console.log(answer);
//         }
//     }

//     return answer;
// }
// console.log(solution([[1,2],[2,3]],[[3,4],[5,6]]));



// 11
// 문제 설명
// 함수 solution은 정수 x와 자연수 n을 입력 받아, x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다. 다음 제한 조건을 보고, 조건을 만족하는 함수, solution을 완성해주세요.

// 제한 조건
// x는 -10000000 이상, 10000000 이하인 정수입니다.
// n은 1000 이하인 자연수입니다.

// function solution(x, n) {
//     var answer = [];

//     for(let i=1; i<n+1; i++){
//         answer.push(x*i)
//     }

//     return answer;
// }
// console.log(solution(-4,2));



// 12
// 문제 설명
// 새로 생긴 놀이기구는 인기가 매우 많아 줄이 끊이질 않습니다. 이 놀이기구의 원래 이용료는 price원 인데, 놀이기구를 N 번 째 이용한다면 원래 이용료의 N배를 받기로 하였습니다. 즉, 처음 이용료가 100이었다면 2번째에는 200, 3번째에는 300으로 요금이 인상됩니다.
// 놀이기구를 count번 타게 되면 현재 자신이 가지고 있는 금액에서 얼마가 모자라는지를 return 하도록 solution 함수를 완성하세요.
// 단, 금액이 부족하지 않으면 0을 return 하세요.

// 제한사항
// 놀이기구의 이용료 price : 1 ≤ price ≤ 2,500, price는 자연수
// 처음 가지고 있던 금액 money : 1 ≤ money ≤ 1,000,000,000, money는 자연수
// 놀이기구의 이용 횟수 count : 1 ≤ count ≤ 2,500, count는 자연수

// function solution(price, money, count) {
//     var answer = 0;

//     let total = 0;
//     for(let i=1; i<count+1; i++){
//         total += price*i;
//     }

//     answer = money>=total ? 0 : total-money;

//     return answer;
// }
// console.log(solution(3,20,4));



// 13
// 문제 설명
// 2016년 1월 1일은 금요일입니다. 2016년 a월 b일은 무슨 요일일까요? 두 수 a ,b를 입력받아 2016년 a월 b일이 무슨 요일인지 리턴하는 함수, solution을 완성하세요. 요일의 이름은 일요일부터 토요일까지 각각 SUN,MON,TUE,WED,THU,FRI,SAT

// 입니다. 예를 들어 a=5, b=24라면 5월 24일은 화요일이므로 문자열 "TUE"를 반환하세요.

// 제한 조건
// 2016년은 윤년입니다.
// 2016년 a월 b일은 실제로 있는 날입니다. (13월 26일이나 2월 45일같은 날짜는 주어지지 않습니다)
// function solution(a, b) {
//     var answer = '';

//     let day = new Date(2016, a-1, b);
//     let week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']; 
//     answer = week[day.getDay()];


//     return answer;
// }
// console.log(solution(5, 24))



// 14
// 문제 설명
// array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환하는 함수, solution을 작성해주세요.
// divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요.

// 제한사항
// arr은 자연수를 담은 배열입니다.
// 정수 i, j에 대해 i ≠ j 이면 arr[i] ≠ arr[j] 입니다.
// divisor는 자연수입니다.
// array는 길이 1 이상인 배열입니다.

// function solution(arr, divisor) {
//     var answer = [];


//     for(let i=0; i<arr.length; i++){
//         if(arr[i]%divisor == 0) answer.push(arr[i]);
//     }

//     answer.length == 0 ? answer.push(-1) : answer;

//     // 첫 번째 인수가 두 번째 인수보다 작을 경우 - 값
//     // 두 인수가 같을 경우 0
//     // 첫 번째 인수가 두 번째 인수보다 클 경우 + 값
//     return answer.sort(function(a,b){return a-b;});
// }
// console.log(solution([5, 9, 7, 10], 5));





// 15
// 문제 설명
// 길이가 같은 두 1차원 정수 배열 a, b가 매개변수로 주어집니다. a와 b의 내적을 return 하도록 solution 함수를 완성해주세요.

// 이때, a와 b의 내적은 a[0]*b[0] + a[1]*b[1] + ... + a[n-1]*b[n-1] 입니다. (n은 a, b의 길이)

// 제한사항
// a, b의 길이는 1 이상 1,000 이하입니다.
// a, b의 모든 수는 -1,000 이상 1,000 이하입니다.
// function solution(a, b) {
//     var answer = 0;

//     for(let i=0; i<a.length; i++){
//         answer += a[i]*b[i]
//     }

//     return answer;
// }
// console.log(solution([-1,0,1], [1,0,-1]))



// 16
// 문제 설명
// 대문자와 소문자가 섞여있는 문자열 s가 주어집니다. s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return 하는 solution를 완성하세요. 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다. 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.

// 예를 들어 s가 "pPoooyY"면 true를 return하고 "Pyy"라면 false를 return합니다.

// 제한사항
// 문자열 s의 길이 : 50 이하의 자연수
// 문자열 s는 알파벳으로만 이루어져 있습니다.

// function solution(s){
//     var answer = true;

//     let small = s.toLowerCase();
//     let p = [];
//     let y = [];
//     for(let i=0; i<small.length; i++){

//         if(small.charAt(i) == 'p'){
//             p.push(small.charAt(i));
//         }else if(small.charAt(i) == 'y'){
//             y.push(small.charAt(i));
//         }

//     }

//     answer = p.length === y.length ? true : false ;

//     return answer;
// }
// console.log(solution("Pyy"));




// 17
// 문제 설명
// 문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.

// 제한 사항
// s는 길이 1 이상, 길이 8 이하인 문자열입니다.

// function solution(s) {
//     var answer = true;

//     answer = (s.length === 4 || s.length === 6) && s == parseInt(s)

//     return answer;
// }
// console.log(solution("1234"));



// 18
// 문제 설명
// String형 배열 seoul의 element중 "Kim"의 위치 x를 찾아, "김서방은 x에 있다"는 String을 반환하는 함수, solution을 완성하세요. seoul에 "Kim"은 오직 한 번만 나타나며 잘못된 값이 입력되는 경우는 없습니다.

// 제한 사항
// seoul은 길이 1 이상, 1000 이하인 배열입니다.
// seoul의 원소는 길이 1 이상, 20 이하인 문자열입니다.
// "Kim"은 반드시 seoul 안에 포함되어 있습니다.

// function solution(seoul) {
//     var answer = '';

//     answer = `김서방은 ${seoul.indexOf('Kim')}에 있다`;

//     return answer;
// }
// console.log(solution(["Jane", "Kim"]));



// 19
// 길이가 n이고, "수박수박수박수...."와 같은 패턴을 유지하는 문자열을 리턴하는 함수, solution을 완성하세요. 예를들어 n이 4이면 "수박수박"을 리턴하고 3이라면 "수박수"를 리턴하면 됩니다.

// 제한 조건
// n은 길이 10,000이하인 자연수입니다.

// function solution(n) {
//     var answer = '수박';

//     let result = answer.repeat(n);

//     return result.substring(0,result.length-n);;
// }
// console.log(solution(7))




// 20
// 문제 설명
// 수많은 마라톤 선수들이 마라톤에 참여하였습니다. 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.

// 마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

// 제한사항
// 마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다.
// completion의 길이는 participant의 길이보다 1 작습니다.
// 참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다.
// 참가자 중에는 동명이인이 있을 수 있습니다.

// 어이가 없네 ;;;;;;;;;;;
// function solution(participant, completion) {

//     participant.sort()
//     completion.sort()
//     for(let i=0; i<participant.length; i++){
//         if(completion[i] !== participant[i]){
//             return participant[i];
//         }
//     }
// }
// console.log(solution(["marina", "josipa", "nikola", "vinko", "filipa"], ["josipa", "filipa", "marina", "nikola"]));



// 21
// 문제 설명
// 문자열 s는 한 개 이상의 단어로 구성되어 있습니다. 각 단어는 하나 이상의 공백문자로 구분되어 있습니다. 각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.

// 제한 사항
// 문자열 전체의 짝/홀수 인덱스가 아니라, 단어(공백을 기준)별로 짝/홀수 인덱스를 판단해야합니다.
// 첫 번째 글자는 0번째 인덱스로 보아 짝수번째 알파벳으로 처리해야 합니다.

// function solution(s) {
//     var answer = '';

//     let word = s.split(' ');

//     word.forEach((item,index) => {
//         item += ' ';
//         for(let i=0; i<item.length; i++){
//             answer += i%2 == 0 ? item[i].toUpperCase() : item[i].toLowerCase();
//         }
//     });

//     return answer.substring(0,answer.length-1);
// }
// console.log(solution("song won seok"))




// 22
// 문제 설명
// 자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
// 예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.

// 제한사항
// N의 범위 : 100,000,000 이하의 자연수


// function solution(n)
// {
//     var answer = 0;
    
//     let str = n.toString();

//     for(let i=0; i<str.length; i++){
//         answer += parseInt(str[i])
//     }  

//     return answer;
// }
// console.log(solution(123));



// 23
// 문제 설명
// 자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.

// 제한 조건
// n은 10,000,000,000이하인 자연수입니다.

// function solution(n) {
//     var answer = [];

//     let str = n.toString();

//     for(let i=0; i<str.length; i++){
//         answer.push(parseInt(str[i]))
//     }

//     return answer.reverse();
// }
// console.log(solution(12345));



// 24
// 문제 설명
// 함수 solution은 정수 n을 매개변수로 입력받습니다. n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요. 예를들어 n이 118372면 873211을 리턴하면 됩니다.

// 제한 조건
// n은 1이상 8000000000 이하인 자연수입니다.
// function solution(n) {
//     var answer = [];
//     let str = n.toString();
//     for(let i=0; i<str.length; i++){
//         answer.push(str[i]);
//     }

//     str = answer.sort((a, b) => b - a).join('');

//     return parseInt(str);
// }
// console.log(solution(118372))



// 25
// 문제 설명
// 임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다.
// n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.

// 제한 사항
// n은 1이상, 50000000000000 이하인 양의 정수입니다.
// function solution(n) {
//     var answer = 0;

//     let x = Math.sqrt(n);
//     Number.isInteger(x) === true ? answer = Math.pow(x+1, 2) : answer = -1;

//     return answer;
// }
// console.log(solution(121));



// 26
// 문제 설명
// 정수를 저장한 배열, arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수, solution을 완성해주세요. 단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴하세요. 예를들어 arr이 [4,3,2,1]인 경우는 [4,3,2]를 리턴 하고, [10]면 [-1]을 리턴 합니다.

// 제한 조건
// arr은 길이 1 이상인 배열입니다.
// 인덱스 i, j에 대해 i ≠ j이면 arr[i] ≠ arr[j] 입니다.

// function solution(arr) {
//     var answer = [];

//     let minVal = Math.min(...arr)

//     answer = arr.filter((item) => {
//         return item !== minVal;
//     });

    

//     return answer.length === 0 ? answer.concat(-1) : answer;
// }
// console.log(solution([4,3,2,1]));



// 27
// 문제 설명
// 1937년 Collatz란 사람에 의해 제기된 이 추측은, 주어진 수가 1이 될때까지 다음 작업을 반복하면, 모든 수를 1로 만들 수 있다는 추측입니다. 작업은 다음과 같습니다.

// 1-1. 입력된 수가 짝수라면 2로 나눕니다. 
// 1-2. 입력된 수가 홀수라면 3을 곱하고 1을 더합니다.
// 2. 결과로 나온 수에 같은 작업을 1이 될 때까지 반복합니다.
// 예를 들어, 입력된 수가 6이라면 6→3→10→5→16→8→4→2→1 이 되어 총 8번 만에 1이 됩니다. 위 작업을 몇 번이나 반복해야하는지 반환하는 함수, solution을 완성해 주세요. 단, 작업을 500번을 반복해도 1이 되지 않는다면 –1을 반환해 주세요.

// 제한 사항
// 입력된 수, num은 1 이상 8000000 미만인 정수입니다.

// function solution(num) {
//     var answer = 0;

//     let count = 0;
//     for(let i=0; i<500; i++){
//         if(num !== 1){
//             if(num%2 === 0){
//                 num/=2;
//             }else {
//                 num = num*3+1;
//             }
//             count += 1;
//         }
//     }
    
//     answer = count !== 500 ? count : -1;

//     return answer;
// }
// console.log(solution(6));



// 28
// 문제 설명
// 양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다. 예를 들어 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수입니다.
// 자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수, solution을 완성해주세요.

// 제한 조건
// x는 1 이상, 10000 이하인 정수입니다.

// function solution(x) {
//     var answer = true;
//     let sum = 0;
//     let str = x.toString();
//     for(let i=0; i<str.length; i++){
//         sum += parseInt(str[i])
//     }

//     answer = x%sum === 0 ? true : false;

//     return answer;
// }
// console.log(solution(13));

















