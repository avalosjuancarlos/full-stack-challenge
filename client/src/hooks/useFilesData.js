import { useCallback, useEffect, useState } from "react";

import { httpGetAllFilesData } from "./requests";

function useFilesData() {
    const [filesData, saveFilesData] = useState([]);

    const getFilesData = useCallback(async () => {
        const fetchedFilesData = await httpGetAllFilesData();
        saveFilesData(fetchedFilesData);
    }, []);

    useEffect(() => {
        getFilesData();
    }, [getFilesData]);

    return filesData;
}

export default useFilesData;