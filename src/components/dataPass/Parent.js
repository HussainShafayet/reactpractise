import React from 'react'
import Child from './Child';
export default function Parent() {
    let data="This is data from parent";
    const handleParentData=(value)=>{
        console.log('parent',value);
        data = 'Updated data from parent';
        // return data;
    }
    return (
        <div>
            <Child data={data}  onChildrenData={handleParentData} />
            <p>{data}</p>
        </div>
    )
}
