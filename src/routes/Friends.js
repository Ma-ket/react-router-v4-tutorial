import React from "react";
import { Routes, Route, Link } from 'react-router-dom';

function Friends() {
    return (
        <div>
            <h2>Friends</h2>
            <Routes>
                <Route path="/" element={ <FriendList /> }>
                    <Route path=":id" element={ <Friend /> } />
                </Route>
            </Routes>
        </div>
    );
}

function FriendList() {
    return (
        <div>
            { FRIENDS.map(friend => (
                <li key={ friend.id }>
                    <Link to={ friend.id } >
                        { friend.nameJa }
                    </Link>
                </li>
            )) }
        </div>
    );
}

function Friend(props) {
    console.log(props);
    const { id } = props.match.params;
    const friend = friendById(id);

    if (typeof friend === 'undefined') {
        return (
            <div>
                <p>Friends with id `{ id }` does not exist.</p>
            </div>
        )
    }

    const containerStyle = {
        border: "1px gray solid",
        display: 'inline-block',
        padding: 10
    }
    
    const contentsStyle = {
        margin: 0
    }

    return (
        <div>
            <div style={ containerStyle }>
                <p style={ contentsStyle }>{ friend.family }</p>
                <h1 style={ contentsStyle }>{ friend.nameJa }</h1>
                <p style={ contentsStyle }>{ friend.nameEn }</p>
            </div>
        </div>
    )
}


const FRIENDS = [
    {
        id: 'serval',
        nameJa: 'サーバル',
        nameEn: 'Serval Cat',
        family: 'ネコ目ネコ科ネコ属'
    },
    {
        id: 'raccoon',
        nameJa: 'アライグマ',
        nameEn: 'Common raccoon',
        family: 'ネコ目アライグマ科アライグマ属'
    },
    {
        id: 'fennec',
        nameJa: 'フェネック',
        nameEn: 'Fennec',
        family: 'ネコ目イヌ科キツネ属'
    }
]

const friendById = id => FRIENDS.find(friends => friendById.id === id);

export default Friends;
