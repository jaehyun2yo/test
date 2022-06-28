// // post 방식으로 추가 하기 
// const newMember = {
//     name : 'jerry',
//     email : 'jerre@nabver.com',
//     department : 'engineering'
// };

// fetch('https://learn.codeit.kr/api/members', {
//     method : 'POST',
//     body : JSON.stringify(newMember),
// })
//     .then((response) => response.text())
//     .then((result) => { console.log(result);});


// // get 방식으로 조회하기 
// fetch('https://learn.codeit.kr/api/members')
//     .then((response) => response.text())
//     .then((result) => {console.log(result); });


// // 수정
//     const member = {
//         name : 'Alice',
//         email : 'alice@naver.com',
//         department : 'marketing'
//     };
    
//     fetch('https://learn.codeit.kr/api/members/2', {
//         method : 'PUT',
//         body : JSON.stringify(member),
//     })
//         .then((response) => response.text())
//         .then((result) => { console.log(result);});


// //삭제 
//     fetch('https://learn.codeit.kr/api/members/2', {
//         method : 'DELETE',
//         })
//         .then((response) => response.text())
//         .then((result) => { console.log(result);});

console.log('hello world');