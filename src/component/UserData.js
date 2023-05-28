import React from 'react'

const UserData = ({ users }) => {




    return (
        <>
            <h2>List of Users</h2>
            <div className="container-fluid mt-5">
                <div className="row text-center">

                    {
                        users.map(person => {

                            const { id, login, type, avatar_url, url } = person;
                            return (
                                <>
                                    {/* { console.log(id)} */}
                                    <div className="col-10 col-md-4  mt-4" key={id}>
                                        <div className="card p-2">
                                            <div className="d-flex align-items-center">
                                                <div className="image"> <img src={avatar_url} className="rounded" width="155" /> </div>
                                                <div className="ml-3 w-100">
                                                    <h4 className="mb-0 mt-0 textLeft">{login}  </h4>
                                                    <span className='textLeft' >{type}</span><br />
                                                    {/* <p className='textLeft' >{title}</p> */}
                                                    <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                                                        <div className="d-flex flex-column">
                                                            <span className="articles">ID</span> <span className="number1">{id}</span> </div>
                                                        <div className="d-flex flex-column">
                                                            <span className="followers">Followers</span> <span className="number2">{Math.floor((Math.random() * 1000) + 1)}</span> </div>
                                                        <div className="d-flex flex-column">
                                                            <span className="rating">Rating</span> <span className="number3">8.9</span> </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }


                </div>
            </div>
        </>
    )
}

export default UserData
