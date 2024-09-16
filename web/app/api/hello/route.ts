import { ActionGetResponse, ActionPostRequest, ActionPostResponse, ACTIONS_CORS_HEADERS } from '@solana/actions'

export async function GET(request: Request) {

  const response: ActionGetResponse = {
    icon: "https://shorturl.at/ZFCY5",
    description: "This is demo",
    title: "blink",
    label: "click me",
    error: {
      message: "error"
    }


  }

  return Response.json(response, {headers:ACTIONS_CORS_HEADERS})


}

export async function POST(request: Request) {
  const postRequest:ActionPostRequest = await request.json();
  const userPubkey = postRequest.account;
  console.log(userPubkey);
  const response: ActionPostResponse= {
    transaction:"",
    message:"na"

  }

  return Response.json(response,{headers:ACTIONS_CORS_HEADERS})
}


export async function OPTIONS(request: Request) {
  
}

