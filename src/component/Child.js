import React from 'react';
import {useLittera} from 'react-littera';



function Child(props) {
    const [translated] = useLittera(props.translations);
    return (
        <div>
            {console.log(Object.entries(translated))}
            {
                

            }

            {translated.king0.map(info => {
                console.log(info)
                return <h1> {info.name} </h1>
            })}
        </div>
    );
}

export default Child;