/**
 * Toán tử:
    1. Toán tử số học - Arithmetic
        vd: var a = 1 + 2 ;
    2. Toán tử gán - Assignment
        vd: var fullName = 'Vu Van Thang' ;
    3. Toán tử so sánh - Comparison
        vd: if (a > b) {<lệnh thực thi>}
        *** 
            == : bằng
            > : lớn hơn
            < : nhỏ hơn
            >= : lớn hơn bằng
            <= : bé hơn bằng
    4. Toán tử logic - Logical
        vd: if ( a>0 && b>0 )
        *** 
            && : và;         
 */


    /*-------TOÁN TỬ SỐ HỌC-------*/ 
/*
1. Cộng : (+)
   Ex:  var a = 1
        var b = 2
        var c = a+b;
2. Trừ : (-)
    Ex: var a = 1
        var b = 2
        var c = a-b;
3. Nhân : (*)
        //
4. chia : (/)
        //
5. Lũy thừa (**)
        //
6. Chia lấy dư (%)
        9/4 = 2 dư 1 
7. Tăng 1 giá trị số : (++)
    Ex: var a = 5
        a++;
        console.log(a);
    KQ a = 6 ;
8. Giảm 1 giá trị số : (--) 
        //

*/



 /*-------TOÁN TỬ SỐ GÁN-------*/ 


 /*
    TOÁN TỬ             VÍ DỤ           TƯƠNG ĐƯƠNG
    
1.     =                X = Y           X = Y
    EX: var a = 1; // 1 được gán cho a

2.     +=               X +=Y           X = X + Y 
    EX: var a = 1;
    a += 2 ;
    console.log(a);
    **KQ : a = 3

3.     -=               X -=Y           X = X - Y 
                //
4.     *=               X *=Y           X = X * Y 
                //
5.     /=               X /=Y           X = X / Y
                //
6.     **=              X *=Y           X = X ** Y 
                //

 */


                /*-------TOÁN TỬ  ( ++ ) và ( -- )-------*/ 

/*

*** Khái niện :
    - Prefix : tiền tố
    - Postfix : hậu tố 

    Ex:
        var a = 6 ;
        a++ hoặc ++a ; // toán tử được thực thi tại đây
        console.log (a);

        ** KQ : a ++ = 7 
                ++a = 7 

    EX2 :
        var a = 6 ;
        console.log (++a);

        ** KQ : console.log (++a); = 7 // việc 1:  + 1 cho a : a = a +1 => a = 7
                                          Việc 2 : trả về a sau khi được + 1 

                console.log (a++); = 6 // việc 1:  aCoppy = 6 
                                          Việc 2 : + 1 cho a, a = a + 1 => a = 7
                                          Việc 3: trả về biến aCoppy

        *****
        var number = 6;
        var output = number ++ + --number ;
                // number ++ : là hậu tố <trả về number (6)>
                // --number : đã cong 1 vào number (++) , number hiện tại của number (--) là 7  
                // trừ đi 1 của number(--) -> -1 + 7 
                => (6 + ((-1) 7 )
        console.log (output) 
        ** KQ = 12

        Bài tập 1
        number = 6    

        number++ * 2 - --number*2 ;
        
        =>  1 . number ++ = 6
            2 . --number = 6 
            3 . 6 (++) * 2 = 12
            4 . 6 (--) * 2 = 12
            5 . 12 - 12 = 0
        => 0
        Bài tập 2 
        number = 6 ;
         ++number * 2 - number--*2 ;
         1. number (++) = 7
         2. number (--) = 7
         3. 7 (++)*2 = 14
         4. 7 (++)*2 = 14
         5. 14-14=0 ;
         => 0 ;
            * giải thích :
                        var number = 6 ;
                        console.log (++number); = 7
                        console.log (number--); = 7

*/

/*-----------------------KIỂU DỮ BOOLEAN---------------------*/ 

/*
Giá trị :
    + True : đúng
    + False : sai
*/ 


