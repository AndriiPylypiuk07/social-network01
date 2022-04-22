import React from 'react';
import s from './Post.module.css';

const Post = (props) => {

    return (

        <div className={s.item}>
            <img src='https://cs9.pikabu.ru/post_img/big/2018/10/22/10/1540228059127699409.jpg' />
            { props.message } 
            <div>
                <span>like </span> { props.likesCount }
                

            </div>
        </div>

    )
}

export default Post;