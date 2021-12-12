import "./App.css"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import Card from "@mui/material/Card"
import Button from "@mui/material/Button"
import CardActions from "@mui/material/CardActions"
import React, { useState } from "react"

function App() {
  function randomQuote(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1)
    return Math.round(rand)
  }

  const [newQuote, setNewQuote] = useState({
    author: "",
    quote: "",
  })

  const [prevQuote, setPrevQuote] = useState({
    author: "",
    quote: "",
  })

  let gettingQuote = async () => {
    setPrevQuote({
      author: newQuote.author,
      quote: newQuote.quote,
    })
    const api_url = await fetch(
      "https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json"
    )
    const quotes = await api_url.json()
    let i = randomQuote(0, quotes.length)
    setNewQuote({
      author: quotes[i].author,
      quote: quotes[i].quote,
    })
  }

  let gettingPrevQuote = () => {
    setNewQuote({
      author: prevQuote.author,
      quote: prevQuote.quote,
    })
  }

  return (
    <div className="App">
      <Card
        variant="outlined"
        sx={{
          width: "350px",
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            minHeight: "250px",
          }}
        >
          <Typography
            sx={{ fontSize: 14, color: "#666", paddingBottom: "15px" }}
          >
            {newQuote.author}
          </Typography>
          <Typography variant="h5">{newQuote.quote}</Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "space-around" }}>
          <Button variant="contained" onClick={gettingPrevQuote}>
            Previous Quote
          </Button>
          <Button variant="contained" onClick={gettingQuote}>
            New Quote
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}

export default App
