import React from 'react';
import axios from 'axios';

const Card = (props) =>{

return(
<div className="card">

{console.log(props)}
<h1>{props.name}</h1>
<img src={props.picture} alt="my face" />
<h3>{props.user}</h3>
<button onClick={getFollowers}>Show followers</button>
<p>{props.bio}</p>
</div>
)

}
const getFollowers = e => {
    axios.get('https://api.github.com/users/impulse2020/followers')
        .then(response => {
            for(let i = 0; i<response.data.length;i++){
                console.log(response.data[i])
            }

        })
        .catch(console.log('oops'))
}
export default Card;
