import fs from "fs"
import path from "path"

import matter from "gray-matter"

import { remark } from "remark"
import html from "remark-html"

const postsFolder = path.join(process.cwd(), "blogPosts")

export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsFolder)
  const allPostsData = fileNames.map((fileName) => {
    // remove ".md from end of filename"
    const id = fileName.replace(/\.md$/, "")
    // read markdown file as string
    const fullPath = path.join(postsFolder, fileName)
    const fileContents = fs.readFileSync(fullPath, "utf8")

    // use gray-matter to parse the front matter
    const matterResult = matter(fileContents)

    const blogPost = {
      id,
      title: matterResult.data.title,
      date: matterResult.data.date,
    }
    // return the object into the array that map creates
    return blogPost
  })
  // sort posts by date
  return allPostsData.sort((a, b) =>
    a.date < b.date ? 1 : -1
  )
}

export async function getPostData(id) {
  const fullPath = path.join(postsFolder, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, "utf8")
  const matterResult = matter(fileContents)
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)

  const contentHtml = processedContent.toString()
  const blogPostWithHtml = {
    id,
    title: matterResult.data.title,
    date: matterResult.data.date,
    contentHtml,
  }

  return blogPostWithHtml
}
