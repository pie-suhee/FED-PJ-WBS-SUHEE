import React, { useEffect, useState } from 'react'
// import { FaCode } from "react-icons/fa"
import { Card, Avatar, Col, Typography, Row } from 'antd'
import axios from 'axios'
import moment from 'moment'

import '../../../css/layout.css'
import '../../../css/landing.css'

const { Title } = Typography
const { Meta } = Card

function LandingPage() {
    const [Videos, setVideos] = useState([])

    useEffect(() => {
        axios.get('/api/video/getVideos')
            .then(response => {
                if (response.data.success) {
                    console.log(response.data.videos)
                    setVideos(response.data.videos)
                } else {
                    alert('Failed to get Videos')
                }
            })
    }, [])

    const renderCards = Videos.map((video, index) => {

        var minutes = Math.floor(video.duration / 60);
        var seconds = Math.floor(video.duration - minutes * 60);

        return <Col lg={6} md={8} xs={24}>
            <div style={{ position: 'relative' }}>
                <a href={`/video/${video._id}`} >
                    <img style={{ width: '100%' }} alt="thumbnail" src={`http://localhost:5000/${video.thumbnail}`} />
                    <div className="Duration">
                        <span>{minutes} : {seconds}</span>
                    </div>
                </a>
            </div><br />
            <Meta
                avatar={
                    <Avatar src={video.thumbnail} />
                }
                title={video.title}
            />
            <span>{video.writer.name} </span><br />
            <span style={{ marginLeft: '3rem' }}> {video.views}</span>
            - <span> {moment(video.createdAt).format("MMM Do YY")} </span>
        </Col>

    })

    return (
        <div className='layout HomeLayout'>
            <Title level={2}> Recommended </Title>
            <hr />

            <Row gutter={16}>
                {renderCards}
            </Row>
        </div>
    )
}

export default LandingPage