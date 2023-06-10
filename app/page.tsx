import { allPosts } from "@/.contentlayer/generated"
import Link from "next/link"
import localFont from 'next/font/local';

const lucette = localFont({
  src: [
    {
      path: '../public/fonts/lucette/Lucette-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/lucette/Lucette-Regularitalic.woff2',
      weight: '400',
      style: 'italic',
    },
  ],
  variable: '--font-lucette',
});

export default function Home() {
  return (
    <div className="prose dark:prose-invert">
      {allPosts.map((post) => (
        <article key={post._id}>
          <Link href={post.slug}>
            <h2>{post.title}</h2>
          </Link>
          {post.description && <p>{post.description}</p>}
        </article>
      ))}
    </div>
  )
}
