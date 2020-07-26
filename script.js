'use strict' ;

alert ( 'Написать ф-ю, принимающую 2 объекта и выводящую число обозначающее количество несовпадений в них.' +
        `\nПокрыть тестами` ) ;

let oneObject = {
    a : 'a' ,
    b : ''
} ;

let twoObject = {
    a : 'a' ,
    b : {
        a : '' ,
        b : {
            a : ''
        }
    } ,
    c : {
        b : {
            a : '' ,
            b : {
                a : ''
            }
        }
    }   
} ;

function getNumMim ( objOne, objTwo ) {

    if ( typeof ( objOne ) === 'object' ) {
        if ( typeof (objTwo) === 'object' ) {
            let num = 0 ;

            function getValueObject ( obj , valuePre ) {

                for ( let key in obj ) {
                    console.log (key) ;
                    if ( key === valuePre ) {
                        ++num ;
                        console.log ( key, ' = ', valuePre )
                    }
                    if ( typeof ( obj [key] ) === 'object' ) {
                        getValueObject ( obj [key] , valuePre ) ;
                    }        
                }
            }

            for ( let keyOne in objOne ) {
                getValueObject ( objTwo, keyOne ) ;
                if ( typeof (objOne [keyOne]) === 'object' ) {
                    getNumMim ( objOne [keyOne] ) ;
                }
            }

            return num ;
        }
        else {
            return NaN ;
        }
    }
    else {
        return NaN ;
    }
} 

console.log ( 'Совпадений - ', getNumMim ( oneObject, twoObject ) ) ;