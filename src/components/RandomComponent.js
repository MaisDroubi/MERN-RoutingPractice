import React from 'react'

export const RandomComponent = (props) => {
    if (isNaN(props.id)) {
        return (
            <div><h1>The String is :{props.id}</h1></div>
        )
    }
    return (
        <div><h1>The number is :{props.id}</h1></div>
    )


}
export default RandomComponent;
