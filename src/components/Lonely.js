import React from 'react';
import LikedPerson from "./LikedPerson";

const Lonely = ({ activeUserImage, likedUsers, superLikedUsers }) => {
    return ( 
        <div id="lonely">
            <p>There's no new around you</p>

            <span className="pulse">
                <img src={ `/images/users/${activeUserImage}`} alt="You..." />
            </span>

            <div id="liked-people">
                <p>
                    {
                        likedUsers.lenght > 0 
                        ? "People you liked... let's hope they like you too!"
                        : ''
                    }
                </p>

            {
                likedUsers.map( item =>(
                    <LikedPerson key={item.id} person={item} />
                ))
            }

            <p>{ superLikedUsers.lenght > 0 ? 'People you super liked!' : ''  }</p>

            {
                superLikedUsers.map( item => (
                    <LikedPerson key={item.id} person={item} />
                ))
            }
            </div>
        </div>
     );
}
 
export default Lonely;