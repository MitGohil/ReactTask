import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {
    MDBTable, MDBTableHead, MDBTableBody, MDBBtn,
} from 'mdb-react-ui-kit';

const Userdetail = () => {
    const { userid } = useParams()
    const [abc, setAbc] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        const posts = async () => {
            const apiUrl = `https://jsonplaceholder.typicode.com/posts/` + userid;
            const response = await fetch(apiUrl);
            const resjson = await response.json();
            setAbc(resjson)
            console.log(abc);
        }
        posts()
    }, { userid })
    const back = () => {
        navigate("/")
    }
    return (
        <div>
            <h1 className="text-center">Userdetails</h1>
            <MDBTable>
                <MDBTableHead>
                    <tr>
                        <th scope='col'>userId</th>
                        <th scope='col'>id</th>
                        <th scope='col'>title</th>
                        <th scope='col'>body</th>
                    </tr>
                </MDBTableHead>
                <MDBTableBody>
                    {
                        <>
                            <tr>
                                <th scope='row'>{abc.userId}</th>
                                <td>{abc.id}</td>
                                <td>{abc.title}</td>
                                <td>{abc.body}</td>
                                <td>
                                    <MDBBtn onClick={() => back()} className='text-dark mx-1 bg-primary bg-gradient' rounded size='sm' >Back</MDBBtn>
                                </td>
                            </tr>

                        </>
                    }
                </MDBTableBody>
            </MDBTable>


        </div>
    )
}

export default Userdetail
