import React from 'react'

export const ColorComponent = (props) => {
    if (isNaN(props.id)) {
        return (<div><h1 style={{color:props.color1, backgroundColor:props.color2}}>The String is :{props.id}</h1></div>)
    }
    return (<div><h1 style={{color:props.color1, backgroundColor:props.color2}}>The number is :{props.id}</h1></div>)
}
export default ColorComponent;
