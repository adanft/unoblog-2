import Image from 'next/image';
import Link from 'next/link';

import styles from './Card.module.css';
import { Post } from '@prisma/client';

const Card = ({ post }: { post: Post }) => {
	return (
		<div className={`${styles.container} box-content`} key={post.id}>
			{post.img && (
				<div className={styles.imageContainer}>
					<Image src={post.img} alt={post.title} fill className={styles.image} />
				</div>
			)}
			<div className={styles.textContainer}>
				<div className="flex justify-between items-center">
					<span className="font-semibold primary-color text-lg">{post.catSlug}</span>
					<span className="text-gray-500 text-sm font-medium">
						{new Date(post.createdAt).toLocaleDateString('en-US', {
							year: 'numeric',
							month: 'long',
							day: 'numeric',
						})}{' '}
					</span>
				</div>
				<Link href={`/posts/${post.slug}`}>
					<h1>{post.title}</h1>
				</Link>
				<div
					className="text-color"
					dangerouslySetInnerHTML={{ __html: post.desc.substring(0, 60) }}
				/>
				<div>
					<Link href={`/posts/${post.slug}`} className={`text-blue-500 font-medium`}>
						Read more
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Card;
