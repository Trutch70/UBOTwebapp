import React, { forwardRef } from 'react';
import classes from '../MainPage.module.css';
import Tile from './Tile';
import LoadingTiles from './LoadingTiles';

const Tiles = forwardRef(({
  receivers = [],
  loading = true,
  loadingTilesAmount = 4
}, ref) => {
    return (
        <div ref={ref} className={classes.tiles}>
            {
                receivers.map((receiver) => {
                    return <Tile bgMode={receiver.image_path ? 'dark' : null}
                                 background={receiver.image_path}
                                 buttonHref={`/businesses/${receiver.id}`}
                                 key={receiver.id}
                                 title={receiver.name}
                                 description={receiver.description}
                    />
                })
            }
            {
                loading &&
                <LoadingTiles amount={loadingTilesAmount}/>
            }
        </div>
    );
});

export default Tiles;
