export const fetchUUID = async () => {
    const response = await fetch("/api/get-uuid", {
        method: "GET",
        headers: {
            "content-type": "application/json",
        },
    });

    if (!response.ok) {
        throw new Error("Network Error!!");
    }

    const data = await response.json();

    if (!data.success) {
        throw new Error(data.error);
    }

    return data;
};
