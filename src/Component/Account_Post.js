import React from 'react'
import './Account_post.css';
import logo from "../Assets/images/account.jpeg"

function Account_Post() {
    return (
        <div className='container back-ground-color'>
            <div className=' w-100 h-100 '>
                <div className='mt-5'>
                    <h1 className='text-black fw-bold text-center'>Account Type Post</h1>
                    <div className='border-black row'>
                        <div className='col-6'>
                           <img src={logo} className='post_img'/>
                        </div>
                        <div className='col-6'>
                        <div className='mt-8'>
                            <form>
                                <div class="form-group">
                                    <label for="exampleInputEmail1" className='post_label'>AccountType Name</label>
                                    <input type="email" class="form-control mt-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter AccountType Name" />
                                </div>
                                <div class="form-group mt-3">
                                    <label for="exampleInputPassword1" className='post_label'>Description</label>
                                    <input type="password" class="form-control mt-2" id="exampleInputPassword1" placeholder="Description" />
                                </div>
                               
                                <button type="submit" class="btn btn-primary mt-5 w-100">Submit</button>
                            </form>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Account_Post