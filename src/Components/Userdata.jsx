import React, { useEffect, useState } from 'react';
import {
    MDBTable, MDBTableHead, MDBTableBody, MDBBtn, MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter, MDBModal
} from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';

export default function Userdata() {
    const [post, setPost] = useState([])
    const [dtl, setDtl] = useState({})
    const navigate = useNavigate()

    const [staticModal, setStaticModal] = useState(false);
    useEffect(() => {
        const posts = async () => {
            const apiUrl = "https://jsonplaceholder.typicode.com/posts";
            const response = await fetch(apiUrl);
            const resjson = await response.json();
            setPost(resjson)
        }
        posts()
    }, [])

    const detail = (id) => {
        navigate(`/userdetail/${id}`)
    };
    const detailPop = (id) => {
        setStaticModal(!staticModal)
        const posts = async () => {
            const apiUrl = `https://jsonplaceholder.typicode.com/posts/${id}`;
            const response = await fetch(apiUrl);
            const resjson = await response.json();
            setDtl(resjson)
        }
        posts()
    };
    const create = () => {
        navigate("/createUser")
    }


    return (
        <>
            {/* API data print */}
            <MDBTable>
                <MDBTableHead>
                    <tr>
                        <th colSpan={6} className="text-center">
                            <MDBBtn onClick={() => create()} className='text-dark mx-1 bg-primary bg-gradient' rounded size='sm' >Create User</MDBBtn>
                        </th>
                    </tr>
                    <tr>
                        <th scope='col'>id</th>
                        <th scope='col'>userId</th>
                        <th scope='col'>title</th>
                        <th scope='col'>body</th>
                    </tr>
                </MDBTableHead>
                <MDBTableBody>
                    {
                        post.map((data) =>
                            <tr>
                                <td>{data.id}</td>
                                <th scope='row'>{data.userId}</th>
                                <td>{data.title}</td>
                                <td>{data.body}</td>
                                <td>
                                    <MDBBtn onClick={() => detail(data.id)} className='text-dark mx-1 bg-primary bg-gradient' rounded size='sm' >Details</MDBBtn>
                                </td>
                                <td>
                                    {/* <MDBBtn onClick={() => detailPop(data.id)} className='text-dark mx-1 bg-primary bg-gradient' rounded size='sm' >Details Pop</MDBBtn> */}
                                    <MDBBtn onClick={() => detailPop(data.id)} className='text-dark mx-1 bg-primary bg-gradient' rounded size='sm'>View in POP</MDBBtn>
                                </td>
                            </tr>
                        )
                    }
                </MDBTableBody>
            </MDBTable>

            {/* Details Page in POP view */}

            <MDBModal staticBackdrop tabIndex='-1' open={staticModal} setOpen={setStaticModal}>
                <MDBModalDialog>
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBModalTitle>Post details</MDBModalTitle>
                            <MDBBtn className='btn-close' color='none' onClick={detailPop}></MDBBtn>
                        </MDBModalHeader>
                        <MDBModalBody>
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
                                                <th scope='row'>{dtl.userId}</th>
                                                <td>{dtl.id}</td>
                                                <td>{dtl.title}</td>
                                                <td>{dtl.body}</td>
                                            </tr>
                                        </>
                                    }
                                </MDBTableBody>
                            </MDBTable>
                        </MDBModalBody>
                        <MDBModalFooter>
                            <MDBBtn color='secondary' className='text-dark mx-1 bg-primary bg-gradient' rounded size='sm' onClick={detailPop}>
                                Close
                            </MDBBtn>
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </>
    );
}