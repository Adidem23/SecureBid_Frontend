import React from 'react'

const DisplayLandDetails = (props) => {
  return (
    <>
    {
          <div className='explore-result'>
            <div className='row'>
              <div className='col-12 col-md-6'>
                <p><b>Owner:</b> {props.owner}</p>
                <p><b>Survey Number:</b> {props.surveyNo}</p>
                <p><b>Property ID:</b> {props.propertyId}</p>
                <p><b>Market Value:</b> {props.marketValue}</p>
              </div>

              <div className='col-12 col-md-6'>
              <p><b>TenderName:</b> {props.tendorName}</p>
              <p><b>TenderType:</b> {props.tendortype}</p>
              <p><b>ipfsuri:</b> {props.ipfsuri}</p> 
              <p><b>UserName:</b> {props.userName}</p>
              </div>
            </div>
            {
            (props.available) ? 
              <button className='marked-available'><b>Marked Available</b></button>
              :
              <button className='mark-available-btn' onClick={() => {props.markAvailable(props.index)}} ><b>Mark Available</b></button>
            }
          </div> 
    }
    </>
  )
}

export default DisplayLandDetails