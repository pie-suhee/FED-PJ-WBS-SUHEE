/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Menu } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";

function RightMenu(props) {
  const navigate = useNavigate()
  const user = useSelector(state => state.user)

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

  if (user.userData && !user.userData.isAuth) {
    return (
      <Menu mode={props.mode}>
        <Menu.Item key="mail">
          <a href="/login">Sign in</a>
        </Menu.Item>
        <Menu.Item key="app">
          <a href="/register">Sign up</a>
        </Menu.Item>
      </Menu>
    )
  } else {
    return (
      <Menu mode={props.mode}>
        <Menu.Item key="create">
          <a href="/video/upload">Upload</a>
        </Menu.Item>
        <Menu.Item key="logout">
          <a onClick={onClickHandler}>Logout</a>
        </Menu.Item>
      </Menu>
    )
  }
}

export default RightMenu