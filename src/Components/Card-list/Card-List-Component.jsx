import React from 'react';
import  './Card-List-styles.css';

import {Card} from '../Card/Card.component';

export const CardList = props => (
 <div className = 'card-list'> 
 
{props.monster.map(monster => 
    
    (
        <Card key = {monster.id} monster = {monster}></Card>
         
        ))} 
</div>
)