/*----------------------CÂU ĐIỀU KIỆN IF ELSE---------------------*/ 
/*
    protetype
    if (<Điều kiện đúng 'boolean' >){

    } else <điều kiện sai> {

    }

    *** Lưu ý :
        - Trong JS có 6 giá trị luôn trả về giá trị SAI (FALSY)  :
            + 0
            + False
            + '' // không được có dấu cách
            + undefine
            + NaN
            + Null

        - còn lại tất cả là điều kiện đúng
*/

/*----------------------TOÁN TỬ LOGICAL---------------------*/ 
/*
1. && : AND
2. || : OR 
3. ! : NOT
*/


/*----------------------KIỂU DỮ LIỆU---------------------*/ 

/*
1. Dữ Liệu dạng nguyên thủy - Primitive Data
    - Number
        EX: var a = 1 ;
            var b = 2 ;
    - String
        EX: var fullName = 'ThangVu'
            var sbd = '0251'
            *** Lưu ý : dấu nháy đơn/ kép trong một chuỗi : 
            'thang /' vu ' hoặc  "thang ' vu" hoặc 'thang " vu'
    - Boolean
        EX: isSuccess = True/Flase ;
    - Undefined
        Ex: Var age ;
        là kiểu dữ kiệu khi tạo ra 1 biến nhưng không gán giá trị cho nó
    - Null 
        Ex: var isNull = null;
    - Symbol
        Ex: var id = Symbol ('id');
2. Dữ liệu kiểu phức tạp - Complex Data
    - Funtion
        Ex: myFunction = function() {
            alert('hi, Xin chao cac ban!');
        }
        myFuntion();

        *** Lưu ý : Để thực thi 1 biến có giá trị Function thì phải gọi nó ra
    - Object
        + Object
            Ex: var myObject = {
                name: 'thangvu',
                age: 23,
                adress: 'Dong Nai'
                myFunction: function () {

                }
            };

        + Array 
            Ex: myArray = ['js', 'php', 'ruby'];
3. các kiểm tra kiểu dữ liệu:
    - Typeof
        Ex: var a = 1 ;
        console.log (typeof a);
        KQ : number
*/ 


/*----------------------TOÁN TỬ SO SÁNH---------------------*/ 
/*

1. == : SO SÁNH BẰNG // CHỈ SO SÁNH VALUE
2. === : SO SÁNH BẰNG TUYỆT ĐỐI // SO SÁNH VALUE && KIỂU DỮ LIỆU

    EX : Var a = 1 ;
    Ex : var b = '1';
    console.log (a==b) ; True
    console.log (a===b) ; False
3. != : SO SÁNH KHÁC 
4. !== : SO SÁNH KHÁC TUYỆT ĐỐI 

 */


/*----------------------TOÁN TỬ LOGIC VÀ CÂU ĐIỀU KIỆN IF---------------------*/ 
/*
HIỂU HƠN VỀ CÂU LỆNH ĐIỀU KIỆN VÀ PHÉP SO SÁNH
 1. khi dùng toán tử so sánh
        EX: var a = 1;
            var b = 2;
        var result = a < b ;
        console.log ('result'. result) // true
        if (result hoặc a < b ) // khi truyền 1 biểu thức so sánh thì điều kiện sẽ hiểu sang kiểu Boolean (true/false)
        {
            console.log ("a < b") ;
        } else {
            console.log ("a > b")
        }
    KQ : a < b 

2. khi có toán tử Logic
    Đối với Toán tử &&
        - đối với toán tử logic sẽ ko trả về kiểu Boolean
        mà sẽ đi tìm giá trị Falsy theo thứ tự từ biểu thức bên trái qua bên phải của toán tử so sánh 
        nếu không có giá trị Falsy thì sẽ lấy giá trị cuối cùng bên phải
        EX : 
        var result = 'a' && 'NaN' && 'c'
        console.log(result); 
        KQ : NaN
    Đối với Toán tử ||
        Đi tìm giá trị Truthy từ biểu thức bên trái sang bên phải 
        var result = 'a' && 'NaN' && 'c'
        console.log(result);
        KQ : a 
*** XEM LẠI VIDEO ĐỂ HIỂU HƠN
*/