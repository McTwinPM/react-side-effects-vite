import React from 'react'
const FetchButton = ({ fetchJoke }) => {
  const handleClick = () => {
    console.log('FetchButton clicked')
    if (fetchJoke) {
      fetchJoke()
    } else {
      // console.warn('fetchJoke function is not provided')
    }
  }
  return (
      <button className="fetch-button" onClick={handleClick}>Get a New Joke</button>
    )
  }

export default FetchButton
