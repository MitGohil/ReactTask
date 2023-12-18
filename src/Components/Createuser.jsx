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
import { useNavigate } from 'react-router-dom';

function Createuser() {
const [ title, setTitle] = useState("")
const [body, setBody] = useState("")
const navigate = useNavigate()

const savedata = (event) => {
    const data = {title, body }
    event.preventDefault()
    if (title === "" || body === "") {
        alert("Please fill blank input")
    }
    else {
        // console.log("handlesubmit");
        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then((result) => {
            result.json().then((resp) => {
                alert('Create successfully.')
                navigate("/")
            })
        })
    }
}
    return (
        <MDBContainer fluid>

            <MDBRow className='justify-content-center align-items-center m-5'>

                <MDBCard>
                    <MDBCardBody className='px-4'>

                        <h3 className="fw-bold mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>

                        <MDBRow>

                            <MDBCol md='6'>
                                <MDBInput value={title} onChange={(e)=>setTitle(e.target.value)} wrapperClass='mb-4' label='Title' size='lg' id='form1' type='text' />
                            </MDBCol>

                            <MDBCol md='6'>
                                <MDBInput value={body} onChange={(e)=>setBody(e.target.value)} wrapperClass='mb-4' label='Body' size='lg' id='form2' type='text' />
                            </MDBCol>

                        </MDBRow><MDBBtn className='mb-4' size='lg' onClick={savedata}>Submit</MDBBtn>

                    </MDBCardBody>
                </MDBCard>

            </MDBRow>
        </MDBContainer>
    );
}

export default Createuser;