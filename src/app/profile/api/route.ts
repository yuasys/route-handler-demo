import { type NextRequest } from "next/server";
import { headers } from "next/headers";

export async function GET(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  const headerList = headers();

  console.log(requestHeaders.get("authorization"));
  console.log(headerList.get("authorization"));

  return new Response("<h1>Profile API data</h1>",{
    headers: {
      "content-type": "text/html"
    }
  });
}