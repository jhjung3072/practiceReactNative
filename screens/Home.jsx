import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import { colors, defaultStyle } from "../styles/styles";
import Header from "../components/Header";
import { Avatar, Button } from "react-native-paper";
import SearchModal from "../components/SearchModal";
import ProductCard from "../components/ProductCard";
import { useNavigation } from "@react-navigation/native";
import Footer from "../components/Footer";
import Heading from "../components/Heading";

const categories = [
  { category: "Nice", _id: "asdasd" },
  { category: "football", _id: "gfrf" },
  { category: "man", _id: "dasdasd" },
  { category: "man", _id: "gtyr" },
  { category: "man", _id: "wetwet" },
  { category: "man", _id: "hgfge" },
  { category: "man", _id: "hgfg3e" },
  { category: "man", _id: "hgfg345e" },
  { category: "man", _id: "hgf251ge" },
  { category: "man", _id: "13454" },
  { category: "woman", _id: "dfhttererr" },
];

const products = [
  {
    price: 23123,
    name: "sample",
    stock: 23,
    _id: "sadhedhe",
    images: [
      {
        url: "https://i.pinimg.com/originals/ab/94/af/ab94afad0d4b0ff2340fbc6490c28c3e.png",
      },
    ],
  },
  {
    price: 23123,
    name: "sample",
    stock: 23,
    _id: "sadhertujrdfdhe",
    images: [
      {
        url: "https://i.pinimg.com/originals/ab/94/af/ab94afad0d4b0ff2340fbc6490c28c3e.png",
      },
    ],
  },
  {
    price: 23123,
    name: "sample",
    stock: 23,
    _id: "htrjrte",
    images: [
      {
        url: "https://i.pinimg.com/originals/ab/94/af/ab94afad0d4b0ff2340fbc6490c28c3e.png",
      },
    ],
  },
  {
    price: 23123,
    name: "sample",
    stock: 23,
    _id: "asdfgdf",
    images: [
      {
        url: "https://i.pinimg.com/originals/ab/94/af/ab94afad0d4b0ff2340fbc6490c28c3e.png",
      },
    ],
  },
];

const Home = () => {
  const [category, setCategory] = useState("");
  const [activeSearch, setActiveSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigation();

  const categoryButtonHandler = (id) => {
    setCategory(id);
  };

  const addToCartHanlder = (id) => {
    console.log("add to cart", id);
  };

  return (
    <>
      {activeSearch && (
        <SearchModal
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          setActiveSearch={setActiveSearch}
          products={products}
        />
      )}
      <View style={defaultStyle}>
        <Header />

        {/* Heading Row */}
        <Heading text1="Our" text2="products" />

        <View
          style={{
            paddingTop: 70,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Search Bar */}

          <View>
            <TouchableOpacity onPress={() => setActiveSearch((prev) => !prev)}>
              <Avatar.Icon
                icon={"magnify"}
                size={50}
                color={"gray"}
                style={{ backgroundColor: colors.color2, elevation: 12 }}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Categories */}

        <View
          style={{
            flexDirection: "row",
            height: 80,
          }}
        >
          <ScrollView
            horizontal
            contentContainerStyle={{
              alignItems: "center",
            }}
            showsHorizontalScrollIndicator={false}
          >
            {categories.map((item, index) => (
              <Button
                key={item._id}
                style={{
                  backgroundColor:
                    category === item._id ? colors.color1 : colors.color5,
                  borderRadius: 100,
                  margin: 5,
                }}
                onPress={() => categoryButtonHandler(item._id)}
              >
                <Text
                  style={{
                    fontSize: 12,
                    color: category === item._id ? colors.color2 : "gray",
                  }}
                >
                  {item.category}
                </Text>
              </Button>
            ))}
          </ScrollView>
        </View>

        <View style={{ flex: 1 }}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {products.map((item, index) => (
              <ProductCard
                stock={item.stock}
                name={item.name}
                price={item.price}
                image={item.images[0]?.url}
                addToCartHanlder={addToCartHanlder}
                id={item._id}
                key={item._id}
                i={index}
                navigate={navigate}
              />
            ))}
          </ScrollView>
        </View>
      </View>

      <Footer activeRoute={"home"} />
    </>
  );
};

export default Home;
