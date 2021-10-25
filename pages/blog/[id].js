import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
import { Post } from "../../components/posts/Post";
import { LoaderGear } from "../../components/ui/LoaderGear";
import MainLayout from "../../layouts/MainLayout";

export default function SinglePost() {
  const [post, setPost] = useState(false);
  const router = useRouter();
  const { id } = router.query;
  useEffect(async () => {
    const req = await fetch(`/api/post/${id}`);
    const res = await req.json();

    setPost(res);
  }, []);

  useEffect(() => console.log(post), [post]);

  if (!post) {
    return <LoaderGear />;
  }

  if (post) {
    return (
      <MainLayout title={post.title}>
        <div className="headline">
          <h1>{post.title}</h1>
        </div>
        <Post post={post} />
      </MainLayout>
    );
  }
}
