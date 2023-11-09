import React, { useState } from 'react'
import '../css/RegisterLand.css'

const RegisterLand = (props) => {

  const { provider, web3, contract } = props.myWeb3Api;
  const account = props.account;

  const [landDetails, setLandDetials] = useState({
    state: "M", district: "N", city: "Y", propertyId: "", surveyNo: "123", owner: props.account, marketValue: "", tenderName: "", tendertype: "",ipfsuri:""
  })

  const onChangeFunc = (event) => {
    const { name, value } = event.target;
    setLandDetials({ ...landDetails, [name]: value });
  }

  const handleOnClick = async () => {
    await contract.registerLand(landDetails.state, landDetails.district, landDetails.city, landDetails.propertyId, landDetails.surveyNo, landDetails.owner, landDetails.marketValue, landDetails.tenderName, landDetails.tendertype,landDetails.ipfsuri,{
      from: account
    })
    console.log(landDetails)
    setLandDetials({ state: "", district: "", city: "", propertyId: "", surveyNo: "", owner: props.account, marketValue: "", tenderName: "", tendertype: "" ,ipfsuri:""})
  }



  return (
    <div className='container registerLand-maindiv'>
      
      <div className='row'>

        <div className='col-12 col-sm-6'>

          <form method='POST' className='admin-form'>

            <div className='form-group'>
              <label>Market Value</label>
              <input type="number" className="form-control" name="marketValue" placeholder="Enter market value"
                autoComplete="off" value={landDetails.marketValue} onChange={onChangeFunc} />
            </div>


            <div className='form-group'>
              <label>Tender Type</label>
              <input type="text" className="form-control" name="tendertype" placeholder="Enter Tender Type"
                autoComplete="off" value={landDetails.tendertype} onChange={onChangeFunc} />
            </div>


            <div className='form-group'>
              <label>Tender Name</label>
              <input type="text" className="form-control" name="tenderName" placeholder="Enter Tender Name"
                autoComplete="off" value={landDetails.tenderName} onChange={onChangeFunc} />
            </div>

            <div className='form-group'>
              <label>Tender File</label>
              <input type="text" className="form-control" name="ipfsuri" placeholder="Enter Tender File"
                autoComplete="off" value={landDetails.ipfsuri} onChange={onChangeFunc} />
            </div>
            
          </form>
        </div>

        {/* right form */}
        <div className='col-12 col-sm-6'>
          {/* <form method='POST' className='admin-form'>
            <div className='form-group'>
                <label>surveyNo</label>
                <input type="text" className="form-control" name="surveyNo" placeholder="Enter Chassis ID" 
                autoComplete="off" value={landDetails.surveyNo} onChange={onChangeFunc}/>
            </div>
            <div className='form-group'>
                <label>Market Value</label>
                <input type="number" className="form-control" name="marketValue" placeholder="Enter market value" 
                autoComplete="off" value={landDetails.marketValue} onChange={onChangeFunc}/>
            </div>
            <div className='form-group'>
                <label>TenderName</label>
                <input type="text" className="form-control" name="tenderName" placeholder="Enter Tender Name" 
                autoComplete="off" value={landDetails.tenderName} onChange={onChangeFunc}/>
            </div>

            <div className='form-group'>
                <label>Tender type</label>
                <input type="text" className="form-control" name="tendertype" placeholder="Enter Tender Type" 
                autoComplete="off" value={landDetails.tendertype} onChange={onChangeFunc}/>
            </div>

          </form> */}
        </div>
      </div>
      <button className='admin-form-btn' onClick={handleOnClick}>Submit</button>
    </div>
  )
}

export default RegisterLand