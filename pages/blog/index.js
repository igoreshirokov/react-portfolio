import styles from "../../styles/blog.module.sass";
import MainLayout from "../../layouts/MainLayout";
import { useEffect, useState } from "react";
import { LoaderGear } from "../../components/ui/LoaderGear";
import ModalWindow from "../../components/ModalWindow";
import { Post } from "../../components/posts/Post";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const router = useRouter();

  useEffect(async () => {
    const req = await fetch("/api/posts");
    const res = await req.json();
    setPosts(res);
  }, []);

  return (
    <MainLayout title="Блог веб-разработчика">
      <div className="headline">
        <h1>Блог</h1>
      </div>
      <div className={styles.blog}>
        <div className={styles.blog_description}>
          Пишу о своем опыте разработки и делюсь своими заметками.
        </div>
        {/* <div className={styles.blog_search}></div> */}
        <div className={styles.posts}>
          {posts.length < 1 ? (
            <LoaderGear />
          ) : (
            posts.map((post, index) => {
              return (
                <div
                  onClick={() => router.push(`/blog/${post.id}`)}
                  // onClick={() => openModal(<Post post={post} />)}
                  key={post.title + post.id + index}
                  className={styles.post}
                >
                  <h4 className={styles.post_title}>{post.title}</h4>
                  <div className={styles.post_excerpt}>{post.excerpt}</div>
                  <Link href={`/blog/${post.id}`}>
                    <a>Подробнее...</a>
                  </Link>
                </div>
              );
            })
          )}
        </div>
      </div>
    </MainLayout>
  );
}
