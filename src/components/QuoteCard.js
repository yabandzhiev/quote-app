import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Placeholder from "react-bootstrap/Placeholder";
import { getRandomQuote } from "../services/quoteService.js";

const QuoteCard = () => {
  const [data, setData] = useState();
  const result = () =>
    getRandomQuote().then(
      (res) => {
        setData(res);
      },
      (err) => {
        alert(err.message);
      }
    );

  useEffect(() => {
    result();
  }, []);

  const handleNewQuote = () => {
    result();
  };

  if (!data) {
    return (
      <Card style={{ width: "90%", maxWidth: "40rem" }}>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <Placeholder animation="glow">
              <Placeholder xs={9} />
            </Placeholder>
          </blockquote>
        </Card.Body>
        <Card.Footer>
          <Button variant="primary" onClick={handleNewQuote}>
            New Quote
          </Button>
        </Card.Footer>
      </Card>
    );
  }
  return (
    <Card style={{ width: "90%", maxWidth: "40rem" }}>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>{data.content}</p>
          {data.author && (
            <footer className="blockquote-footer">
              <cite title="Source Title">{data.author}</cite>
            </footer>
          )}
        </blockquote>
      </Card.Body>
      <Card.Footer>
        <Button variant="primary" onClick={handleNewQuote}>
          New Quote
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default QuoteCard;
