import React from 'react';
import createstore from'redux'
import reducerr from '../reducerr'
import datapage from './datapage'

const Store = () => {
    const store=createstore(reducerr)
    Store.subscribe(()=>
        {
            let cchange=store.getState()
            infoPageChanged(cchange.infoPage)

        }
    )
    return (
        <div>
            
        </div>
    );
}

export default Store;
