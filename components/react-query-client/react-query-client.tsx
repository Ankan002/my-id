"use client";

import { QueryClient, QueryClientProvider } from "react-query";

interface Props {
    children: React.ReactNode;
}

const ReactQueryClient = (props: Props) => {
    const { children } = props;
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
};

export default ReactQueryClient;
