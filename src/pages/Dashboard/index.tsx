import * as React from 'react';
import { FlatList, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { formatDistanceToNow } from 'date-fns';
import pt from 'date-fns/locale/pt';

import api from '../../services/api';

import {
  Container,
  PostTop,
  PostBottom,
  Avatar,
  UserInfo,
  PostImage,
  PostContainer,
} from './styles';

interface Post {
  id: number;
  name: string;
  image_profile: string;
  image_post: string;
  date: string;
  dateDistance?: string;
}

const Dashboard: React.FC = () => {
  const [data, setData] = React.useState<Post[]>([]);

  React.useEffect(() => {
    async function loadData() {
      const response = await api.get<Post[]>('/');

      const dataWithDateDistance: Post[] = response.data.map(post => {
        const newPost = {
          ...post,
          dateDistance: formatDistanceToNow(new Date(parseInt(post.date, 10)), {
            locale: pt,
          }),
        };
        return newPost;
      });

      setData(dataWithDateDistance);
    }

    loadData();
  }, []);

  return (
    <Container>
      <FlatList
        data={data}
        keyExtractor={post => post.id.toString()}
        renderItem={({ item: post }) => (
          <PostContainer>
            <PostTop>
              <View>
                <Avatar source={{ uri: post.image_profile }} />
                <View
                  style={{
                    position: 'absolute',
                    right: -3,
                    top: 33,
                    backgroundColor: '#00f56d',
                    borderRadius: 9,
                    width: 18,
                    height: 18,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Text
                    style={{
                      color: '#00f56d',
                      fontSize: 10,
                      fontWeight: 'bold',
                    }}
                  >
                    0
                  </Text>
                </View>
              </View>
              <UserInfo>
                <Text
                  style={{ color: '#8f5de8', fontSize: 20, fontWeight: 'bold' }}
                >
                  {post.name}
                </Text>
                <Text style={{ color: '#8f5de8', fontSize: 15 }}>
                  {post.dateDistance} atrás
                </Text>
              </UserInfo>
              <Icon
                name="more-horizontal"
                size={20}
                style={{ marginLeft: 'auto', marginRight: 20 }}
                color="gray"
              />
            </PostTop>
            <PostImage source={{ uri: post.image_post }} />
            <PostBottom>
              <Icon name="heart" size={35} color="#8f5de8" />
              <Icon name="message-square" size={35} color="#8f5de8" />
              <Icon name="share-2" size={35} color="#8f5de8" />
            </PostBottom>
          </PostContainer>
        )}
      />
    </Container>
  );
};

export default Dashboard;
