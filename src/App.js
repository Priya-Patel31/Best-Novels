import React, { useState } from "react";
import "./styles.css";

const AllBooks = {
  "Self-help": [
    {
      Title: "The subtle art of not giving fuck",
      Author: "Mark Manson",
      Description:
        "The book is a good guide to figuring out what you want in life and at work, and how to achieve it.  In it Manson argues that life's struggles give it meaning.",
      Image: "/images/TheSubtleArtOfNotGivingFuck.jpg",
      Rating: `3.9/5`
    },
    {
      Title: "How to win friends and influence people",
      Author: "Dale Carnegie",
      Description:
        "The core idea is that you can change other people’s behavior simply by changing your own. It teaches you the principles to better understand people, become a more likable person, improve relationships, win others over, and influence behavior through leadership.",
      Image: "/images/HowToWin.jpg",
      Rating: `4.2/5`
    },
    {
      Title: "Who moved my cheese",
      Author: "Spencer Johnson",
      Description:
        "Two little people and two mice in a maze, searching for cheese, where each character represents a different attitude towards change, with cheese being what we consider success. ... You can always find new cheese, and the minute you start moving things will get better.",
      Image: "/images/WhoMovedMyCheese.jpg",
      Rating: `3.8/5`
    }
  ],
  "Sci-fi": [
    {
      Title: "The Blazing World",
      Author: "Siri Hustvedt",
      Image: "/images/theBlazingWorld.jpg",
      Description:
        "It is a ground breaking work of prose fiction which tells the story of a young woman's journey into a new world  via the North Pole, and her experience of the utopian society she encounters there.",
      Rating: `3.7/5`
    },
    {
      Title: "The Time Machine",
      Author: " H.G. Wells",
      Description:
        "The story follows a Victorian scientist, who claims that he has invented a device that enables him to travel through time, and has visited the future, arriving in the year 802,701 in what had once been London.",
      Image: "/images/TheTimeMachine.jpg",
      Rating: `3.9/5`
    },
    {
      Title: "Frankenstein",
      Author: "Mary Wollstonecraft Shelley",
      Image: "/images/Frankenstein.jpg",
      Description:
        "It tells the story of gifted scientist Victor Frankenstein who succeeds in giving life to a being of his own creation",
      Rating: `3.8/5`
    }
  ],

  Romance: [
    {
      Title: "The Fault in our stars",
      Image: "/images/theFaultInOurStars.jpg",
      Author: "John Green",
      Description:
        "This is a fabulous book about a teenage girl who has been diagnosed with lung cancer. Hazel and Augustus embark on a roller coaster ride of emotions, including love, sadness and romance.",
      Rating: `4.2/5`
    },
    {
      Title: "Your Dreams are Mine Now",
      Description:
        "Your Dreams Are Mine Now is an innocent love story that is bound to evoke strong emotions in your heart. 'It can't be love...' he thinks and immediately his heart protests. They are complete opposites!",
      Image: "/images/YourDreamsAreMineNow.jpg",
      Author: "Ravinder Singh",
      Rating: `3.7/5`
    },
    {
      Title: "I too had a Love story",
      Image: "/images/ITooHadALoveStory.jpg",
      Author: "Ravinder Singh",
      Description:
        " Ravin and Khushi start talking to each other over phone and soon become good friends. They become curious about each other's interest and find there are many similarities between them.",
      Rating: `3.6/5`
    }
  ]
};

const genreName = Object.keys(AllBooks);

export default function App() {
  const [BooksList, setFunction] = useState(AllBooks.Romance);

  function ClickHandler(genre) {
    const novels = AllBooks[genre];
    setFunction(novels);
  }

  function AboutBooks(books) {
    const title = books.Title;
    const author = books.Author;
    const imageSrc = books.Image;
    const desc = books.Description;
    const ratings = books.Rating;
    const about = (
      <li>
        <img alt="poster" src={imageSrc} />
        <div style={{ padding: "0rem 1rem" }}>
          <h3>{title}</h3>
          <h6>{author}</h6>
          <p>{desc}</p>
          <p style={{ fontWeight: "bold" }}>{ratings}</p>
        </div>
      </li>
    );
    return about;
  }

  return (
    <div className="App">
      <h1>Best Novels</h1>
      <p>Checkout best novels. Select a genre to get started</p>
      <div>
        {genreName.map((book) => {
          return (
            <button
              key={book}
              className="btn"
              onClick={() => ClickHandler(book)}
            >
              {book}
            </button>
          );
        })}
      </div>
      <hr />
      <ul>
        {BooksList.map((books) => {
          return AboutBooks(books);
        })}
      </ul>
    </div>
  );
}
