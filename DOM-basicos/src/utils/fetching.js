const fetching = async (enpoint)=>{
    const PORT = import.meta.env.VITE_PORT || 4001;
    const URL = import.meta.env.VITE_URL || 'http://localhost';
    const URL_PORT = `${URL}:${PORT}`;
    try {
        const response = await fetch(`${URL_PORT}/${enpoint}`);
        if(!response.ok)throw new Error("Error fetching: ", response.status);
        const data = await response.json();
        return data;
    } catch (err) {
        console.log("Error: ", err)
        throw err;
    }
};

export default fetching;