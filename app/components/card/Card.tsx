import Image from 'next/image';
import Link from 'next/link';

import styles from './Card.module.css';
import { Post } from '@prisma/client';

const Card = ({ post }: { post: Post }) => {
	return (
		<div className={`${styles.container} box`} key={post.id}>
			{post.img && (
				<div className={styles.imageContainer}>
					<Image src={post.img} alt={post.title} fill className={styles.image} />
				</div>
			)}
			<div className={styles.textContainer}>
				<div className={styles.detail}>
					<span className={styles.date}>
						{new Date(post.createdAt).toLocaleDateString('en-US', {
							year: 'numeric',
							month: 'long',
							day: 'numeric',
						})}{' '}
						-{' '}
					</span>
					<span className={styles.category}>{post.catSlug}</span>
				</div>
				<Link href={`/posts/${post.slug}`}>
					<h1>{post.title}</h1>
				</Link>
				<div
					className={styles.desc}
					dangerouslySetInnerHTML={{ __html: post.desc.substring(0, 60) }}
				/>
				<div>
					<Link
						href={`/posts/${post.slug}`}
						className={`text-blue-500 font-medium py-2 px-4 inline-block`}
					>
						Read More
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Card;
