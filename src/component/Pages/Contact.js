import React from 'react'

export default function Contact() {
  return (
    <div className="container">
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input 
          type="email" 
          class="form-control" 
          id="exampleInputEmail1" 
          aria-describedby="emailHelp" 
          placeholder="Enter email"
          />
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>

        <div class="form-group">
          <label for="exampleCheck1">Your Message</label>
          <textarea rows="4" placeholder="minimum 160 chacters" className="form-control"></textarea>
        </div>
      <button type="submit" class="btn btn-primary">Send Message</button>
    </form>
    </div>
  )
}
