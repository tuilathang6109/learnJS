//EX 
var courses = [ 
    {
    id: 1,
    name: 'Javascript',
    coin: 250
},
{
    id: 2,
    name: 'HTML, CSS',
    coin: 0
},
{
    id: 3,
    name: 'Ruby',
    coin: 0
},
{
    id: 4,
    name: 'PHP',
    coin: 0
},
{
    id: 5,
    name: 'ReactJS',
    coin: 0
},
] 
 
// 1. forEarch() : 
    //EX 1 : duyệt qua từng phần tử của mảng (CALLBACK chưa học)
    // courses.forEach(function(index , course){
    //     console.log(index , course);
    // });

// 2. every() ;
    // EX 2 : chỉ trả vè True/false => kiểm tra điều kiện từ trên xuống dưới (trái qua phải)
    var isFree = courses.every(function(index , course){
            return course.coin === 0 ;
        });

    console.log(isFree);