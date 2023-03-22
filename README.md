# Shopper List

This project was made with the objective of starting studies with React. It is a shopping list with the function to add and delete items. Enjoy :)

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)



## Overview

### The challenge

Users should be able to:

- Add items
- Separate items by categories
- View items
- Delete items

### Screenshot

![](https://github.com/carolmedici/shopping-list2/blob/master/public/images/print.png)
![](https://github.com/carolmedici/shopping-list2/blob/master/public/images/print2.png)

### Links

- Solution URL: [https://github.com/carolmedici/shopping-list2](https://github.com/carolmedici/shopping-list2)
- Live Site URL: [https://shopping-list-ecru.vercel.app/](https://shopping-list-ecru.vercel.app/)

## My process

### Built with

- CSS 
- [React](https://reactjs.org/) - JS library


### What I learned

In this project I learned how to create components, control inputs using value and onChange, manage the state of a component using useState, work with props that are functions, manipulate and transform arrays of objects, conditional rendering.


Check out some code: 


```css
.item .footer{
    background-color: white;
    box-shadow: 1rem 1rem 1rem rgba(0, 0, 0, 0.145);
    border-radius: 0 0 1rem 1rem;
    margin-bottom: 1rem;
}
.item h4{
    color: white;
    font-size: 2rem;
    line-height: 2rem;
    font-weight: bold;
    padding: 1rem 0;
}
```
```js
const [itensList, setItensList] = useState([]);
  const [nextItemId, setNextItemId] = useState(0);

  const onItemAdd = (itemList) => {
    const newItem = { ...itemList, id: nextItemId };
    setItensList([...itensList, newItem]);
    setNextItemId(nextItemId + 1);
  };

  const deleteItem = (itemId) => {
    const newItensList = itensList.filter((itemList) => itemList.id !== itemId);
    setItensList(newItensList);
  };
```


### Continued development

I will continue studying React library

### Useful resources

- [React JS](https://legacy.reactjs.org/) - The library contains great documents and tutorials.


## Author

- LinkedIn - [Carolina Médici](https://www.linkedin.com/in/carolina-medici/)
- Frontend Mentor - [@carolmedici](https://www.frontendmentor.io/profile/carolmedici)




