import axios from "axios";
export const axiosInstance=axios.create({
    baseURL: 'https://tinypath-production.up.railway.app',
    timeout:10000,
    withCredentials:true
})

axiosInstance.interceptors.request.use(
    (config)=>{
        //Here request can be modified like add auth tokens etc
        return config
    },
    (error)=>{
        //request errors handled here
        console.error("Request Error:",error)
        return Promise.reject(error);
    }
)

axiosInstance.interceptors.response.use(
    (response) => {
        // Any status code within the range of 2xx
        return response;
    },
    (error) => {
        if (error.response) {
            const { status, data } = error.response;

            switch (status) {
                case 400:
                    console.error("Bad Request:", data.message || "Invalid request.");
                    break;

                case 401:
                    console.warn("Unauthorized: You need to log in again.");
                    break;

                case 403:
                    console.warn("Forbidden: You don't have permission to access this resource.");
                    break;

                case 404:
                    console.error("Not Found: The requested resource was not found.");
                    break;

                case 500:
                    console.error("Server Error: Something went wrong on the server.");
                    break;

                case 503:
                    console.error("Service Unavailable: Try again later.");
                    break;

                default:
                    console.error("Unexpected Error:", data.message || "Something went wrong.");
                    break;
            }

            // Optionally return a rejected promise to allow individual catch blocks to handle
            return Promise.reject(error);
        } else if (error.request) {
            console.error("No response from server. Please check your network.");
            return Promise.reject(error);
        } else {
            console.error("Error setting up the request:", error.message);
            return Promise.reject(error);
        }
    }
);