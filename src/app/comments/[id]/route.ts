import { comments } from "../data";

export async function GET(
  _request: Request,//「この関数はリクエストオブジェクトを引数として受け取ることができますが、現在のところそれを使用する予定はありません」という意味で、_requestという名前を付けています。コーティングの慣習です。
  { params }: { params: { id: string } }
) {
  const comment = comments.find(
    (comment) => comment.id === parseInt(params.id)
  );
  return Response.json(comment);
}

export async function PATCH(
  request: Request,
  { params }:{ params: { id: string } }
) {
  const body = await request.json();
  const { text } = body;
  const index = comments.findIndex(
    (comment) => comment.id === parseInt(params.id)
  );
  comments[index].text = text;
  return Response.json(comments[index]);
}
