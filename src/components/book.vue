<template>
    <div class="book">
        <img :src="book.coverUrl" alt="Book Cover" />
        <h3>{{ book.title }}</h3>
        <p>By {{ book.author }}</p>
        <p>{{ book.description }}</p>
    </div>
</template>
  
<script>
export default {
    name: 'Book',
    props: ['book'],
};
</script>
  
<style>
.book {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px;
}

.book img {
    width: 200px;
    height: 300px;
}

.book h3 {
    margin-top: 16px;
    margin-bottom: 8px;
}

.book p {
    margin: 0;
}
</style>
<!-- This component expects to receive a book prop that contains the book's details. The book prop should have the following properties:

coverUrl: a URL to the book's cover image
title: the book's title
author: the book's author
description: a brief description of the book
The component will display the book's cover image, title, author, and description in a nicely formatted layout. You can customize the styles to suit your needs.   -->