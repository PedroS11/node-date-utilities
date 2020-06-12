# node-date-utilities
A module that adds new methods to the native Date class. 
## Installation 
```sh
npm install node-date-utilities
```
## Usage
In order to use the methods, you only need to import the package and the everything will be available.
```javascript
require('node-date-utilities');
```
or
```typescript
import  'node-date-utilities';
```

## Methods
### Static methods
#### Date.isLeapYear(year: number): Boolean
Checks if a specific year is a leap year
-   **year:** {number} the year to be checked

##### Example use
```
Date.isLeapYear(1996) // true
Date.isLeapYear(1995) // false
```


#### Date.getDaysInMonth(year: number, month: number): number
Returns the number of days of a month in a specific year
-   **year:** {number} the year to be considered
-   **month:** {number} The month whose days will be counted

##### Example use
```
Date.getDaysInMonth(1996, 0) // 31
Date.getDaysInMonth(1996, 1) // 29
```


#### Date.tomorrow(): Date
Returns a Date instance of the next day

##### Example use
```
const tomorrow = Date.tomorrow() 
```


#### Date.yesterday(): Date
Returns a Date instance of the previous day

##### Example use
```
const yesterday = Date.yesterday() 
```


#### Date.sameDay(date1: Date, date2: Date): boolean
Check if two dates are the same day
-   **date1:** {Date} the first date
-   **date2:** {Date} the second date

##### Example use
```
const date1 = new Date("1995-02-17T03:24:00");
const date2 = new Date("1995-02-17T12:24:00");

Date.sameDay(date1, date2) // true
```

## Instance methods
### addSubtract(options: AddSubOptions): Date;

Adds a specific number of days/months/years to the current Date instance
-   **options:** AddSubOptions values to be added/subtracted
```
{
    years: 1,
    months: 1,
    days: 1
}
```
##### Example use
```
const date = new Date("1995-02-17T03:24:00");

date.addSubtract({days: 1}); // 1995-02-18T03:24:00
date.addSubtract({months: -1}); // 1995-01-18T03:24:00

date.addSubtract({years: 1}); // 1996-01-18T03:24:00
```

### addSubtractDays(days: number): Date;

Adds a specific number of days to the current Date instance
-   **days:** {number} number of days to be added/subtracted

##### Example use
```
const date = new Date("1995-02-17T03:24:00");

date.addSubtractDays(1); // 1995-02-18T03:24:00
```

### addSubtractMonths(months: number): Date;

Adds a specific number of months to the current Date instance
-   **months:** {number} number of months to be added/subtracted

##### Example use
```
const date = new Date("1995-02-17T03:24:00");

date.addSubtractMonths(1); // 1995-03-187T03:24:00
```


### addSubtractYears(years: number): Date;

Adds a specific number of years to the current Date instance
-   **years:** {number} number of years to be added/subtracted

##### Example use
```
const date = new Date("1995-02-17T03:24:00");

date.addSubtractYearss(1); // 1996-02-187T03:24:00
```

### isLeapYear(): Boolean

Checks if the current Date instance is a leap year

##### Example use
```
const date = new Date("1995-02-17T03:24:00");

date.isLeapYear(); // false
```

## Test 
```sh
npm run test
```