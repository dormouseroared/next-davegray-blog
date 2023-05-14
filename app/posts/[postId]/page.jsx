import getFormattedDate from "@/lib/getFormattedDate"
import {
  getPostData,
  getSortedPostsData,
} from "@/lib/posts"
import Link from "next/link"
import { notFound } from "next/navigation"

export function generateMetaData({ params }) {
  const posts = getSortedPostsData() // deDuped!!
  const { postId } = params

  const post = posts.find((post) => post.id === postId)

  if (!post) {
    return { title: "post not found" }
  }

  return { title: post.title }
}

export default async function Post({ params }) {
  const posts = getSortedPostsData() // deDuped!!
  const { postId } = params

  if (!posts.find((post) => post.id === postId)) {
    return notFound()
  }

  const { title, date, contentHtml } = await getPostData(
    postId
  )

  const pubDate = getFormattedDate(date)

  return (
    <main className="px-6 mx-auto prose prose-xl prose-slate dark:prose-invert">
      <h1 className="mt-4 mb-0 text-3xl">{title}</h1>
      <p className="mt-0">{pubDate}</p>
      <article>
        <section
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
        <p>
          <Link href="/">Back to home</Link>
        </p>
      </article>
    </main>
  )
}
