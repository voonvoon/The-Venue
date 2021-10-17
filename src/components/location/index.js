import React from 'react';

const Location = () => { 
    return(
        <div className="location_wrapper">

            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.1525319480415!2d101.6912452144161
                !3d3.0538144977761257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4a97daf75aff%3A0x35
                e03f9f339a13b1!2sAxiata%20Arena%20Bukit%20Jalil!5e0!3m2!1sen!2smy!4v1632976183056!5m2!1sen!2smy" 
                width="100%" 
                height="500px" 
                frameBorder="0"
                title="gglemaps"
                allowFullScreen         
            ></iframe>

            <div className="location_tag">
                <div>
                    Location
                </div>
            </div>

        </div>
    )
}

export default Location;