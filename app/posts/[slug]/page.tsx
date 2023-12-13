"use client";

import Image from "next/image";

import styles from "./SinglePage.module.css";
import { getSinglePost } from "@/lib/data";
import { ChangeEvent, useEffect, useState } from "react";
import useForm from "@/lib/hooks/use-form";
import { useSession } from "next-auth/react";
import getUserRole from "@/lib/user-role";

interface SinglePageProps {
  params: {
    slug: string;
  };
}

const SinglePage = ({ params: { slug } }: SinglePageProps) => {
  const { status } = useSession();
  const [post, setPost] = useState();
  const [comment, setComment] = useForm({ desc: "", postSlug: slug });

  function handleOnComment(event: ChangeEvent<HTMLFormElement>): void {
    event.preventDefault();

    fetch("http://localhost:3000/api/comments", {
      method: "POST",
      body: JSON.stringify(comment),
    })
      .then((response) => {
        console.log({ response });
      })
      .catch((error) => {
        console.log({ error });
      });
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
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{post?.title}</h1>
          <div className={styles.user}>
            {post?.user?.image && (
              <div className={styles.userImageContainer}>
                <Image
                  src={
                    "https://lh3.googleusercontent.com/a/ACg8ocJZJ89wGhnPGsRaOGKAL2JOBik9nX81bczo3PtqFkR4iy0=s96-c"
                  }
                  alt=""
                  fill
                  className={styles.avatar}
                />
              </div>
            )}
            <div className={styles.userTextContainer}>
              <span className={styles.username}>{post?.user?.name}</span>
              <span className={styles.date}>
                {post?.createdAt &&
                  new Date(post.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
              </span>
            </div>
          </div>
        </div>
        {post?.img && (
          <div className={styles.imageContainer}>
            <Image src={post.img} alt="" fill className={styles.image} />
          </div>
        )}
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: post?.desc ?? "" }}
          />
        </div>
      </div>
      <div>
        <h3>Comments</h3>

        {status === "authenticated" && (
          <div>
            <form action="" onSubmit={handleOnComment}>
              <input
                type="text"
                id="desc"
                name="desc"
                defaultValue={comment.desc}
                onChange={setComment}
              />
              <button type="submit">Comment</button>
            </form>
          </div>
        )}

        <div>
          <ul>
            {post?.comments &&
              post.comments.map((comment) => (
                <li key={comment.id}>
                  <div>
                    <div>
                      <Image
                        src={comment.user.image}
                        width={24}
                        height={24}
                        alt={"user-logo"}
                      ></Image>
                    </div>
                    <div>
                      <span>{comment.user.name}</span>
                      <span>{comment.createdAt}</span>
                      <p>{comment.desc}</p>
                      <span>Reply</span>
                    </div>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
