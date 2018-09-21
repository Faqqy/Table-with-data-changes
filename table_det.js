 

 
var jsonBig={
//по сути - вынужденный костыль там где по-хорошему у Солярис-Сервиса должна быть самостоятельная выгрузка из БД  
  
/*

Схема такова::

  Есть модель:
    От неё идут варианты ТО:
                        [0] ТО содержит массив с шаблоном, на основе которого потом идёт сопоставление
                            сам шаблон сейчас представляет собой всего лишь "галочки" над
                            (объём двигателя 1.4, объём 1.6, автомат, механика, с заменой масла, с заменой фильтра)
                              такой вариант сравнительно удачен если вдруг потребуется добавлять-убавлять характеристики
                              в таком случае придётся также подизменить генерацию массива подстановки параметров, т.к. он, очевидно, должен будет полностью попадать в эти критерии
                        [1] И массив с данными:
                          Три вложенных массива - это пакеты Эконом, Оптимал, Оригинал соответственно:
                                                                                                 [0] Массив со строками таблицы
                                                                                                 [1] Цена


При копировании и изменении нужно очень тщательно следить за запятыми и квадратными скобками, уезжают только так
Плюс у JSON требование, чтобы обязательно у последнего элемента на текущем уровне в конце не было запятой
т.е. {1,2,3} - норм   {1,2,3,} - выдаст ошибку. Это и для квадратных скобок справедливо
*/
  "m1014":{
    "to1":[
      [[ true, true, true, true, false, false ],
      [ 
        [ [ "SHELL", "Hyundai/KIA", "MANN-FILTER", "TSN", "TSN", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-" ], 2030],
        [ [ "Mobil", "Hyundai/KIA", "Mahle/Knecht", "MANN-FILTER", "MITWELL", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-" ], 2970],
        [ [ "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-" ], 3240]
      ]],
      [[ true, true, true, false, true, false ],
      [ 
        [ [ "SHELL", "Hyundai/KIA", "MANN-FILTER", "TSN", "TSN", "-", "-", "KIXX", "-", "Hyundai/KIA", "-", "-", "-", "-", "-" ], 4560],
        [ [ "Mobil", "Hyundai/KIA", "Mahle/Knecht", "MANN-FILTER", "MITWELL", "-", "-", "ZIC", "-", "Hyundai/KIA", "-", "-", "-", "-", "-" ], 5970],
        [ [ "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "-", "-", "Hyundai/KIA", "-", "Hyundai/KIA", "-", "-", "-", "-", "-" ], 6760]
      ]],
      [[ true, true, true, false, true, true ],
      [ 
        [ [ "SHELL", "Hyundai/KIA", "MANN-FILTER", "TSN", "TSN", "-", "-", "KIXX", "Sat", "Hyundai/KIA", "Victor Reinz", "-", "-", "-", "-" ], 5420],
        [ [ "Mobil", "Hyundai/KIA", "Mahle/Knecht", "MANN-FILTER", "MITWELL", "-", "-", "ZIC", "Hyundai/KIA", "Hyundai/KIA", "Victor Reinz", "-", "-", "-", "-" ], 7080],
        [ [ "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "-", "-", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Victor Reinz", "-", "-", "-", "-" ], 7870]
      ]],
      [[ true, true, false, true, true, false ],
      [ 
        [ [ "SHELL", "Hyundai/KIA", "MANN-FILTER", "TSN", "TSN", "-", "-", "-", "-", "-", "-", "KIXX", "Hyundai/KIA", "-", "-" ], 2860],
        [ [ "Mobil", "Hyundai/KIA", "Mahle/Knecht", "MANN-FILTER", "MITWELL", "-", "-", "-", "-", "-", "-", "ZIC", "Hyundai/KIA", "-", "-" ], 4300],
        [ [ "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "-", "-", "-", "-", "-", "-", "Hyundai/KIA", "Hyundai/KIA", "-", "-" ], 4320]
      ]]
    ],
    "to2":[
      [[ true, true, true, true, false, false ],
      [
        [ [ "SHELL", "Hyundai/KIA", "MANN-FILTER", "TSN", "TSN", "-", "-", "-", "-", "-", "-", "-", "-", "Castrol", "-" ], 2540],
        [ [ "Mobil", "Hyundai/KIA", "Mahle/Knecht", "MANN-FILTER", "MITWELL", "-", "-", "-", "-", "-", "-", "-", "-", "Castrol", "-" ], 3480],
        [ [ "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "-", "-", "-", "-", "-", "-", "-", "-", "Hyundai/KIA", "-" ], 4550]
      ]],
      [[ true, true, true, false, true, false ],
      [ 
        [ [ "SHELL", "Hyundai/KIA", "MANN-FILTER", "TSN", "TSN", "-", "-", "KIXX", "-", "Hyundai/KIA", "-", "-", "-", "Castrol", "-" ], 5070],
        [ [ "Mobil", "Hyundai/KIA", "Mahle/Knecht", "MANN-FILTER", "MITWELL", "-", "-", "ZIC", "-", "Hyundai/KIA", "-", "-", "-", "Castrol", "-" ], 6480],
        [ [ "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "-", "-", "Hyundai/KIA", "-", "Hyundai/KIA", "-", "-", "-", "Hyundai/KIA", "-" ], 8070] 
      ]],
      [[ true, true, true, false, true, true ],
      [ 
        [ [ "SHELL", "Hyundai/KIA", "MANN-FILTER", "TSN", "TSN", "-", "-", "KIXX", "Sat", "Hyundai/KIA", "Victor Reinz", "-", "-", "Castrol", "-" ], 5930],
        [ [ "Mobil", "Hyundai/KIA", "Mahle/Knecht", "MANN-FILTER", "MITWELL", "-", "-", "ZIC", "Hyundai/KIA", "Hyundai/KIA", "Victor Reinz", "-", "-", "Castrol", "-" ], 7590],
        [ [ "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "-", "-", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Victor Reinz", "-", "-", "Hyundai/KIA", "-" ], 9180]
      ]],
      [[ true, true, false, true, true, false ],
      [ 
        [ [ "SHELL", "Hyundai/KIA", "MANN-FILTER", "TSN", "TSN", "-", "-", "-", "-", "-", "-", "KIXX", "Hyundai/KIA", "Castrol", "-" ], 3370],
        [ [ "Mobil", "Hyundai/KIA", "Mahle/Knecht", "MANN-FILTER", "MITWELL", "-", "-", "-", "-", "-", "-", "ZIC", "Hyundai/KIA", "Castrol", "-" ], 4810],
        [ [ "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "-", "-", "-", "-", "-", "-", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "-" ], 5630]  
      ]] 
    ],
    "to3":[
      [[ true, true, true, true, false, false ],
      [ 
        [ [ "SHELL", "Hyundai/KIA", "MANN-FILTER", "TSN", "TSN", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-" ], 2030],
        [ [ "Mobil", "Hyundai/KIA", "Mahle/Knecht", "MANN-FILTER", "MITWELL", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-" ], 2970],
        [ [ "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-" ], 3240]
      ]],
      [[ true, true, true, false, true, false ],
      [ 
        [ [ "SHELL", "Hyundai/KIA", "MANN-FILTER", "TSN", "TSN", "-", "-", "KIXX", "-", "Hyundai/KIA", "-", "-", "-", "-", "-" ], 4560],
        [ [ "Mobil", "Hyundai/KIA", "Mahle/Knecht", "MANN-FILTER", "MITWELL", "-", "-", "ZIC", "-", "Hyundai/KIA", "-", "-", "-", "-", "-" ], 5970],
        [ [ "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "-", "-", "Hyundai/KIA", "-", "Hyundai/KIA", "-", "-", "-", "-", "-" ], 6760]
      ]],
      [[ true, true, true, false, true, true ],
      [ 
        [ [ "SHELL", "Hyundai/KIA", "MANN-FILTER", "TSN", "TSN", "-", "-", "KIXX", "Sat", "Hyundai/KIA", "Victor Reinz", "-", "-", "-", "-" ], 5420],
        [ [ "Mobil", "Hyundai/KIA", "Mahle/Knecht", "MANN-FILTER", "MITWELL", "-", "-", "ZIC", "Hyundai/KIA", "Hyundai/KIA", "Victor Reinz", "-", "-", "-", "-" ], 7080],
        [ [ "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "-", "-", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Victor Reinz", "-", "-", "-", "-" ], 7870]
      ]],
      [[ true, true, false, true, true, false ],
      [ 
        [ [ "SHELL", "Hyundai/KIA", "MANN-FILTER", "TSN", "TSN", "-", "-", "-", "-", "-", "-", "KIXX", "Hyundai/KIA", "-", "-" ], 2860],
        [ [ "Mobil", "Hyundai/KIA", "Mahle/Knecht", "MANN-FILTER", "MITWELL", "-", "-", "-", "-", "-", "-", "ZIC", "Hyundai/KIA", "-", "-" ], 4300],
        [ [ "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "-", "-", "-", "-", "-", "-", "Hyundai/KIA", "Hyundai/KIA", "-", "-" ], 4320]
      ]]
    ],
    "to4":[
      [[ true, true, true, true, false, false ],
      [
        [ [ "SHELL", "Hyundai/KIA", "MANN-FILTER", "TSN", "TSN", "Denso", "Just Drive", "-", "-", "-", "-", "-", "-", "Castrol", "Cool Stream" ], 4930],
        [ [ "Mobil", "Hyundai/KIA", "Mahle/Knecht", "MANN-FILTER", "MITWELL", "NGK", "Hyundai/KIA", "-", "-", "-", "-", "-", "-", "Castrol", "Ravenol" ], 6410],
        [ [ "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "-", "-", "-", "-", "-", "-", "Hyundai/KIA", "Hyundai/KIA" ], 7980]  
      ]],
      [[ true, true, true, false, true, false ],
      [
        [ [ "SHELL", "Hyundai/KIA", "MANN-FILTER", "TSN", "TSN", "Denso", "Just Drive", "KIXX", "-", "Hyundai/KIA", "-", "-", "-", "Castrol", "Cool Stream" ], 7460],
        [ [ "Mobil", "Hyundai/KIA", "Mahle/Knecht", "MANN-FILTER", "MITWELL", "NGK", "Hyundai/KIA", "ZIC", "-", "Hyundai/KIA", "-", "-", "-", "Castrol", "Ravenol" ], 9410],
        [ [ "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "-", "Hyundai/KIA", "-", "-", "-", "Hyundai/KIA", "Hyundai/KIA" ], 11500]
      ]],
      [[ true, true, true, false, true, true ],
      [
        [ [ "SHELL", "Hyundai/KIA", "MANN-FILTER", "TSN", "TSN", "Denso", "Just Drive", "KIXX", "Sat", "Hyundai/KIA", "Victor Reinz", "-", "-", "Castrol", "Cool Stream" ], 8320],
        [ [ "Mobil", "Hyundai/KIA", "Mahle/Knecht", "MANN-FILTER", "MITWELL", "NGK", "Hyundai/KIA", "ZIC", "Hyundai/KIA", "Hyundai/KIA", "Victor Reinz", "-", "-", "Castrol", "Ravenol" ], 10520],
        [ [ "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Victor Reinz", "-", "-", "Hyundai/KIA", "Hyundai/KIA" ], 12610]
      ]],
      [[ true, true, false, true, true, false ],
      [
        [ [ "SHELL", "Hyundai/KIA", "MANN-FILTER", "TSN", "TSN", "Denso", "Just Drive", "-", "-", "-", "-", "KIXX", "Hyundai/KIA", "Castrol", "Cool Stream" ], 5760],
        [ [ "Mobil", "Hyundai/KIA", "Mahle/Knecht", "MANN-FILTER", "MITWELL", "NGK", "Hyundai/KIA", "-", "-", "-", "-", "ZIC", "Hyundai/KIA", "Castrol", "Ravenol" ], 7740],
        [ [ "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "-", "-", "-", "-", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA" ], 9060] 
      ]]
    ],
    "to5":[
      [[ true, true, true, true, false, false ],
      [ [ [ "SHELL", "Hyundai/KIA", "MANN-FILTER", "TSN", "TSN", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-" ], 2030],
        [ [ "Mobil", "Hyundai/KIA", "Mahle/Knecht", "MANN-FILTER", "MITWELL", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-" ], 2970],
        [ [ "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-" ], 3240]
      ]],
      [[ true, true, true, false, true, false ],
      [
        [ [ "SHELL", "Hyundai/KIA", "MANN-FILTER", "TSN", "TSN", "-", "-", "KIXX", "-", "Hyundai/KIA", "-", "-", "-", "-", "-" ], 4560],
        [ [ "Mobil", "Hyundai/KIA", "Mahle/Knecht", "MANN-FILTER", "MITWELL", "-", "-", "ZIC", "-", "Hyundai/KIA", "-", "-", "-", "-", "-" ], 5970],
        [ [ "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "-", "-", "Hyundai/KIA", "-", "Hyundai/KIA", "-", "-", "-", "-", "-" ], 6760] 
      ]],
      [[ true, true, true, false, true, true ],
      [
        [ [ "SHELL", "Hyundai/KIA", "MANN-FILTER", "TSN", "TSN", "-", "-", "KIXX", "Sat", "Hyundai/KIA", "Victor Reinz", "-", "-", "-", "-" ], 5420],
        [ [ "Mobil", "Hyundai/KIA", "Mahle/Knecht", "MANN-FILTER", "MITWELL", "-", "-", "ZIC", "Hyundai/KIA", "Hyundai/KIA", "Victor Reinz", "-", "-", "-", "-" ], 7080],
        [ [ "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "-", "-", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Victor Reinz", "-", "-", "-", "-" ], 7870]
      ]],
      [[ true, true, false, true, true, false ],
      [
        [ [ "SHELL", "Hyundai/KIA", "MANN-FILTER", "TSN", "TSN", "-", "-", "-", "-", "-", "-", "KIXX", "Hyundai/KIA", "-", "-" ], 2860],
        [ [ "Mobil", "Hyundai/KIA", "Mahle/Knecht", "MANN-FILTER", "MITWELL", "-", "-", "-", "-", "-", "-", "ZIC", "Hyundai/KIA", "-", "-" ], 4300],
        [ [ "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "-", "-", "-", "-", "-", "-", "Hyundai/KIA", "Hyundai/KIA", "-", "-" ], 4320]
      ]]
    ],
    "to6":[
      [[ true, true, true, true, false, false ],
      [
        [ [ "SHELL", "Hyundai/KIA", "MANN-FILTER", "TSN", "TSN", "-", "-", "-", "-", "-", "-", "-", "-", "Castrol", "-" ], 2540],
        [ [ "Mobil", "Hyundai/KIA", "Mahle/Knecht", "MANN-FILTER", "MITWELL", "-", "-", "-", "-", "-", "-", "-", "-", "Castrol", "-" ], 3480],
        [ [ "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "-", "-", "-", "-", "-", "-", "-", "-", "Hyundai/KIA", "-" ], 4550] 
      ]],
      [[ true, true, true, false, true, false ],
      [
        [ [ "SHELL", "Hyundai/KIA", "MANN-FILTER", "TSN", "TSN", "-", "-", "KIXX", "-", "Hyundai/KIA", "-", "-", "-", "Castrol", "-" ], 5070],
        [ [ "Mobil", "Hyundai/KIA", "Mahle/Knecht", "MANN-FILTER", "MITWELL", "-", "-", "ZIC", "-", "Hyundai/KIA", "-", "-", "-", "Castrol", "-" ], 6480],
        [ [ "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "-", "-", "Hyundai/KIA", "-", "Hyundai/KIA", "-", "-", "-", "Hyundai/KIA", "-" ], 8070]
      ]],
      [[ true, true, true, false, true, true ],
      [
        [ [ "SHELL", "Hyundai/KIA", "MANN-FILTER", "TSN", "TSN", "-", "-", "KIXX", "Sat", "Hyundai/KIA", "Victor Reinz", "-", "-", "Castrol", "-" ], 5930],
        [ [ "Mobil", "Hyundai/KIA", "Mahle/Knecht", "MANN-FILTER", "MITWELL", "-", "-", "ZIC", "Hyundai/KIA", "Hyundai/KIA", "Victor Reinz", "-", "-", "Castrol", "-" ], 7590],
        [ [ "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "-", "-", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Victor Reinz", "-", "-", "Hyundai/KIA", "-" ], 9180]
      ]],
      [[ true, true, false, true, true, false ],
      [
        [ [ "SHELL", "Hyundai/KIA", "MANN-FILTER", "TSN", "TSN", "-", "-", "-", "-", "-", "-", "KIXX", "Hyundai/KIA", "Castrol", "-" ], 3370],
        [ [ "Mobil", "Hyundai/KIA", "Mahle/Knecht", "MANN-FILTER", "MITWELL", "-", "-", "-", "-", "-", "-", "ZIC", "Hyundai/KIA", "Castrol", "-" ], 4810],
        [ [ "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "-", "-", "-", "-", "-", "-", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "-" ], 5630]
      ]]
    ],
    "to7":[
      [[ true, true, true, true, false, false ],
      [
        [ [ "SHELL", "Hyundai/KIA", "MANN-FILTER", "TSN", "TSN", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-" ], 2030],
        [ [ "Mobil", "Hyundai/KIA", "Mahle/Knecht", "MANN-FILTER", "MITWELL", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-" ], 2970],
        [ [ "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-" ], 3240] 
      ]],
      [[ true, true, true, false, true, false ],
      [
        [ [ "SHELL", "Hyundai/KIA", "MANN-FILTER", "TSN", "TSN", "-", "-", "KIXX", "-", "Hyundai/KIA", "-", "-", "-", "-", "-" ], 4560],
        [ [ "Mobil", "Hyundai/KIA", "Mahle/Knecht", "MANN-FILTER", "MITWELL", "-", "-", "ZIC", "-", "Hyundai/KIA", "-", "-", "-", "-", "-" ], 5970],
        [ [ "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "-", "-", "Hyundai/KIA", "-", "Hyundai/KIA", "-", "-", "-", "-", "-" ], 6760]
      ]],
      [[ true, true, true, false, true, true ],
      [
        [ [ "SHELL", "Hyundai/KIA", "MANN-FILTER", "TSN", "TSN", "-", "-", "KIXX", "Sat", "Hyundai/KIA", "Victor Reinz", "-", "-", "-", "-" ], 5420],
        [ [ "Mobil", "Hyundai/KIA", "Mahle/Knecht", "MANN-FILTER", "MITWELL", "-", "-", "ZIC", "Hyundai/KIA", "Hyundai/KIA", "Victor Reinz", "-", "-", "-", "-" ], 7080],
        [ [ "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "-", "-", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Victor Reinz", "-", "-", "-", "-" ], 7870]
      ]],
      [[ true, true, false, true, true, false ],
      [
        [ [ "SHELL", "Hyundai/KIA", "MANN-FILTER", "TSN", "TSN", "-", "-", "-", "-", "-", "-", "KIXX", "Hyundai/KIA", "-", "-" ], 2860],
        [ [ "Mobil", "Hyundai/KIA", "Mahle/Knecht", "MANN-FILTER", "MITWELL", "-", "-", "-", "-", "-", "-", "ZIC", "Hyundai/KIA", "-", "-" ], 4300],
        [ [ "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "-", "-", "-", "-", "-", "-", "Hyundai/KIA", "Hyundai/KIA", "-", "-" ], 4320] 
      ]]
    ],
    "to8":[
      [[ true, true, true, true, false, false ],
      [
        [ [ "SHELL", "Hyundai/KIA", "MANN-FILTER", "TSN", "TSN", "Denso", "Just Drive", "-", "-", "-", "-", "-", "-", "Castrol", "Cool Stream" ], 4930],
        [ [ "Mobil", "Hyundai/KIA", "Mahle/Knecht", "MANN-FILTER", "MITWELL", "NGK", "Hyundai/KIA", "-", "-", "-", "-", "-", "-", "Castrol", "Ravenol" ], 6410],
        [ [ "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "-", "-", "-", "-", "-", "-", "Hyundai/KIA", "Hyundai/KIA" ], 7980]
      ]],
      [[ true, true, true, false, true, false ],
      [
        [ [ "SHELL", "Hyundai/KIA", "MANN-FILTER", "TSN", "TSN", "Denso", "Just Drive", "KIXX", "-", "Hyundai/KIA", "-", "-", "-", "Castrol", "Cool Stream" ], 7460],
        [ [ "Mobil", "Hyundai/KIA", "Mahle/Knecht", "MANN-FILTER", "MITWELL", "NGK", "Hyundai/KIA", "ZIC", "-", "Hyundai/KIA", "-", "-", "-", "Castrol", "Ravenol" ], 9410],
        [ [ "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "-", "Hyundai/KIA", "-", "-", "-", "Hyundai/KIA", "Hyundai/KIA" ], 11500]
      ]],
      [[ true, true, true, false, true, true ],
      [
        [ [ "SHELL", "Hyundai/KIA", "MANN-FILTER", "TSN", "TSN", "Denso", "Just Drive", "KIXX", "Sat", "Hyundai/KIA", "Victor Reinz", "-", "-", "Castrol", "Cool Stream" ], 8320],
        [ [ "Mobil", "Hyundai/KIA", "Mahle/Knecht", "MANN-FILTER", "MITWELL", "NGK", "Hyundai/KIA", "ZIC", "Hyundai/KIA", "Hyundai/KIA", "Victor Reinz", "-", "-", "Castrol", "Ravenol" ], 10520],
        [ [ "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Victor Reinz", "-", "-", "Hyundai/KIA", "Hyundai/KIA" ], 12610]
      ]],
      [[ true, true, false, true, true, false ],
      [
        [ [ "SHELL", "Hyundai/KIA", "MANN-FILTER", "TSN", "TSN", "Denso", "Just Drive", "-", "-", "-", "-", "KIXX", "Hyundai/KIA", "Castrol", "Cool Stream" ], 5760],
        [ [ "Mobil", "Hyundai/KIA", "Mahle/Knecht", "MANN-FILTER", "MITWELL", "NGK", "Hyundai/KIA", "-", "-", "-", "-", "ZIC", "Hyundai/KIA", "Castrol", "Ravenol" ], 7740],
        [ [ "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "-", "-", "-", "-", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA" ], 9060] 
      ]]
    ]
  },
  "m1416":{
    "to1":[
      [[ true, true, true, true, false, false ],
      [
        [ [ "SHELL", "Hyundai/KIA", "MANN-FILTER", "TSN", "TSN", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-" ], 2030],
        [ [ "Mobil", "Hyundai/KIA", "Mahle/Knecht", "MANN-FILTER", "MITWELL", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-" ], 2970],
        [ [ "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-" ], 3240]
      ]],
      [[ true, false, true, false, true, false ],
      [
        [ [ "SHELL", "Hyundai/KIA", "MANN-FILTER", "TSN", "TSN", "-", "-", "KIXX", "-", "Hyundai/KIA", "-", "-", "-", "-", "-" ], 4560],
        [ [ "Mobil", "Hyundai/KIA", "Mahle/Knecht", "MANN-FILTER", "MITWELL", "-", "-", "ZIC", "-", "Hyundai/KIA", "-", "-", "-", "-", "-" ], 5970],
        [ [ "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "-", "-", "Hyundai/KIA", "-", "Hyundai/KIA", "-", "-", "-", "-", "-" ], 6760]
      ]],
      [[ true, false, true, false, true, true ],
      [
        [ [ "SHELL", "Hyundai/KIA", "MANN-FILTER", "TSN", "TSN", "-", "-", "KIXX", "Sat", "Hyundai/KIA", "Victor Reinz", "-", "-", "-", "-" ], 5420],
        [ [ "Mobil", "Hyundai/KIA", "Mahle/Knecht", "MANN-FILTER", "MITWELL", "-", "-", "ZIC", "Hyundai/KIA", "Hyundai/KIA", "Victor Reinz", "-", "-", "-", "-" ], 7080],
        [ [ "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "-", "-", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Victor Reinz", "-", "-", "-", "-" ], 7870]
      ]],
      [[ true, true, false, true, true, false ],
      [
        [ [ "SHELL", "Hyundai/KIA", "MANN-FILTER", "TSN", "TSN", "-", "-", "-", "-", "-", "-", "KIXX", "Hyundai/KIA", "-", "-" ], 2860],
        [ [ "Mobil", "Hyundai/KIA", "Mahle/Knecht", "MANN-FILTER", "MITWELL", "-", "-", "-", "-", "-", "-", "ZIC", "Hyundai/KIA", "-", "-" ], 4300],
        [ [ "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "-", "-", "-", "-", "-", "-", "Hyundai/KIA", "Hyundai/KIA", "-", "-" ], 4320]
      ]],
      [[ false, true, true, false, true, false ],
      [
        [ [ "SHELL", "Hyundai/KIA", "MANN-FILTER", "TSN", "TSN", "-", "-", "Hyundai Xteer", "-", "Hyundai/KIA", "-", "-", "-", "-", "-" ], 4910],
        [ [ "Mobil", "Hyundai/KIA", "Mahle/Knecht", "MANN-FILTER", "MITWELL", "-", "-", "ZIC", "-", "Hyundai/KIA", "-", "-", "-", "-", "-" ], 7030],
        [ [ "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "-", "-", "Hyundai/KIA", "-", "Hyundai/KIA", "-", "-", "-", "-", "-" ], 10270] 
      ]]
    ],
    "to2":[
      [[ true, true, true, true, false, false ] ,
      [
        [ [ "SHELL", "Hyundai/KIA", "MANN-FILTER", "TSN", "TSN", "-", "-", "-", "-", "-", "-", "-", "-", "Castrol", "-" ], 2540],
        [ [ "Mobil", "Hyundai/KIA", "Mahle/Knecht", "MANN-FILTER", "MITWELL", "-", "-", "-", "-", "-", "-", "-", "-", "Castrol", "-" ], 3480],
        [ [ "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "-", "-", "-", "-", "-", "-", "-", "-", "Hyundai/KIA", "-" ], 4550] 
      ]],
      [[ true, false, true, false, true, false ],
      [
        [ [ "SHELL", "Hyundai/KIA", "MANN-FILTER", "TSN", "TSN", "-", "-", "KIXX", "-", "Hyundai/KIA", "-", "-", "-", "Castrol", "-" ], 5070],
        [ [ "Mobil", "Hyundai/KIA", "Mahle/Knecht", "MANN-FILTER", "MITWELL", "-", "-", "ZIC", "-", "Hyundai/KIA", "-", "-", "-", "Castrol", "-" ], 6480],
        [ [ "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "-", "-", "Hyundai/KIA", "-", "Hyundai/KIA", "-", "-", "-", "Hyundai/KIA", "-" ], 8070] 
      ]],
      [[ true, false, true, false, true, true ],
      [
        [ [ "SHELL", "Hyundai/KIA", "MANN-FILTER", "TSN", "TSN", "-", "-", "KIXX", "Sat", "Hyundai/KIA", "Victor Reinz", "-", "-", "Castrol", "-" ], 5930],
        [ [ "Mobil", "Hyundai/KIA", "Mahle/Knecht", "MANN-FILTER", "MITWELL", "-", "-", "ZIC", "Hyundai/KIA", "Hyundai/KIA", "Victor Reinz", "-", "-", "Castrol", "-" ], 7590],
        [ [ "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "-", "-", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Victor Reinz", "-", "-", "Hyundai/KIA", "-" ], 9180] 
      ]],
      [[ true, true, false, true, true, false ],
      [
        [ [ "SHELL", "Hyundai/KIA", "MANN-FILTER", "TSN", "TSN", "-", "-", "-", "-", "-", "-", "KIXX", "Hyundai/KIA", "Castrol", "-" ], 3370],
        [ [ "Mobil", "Hyundai/KIA", "Mahle/Knecht", "MANN-FILTER", "MITWELL", "-", "-", "-", "-", "-", "-", "ZIC", "Hyundai/KIA", "Castrol", "-" ], 4810],
        [ [ "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "-", "-", "-", "-", "-", "-", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "-" ], 5630] 
      ]],
      [[ false, true, true, false, true, false ],
      [
        [ [ "SHELL", "Hyundai/KIA", "MANN-FILTER", "TSN", "TSN", "-", "-", "Hyundai Xteer", "-", "Hyundai/KIA", "-", "-", "-", "Castrol", "-" ], 5420],
        [ [ "Mobil", "Hyundai/KIA", "Mahle/Knecht", "MANN-FILTER", "MITWELL", "-", "-", "ZIC", "-", "Hyundai/KIA", "-", "-", "-", "Castrol", "-" ], 7540],
        [ [ "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "-", "-", "Hyundai/KIA", "-", "Hyundai/KIA", "-", "-", "-", "Hyundai/KIA", "-" ], 11580]  
      ]]
    ],
    "to3":[
      [[ true, true, true, true, false, false ],
      [
        [ [ "SHELL", "Hyundai/KIA", "MANN-FILTER", "TSN", "TSN", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-" ], 2030],
        [ [ "Mobil", "Hyundai/KIA", "Mahle/Knecht", "MANN-FILTER", "MITWELL", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-" ], 2970],
        [ [ "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-" ], 3240]
      ]],
      [[ true, false, true, false, true, false ],
      [
        [ [ "SHELL", "Hyundai/KIA", "MANN-FILTER", "TSN", "TSN", "-", "-", "KIXX", "-", "Hyundai/KIA", "-", "-", "-", "-", "-" ], 4560],
        [ [ "Mobil", "Hyundai/KIA", "Mahle/Knecht", "MANN-FILTER", "MITWELL", "-", "-", "ZIC", "-", "Hyundai/KIA", "-", "-", "-", "-", "-" ], 5970],
        [ [ "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "-", "-", "Hyundai/KIA", "-", "Hyundai/KIA", "-", "-", "-", "-", "-" ], 6760]
      ]],
      [[ true, false, true, false, true, true ],
      [
        [ [ "SHELL", "Hyundai/KIA", "MANN-FILTER", "TSN", "TSN", "-", "-", "KIXX", "Sat", "Hyundai/KIA", "Victor Reinz", "-", "-", "-", "-" ], 5420],
        [ [ "Mobil", "Hyundai/KIA", "Mahle/Knecht", "MANN-FILTER", "MITWELL", "-", "-", "ZIC", "Hyundai/KIA", "Hyundai/KIA", "Victor Reinz", "-", "-", "-", "-" ], 7080],
        [ [ "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "-", "-", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Victor Reinz", "-", "-", "-", "-" ], 7870]
      ]],
      [[ true, true, false, true, true, false ] ,
      [
        [ [ "SHELL", "Hyundai/KIA", "MANN-FILTER", "TSN", "TSN", "-", "-", "-", "-", "-", "-", "KIXX", "Hyundai/KIA", "-", "-" ], 2860],
        [ [ "Mobil", "Hyundai/KIA", "Mahle/Knecht", "MANN-FILTER", "MITWELL", "-", "-", "-", "-", "-", "-", "ZIC", "Hyundai/KIA", "-", "-" ], 4300],
        [ [ "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "-", "-", "-", "-", "-", "-", "Hyundai/KIA", "Hyundai/KIA", "-", "-" ], 4320] 
      ]],
      [[ false, true, true, false, true, false ] ,
      [
        [ [ "SHELL", "Hyundai/KIA", "MANN-FILTER", "TSN", "TSN", "-", "-", "Hyundai Xteer", "-", "Hyundai/KIA", "-", "-", "-", "-", "-" ], 4910],
        [ [ "Mobil", "Hyundai/KIA", "Mahle/Knecht", "MANN-FILTER", "MITWELL", "-", "-", "ZIC", "-", "Hyundai/KIA", "-", "-", "-", "-", "-" ], 7030],
        [ [ "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "-", "-", "Hyundai/KIA", "-", "Hyundai/KIA", "-", "-", "-", "-", "-" ], 10270]  
      ]],
    ],
    "to4":[
      [[ true, true, true, true, false, false ] ,
      [
        [ [ "SHELL", "Hyundai/KIA", "MANN-FILTER", "TSN", "TSN", "Denso", "Just Drive", "-", "-", "-", "-", "-", "-", "Castrol", "Cool Stream" ], 4930],
        [ [ "Mobil", "Hyundai/KIA", "Mahle/Knecht", "MANN-FILTER", "MITWELL", "NGK", "Hyundai/KIA", "-", "-", "-", "-", "-", "-", "Castrol", "Ravenol" ], 6410],
        [ [ "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "-", "-", "-", "-", "-", "-", "Hyundai/KIA", "Hyundai/KIA" ], 7980]   
      ]],
      [[ true, false, true, false, true, false ] ,
      [
        [ [ "SHELL", "Hyundai/KIA", "MANN-FILTER", "TSN", "TSN", "Denso", "Just Drive", "KIXX", "-", "Hyundai/KIA", "-", "-", "-", "Castrol", "Cool Stream" ], 7460],
        [ [ "Mobil", "Hyundai/KIA", "Mahle/Knecht", "MANN-FILTER", "MITWELL", "NGK", "Hyundai/KIA", "ZIC", "-", "Hyundai/KIA", "-", "-", "-", "Castrol", "Ravenol" ], 9410],
        [ [ "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "-", "Hyundai/KIA", "-", "-", "-", "Hyundai/KIA", "Hyundai/KIA" ], 11500]   
      ]],
      [[ true, false, true, false, true, true ]     ,
      [
        [ [ "SHELL", "Hyundai/KIA", "MANN-FILTER", "TSN", "TSN", "Denso", "Just Drive", "KIXX", "Sat", "Hyundai/KIA", "Victor Reinz", "-", "-", "Castrol", "Cool Stream" ], 8320],
        [ [ "Mobil", "Hyundai/KIA", "Mahle/Knecht", "MANN-FILTER", "MITWELL", "NGK", "Hyundai/KIA", "ZIC", "Hyundai/KIA", "Hyundai/KIA", "Victor Reinz", "-", "-", "Castrol", "Ravenol" ], 10520],
        [ [ "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Victor Reinz", "-", "-", "Hyundai/KIA", "Hyundai/KIA" ], 12610]
      ]],
      [[ true, true, false, true, true, false ] ,
      [
        [ [ "SHELL", "Hyundai/KIA", "MANN-FILTER", "TSN", "TSN", "Denso", "Just Drive", "-", "-", "-", "-", "KIXX", "Hyundai/KIA", "Castrol", "Cool Stream" ], 5760],
        [ [ "Mobil", "Hyundai/KIA", "Mahle/Knecht", "MANN-FILTER", "MITWELL", "NGK", "Hyundai/KIA", "-", "-", "-", "-", "ZIC", "Hyundai/KIA", "Castrol", "Ravenol" ], 7740],
        [ [ "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "-", "-", "-", "-", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA" ], 9060]    
      ]],
      [[ false, true, true, false, true, false ] ,
      [
        [ [ "SHELL", "Hyundai/KIA", "MANN-FILTER", "TSN", "TSN", "Denso", "Just Drive", "Hyundai Xteer", "-", "Hyundai/KIA", "-", "-", "-", "Castrol", "Cool Stream" ], 7810],
        [ [ "Mobil", "Hyundai/KIA", "Mahle/Knecht", "MANN-FILTER", "MITWELL", "NGK", "Hyundai/KIA", "ZIC", "-", "Hyundai/KIA", "-", "-", "-", "Castrol", "Ravenol" ], 10470],
        [ [ "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "-", "Hyundai/KIA", "-", "-", "-", "Hyundai/KIA", "Hyundai/KIA" ], 15010] 
      ]]
    ],
    "to5":[
      [[ true, true, true, true, false, false ]  ,
      [
        [ [ "SHELL", "Hyundai/KIA", "MANN-FILTER", "TSN", "TSN", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-" ], 2030],
        [ [ "Mobil", "Hyundai/KIA", "Mahle/Knecht", "MANN-FILTER", "MITWELL", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-" ], 2970],
        [ [ "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-" ], 3240] 
      ]],
      [[ true, false, true, false, true, false ] ,
      [
        [ [ "SHELL", "Hyundai/KIA", "MANN-FILTER", "TSN", "TSN", "-", "-", "KIXX", "-", "Hyundai/KIA", "-", "-", "-", "-", "-" ], 4560],
        [ [ "Mobil", "Hyundai/KIA", "Mahle/Knecht", "MANN-FILTER", "MITWELL", "-", "-", "ZIC", "-", "Hyundai/KIA", "-", "-", "-", "-", "-" ], 5970],
        [ [ "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "-", "-", "Hyundai/KIA", "-", "Hyundai/KIA", "-", "-", "-", "-", "-" ], 6760] 
      ]],
      [[ true, false, true, false, true, true ] ,
      [
        [ [ "SHELL", "Hyundai/KIA", "MANN-FILTER", "TSN", "TSN", "-", "-", "KIXX", "Sat", "Hyundai/KIA", "Victor Reinz", "-", "-", "-", "-" ], 5420],
        [ [ "Mobil", "Hyundai/KIA", "Mahle/Knecht", "MANN-FILTER", "MITWELL", "-", "-", "ZIC", "Hyundai/KIA", "Hyundai/KIA", "Victor Reinz", "-", "-", "-", "-" ], 7080],
        [ [ "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "-", "-", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Victor Reinz", "-", "-", "-", "-" ], 7870] 
      ]],
      [[ true, true, false, true, true, false ] ,
      [
        [ [ "SHELL", "Hyundai/KIA", "MANN-FILTER", "TSN", "TSN", "-", "-", "-", "-", "-", "-", "KIXX", "Hyundai/KIA", "-", "-" ], 2860],
        [ [ "Mobil", "Hyundai/KIA", "Mahle/Knecht", "MANN-FILTER", "MITWELL", "-", "-", "-", "-", "-", "-", "ZIC", "Hyundai/KIA", "-", "-" ], 4300],
        [ [ "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "-", "-", "-", "-", "-", "-", "Hyundai/KIA", "Hyundai/KIA", "-", "-" ], 4320] 
      ]],
      [[ false, true, true, false, true, false ] ,
      [
        [ [ "SHELL", "Hyundai/KIA", "MANN-FILTER", "TSN", "TSN", "-", "-", "Hyundai Xteer", "-", "Hyundai/KIA", "-", "-", "-", "-", "-" ], 4910],
        [ [ "Mobil", "Hyundai/KIA", "Mahle/Knecht", "MANN-FILTER", "MITWELL", "-", "-", "ZIC", "-", "Hyundai/KIA", "-", "-", "-", "-", "-" ], 7030],
        [ [ "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "-", "-", "Hyundai/KIA", "-", "Hyundai/KIA", "-", "-", "-", "-", "-" ], 10270] 
      ]]
    ],
    "to6":[
      [[ true, true, true, true, false, false ] ,
      [
        [ [ "SHELL", "Hyundai/KIA", "MANN-FILTER", "TSN", "TSN", "-", "-", "-", "-", "-", "-", "-", "-", "Castrol", "-" ], 2540],
        [ [ "Mobil", "Hyundai/KIA", "Mahle/Knecht", "MANN-FILTER", "MITWELL", "-", "-", "-", "-", "-", "-", "-", "-", "Castrol", "-" ], 3480],
        [ [ "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "-", "-", "-", "-", "-", "-", "-", "-", "Hyundai/KIA", "-" ], 4550] 
      ]],
      [[ true, false, true, false, true, false ] ,
      [
        [ [ "SHELL", "Hyundai/KIA", "MANN-FILTER", "TSN", "TSN", "-", "-", "KIXX", "-", "Hyundai/KIA", "-", "-", "-", "Castrol", "-" ], 5070],
        [ [ "Mobil", "Hyundai/KIA", "Mahle/Knecht", "MANN-FILTER", "MITWELL", "-", "-", "ZIC", "-", "Hyundai/KIA", "-", "-", "-", "Castrol", "-" ], 6480],
        [ [ "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "-", "-", "Hyundai/KIA", "-", "Hyundai/KIA", "-", "-", "-", "Hyundai/KIA", "-" ], 8070] 
      ]],
      [[ true, false, true, false, true, true ] ,
      [
        [ [ "SHELL", "Hyundai/KIA", "MANN-FILTER", "TSN", "TSN", "-", "-", "KIXX", "Sat", "Hyundai/KIA", "Victor Reinz", "-", "-", "Castrol", "-" ], 5930],
        [ [ "Mobil", "Hyundai/KIA", "Mahle/Knecht", "MANN-FILTER", "MITWELL", "-", "-", "ZIC", "Hyundai/KIA", "Hyundai/KIA", "Victor Reinz", "-", "-", "Castrol", "-" ], 7590],
        [ [ "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "-", "-", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Victor Reinz", "-", "-", "Hyundai/KIA", "-" ], 9180] 
      ]],
      [[ true, true, false, true, true, false ] ,
      [
        [ [ "SHELL", "Hyundai/KIA", "MANN-FILTER", "TSN", "TSN", "-", "-", "-", "-", "-", "-", "KIXX", "Hyundai/KIA", "Castrol", "-" ], 3370],
        [ [ "Mobil", "Hyundai/KIA", "Mahle/Knecht", "MANN-FILTER", "MITWELL", "-", "-", "-", "-", "-", "-", "ZIC", "Hyundai/KIA", "Castrol", "-" ], 4810],
        [ [ "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "-", "-", "-", "-", "-", "-", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "-" ], 5630] 
      ]],
      [[ false, true, true, false, true, false ]  ,
      [
        [ [ "SHELL", "Hyundai/KIA", "MANN-FILTER", "TSN", "TSN", "-", "-", "Hyundai Xteer", "-", "Hyundai/KIA", "-", "-", "-", "Castrol", "-" ], 5420],
        [ [ "Mobil", "Hyundai/KIA", "Mahle/Knecht", "MANN-FILTER", "MITWELL", "-", "-", "ZIC", "-", "Hyundai/KIA", "-", "-", "-", "Castrol", "-" ], 7540],
        [ [ "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "-", "-", "Hyundai/KIA", "-", "Hyundai/KIA", "-", "-", "-", "Hyundai/KIA", "-" ], 11580] 
      ]]
    ],
    "to7":[
      [[ true, true, true, true, false, false ]  ,
      [
        [ [ "SHELL", "Hyundai/KIA", "MANN-FILTER", "TSN", "TSN", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-" ], 2030],
        [ [ "Mobil", "Hyundai/KIA", "Mahle/Knecht", "MANN-FILTER", "MITWELL", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-" ], 2970],
        [ [ "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-" ], 3240] 
      ]],
      [[ true, false, true, false, true, false ]   ,
      [
        [ [ "SHELL", "Hyundai/KIA", "MANN-FILTER", "TSN", "TSN", "-", "-", "KIXX", "-", "Hyundai/KIA", "-", "-", "-", "-", "-" ], 4560],
        [ [ "Mobil", "Hyundai/KIA", "Mahle/Knecht", "MANN-FILTER", "MITWELL", "-", "-", "ZIC", "-", "Hyundai/KIA", "-", "-", "-", "-", "-" ], 5970],
        [ [ "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "-", "-", "Hyundai/KIA", "-", "Hyundai/KIA", "-", "-", "-", "-", "-" ], 6760]   
      ]],
      [[ true, false, true, false, true, true ]  ,
      [
        [ [ "SHELL", "Hyundai/KIA", "MANN-FILTER", "TSN", "TSN", "-", "-", "KIXX", "Sat", "Hyundai/KIA", "Victor Reinz", "-", "-", "-", "-" ], 5420],
        [ [ "Mobil", "Hyundai/KIA", "Mahle/Knecht", "MANN-FILTER", "MITWELL", "-", "-", "ZIC", "Hyundai/KIA", "Hyundai/KIA", "Victor Reinz", "-", "-", "-", "-" ], 7080],
        [ [ "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "-", "-", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Victor Reinz", "-", "-", "-", "-" ], 7870] 
      ]],
      [[ true, true, false, true, true, false ] ,
      [
        [ [ "SHELL", "Hyundai/KIA", "MANN-FILTER", "TSN", "TSN", "-", "-", "-", "-", "-", "-", "KIXX", "Hyundai/KIA", "-", "-" ], 2860],
        [ [ "Mobil", "Hyundai/KIA", "Mahle/Knecht", "MANN-FILTER", "MITWELL", "-", "-", "-", "-", "-", "-", "ZIC", "Hyundai/KIA", "-", "-" ], 4300],
        [ [ "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "-", "-", "-", "-", "-", "-", "Hyundai/KIA", "Hyundai/KIA", "-", "-" ], 4320] 
      ]],
      [[ false, true, true, false, true, false ]  ,
      [
        [ [ "SHELL", "Hyundai/KIA", "MANN-FILTER", "TSN", "TSN", "-", "-", "Hyundai Xteer", "-", "Hyundai/KIA", "-", "-", "-", "-", "-" ], 4910],
        [ [ "Mobil", "Hyundai/KIA", "Mahle/Knecht", "MANN-FILTER", "MITWELL", "-", "-", "ZIC", "-", "Hyundai/KIA", "-", "-", "-", "-", "-" ], 7030],
        [ [ "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "-", "-", "Hyundai/KIA", "-", "Hyundai/KIA", "-", "-", "-", "-", "-" ], 10270] 
      ]]
    ],
    "to8":[
      [[ true, true, true, true, false, false ]  ,
      [
        [ [ "SHELL", "Hyundai/KIA", "MANN-FILTER", "TSN", "TSN", "Denso", "Just Drive", "-", "-", "-", "-", "-", "-", "Castrol", "Cool Stream" ], 4930],
        [ [ "Mobil", "Hyundai/KIA", "Mahle/Knecht", "MANN-FILTER", "MITWELL", "NGK", "Hyundai/KIA", "-", "-", "-", "-", "-", "-", "Castrol", "Ravenol" ], 6410],
        [ [ "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "-", "-", "-", "-", "-", "-", "Hyundai/KIA", "Hyundai/KIA" ], 7980] 
      ]],
      [[ true, false, true, false, true, false ]  ,
      [
        [ [ "SHELL", "Hyundai/KIA", "MANN-FILTER", "TSN", "TSN", "Denso", "Just Drive", "KIXX", "-", "Hyundai/KIA", "-", "-", "-", "Castrol", "Cool Stream" ], 7460],
        [ [ "Mobil", "Hyundai/KIA", "Mahle/Knecht", "MANN-FILTER", "MITWELL", "NGK", "Hyundai/KIA", "ZIC", "-", "Hyundai/KIA", "-", "-", "-", "Castrol", "Ravenol" ], 9410],
        [ [ "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "-", "Hyundai/KIA", "-", "-", "-", "Hyundai/KIA", "Hyundai/KIA" ], 11500] 
      ]],
      [[ true, false, true, false, true, true ]  ,
      [
        [ [ "SHELL", "Hyundai/KIA", "MANN-FILTER", "TSN", "TSN", "Denso", "Just Drive", "KIXX", "Sat", "Hyundai/KIA", "Victor Reinz", "-", "-", "Castrol", "Cool Stream" ], 8320],
        [ [ "Mobil", "Hyundai/KIA", "Mahle/Knecht", "MANN-FILTER", "MITWELL", "NGK", "Hyundai/KIA", "ZIC", "Hyundai/KIA", "Hyundai/KIA", "Victor Reinz", "-", "-", "Castrol", "Ravenol" ], 10520],
        [ [ "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Victor Reinz", "-", "-", "Hyundai/KIA", "Hyundai/KIA" ], 12610]   
      ]],
      [[ true, true, false, true, true, false ]  ,
      [
        [ [ "SHELL", "Hyundai/KIA", "MANN-FILTER", "TSN", "TSN", "Denso", "Just Drive", "-", "-", "-", "-", "KIXX", "Hyundai/KIA", "Castrol", "Cool Stream" ], 5760],
        [ [ "Mobil", "Hyundai/KIA", "Mahle/Knecht", "MANN-FILTER", "MITWELL", "NGK", "Hyundai/KIA", "-", "-", "-", "-", "ZIC", "Hyundai/KIA", "Castrol", "Ravenol" ], 7740],
        [ [ "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "-", "-", "-", "-", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA" ], 9060]  
      ]],
      [[ false, true, true, false, true, false ]  ,
      [
        [ [ "SHELL", "Hyundai/KIA", "MANN-FILTER", "TSN", "TSN", "Denso", "Just Drive", "Hyundai Xteer", "-", "Hyundai/KIA", "-", "-", "-", "Castrol", "Cool Stream" ], 7810],
        [ [ "Mobil", "Hyundai/KIA", "Mahle/Knecht", "MANN-FILTER", "MITWELL", "NGK", "Hyundai/KIA", "ZIC", "-", "Hyundai/KIA", "-", "-", "-", "Castrol", "Ravenol" ], 10470],
        [ [ "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "Hyundai/KIA", "-", "Hyundai/KIA", "-", "-", "-", "Hyundai/KIA", "Hyundai/KIA" ], 15010]  
      ]]
    ]
  },
  "m1718":{
    "to1":[
      [[],
      [
        [[],],
        [[],],
        [[],]
      ]],
      [[],
      [
        [[],],
        [[],],
        [[],]
      ]],
      [[],
      [
        [[],],
        [[],],
        [[],]
      ]],
      [[],
      [
        [[],],
        [[],],
        [[],]
      ]]
    ],
    "to2":[
      [[],
      [
        [[],],
        [[],],
        [[],]
      ]],
      [[],
      [
        [[],],
        [[],],
        [[],]
      ]],
      [[],
      [
        [[],],
        [[],],
        [[],]
      ]],
      [[],
      [
        [[],],
        [[],],
        [[],]
      ]]
    ],
    "to3":[
      [[],
      [
        [[],],
        [[],],
        [[],]
      ]],
      [[],
      [
        [[],],
        [[],],
        [[],]
      ]],
      [[],
      [
        [[],],
        [[],],
        [[],]
      ]],
      [[],
      [
        [[],],
        [[],],
        [[],]
      ]]
    ],
    "to4":[
      [[],
      [
        [[],],
        [[],],
        [[],]
      ]],
      [[],
      [
        [[],],
        [[],],
        [[],]
      ]],
      [[],
      [
        [[],],
        [[],],
        [[],]
      ]],
      [[],
      [
        [[],],
        [[],],
        [[],]
      ]]
    ],
    "to5":[
      [[],
      [
        [[],],
        [[],],
        [[],]
      ]],
      [[],
      [
        [[],],
        [[],],
        [[],]
      ]],
      [[],
      [
        [[],],
        [[],],
        [[],]
      ]],
      [[],
      [
        [[],],
        [[],],
        [[],]
      ]]
    ],
    "to6":[
      [[],
      [
        [[],],
        [[],],
        [[],]
      ]],
      [[],
      [
        [[],],
        [[],],
        [[],]
      ]],
      [[],
      [
        [[],],
        [[],],
        [[],]
      ]],
      [[],
      [
        [[],],
        [[],],
        [[],]
      ]]
    ],
    "to7":[
      [[],
      [
        [[],],
        [[],],
        [[],]
      ]],
      [[],
      [
        [[],],
        [[],],
        [[],]
      ]],
      [[],
      [
        [[],],
        [[],],
        [[],]
      ]],
      [[],
      [
        [[],],
        [[],],
        [[],]
      ]]
    ],
    "to8":[
      [[],
      [
        [[],],
        [[],],
        [[],]
      ]],
      [[],
      [
        [[],],
        [[],],
        [[],]
      ]],
      [[],
      [
        [[],],
        [[],],
        [[],]
      ]],
      [[],
      [
        [[],],
        [[],],
        [[],]
      ]]
    ]
  }
}
  

function chooseTheBranch() {
//выбор базовой ветки json'a
//да if'в много и тупо, но зато так можно потом проще отредактировать и точно в любом браузере сыграет

var chModel = jsonBig;
 
  //выбирает модель
    if (document.getElementById("i1014").checked)	
	var chModel2 = chModel.m1014;
    if (document.getElementById("i1416").checked)	
	var chModel2 = chModel.m1416;
    if (document.getElementById("i1718").checked)	
	var chModel2 = chModel.m1718;
  
  //выбирает пакет ТО
  if (document.getElementById("ito1").checked)	
	var chModel3 = chModel2.to1;
    if (document.getElementById("ito2").checked)	
	var chModel3 = chModel2.to2;
    if (document.getElementById("ito3").checked)	
	var chModel3 = chModel2.to3;
    if (document.getElementById("ito4").checked)	
	var chModel3 = chModel2.to4;
    if (document.getElementById("ito5").checked)	
	var chModel3 = chModel2.to5;
    if (document.getElementById("ito6").checked)	
	var chModel3 = chModel2.to6;
    if (document.getElementById("ito7").checked)	
	var chModel3 = chModel2.to7;
    if (document.getElementById("ito8").checked)	
	var chModel3 = chModel2.to8;

  //дальнейший поход вглубь json'a происходит в функции заполнения таблицы
  return chModel3;
}

function matchTheParametersToJSON(theBranchFromJSON){
//сравнение паттерна выбранных параметров с шаблоном допустимых параметров внутри json'a
//на выходе возвращает либо ошибку, либо номер подходящего массива внутри заданной ветки

  //создание пустого паттерна
  var arrayOfMatchingSettings = [false, false, false,false,false,false];

      //заполнение паттерна на основе кликнутых кнопок
        if (document.getElementById("ie14").checked){
          arrayOfMatchingSettings[0] = true;
          arrayOfMatchingSettings[1] = false;
        }
        if (document.getElementById("ie16").checked){
          arrayOfMatchingSettings[0] = false;
          arrayOfMatchingSettings[1] = true;
        }   

        if (document.getElementById("iauto").checked){
          arrayOfMatchingSettings[2] = true;
          arrayOfMatchingSettings[3] = false;
          

          if (document.getElementById("i1416").checked === true && document.getElementById("ie16").checked === true)
          {//на текущий момент в таблицах нет вариант "с заменой фильтра и масла" для 1.6 двигателя, автомат, модель 14го года
          //если потом изменится - это можно смело убирать
          //либо вставлять аналог для похожих случаев      
            document.getElementById("opts_fno").checked = false;
            //включает выбор замены фильтра если был выключен после коробки  
            document.getElementById("opts_fno").disabled = true;
          }
          else
          {//включает выбор замены фильтра если был выключен после коробки      
          document.getElementById("opts_fno").disabled = false;
          } 
        }
        if (document.getElementById("imech").checked){
          arrayOfMatchingSettings[2] = false;
          arrayOfMatchingSettings[3] = true; 

          //отключает выбор фильтра и снимает галочку на нём если была
          document.getElementById("opts_fno").disabled = true;
          if (document.getElementById("opts_fno").disabled = true)
            {document.getElementById("opts_fno").checked = false;}
        } 

        if (document.getElementById("opts_fno").checked){
          arrayOfMatchingSettings[4] = true;
          arrayOfMatchingSettings[5] = true;
          
          //снимает выбор с замены масла
          document.getElementById("opts_oil").checked = false;
        }  
        if (document.getElementById("opts_oil").checked){
          arrayOfMatchingSettings[4] = true;
          arrayOfMatchingSettings[5] = false;
          //снимает выбор с замены масла и фильтра
          document.getElementById("opts_fno").checked = false;
        }

 
  
  
  function getTheArrayOfIndexes(array){
  //указывает индексы, в которых полученный выше паттерн имеет значение true
    var arrayOfFoundIndexes = []
    
    array.forEach(function(item, index,array) { if (item == true) { arrayOfFoundIndexes.push(index);}  });
    return arrayOfFoundIndexes;
    }
  
  //собственно создание массива вод найденные индексы и его заполнение такими индексами
  var foundIndexes = []
  foundIndexes = getTheArrayOfIndexes(arrayOfMatchingSettings);
 
  //сюда в дальнейшем попадёт требуемый нам шаблон на основе которого будут выданы данные
  var patternMatchingGivenPattern =[]
 
  //переменная на случай чтобы найденный массив не выбивался при следующей итерации
  var placeHolder = false;    


  theBranchFromJSON.forEach(function(item, index, array){ 
  //перебор шаблонов выбранной ветки с поиском соответствующего заданному паттерну
    
    //инициализация
    var matchedArrayAndItsIndex = [];  
    var arrayOfFoundTrueValues =[];
     
    for (i = 0; i < foundIndexes.length ; i++) { 
    //сопоставление каждого найденного шаблона заданному паттерну на основе найденных индексов

      if (array[index][0][foundIndexes[i]] == true){      
      //отмечает каждое совпадение шаблона на текущей итерации с заданным паттерном

        arrayOfFoundTrueValues.push(array[index][0][foundIndexes[i]]);   

      } 
      
      if (arrayOfFoundTrueValues.length === foundIndexes.length){
      //собственно случай когда паттерн полностью попал в один из шаблонов ветки
        
        //указание найденного шаблона
        matchedArrayAndItsIndex[0] = array[index][0];
        //и его индекса в заданной ветке
        matchedArrayAndItsIndex[1] = index;          
        
        if(placeHolder === false)
        {
          patternMatchingGivenPattern = matchedArrayAndItsIndex;       
        }        
        //удерживает первое, правильное значение подходящего шаблона
        placeHolder = true;
      }
 
    }  



  });

  //не забывать что далее ссылка на данные идёт не по [0], а по [1]
  //[0] нужен на случай дебагинга
  return patternMatchingGivenPattern;

}

function writeDataToTheTable(){
//непосредственно заполнение таблицы данными, а также вывод цен в малую таблицу

  //выбирает ветку json'a в которой проводится дальнейший поиск
  var chosenBranchOrig = chooseTheBranch(); 
 
  //производит поиск искомого варианта (по сути подходящей эксельной таблицы для указанного ТО и года за счёт того насколько подходят остальные параметры)
  var chosenNode = matchTheParametersToJSON(chosenBranchOrig)[1];

  //выбор в выбранной ветке массива с данными
  var chosenBranch = chosenBranchOrig[chosenNode][1];   
 
  //указание массива с данными для табличных колонок эконом-оптимал-оригинал
  chosenJSONdataPart = [chosenBranch[0][0],chosenBranch[1][0],chosenBranch[2][0]];
  //тоже самое но с ценами
  chosenJSONpricePart= [chosenBranch[0][1],chosenBranch[1][1],chosenBranch[2][1]];

 

  
  for (columnSelect = 0; columnSelect<3; columnSelect++){
  //банальное заполнение таблицы

    //выбор колонки
    detailsColumnChosen = document.querySelectorAll(".table_all_detail table td:nth-child(" + (columnSelect+2) + ")");
    
    //заполнение всех строк колонки
    for (rowSelect = 0; rowSelect < 15; rowSelect++) {
      detailsColumnChosen[rowSelect].textContent = chosenJSONdataPart[columnSelect][rowSelect]; 
    }

    //выбор ячейки с ценой
    priceCell = document.querySelectorAll(".table_all_price table th:nth-child(" + (columnSelect+2) + ")");
    //внесение цены
    priceCell[0].textContent = chosenJSONpricePart[columnSelect] + " Руб.";
    
  }

}

window.onload = function(){
//выставляет дефолтные значения при запуске страницы и заполняет таблицу

document.getElementById("i1014").click();
document.getElementById("imech").click();
document.getElementById("ie14").click();
document.getElementById("ito1").click();


document.getElementById("opts_oil").checked = false;
document.getElementById("opts_fno").checked = false;

writeDataToTheTable(); 

}

