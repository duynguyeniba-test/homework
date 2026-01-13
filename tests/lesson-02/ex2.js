// const myName = "Alex";
// myName = "Nagi";            //Lỗi: không thể gắn lại giá trị cho một hằng số - const
// console.log(myName);        //Solution: hướng xử lý của mình là giữ giá trị myName = Alex theo hằng số, và đưa giá trị myName = Nagi vào code block. Cách này có thể sử dụng const lẫn let.

//Chạy code sẽ ra hai giá trị Alex và Nagi.

const myName = "Alex";
console.log(myName);
{
    let myName = "Nagi";
    console.log(myName);
}