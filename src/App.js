import React from 'react';
import CardList from './CardList';
import {Items} from './Items';
import SearchBox from './searchBox';
import AddItemButton from './AddItemButton';

const App = () => {
    return(
        <div className='tc'>
            <h1> Kinmel </h1>
            <SearchBox/>
            <AddItemButton />
            <div>
                <CardList Items={Items}/>
            </div>
        </div>
    )
}
export default App;

