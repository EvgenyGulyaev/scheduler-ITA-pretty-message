# scheduler-ITA-pretty-message
Данная библиотека предназначена для работы с `http://ictis.sfedu.ru/rasp/`  
Библиотека использует scheduler-ita, и является надстройкой над ней, для того чтобы 
получать сообщения, по дням недели и неделям, а также в более красивом виде.

## Установка 
Используя npm:    
`npm install scheduler-ita-pretty-message --save`


Используя yarn:     
`yarn add scheduler-ita-pretty-message`

## Об типах страниц на данном сайт

`http://ictis.sfedu.ru/rasp/HTML_AUDS/a4.htm` - HTML_AUDS означает, что расписание для аудитории  
`http://ictis.sfedu.ru/rasp/HTML/18.htm`  - HTML означает, что расписание для групп 
`http://ictis.sfedu.ru/rasp/HTML_PREPS/m18.htm` - HTML_PREPS означает, что расписание для преподавателей 


## Методы 

`getSchedulePerWeek(id, type = HTML, week = 0)`    
Получение данных по заданному номеру с типом HTML по умолчанию, но можно использовать и другие типы как например 
HTML_PREPS и HTML_AUDS, под номером подразумевается число, например 18 в данном url `http://ictis.sfedu.ru/rasp/HTML/18.htm`   
Под id понимается номер  
week неделя, которая будет выбираться с сайта,(`0 значит брать все недели`), если неделя не 0, то он выбирает неделю, которая
расположена относительно начала, например первая неделя на данной странице 16 значит он будет брать ее(то есть это смещение)

`getSchedulePerDayWeek(id, day = 6, type = HTML, week = 0)`
Аналогичный метод, только также позволяет выбирать дни, по умолчанию 6 день, который означает воскресенье
типы дней:
```
0 - Пн  
1 - Вт  
2 - Ср  
3 - Чт  
4 - Пт  
5 - Сб  
6 - Вс  
today - на сегодня  
tomorrow - на завтра  
``` 

## Примеры

```
const { getData } = require('scheduler-ita-pretty-message');

(async () => {
  const data = await getSchedulePerDayWeek(18, 'tomorrow');
  console.log('abra', data);

})();

```

