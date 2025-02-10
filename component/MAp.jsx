import React from 'react'

export default function MAp() {
  return (
    <div >

      <div className="flex flex-col items-center justify-center p-4">
        <h2 className="text-xl font-semibold mb-4">Location Map</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56565.00145901554!2d84.47246315914309!3d27.61483382087024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3994e8a528ee3297%3A0xad7e57ada4ce9d83!2sRatnanagar%2044200!5e0!3m2!1sen!2snp!4v1738483426887!5m2!1sen!2snp"
          width="1500"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-lg shadow-lg"
        ></iframe>
      </div>
    </div>




  )
}
