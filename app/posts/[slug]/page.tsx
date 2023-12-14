'use client';

import Image from 'next/image';

import styles from './SinglePage.module.css';
import { getSinglePost } from '@/lib/data';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { useSession } from 'next-auth/react';

interface SinglePageProps {
	params: {
		slug: string;
	};
}

const SinglePage = ({ params: { slug } }: SinglePageProps) => {
	const { status } = useSession();
	const [post, setPost] = useState();
	const ref = useRef<HTMLTextAreaElement>(null);

	function handleOnComment(event: ChangeEvent<HTMLFormElement>): void {
		event.preventDefault();

		if (ref.current != null) {
			const comment = {
				desc: ref.current.value,
				postSlug: slug,
			};

			fetch('http://localhost:3000/api/comments', {
				method: 'POST',
				body: JSON.stringify(comment),
			})
				.then((response) => {
					console.log({ response });
				})
				.catch((error) => {
					console.log({ error });
				});
		}
	}

	useEffect(() => {
		getSinglePost(slug)
			.then((data) => {
				console.log({ data });
				setPost(data);
			})
			.catch(console.log);
	}, []);

	return (
		<div>
			<div className={styles.user}>
				{post?.user?.image && (
					<div className={styles.userImageContainer}>
						<Image src={post?.user?.image} alt="" fill className={styles.avatar} />
					</div>
				)}
				<div className={styles.userTextContainer}>
					<span className={`title-color font-medium text-xl`}>{post?.user?.name}</span>
					<span className="text-gray-500 text-sm">
						{post?.createdAt &&
							new Date(post.createdAt).toLocaleDateString('en-US', {
								year: 'numeric',
								month: 'long',
								day: 'numeric',
							})}
					</span>
				</div>
			</div>
			<div className={styles.infoContainer}>
				{post?.img && (
					<div className={styles.imageContainer}>
						<Image src={post.img} alt="" fill className={styles.image} />
					</div>
				)}
				<div className={styles.textContainer}>
					<h1 className="text-color text-6xl font-medium">{post?.title}</h1>
				</div>
			</div>

			<div className={styles.content}>
				<div className={styles.post}>
					<div
						className={styles.description}
						dangerouslySetInnerHTML={{ __html: post?.desc ?? '' }}
					/>
				</div>
			</div>
			<div className="flex flex-col gap-8">
				<h3 className="font-medium text-xl title-color">Comments</h3>

				{status === 'authenticated' && (
					<div>
						<form
							action=""
							onSubmit={handleOnComment}
							className="box flex flex-col items-start gap-4"
						>
							<textarea
								placeholder="Share your thoughts here..."
								ref={ref}
								className="w-full focus-visible: outline-none p-4 rounded-md text-color bg-primary"
								rows={3}
								id="desc"
								name="desc"
							/>
							<button
								className="bg-primary-color px-8 py-4 leading-4 rounded-full text-white font-medium"
								type="submit"
							>
								Comment
							</button>
						</form>
					</div>
				)}

				<div>
					{post?.comments && (
						<ul className="box flex flex-col gap-6">
							{post.comments.map((comment) => (
								<li key={comment.id}>
									<div className="flex gap-4 items-center">
										<div>
											<Image
												className="rounded-full"
												src={comment.user.image}
												width={42}
												height={42}
												alt={'user-logo'}
											></Image>
										</div>
										<div className="flex flex-col gap-1">
											<span className="title-color font-medium">
												{comment.user.name}
											</span>
											<span className="text-gray-500 text-sm">
												{new Date(comment.createdAt).toLocaleDateString(
													'en-US',
													{
														year: 'numeric',
														month: 'long',
														day: 'numeric',
													},
												)}
											</span>
											<p className="text-color">{comment.desc}</p>
											<span className="text-blue-500 font-medium cursor-pointer">
												<i className="nf nf-fa-link"></i> Reply
											</span>
										</div>
									</div>
								</li>
							))}
						</ul>
					)}
				</div>
			</div>
		</div>
	);
};

export default SinglePage;
