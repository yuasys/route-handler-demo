export const dynamic = "force-dynamic";//ビルド後もキャシュされないようにするために、このファイルを動的にする

export async function GET() {
  return Response.json({ time: new Date().toLocaleTimeString() });
}