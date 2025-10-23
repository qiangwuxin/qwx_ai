import React from 'react';
import avatar from './images/avatar.webp';
import book from './images/book.webp';
import {
    add
}from './math'

const Hello=()=>{
    return (
        <>
           来了到底
           <img src={avatar} alt="avatar" />
           <img src={book} alt="book" />
           { add(2,1)}
        </>
    )
}

export default Hello;