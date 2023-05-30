const baseUrl = "http://localhost:8080";

export const get = async (
    endpoint: string,
    reactCallback: React.Dispatch<React.SetStateAction<any>>
): Promise<void> => {
    reactCallback(await (await fetch(`${baseUrl}${endpoint}`)).json());
};
