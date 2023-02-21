// 1 . for :
    // EX 1
    // for (var i = 1; i <= 1000; i++) {
    //     console.log (i);
    // }
    // EX 2 : in ra các phần tử ngẫu nhiên nằm trong giới hạn max min của mảng
        //  function getRandNumbers(min, max, length) {
        //     var arr = [] ;
        //     for (var i=0; i < length; i++ ){
        //     var randNumber = Math.random() * ((max - min) + min);
        //     arr.push(Math.floor(randNumber))
        //     };
        //     return arr ;
        //  }

        //  var a = getRandNumbers(1,20,10);
        //  console.log(a);
    
    // EX 3 : Tính tổng các phần tử của mảng
        // var arr = [1, 2, 3] ;
        // function getTotal(arr) {
        //     var a = arr.length ;
        //     var total = 0 ;
        //     for (var i = 0; i<a; i++)
        //     {
        //         total = total + arr[i];
        //     } 
        //     return total ;
        // } 
        // console.log (getTotal(arr));
    
    // EX 4 : : tính tổng giá trị đơn hàng khi phẩn tử arr là 1 object
        // var orders = [
        //     {
        //         name: 'Khóa học HTML - CSS Pro',
        //         price: 3000000
        //     },
        //     {
        //         name: 'Khóa học Javascript Pro',
        //         price: 2500000
        //     },
        //     {
        //         name: 'Khóa học React Pro',
        //         price: 3200000
        //     }
        // ]
        // var lengthOrders = orders.length;
        // function getTotal (arr) {
        //     var total = 0 ;
        //     for (var i = 0; i<lengthOrders ; i++ ) {
        //         total += arr[i].price ;
        //     }
        //     return total ;
        // }
        // console.log(getTotal(orders)) ;

/// 2. for/in 
    // EX 1 : is object
        // var myInfo = {
        //     name : 'thang', 
        //     age : 23,
        //     address : 'Dong Nai'
        // };
        //     for (var key in myInfo) {
        //         console.log(myInfo[key]) // console.log(myInfo[key])
        //     };

    // EX 2 : is Array 

        // var languages = [
        //     'javascrip',
        //     'PHP',
        //     'ruby'
        // ];
        // for (var keysss in languages) {
        //     console.log (keysss); // console.log (languages[keysss])
        // }

    // EX 3: Is String:
        // var languages = 'javascrips' ;

        // for (var words in languages) {
        //     console.log(languages[words]) ;
        // }
    
// 3. for/of : 
    //Ex 1 : đối với mảng
        // var languages = [
        //     'javascrip',
        //     'PHP',
        //     'Java'
        // ]
        // for (var value of languages) {
        //     console.log (value)
        // }
    //Ex 2 : đối với Chuổi : lấy ra giá trị của mỗi phần tử trong chuỗi

    //Ex 3 : đối với object phải trả về 1 mảng sau đó mới có thể lấy value

        //**
    // var myInfo = {
    //     name : 'thangvu',
    //     age : 23,
    //     address : 'Nhơn trach - dong nai'
    // }
    
    // for (var value of Object.values(myInfo)) { // hoặc for (var value of Object.keys(myInfo))
    //     console.log (value) ;
    // }

//4. While
    //EX 1 :

        // var i = 0 ; 

        // while (i < 1000) {
        //     i++;
        //     console.log(i);
        // }


//5. Do While 

    // EX 1 : // vòng lặp Do While sẽ kiểm tra điều kiện từ lần lặp thứ 2 trở đi

    //  var i = 0 ;
     
    //      do {
    //          i++ ; 

    //      console.log(i);
        
    //          } while (i<10)

    //EX 2 : Ứng dụng của Do while : NẠP THẺ
        // Nếu nạp thẻ không thành công 3 lần sẽ out vòng lặp

        // var i = 0 ;
        // var isSucces = false ; // flag
        // do {
        //     i++ ;
        //     console.log ('nạp thẻ lần' + i ) ;
        //     if(false) {
        //         isSucces = true ;
        //     }

        // }while (!isSucces && i <= 3 )

// 7. Nested Loop : 

    // EX 1 : 
        // var myArray = [
        //     [1,2],
        //     [3,4],
        //     [5,6]
        // ]
        // for (var i = 0 ; i < myArray.length ; i++ ) {
        //     for (var j = 0; j < myArray[i].length; j++ ) 
        //     {
        //         console.log(myArray[i][j]) ;
        //     }
        // }