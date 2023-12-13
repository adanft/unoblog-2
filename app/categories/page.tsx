"use client";

import React, { ChangeEvent } from "react";
import { Category } from "@prisma/client";
import useForm from "@/lib/hooks/use-form";
import { useRouter } from "next/navigation";

function Categories() {
  const router = useRouter();
  const [input, setInput] = useForm<Category>({
    slug: "",
    title: "",
    color: "#000000",
    id: "",
  });

  function handleOnSaveCategory(event: ChangeEvent<HTMLFormElement>): void {
    event.preventDefault();

    fetch("http://localhost:3000/api/categories", {
      method: "POST",
      body: JSON.stringify(input),
    })
      .then((response) => {
        router.push("/");
        console.log({ response });
      })
      .catch((error) => {
        console.log({ error });
      });
  }

  return (
    <div>
      <div className="">
        <form action="" onSubmit={handleOnSaveCategory}>
          <div>
            <input
              type="text"
              name="title"
              id="title"
              defaultValue={input.title}
              onChange={setInput}
            />
            <label htmlFor="title">Title</label>
          </div>
          <div>
            <input
              type="text"
              name="slug"
              id="slug"
              defaultValue={input.slug}
              onChange={setInput}
            />
            <label htmlFor="slug">Slug</label>
          </div>
          <div>
            <input
              type="color"
              name="color"
              id="color"
              defaultValue={input.color!}
              onChange={setInput}
            />
            <label htmlFor="color">Color</label>
          </div>
          <button type="submit">Add category</button>
        </form>
      </div>
    </div>
  );
}

export default Categories;
