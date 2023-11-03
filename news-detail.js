import React from 'react';
import { Text, Image, ScrollView } from 'react-native';
import { Header } from "../components";
import datas from '../datas'; 

function NewsDetail({ route }) {
  const { id } = route.params;

  // Cari objek berita yang sesuai dengan ID
  const selectedNews = datas.find((news) => news.id === id);

  return (
    <>
      <Header title={"News"} withBack="true" />
      <ScrollView>
        <Image source={{ uri: selectedNews.image }} style={{ width: 'auto', height: 250 }} />
        <Text style={{ fontSize: 12, color: 'gray', padding: 5 }}>{selectedNews.date}</Text>
        <Text style={{ fontSize: 27, fontWeight: 'bold', padding: 5 }}>{selectedNews.title}</Text>
        <Text style={{ marginTop: 10, padding: 5 }}>{selectedNews.content}</Text>
      </ScrollView>
    </>
  );
}

export default NewsDetail;

// import { Heading, Center, Text } from "native-base";
// import { Header } from "../components";

// const NewsDetail = ({ route }) => {
//     // Get the params
//     const params = route.params.item;
//         return (
//             <>
//                 <Header title={"News"} withBack="true" />
//                 <Center flex={1} p={"4"}>
//                     <Heading>News Detail</Heading>
//                     <Text textAlign={"center"}>{params.title}</Text>
//                 </Center>
//             </>
//         );
// };

// export default NewsDetail;