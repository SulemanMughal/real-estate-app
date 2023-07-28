"use client"

import React from 'react'

import classes from "./searchModalBtns.module.css"

function SearchModalBtns({
  step,
  handleBack,
  handleNext
}) {

  const isFirstStep = step === 1


  const nextButtonLabel = () => {
    if(step !== 3){
      return "Next"
    }

    if(step === 3){
      return "Search"
    }
  }

  return (
    <div className={classes.contianer}>
      <div className={classes.wrapper}>
        <button className={classes.backBtn} onClick={handleBack} disabled={isFirstStep}>
          Back
        </button>
        <button className={classes.nextBtn} onClick={handleNext}>
            {nextButtonLabel()}
        </button>
      </div>
    </div>
  )
}

export default SearchModalBtns