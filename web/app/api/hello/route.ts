import { ActionGetResponse, ActionPostRequest, ActionPostResponse, ACTIONS_CORS_HEADERS } from '@solana/actions'
import { clusterApiUrl, Connection, PublicKey, SystemProgram, Transaction } from "@solana/web3.js"
export async function GET(request: Request) {

  const response: ActionGetResponse = {
    icon: "https://shorturl.at/ZFCY5",
    description: "This is demo",
    title: "blink",
    label: "click me",
    links: {
      actions: [
        {
          href: request.url + "a",
          label: "Who is Kenpachi ?"
        },
        {
          href: request.url,
          label: "kenpachi",
          parameters: [
            {
              name: "Who is kenpachi? ",
              label: "Zaraki"
            }
          ]
        },

      ]
    },
    error: {
      message: "error"
    }


  }



  return Response.json(response, { headers: ACTIONS_CORS_HEADERS })


}

export async function POST(request: Request) {
  const postRequest: ActionPostRequest = await request.json();
  const userPubkey = postRequest.account;
  console.log(userPubkey);


  const connection = new Connection(clusterApiUrl('testnet'))
  const tx = new Transaction();
  tx.feePayer = new PublicKey(userPubkey);
  tx.recentBlockhash = (await connection.getLatestBlockhash({ commitment: "finalized" })).blockhash;
  const serialTx = tx.serialize({ requireAllSignatures: false, verifySignatures: false }).toString("base64");

  const response: ActionPostResponse = {
    transaction: serialTx,
    message: "hello" + userPubkey
  }


  return Response.json(response, { headers: ACTIONS_CORS_HEADERS })
}


export async function OPTIONS(request: Request) {
  return new Response(null, { headers: ACTIONS_CORS_HEADERS })
}

