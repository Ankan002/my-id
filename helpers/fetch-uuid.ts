export const fetchUUID = async () => {
    const response = await fetch("/api/get-uuid", {
        method: "GET",
        headers: {
            "content-type": "application/json",
        },
    });

    const data = await response.json();

    if(!data.success){
        throw new Error(data.error);
    }

    return data;
};
