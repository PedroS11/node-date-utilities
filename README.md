# node-date-utilities
[![npm version](https://badge.fury.io/js/node-date-utilities.svg)](https://badge.fury.io/js/node-date-utilities)
[![Build Status](https://travis-ci.org/PedroS11/node-date-utilities.svg?branch=master)](https://travis-ci.org/PedroS11/node-date-utilities)
[![Coverage Status](https://coveralls.io/repos/github/PedroS11/node-date-utilities/badge.svg?branch=master)](https://coveralls.io/github/PedroS11/node-date-utilities?branch=master)
![GitHub repo size](https://img.shields.io/github/repo-size/PedroS11/node-date-utilities)

A module that adds new methods to the native Date class. 
- [Installation](#installation)
- [Usage](#usage)
- [Methods](#methods)
  * [Static methods](#static-methods)
    + [Date.isLeapYear(year: number): Boolean](#dateisleapyear-year--number---boolean)
      - [Example use](#example-use)
    + [Date.getDaysInMonth(year: number, month: number): number](#dategetdaysinmonth-year--number--month--number---number)
      - [Example use](#example-use-1)
    + [Date.tomorrow(): Date](#datetomorrow----date)
      - [Example use](#example-use-2)
    + [Date.yesterday(): Date](#dateyesterday----date)
      - [Example use](#example-use-3)
    + [Date.sameDay(date1: Date, date2: Date): boolean](#datesameday-date1--date--date2--date---boolean)
      - [Example use](#example-use-4)
  * [Instance methods](#instance-methods)
    + [add(options: AddSubOptions): Date;](#add-options--addsuboptions---date-)
      - [Example use](#example-use-5)
    + [subtract(options: AddSubOptions): Date;](#subtract-options--addsuboptions---date-)
      - [Example use](#example-use-6)
    + [isLeapYear(): Boolean](#isleapyear----boolean)
      - [Example use](#example-use-7)
    + [clearTime(): Date](#cleartime----date)
      - [Example use](#example-use-8)
    + [getDaysInMonth(): number](#getdaysinmonth----number)
      - [Example use](#example-use-9)
    + [clone(): Date](#clone----date)
      - [Example use](#example-use-10)
- [Test](#test)

  
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

### Instance methods
#### add(options: AddSubOptions): Date;

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

date.add({days: 1}); // 1995-02-18T03:24:00
date.add({months: 1}); // 1995-03-18T03:24:00

date.add({years: 1}); // 1996-01-18T03:24:00
```


#### subtract(options: AddSubOptions): Date;

Subtracts a specific number of days/months/years to the current Date instance
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

date.subtract({days: -1}); // 1995-02-16T03:24:00
date.subtract({months: -1}); // 1995-01-18T03:24:00

date.add({years: -1}); // 1994-01-18T03:24:00
```

#### isLeapYear(): Boolean

Checks if the current Date instance is a leap year

##### Example use
```
const date = new Date("1995-02-17T03:24:00");

date.isLeapYear(); // false
```

#### clearTime(): Date

Removes the time part from a Date instance

##### Example use
```
const date = new Date("1995-02-17T03:24:00");

date.clearTime(); // 1995-02-17T00:00:00.0000
```

#### getDaysInMonth(): number

Returns the number of days of the instance month

##### Example use
```
const date = new Date("1995-01-17T03:24:00");

date.getDaysInMonth(); // 31
```

#### clone(): Date

Clones the current Date instance

##### Example use
```
const date = new Date("1995-01-17T03:24:00");

const clone = date.clone();
```


## Test 
```sh
npm run test
```