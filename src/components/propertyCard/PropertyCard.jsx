import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import classes from './propertyCard.module.css'

const PropertyCard = ({
  property
}) => {
  const detailsPageUrl = `/details/${property?._id}`


  return (
    
      <div className={classes.container}>
      <div className={classes.wrapper}>
        <Link  href={`/details/${property.id}`} className={classes.imageContainer}>
          <Image
            src={property?.img}
            width="300"
            height="300"
          />
          <span className={classes.propertyCategory}>
            {property?.type}
          </span>
          <div className={classes.propertyData}>
            <h5>{property?.title}</h5>
          </div>
        </Link>
      </div>
      </div>
  )
}

export default PropertyCard