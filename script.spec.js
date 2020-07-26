describe ('Написать ф-ю, принимающую 2 объекта и выводящую число обозначающее количество несовпадений в них. Покрыть тестами', function () {
    describe ( 'В качестве первого объекта передается: ', function () {
        it ( 'Строка:', function () {
            assert.isNaN ( getNumMim ( 'text', twoObject ) ) ;
        } ) ;
        it ( 'Число:', function () {
            assert.isNaN ( getNumMim ( 123, twoObject) ) ;
        } ) ;
        it ( 'Булево значение:', function () {
            assert.isNaN ( getNumMim ( true, twoObject) ) ;
        } ) ;
    } ) ;
    describe ( 'В качестве второго объекта передается: ', function () {
        it ( 'Строка:', function () {
            assert.isNaN ( getNumMim ( oneObject, 'text' ) ) ;
        } ) ;
        it ( 'Число:', function () {
            assert.isNaN ( getNumMim ( oneObject, 123) ) ;
        } ) ;
        it ( 'Булево значение:', function () {
            assert.isNaN ( getNumMim ( oneObject, true ) ) ;
        } ) ;
    } ) ;
}) ;