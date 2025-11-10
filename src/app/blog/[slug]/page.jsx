import { Container, BlogLayout} from "../../../components";
import { blogs } from "../../../constants/blogs";
import { useNavigate, useParams } from "react-router-dom";

export default function SingleBlogPage() {
  const navigate = useNavigate();
  const { slug } = useParams();
  const post = blogs.find((b) => b.slug === slug);

  if (!post) {
    navigate("/blog", { replace: true });
    return null;
  }

  const meta = {
    title: post.title,
    description: post.description,
    date: post.date,
    image: post.image,
    tags: post.tags,
  };

  return (
    <Container>
      <BlogLayout meta={meta}>{post.content}</BlogLayout>
    </Container>
  );
}