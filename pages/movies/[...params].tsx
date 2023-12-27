import { useRouter } from "next/router";
import Seo from "@/components/Seo";

export default function Detail() {
  const router = useRouter();
  const [title, id] = (router.query.params as string[]) || [];
  return (
    <div>
      <Seo title={title} />
      <h4>{title ? title : "Loading..."}</h4>
    </div>
  );
}
