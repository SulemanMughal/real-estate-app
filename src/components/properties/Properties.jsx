import React from 'react'

import classes from "./properties.module.css"
import PropertyCard from '../propertyCard/PropertyCard';

// function Properties ({ properties }) {
//   return (
//     <div>Properties</div>
//   )
// }

// export default Properties


const Properties = ({properties}) => {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.wrapper}>
          <div className={classes.titles}>
            <h2 className={classes.mainTitle}>
              Most Viewed Properties
            </h2>
            <h5 className={classes.secondaryTitle}>
              Check them out
            </h5>
          </div>
          <div className={classes.propertyCounter }>
            {
              properties?.length > 0 ? (
                properties.map((property) => (
                  <PropertyCard key={property.id}  property={property} />
                ))
              ) : (
                <h2>No Properties Listed</h2>
              )
            }
          </div>
        </div>
        Properties
      </div>
    </>
  )
}

export default Properties;