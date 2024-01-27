const products = [
  {
    name: "Samsung Galaxy S21",
    imageUrl:
      "https://images.unsplash.com/photo-1610792516820-2bff50c652a2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Introducing the Samsung Galaxy S21, a flagship smartphone with a stunning 6.2-inch Dynamic AMOLED display, powerful Exynos 2100 processor, and an impressive triple-camera system. Experience the future of mobile technology.",
    price: 899,
    countInStock: 8,
  },
  {
    name: "Dell XPS 13 Laptop",
    imageUrl:
      "https://images.unsplash.com/photo-1484788984921-03950022c9ef?q=80&w=1864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "The Dell XPS 13 is a compact and powerful laptop with a borderless InfinityEdge display. Equipped with the latest Intel Core i7 processor and a sleek design, it's perfect for both work and entertainment on the go.",
    price: 1299,
    countInStock: 12,
  },
  {
    name: "Sony WH-1000XM4 Headphones",
    imageUrl:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Immerse yourself in premium sound quality with the Sony WH-1000XM4 headphones. Industry-leading noise cancellation, touch controls, and long battery life make these headphones ideal for a seamless audio experience.",
    price: 349,
    countInStock: 7,
  },
  {
    name: "Nintendo Switch",
    imageUrl:
      "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "The Nintendo Switch is a versatile gaming console that allows you to play games on the go or connect it to your TV for a home console experience. With a vast library of games, it's perfect for gamers of all ages.",
    price: 299,
    countInStock: 15,
  },
  {
    name: "Samsung 55-Inch 4K QLED TV",
    imageUrl:
      "https://images.unsplash.com/photo-1601944179066-29786cb9d32a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Experience cinematic visuals with the Samsung 55-Inch 4K QLED TV. Quantum Dot technology delivers vibrant colors, and the sleek design enhances any living space. Immerse yourself in a true 4K entertainment experience.",
    price: 1299,
    countInStock: 6,
  },
  {
    name: "Apple Watch Series 7",
    imageUrl:
      "https://images.unsplash.com/photo-1672893037476-c0e9f01eb0e4?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Stay connected and active with the Apple Watch Series 7. Featuring a larger and always-on Retina display, advanced health and fitness tracking, and water resistance, it's the perfect companion for a healthy lifestyle.",
    price: 399,
    countInStock: 20,
  },
  {
    name: "DJI Mavic Air 2 Drone",
    imageUrl:
      "https://images.unsplash.com/photo-1533063319369-0de118afe00a?q=80&w=1842&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Capture stunning aerial footage with the DJI Mavic Air 2 drone. Equipped with a powerful camera, intelligent shooting modes, and obstacle sensors, it provides a professional-grade drone experience for enthusiasts and creators.",
    price: 799,
    countInStock: 8,
  },
  {
    name: "Bose QuietComfort 35 II Headphones",
    imageUrl:
      "https://images.unsplash.com/photo-1528148343865-51218c4a13e6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Immerse yourself in your favorite music with the Bose QuietComfort 35 II headphones. Industry-leading noise cancellation, balanced sound, and a comfortable design make these headphones perfect for long listening sessions.",
    price: 299,
    countInStock: 15,
  },
  {
    name: "Samsung Galaxy Tab S7",
    imageUrl:
      "https://images.unsplash.com/photo-1622533950960-2ed47209dab0?q=80&w=1818&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Enjoy productivity and entertainment on the go with the Samsung Galaxy Tab S7. Featuring a stunning 11-inch display, S Pen support, and powerful hardware, it's the ideal tablet for work and play.",
    price: 649,
    countInStock: 10,
  },
  {
    name: "Sony PlayStation VR",
    imageUrl:
      "https://images.unsplash.com/photo-1478416272538-5f7e51dc5400?q=80&w=1980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Immerse yourself in virtual worlds with the Sony PlayStation VR. Compatible with the PlayStation 4, it offers a captivating gaming experience with realistic visuals and 3D audio.",
    price: 299,
    countInStock: 6,
  },
  {
    name: "PlayStation 5",
    imageUrl:
      "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80",
    description:
      "PlayStation 5 (PS5) is a home video game console developed by Sony Interactive Entertainment. Announced in 2019 as the successor to the PlayStation 4, the PS5 was released on November 12, 2020 in Australia, Japan, New Zealand, North America, Singapore, and South Korea, and November 19, 2020 onwards in other major markets except China and India.",
    price: 499,
    countInStock: 15,
  },
  {
    name: "Iphone 12",
    imageUrl:
      "https://images.unsplash.com/photo-1605787020600-b9ebd5df1d07?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1463&q=80",
    description:
      "Welcome to a new era of iPhone. Beautifully bright 6.1-inch Super Retina XDR display.1 Ceramic Shield with 4x better drop performance.2 Incredible low-light photography with Night mode on all cameras. Cinema-grade Dolby Vision video recording, editing, and playback. Powerful A14 Bionic chip. And new MagSafe accessories for easy attach and faster wireless charging.3 Let the fun begin.",
    price: 1099,
    countInStock: 10,
  },
  {
    name: "Cannon EOS-1D",
    imageUrl:
      "https://images.unsplash.com/photo-1519183071298-a2962feb14f4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description:
      "The EOS-1D X combines speed with image quality, to create the next generation camera for professionals. Full frame 18 megapixel sensor with Dual “DIGIC 5+” processors sets the standard, and up to 12 frames per second shooting takes it beyond.",
    price: 1300,
    countInStock: 5,
  },
  {
    name: "Amazon Alexa",
    imageUrl:
      "https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
    description:
      "It is capable of voice interaction, music playback, making to-do lists, setting alarms, streaming podcasts, playing audiobooks, and providing weather, traffic, sports, and other real-time information, such as news. Alexa can also control several smart devices using itself as a home automation system.",
    price: 50,
    countInStock: 25,
  },
  {
    name: "Audio Technica Headphones",
    imageUrl:
      "https://images.unsplash.com/photo-1558756520-22cfe5d382ca?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description:
      "Outfitted with 45mm large-aperture dynamic drivers and an over-ear, closed-back design, the ATH-M50x headphones deliver clarity, deep bass, and extended bandwidth (15 Hz to 28 kHz) while isolating you from outside sounds.",
    price: 233,
    countInStock: 4,
  },
  {
    name: "JBL FLIP 4",
    imageUrl:
      "https://images.unsplash.com/photo-1564424224827-cd24b8915874?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80",
    description:
      "JBL Flip 4 is the next generation in the award-winning Flip series; it is a portable Bluetooth speaker that delivers surprisingly powerful stereo sound. This compact speaker is powered by a 3000mAh rechargeable Li-ion battery that offers up to 12 hours of continuous, high-quality audio playtime.",
    price: 140,
    countInStock: 10,
  },
];

module.exports = products;
