import React from 'react';

export default function Contact() {
  return (
    <form>
    <div className='d-flex flex-column align-items-center justify-content-center'>
      <h1 className="pt-5 text-center">Contact Page</h1>
      <div className="w-50 mx-auto mb-3">
  <label for="exampleFormControlInput1" className="form-label">Name: </label>
  <input type="text" className="form-control" placeholder="Name"></input>
</div>
      <div className="w-50 mx-auto mb-3">
  <label for="exampleFormControlInput1" className="form-label">Email: </label>
  <input type="email" className="form-control" placeholder="Email"></input>
</div>
<div className="mx-auto w-50 mb-3">
  <label for="textArea1" className="form-label">Message</label>
  <textarea placeholder='Shoot me a message!' className="form-control" id="textarea" rows="3"></textarea>
</div>
<button type="submit" className="w-25 my-5 ml-auto btn btn-dark">Submit</button>
    </div>
    </form>
  );
}
