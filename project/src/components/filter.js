import React from 'react';

const Filter = () => {

    return (
        <>
            <div>
             <label>
          <input
            type="radio"
            value="hotel"
          />
          호텔
        </label>
        </div>
        <div>
        <label>
          <input
            type="radio"
            value="pension"
          />
          펜션
        </label>
        </div>
        </>
    );
};

export default Filter;