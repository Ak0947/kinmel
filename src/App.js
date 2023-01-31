import React from 'react';
import CardList from './CardList';
import {Items} from './Items';
import SearchBox from './searchBox';

const App = () => {
    return(
        <div className='tc'>
            <h1> Kinmel </h1>
            <SearchBox/>
            <div>
                <CardList Items={Items}/>
            </div>
        </div>
    )
}
export default App;

