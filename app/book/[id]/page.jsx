import { getBookByIdService } from "../service/book_service";

const ArticleDetailPage = async ({ params }) => {
  const { id } = await params;

  const data = await getBookByIdService(id);

  const { title, description, image } = data.payload;
  console.log("id", data);

  return (
    <div>
        <h1>Article Drgtrettetetteeteeeeeeeeeeeeeeeeeeeeeeeeetail Page</h1>
    </div>
   
  );
};

export default ArticleDetailPage;
