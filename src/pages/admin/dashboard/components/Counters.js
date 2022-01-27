import React from 'react';
import Card from './Counter'
import CardItems from './CounterItems';

function CardsList() {
    return (
        <>
            <div className="row cs-grid-mb">
                {
                    CardItems.map(ex => (
                        <Card
                            key={ex.id}
                            subURL={ex.subURL}
                            title={ex.title}
                            icon={ex.icon}
                            class={ex.class}
                        />
                    ))

                }
            </div>
        </>
    )
}

export default CardsList;