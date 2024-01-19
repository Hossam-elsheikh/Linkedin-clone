import axios from 'axios'
import Cookies from 'js-cookie'
import React, { useEffect, useState } from 'react'

function useFetchUser(userId) {

    const [userDetails, setUserDetails] = useState({})

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const userToken = Cookies.get('token')
                const userId = Cookies.get('userId')

                const response = await axios.get(`http://localhost:4010/user/${userId}`)
                const data = response.data
                setUserDetails(data)
            } catch (error) {
                console.error(error);
            }
        }
        fetchUser()
    }, [userId])

    return userDetails
}

export default useFetchUser