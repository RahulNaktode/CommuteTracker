import React from 'react'
import { Link } from 'react-router'
import { MapPinCheck, PhoneCall, MailCheck } from 'lucide-react'
import Facebook from './../assets/contactImg/facebook.png'
import Instagram from './../assets/contactImg/insta.png'
import Linkedin from './../assets/contactImg/linkedin.png'
import Twitter from './../assets/contactImg/twitters.png' 
import Youtube from './../assets/contactImg/youtube.png'
import SuggestionImg from './../assets/contactImg/sendsuggestion.png'
import Button from '../components/Button'


function Contact() {
  return (
    <div>
      <div className=" mx-auto px-6 py-10">
        <h1>Contact Us</h1>

        <div className='md:gap-10 md:mx-30 flex flex-col md:flex-row mt-3 mb-10'>

          <Link to="https://www.google.com/maps?q=Pune,India&output=embed"
            className="mt-4 border bg-white p-4 rounded-lg shadow md:w-100 hover:transition hover:shadow-lg hover:scale-105 cursor-pointer">
            <div className='flex flex-col items-center gap-2 mb-2'>
              <MapPinCheck className='text-pink-500' /><span className="font-semibold">Address</span>
            </div>
            <p className='text-center'>104 CommuteTacker ButiBori, Nagpur</p>
          </Link>

          <Link to="tel:+919860737643" className="mt-4 border bg-white p-4 rounded-lg shadow md:w-100 hover:transition hover:shadow-lg hover:scale-105 cursor-pointer">
            <div className='flex flex-col items-center gap-2 mb-2'>
              <PhoneCall className='text-pink-500' /><span className="font-semibold">Mobile No.</span>
            </div>
            <p className='text-center'>+91 9356245674</p>
          </Link>

          <Link to="mailto:commutetracker@gmail.org" className="mt-4 border bg-white p-4 rounded-lg shadow md:w-100 hover:transition hover:shadow-lg hover:scale-105 cursor-pointer">
            <div className='flex flex-col items-center gap-2 mb-2'>
              <MailCheck className='text-pink-500' /><span className="font-semibold">Email Id</span>
            </div>
            <p className='text-center'>commutetracker@gmail.org</p>
          </Link>
        </div>

        <h1>Follow us</h1>

        <div className="flex gap-4 justify-center mt-3 mb-10">
          <Link to="https://www.facebook.com/"><img src={Facebook} alt='facebook' className='w-10 hover:scale-110 transition' /></Link>
          <Link to="https://www.instagram.com/"><img src={Instagram} alt='Instagram' className='w-10 hover:scale-110 transition' /></Link>
          <Link to="https://in.linkedin.com/"><img src={Linkedin} alt='Linkedin' className='w-10 hover:scale-110 transition' /></Link>
          <Link to="https://x.com/"><img src={Twitter} alt='Twitter' className='w-10 hover:scale-110 transition' /></Link>
          <Link to="https://www.youtube.com/"><img src={Youtube} alt='Youtube' className='w-10 hover:scale-110 transition' /></Link>
        </div>

        <h2>Location</h2>

        <div className="mt-4 rounded-xl overflow-hidden shadow md:mx-10">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29814.45003720829!2d78.98711865820553!3d20.920113114909395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd497f438556db1%3A0x207f44dbb5e965f2!2sBori%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1774591023645!5m2!1sen!2sin"
            className="w-full h-60 md:h-80 object-cover"
            loading="lazy"
          />
        </div>

        <p className="text-gray-600 text-center">
          We are located in the heart of the city. Visit our store anytime!
        </p>

        <form
          className="mt-4 flex flex-col gap-3 max-w-200 bg-white p-6 rounded-lg shadow m-auto"
        >

          <div className="flex flex-col md:flex-row gap-6 items-center">

            <div className='flex'>
              <img src={SuggestionImg} alt="Send Suggestion" className="w-full h-60 md:h-80 object-cover rounded-lg" />
            </div>
            <div className='w-full md:w-1/2 flex flex-col gap-3'>
              <h2 className="mt-2 text-2xl font-semibold text-black-800 text-center ">
                Send Suggestion
              </h2>

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <textarea
                name="message"
                placeholder="Your Suggestion..."
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <Button
                title="Send Message"
                varient="primary"
                size="medium"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact
