import Head from "next/head";
import Header from "../components/Header";
import Element from "../components/Element";
import Match from "../components/Match";
import styles from "../styles/Home.module.scss";
import { useState, useEffect } from "react";
import { getWinner } from "../components/utils";

const original = ["paper", "rock", "scissors"];
const bonus = ["paper", "rock", "scissors", "lizard", "spock"];

export default function Home() {
  const [mode, setMode] = useState(true);
  const [score, setScore] = useState(0);
  const [game, setGame] = useState({ user: "", cpu: "", winner: "" });
  const [elements, setElements] = useState(original);

  function handleMode() {
    console.log("cambiamos modo");
    setMode(!mode);
  }

  function handleSelection(name) {
    let rdm = Math.floor(Math.random() * elements.length);
    let winner = getWinner(name, elements[rdm]);
    setGame({ user: name, cpu: elements[rdm], winner: winner });
  }

  function playAgain() {
    setGame({ user: "", cpu: "", winner: "" });
  }

  useEffect(() => {
    mode ? setElements(original) : setElements(bonus);
  }, [mode]);

  useEffect(() => {
    if (game.winner === "user") {
      const timer = setTimeout(() => {
        setScore(score + 1);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [game]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Frontend Mentor | Rock, Paper, Scissors</title>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Barlow Semi Condensed"
          rel="stylesheet"
        />
      </Head>
      <Header score={score} changeMode={handleMode} mode={mode} />
      <main>
        {game.user === "" ? (
          <div className={styles.main}>
            {elements.map((e) => (
              <div className={mode? styles.elements : styles.elementsbonus}>
                <Element
                  key={e}
                  name={e}
                  onSelect={handleSelection}
                  size={mode ? "" : "small"}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className={styles.main}>
            <Match game={game} again={playAgain} big={true} />
          </div>
        )}
      </main>

      <footer>
        <div className={styles.attribution}>
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="#">Martin Degraf</a>.
        </div>
      </footer>
    </div>
  );
}
