import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import '../../../css/layout.css'

function LandingPage() {

    const navigate = useNavigate()

    useEffect(() => {
        axios.get('/api/hello')
            .then(response => { console.log(response) })
    }, [])

    const onClickHandler = () => {
        axios.get(`/api/users/logout`)
            .then(response => {
                if (response.data.success) {
                    navigate('/login')
                } else {
                    alert('로그아웃 하는데 실패 했습니다.')
                }
            })
    }
    
    return (
        <div className='layout'>
            <h2>시작페이지</h2>

            <button onClick={onClickHandler}>
                로그아웃
            </button>
        </div>
    )
}

export default LandingPage