import axios from "axios"

export const getOpenChatrooms = async () => {
    // hit api to get open rooms and retunr 
    const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/channel`)
    const openChannels = response.data.openChannels
    return openChannels
}
