import React, { useEffect, useState } from "react";

import MovieList from "./components/MovieList";
import MovieDetail from "./components/MovieDetail";
import BookList from "./components/BookList";  // 추가된 BookList
import BookDetail from "./components/BookDetail";  // 추가된 BookDetail
import SearchBar from "./components/SearchBar";
import Menu from "./components/Menu";
import "./styles/App.css";
import AboutMe from "./components/AboutMe";

const movieData = [
  {
    id: 1,
    title: "Inception",
    poster: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
    description:
      "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
  },
  {
    id: 2,
    title: "Interstellar",
    poster: "https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    description:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
  },
  // 추가 영화 데이터
  {
    id: 3,
    title: "Gladiator",
    poster: "https://m.media-amazon.com/images/M/MV5BYWQ4YmNjYjEtOWE1Zi00Y2U4LWI4NTAtMTU0MjkxNWQ1ZmJiXkEyXkFqcGc@._V1_.jpg",
    description:
      "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
  },
  {
    id: 4,
    title: "The Wolf of Wall Street",
    poster: "https://m.media-amazon.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_.jpg",
    description:
      "Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.",
  },
];

const bookData = [
  {
    id: 1,
    title: "Harry Potter and the Sorcerer's Stone",
    poster: "https://m.media-amazon.com/images/I/81DI+BAN2SL._AC_UF1000,1000_QL80_.jpg",
    description: "A young boy discovers he's a wizard and goes on an adventure at Hogwarts.",
  },
  {
    id: 2,
    title: "Harry Potter and the Chamber of Secrets",
    poster: "https://m.media-amazon.com/images/I/818umIdoruL.jpg",
    description: "Harry returns to Hogwarts for his second year and faces a dark force.",
  },
  {
    id: 3,
    title: "Harry Potter and the Prisoner of Azkaban",
    poster: "https://m.media-amazon.com/images/I/812CcFkEPCL._AC_UF1000,1000_QL80_.jpg",
    description: "Harry uncovers dark secrets about his family while dealing with a dangerous criminal.",
  },
  {
    id: 4,
    title: "Harry Potter and the Goblet of Fire",
    poster: "https://m.media-amazon.com/images/I/81ibZ+xB3dL._AC_UF1000,1000_QL80_.jpg",
    description: "Harry competes in a magical tournament and faces new challenges.",
  },
];

const MiniApp = () => {
  const [movies, setMovies] = useState([]);
  const [books, setBooks] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [selectedBook, setSelectedBook] = useState(null);
  const [currentPage, setCurrentPage] = useState("movies");

  useEffect(() => {
    setMovies(movieData);
    setBooks(bookData); // 책 데이터 설정
  }, []);

  const handleMovieSelect = (movie) => {
    setSelectedMovie(movie);
    setSelectedBook(null); // 책 선택 초기화
  };

  const handleBookSelect = (book) => {
    setSelectedBook(book);
    setSelectedMovie(null); // 영화 선택 초기화
  };

  const handleMenuClick = (page) => {
    setCurrentPage(page);
    setSelectedMovie(null);
    setSelectedBook(null);
  };

  return (
    <div className="App">
      <Menu onMenuClick={handleMenuClick} />
      <SearchBar setMovies={setMovies} />

      {currentPage === "about" && <AboutMe />}

      {currentPage === "movies" &&
        (selectedMovie ? (
          <MovieDetail movie={selectedMovie} />
        ) : (
          <MovieList movies={movies} onMovieSelect={handleMovieSelect} />
        ))}

      {currentPage === "books" &&
        (selectedBook ? (
          <BookDetail book={selectedBook} /> // BookDetail을 표시
        ) : (
          <BookList books={books} onBookSelect={handleBookSelect} /> // BookList를 표시
        ))}
    </div>
  );
};

export default MiniApp;
