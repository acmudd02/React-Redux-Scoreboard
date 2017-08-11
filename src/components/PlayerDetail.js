import React, { PropTypes } from 'react';

const PlayerDetail = ({  }) => {
  if(selectedPLayer ){
    return (
      <div>
        <h3>{selectedPLayer.name}</h3>
        <ul>
          <li>
            <span>Score: </span>
            {selectedPLayer.score}
          </li>
          <li>
            <span>Created: </span>
            {selectedPLayer.Created}
          </li>
          <li>
            <span>Updated: </span>
            {selectedPLayer.Updated}
          </li>
        </ul>
      </div>
    );
  }
  else {
    return (<p>Click on a player to see more details</p>);
  }
};

PlayerDetail.PropTypes = {
  selectedPLayer: PropTypes.object
};

export default PlayerDetail;
