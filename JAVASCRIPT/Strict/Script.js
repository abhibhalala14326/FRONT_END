// 'use strict'

// //  myvar = 12;



//  function name(params) {
//      'use strict'
     
//    let  naem = 'abhi'
//  }

//  name()






// Things Not Allowed in Strict Mode and  Rulse
// 1. Undeclared variable is not allowed.
{
    // 'use strict';

    // a = 'hello'; // throws an error
}

// 2. Undeclared objects are not allowed.

{
    // 'use strict';

    // person = {name: 'Carla', age: 25}; // throws an error
}

// 3. Deleting an object is not allowed.

{
    // 'use strict';

    // let person = {name: 'Carla'};

    // delete person; // throws an error
}

// 4. Duplicating a parameter name is not allowed.

{
    // "use strict";

    // function hello(p1, p1) { console.log('hello')}; // throws an error

    // hello();
}

// 5. Assigning to a non-writable property is not allowed.

{
    // 'use strict';

    // let obj1 = {};

    // Object.defineProperty(obj1, 'x', { value: 42, writable: false });

    // // assignment to a non-writable property
    // obj1.x = 9; // throws an error
}

// 6. Assigning to a getter-only property is not allowed.

{
    // 'use strict';

    // let obj2 = { get x() { return 17; } };

    // // assignment to a getter-only property
    // obj2.x = 5; // throws an error
}

// 7. Assigning to a new property on a non-extensible object is not allowed.

{
    // 'use strict';

    // let obj = {};
    // Object.preventExtensions(obj);
    // // Assignment to a new property on a non-extensible object
    // obj.newValue = 'new value'; // throws an error
}

// 8. Octal syntax is not allowed.

{
    // 'use strict';

    // let a = 010; // throws an error
}

// 9. The variable name arguments and eval are not allowed.

{
    // 'use strict';

    // let arguments1 = 'hello'; // throws an error

    // let eval = 44;

    // console.log(eval)
}

// 10. You cannot also use these reserved keywords in strict mode.

// implements interface let package private protected public static yield




