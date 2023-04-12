import React from 'react';

export default function Contact() {
  return (
    <form>
    <div className='d-flex flex-column align-items-center justify-content-center'>
      <h1 className="text-center">Contact Page</h1>
      <div class="w-50 mx-auto mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email: </label>
  <input type="email" class="form-control" placeholder="email"></input>
</div>
<div class="mx-auto w-50 mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Message</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<button type="submit" class="ml-auto btn btn-dark">Submit</button>
    </div>
    </form>
  );
}
