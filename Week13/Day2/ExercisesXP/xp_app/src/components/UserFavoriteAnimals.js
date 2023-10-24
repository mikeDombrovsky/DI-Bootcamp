import React from 'react';

class UserFavoriteAnimals extends React.Component {

    render() {
        return (
            <ul>
                {
                    this.props.favAnimals.map((name, i) => {
                        return <li key={i}>{name}</li>;
                    })
                }
            </ul>
        )

    }
}

export default UserFavoriteAnimals;