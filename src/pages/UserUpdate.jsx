import React, { useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
}
from 'mdb-react-ui-kit';
import axios from "axios";
import {useNavigate} from "react-router-dom";
import toast,{Toaster} from 'react-hot-toast';

function Update() {
    let Token = (localStorage.getItem('logintoken'))
  
const navigate=useNavigate();
let userData=JSON.parse(localStorage.getItem('user'))

const [user,setUser]=useState({
    name:userData.name,
    email:userData.email,
    mobile:userData.mobile,
    college:userData.college,
    course:userData.course,
    city:userData.city,
    pin_code:userData.pin_code
})
const handleInput=(e)=>{
    e.persist();
    setUser({...user,[e.target.name]:e.target.value})
}
const id=userData._id
const updateData=()=>{
    console.log(Token);
    if(user.email==="" || user.mobile==="" || user.pin_code==="" || user.name===""){
        toast.error("Email, Mobile and Pin Code is needed to keep you Active !")
    }
    else{
        console.log(user);
        axios.put('https://edu-tech-bwe5.onrender.com/v1/user/update/'+id,user,{headers: {
        'token': Token}
    }).then(res=>{ 
            
          if(res.data.Success===true){
           user._id=id;
          localStorage.removeItem('user')
          localStorage.setItem('user',JSON.stringify(user))
      
            toast.success(res.data.Message)
            setTimeout(() => {
                navigate('/profile');
              }, 1000);
            
          }
          else{
              toast.error(res.data.Message)
          }
        })
    }
}
  return (
    <MDBContainer fluid>
        <Toaster
                position="top-center"
                reverseOrder={false}
                />
      <MDBRow className='justify-content-center align-items-center m-5'>

        <MDBCard>
          <MDBCardBody className='px-4'>

            <h3 className="fw-bold mb-4 pb-2 pb-md-0 mb-md-5">Update User Details</h3>

            <MDBRow>

              <MDBCol md='6'>
                <MDBInput wrapperClass='mb-4' label='Name' size='lg' value={user.name} onChange={handleInput} name='name' type='text'/>
              </MDBCol>

              <MDBCol md='6'>
                <MDBInput wrapperClass='mb-4' label='Email' size='lg' value={user.email} onChange={handleInput} name='email' type='email'/>
              </MDBCol>

            </MDBRow>

            <MDBRow>

              <MDBCol md='6'>
                <MDBInput wrapperClass='mb-4' label='Mobile' size='lg' value={user.mobile} onChange={handleInput} name='mobile' type='number'/>
              </MDBCol>
              <MDBCol md='6'>
                <MDBInput wrapperClass='mb-4' label='Course' size='lg' value={user.course} onChange={handleInput} name='course' type='text'/>
              </MDBCol>

            </MDBRow>

            <MDBRow>

              <MDBCol md='12'>
                <MDBInput wrapperClass='mb-4' label='College' size='lg' value={user.college} onChange={handleInput} name='college' type='text'/>
              </MDBCol>

            </MDBRow>
            <MDBRow>

            <MDBCol md='6'>
            <MDBInput wrapperClass='mb-4' label='City' size='lg' value={user.city} onChange={handleInput} name='city' type='text'/>
            </MDBCol>

            <MDBCol md='6'>
            <MDBInput wrapperClass='mb-4' label='Pin Code' size='lg' value={user.pin_code} onChange={handleInput} name='pin_code' type='number'/>
            </MDBCol>

            </MDBRow>

            <MDBBtn className='mb-4' onClick={updateData} size='lg'>Submit</MDBBtn>

          </MDBCardBody>
        </MDBCard>

      </MDBRow>
    </MDBContainer>
  );
}

export default Update;