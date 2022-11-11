import React from 'react';
import { GoLocation } from 'react-icons/go'
import { TbMountain } from 'react-icons/tb'

import styles from './Location.module.scss';

import QuiltedImageList from './QuiltedImageList/QuiltedImageList';

const Location = ({ location }) => {
  const { images } = location

	return (
		<div className={`${styles.container} section__padding`}>
			<div className= 'heading'>
				<h2>The Location</h2>
			</div>
			<div className={styles.content}>
				<div className = {styles.description}>
          <p>Discover beautiful Cape Town and its wonders, just around the corner.</p>
        </div>
				<div className={styles.content_main}>
					<div className={styles.left}>
            {/* <div className= {styles.title}>
              <p>The address <GoLocation /></p>
            </div> */}
						<iframe
							src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.137175817019!2d18.4127454!3d-33.9118689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc67438025055d%3A0x1ab2c9894b348066!2s22%20Wessels%20Rd%2C%20Green%20Point%2C%20Cape%20Town%2C%208051!5e0!3m2!1sen!2sza!4v1667550594514!5m2!1sen!2sza'
	
							allowfullscreen='true'
							loading='lazy'
							referrerpolicy='no-referrer-when-downgrade'
						></iframe>
					</div>
					<div className={styles.right}>
            {/* <div className= {styles.title}>
              <p>The sights <TbMountain /></p>
            </div> */}
            <QuiltedImageList images = {images} />
          </div>
				</div>
			</div>
		</div>
	);
};

export default Location;
