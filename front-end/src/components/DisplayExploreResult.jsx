import React from 'react'
import { useState } from 'react'
const DisplayExploreResult = (props) => {
  const [BidAmount, setBidAmount] = useState(0);
  const [FileURI, setFileURI] = useState("");

  return (
    <>
    {
        (props.propertyId != 0) ?   // propertyId != 0 means we got a result while exploring.
          (
            <div className='explore-result'>
              <p><b>Owner Address:</b> {props.owner}</p>
              <p><b>Owner Name:</b>{props.OwnerName}</p>
              <p><b>Survey Number:</b> {props.surveyNo}</p>
              <p><b>Market Value:</b> {props.marketValue}</p>
              <p><b>TenderName:</b> {props.tendorName}</p>
              <p><b>TenderType:</b> {props.tendortype}</p>
              <p><b>ipfsURI:</b> {props.ipfsuri}</p>

              {
              (props.available) ?  // if land is marked for sale.
                (
                  (props.isAdmin || props.isOwner) ?  // isOwner means "is Owner exploring its own land?"
                    (
                      // if owner is exploring its own land, then, owner CANNOT request its own land, hence "Marked for sale" will be displayed only.
                      <button className='marked-sale'><b>Marked for sale</b></button>
                    )
                    :
                    (
                      // if owner is exploring other's land, then owner can request to buy other's land, hence "Request for buy" can be displayed on button.
                      (props.didIRequested) ? 
                      <button className='req-pending'><b>Request Pending</b></button>
                      :
                      // <button className='buy-btn'onClick={props.requestForBuy(props.surveyNo)}><b>Request for buy</b></button>
                      <>
                      <div style={{display:"flex",flexDirection:"row"}}>
                      <p><b>Budget:</b></p>
                      <input type="number" onChange={(e)=>{setBidAmount(e.target.value)}} placeholder='Enter Bid Amount' style={{marginLeft:"10px"}}/>
                      </div>

                      <div style={{display:"flex",flexDirection:"row" ,marginTop:"15px"}}>
                      <p><b>FileURI:</b></p>
                      <input type="text" onChange={(e)=>{setFileURI(e.target.value)}} placeholder='Enter File URI' style={{marginLeft:"10px",}}/>
                      </div>
                    
                      <button className='buy-btn' style={{marginTop:"20px"}} onClick={() => props.requestForBuy(props.surveyNo,BidAmount,FileURI)}><b>Request for buy</b></button>

                      </>
                      
                    )
                )
                :
                <button className='no-sale'><b>Not Available</b></button>
              }

            </div> 
          )
          :
          (
            (props.noResult) ? 
              <div className="no-result-div">
                <p className='no-result'>No result found :(</p>
              </div>
              :
              <></>
          )
    }
    </>
  )
}

export default DisplayExploreResult