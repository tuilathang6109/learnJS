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
    // EX 2 : chỉ trả vè True/false => kiểm tra tất điều kiện từ trên xuống dưới (trái qua phải)
    // nếu có 1 điều kiện ko thỏa vẫn sẽ trả về giá trị false (Tương tự &&)
    // var isFree = courses.every(function(index , course){
    //         return course.coin === 0 ;
    //     });

    // console.log(isFree);

// 3. Some() ;

    // EX 3 : chỉ trả vè True/false => kiểm tra tất điều kiện từ trên xuống dưới (trái qua phải)
    // nếu có 1 điều kiện thỏa vẫn sẽ trả về giá trị true (Tương tự || )
    // var isFree = courses.every(function(index , course){
    //         return course.coin === 0 ;
    //     });

    // console.log(isFree);

// 4. Find() ;

    // EX4 : 
    // var course = courses.find(function(index , course){
    //             return course.name === 'ReactJS';
    //         })
    
    //     console.log(course);
    


// 6. map() :

//     EX 6 : 
       
        // var newCourses = courses.map(function(course, index){
        //     console.log(course);
        // //     ví dụ 2. // return 123 ;
        //     // return {
        //     //     id: course.id,
        //     //     name: `khoa hoc: ${course.name}`,
        //     //     coin: course.coin,
        //     //     coinText: `gia: ${course.coin}`
        //     // }
        // });
        // console.log(newCourses)
        // CÁCH HOẠT DỘNG:
         // + map() sẽ duyệt qua từng phần tử của mảng/object
         // + mỗi khi duyệt qua từng phần tử => sẽ trả về phần tử đó cho đối số của hảm
         // + * khi return vào giá trị nào thì sẽ trả về chính giá trị đó cho từng mảng cũ: ví dụ return 123
         // + index : đối số  thứ 2 (key), đánh dấu thứ tự phần tử mảng

// 7. Reduce();

    //     EX 7 : 
            
    //     var sports = [
    //     {
    //         name: 'Bơi lội',
    //         gold: 11
    //     },
    //     {
    //         name: 'Boxing',
    //         gold: 3
    //     },
    //     {
    //         name: 'Đạp xe',
    //         gold: 4
    //     },
    //     {
    //         name: 'Đấu kiếm',
    //         gold: 5
    //     },
    // ]

    // function getTotalGold(sports) {
    //     var total = sports.reduce(function(soHuyChuong,rank){
    //         return soHuyChuong + rank.gold ;
    //     },0);
    //     return total ;
    // }

    // // Expected results:
    // console.log(getTotalGold(sports)) // Output: 23

    // Ex 8 : flat (làm phẳng mảng bằng reduce) ;

        // var depthArray = [1,2,[3,4],5,6,[7,8,9]];
        // var flatArray = depthArray.reduce(function(flatOutput, depthItem){
        //     return flatOutput.concat(depthItem);
        // },[]) // ***xem lại ví dụ để hiểu rõ hơn
        // console.log(flatArray) ;

    // EX 9 : hãy coi lại video ***



    // EX 10 : tự tạo funtion reduce():
        // Array.prototype.reduce2 = function (callback, results){
        // let i = 0; 
        // if (arguments.length < 2){
        //     i = 1;
        //     results = this[0];
        // };
        
        // for ( ; i < this.length; i++){
        //     results = callback(results, this [i], i, this);
        // };
        // return results;
        // };

        // const numbers = [1, 2, 3, 4, 5];

        // const result = numbers.reduce2((total, number) => {
        //     return total + number;
        // });

        // console.log(result);