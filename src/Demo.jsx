import React from 'react';
import Sample from './Sample';
import {Hello} from './Sample';

export default function Demo(){
    let count = 100;
    count++;
    count++;
    return(
        <div> <h3> Johnson David  </h3>
        {count}
        <Sample />
        <Hello />
        </div>
        
    )
}