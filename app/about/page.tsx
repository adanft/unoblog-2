import React from 'react';
import styles from './About.module.css';
import Image from 'next/image';
const About = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.header}>
				Welcome to <span className="title-color font-semibold">Unoblog</span>, your go-to
				destination for all things cryptocurrency!
			</h1>
			<Image src="/logo.png" alt="main-image" width={200} height={200}></Image>
			<div className={styles.content}>
				<p className="text-justify">
					At <span className="title-color font-medium text-lg">Unoblog</span>, we're
					passionate about exploring the dynamic world of cryptocurrencies and blockchain
					technology. Our mission is to provide insightful and up-to-date information,
					helping both beginners and seasoned enthusiasts navigate the complexities of the
					crypto space. Whether you're looking for the latest market trends, in-depth
					analyses, or practical guides on blockchain technology, we've got you covered.
					Our team of experts is dedicated to delivering content that educates, inspires,
					and empowers you on your crypto journey. Join us as we delve into the
					ever-evolving landscape of cryptocurrencies, offering you a valuable resource to
					stay informed and make informed decisions.
				</p>
			</div>
			<p className="italic text-xl text-justify">
				<span className="title-color font-medium text-lg">Unoblog</span> is more than just a
				blog; it's your gateway to the exciting world of digital currencies. Embark on this
				crypto adventure with us and stay ahead of the curve. Welcome to{' '}
				<span className="title-color font-medium text-lg">Unoblog</span>—where the future of
				finance meets insightful content!
			</p>
		</div>
	);
};

export default About;
