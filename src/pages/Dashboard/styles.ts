import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  background-color: #f1e7f7;
  flex: 1;
`;

export const PostContainer = styled.SafeAreaView`
  margin-top: 5px;
  margin-bottom: 5px;
  background-color: #fff;
`;

export const PostTop = styled.View`
  flex: 1;
  width: 100%;
  flex-direction: row;
  padding-top: 15px;
  padding-bottom: 15px;
  margin-left: 15px;
  margin-right: 15px;
  align-items: flex-start;
`;

export const PostBottom = styled.View`
  flex: 1;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px 10px 20px;
`;

export const Avatar = styled.Image`
  height: 50px;
  width: 50px;
  border-radius: 25px;
`;

export const UserInfo = styled.View`
  flex-direction: column;
  color: #8f5de8;
  margin-left: 10px;
`;

export const PostImage = styled.Image`
  width: 100%;
  height: 350px;
`;
