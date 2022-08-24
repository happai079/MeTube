import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #0000008d;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper =  styled.div`
  width: 400px;
  height: 600px;
  background-color: ${({theme}) => theme.bgLighter};
  color: ${({theme}) => theme.text};
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
`;

const Close =  styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 10px;
  cursor: pointer;
`;

const Title =  styled.h1`
  text-align: center;
`;

const Input = styled.input`
  border: 1px solid ${({theme}) => theme.soft};
  color: ${({theme}) => theme.text};
  border-radius: 3px;
  padding: 10px;
  background-color: transparent;
`;

const Avatar = styled.img`
  width: 50%;
  height: 50%;
  border-radius: 50%;
  background-color: #999;
  display: block;
  margin: 0 auto;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
`;

const Button = styled.button`
  width: 40%;
  border-radius: 3px;
  border: none;
  padding: 10px 20px;
  font-weight: 500;
  cursor: pointer;
  background-color: ${({theme}) => theme.soft};
  color: ${({theme}) => theme.textSoft};
`;


const Profile = ({setProfileOpen}) => {
  const {currentUser} = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <Container>
      <Wrapper>
        <Close onClick={() => setProfileOpen(false)}>X</Close>
        <Title>Profile</Title>
        <Avatar src={currentUser.img} />
        <Input 
          type='file' 
          accept='image/*'
        />
        <Input 
          type='text'
          value={currentUser.name}
        />
        <Input 
          type='email' 
          value={currentUser.email}
        />
        <Buttons>
          <Button>Save</Button>
          <Button>Sign Out</Button>
        </Buttons>
      </Wrapper>
    </Container>
  );
};

export default Profile;