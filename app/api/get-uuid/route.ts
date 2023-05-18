import { NextResponse } from "next/server";
import { v4 as uuidV4 } from "uuid";

// ! In NextJS 13 GET requests are statically rendered until we use the request object, which we are not using over here. So we use the revalidate variable available to set the GET route as dynamic and generate different result everytime.

export const GET = () => {
    return new NextResponse(
        JSON.stringify({
            success: true,
            data: {
                id: uuidV4(),
            },
        }),
        {
            status: 200,
        }
    );
};

export const revalidate = 0;
