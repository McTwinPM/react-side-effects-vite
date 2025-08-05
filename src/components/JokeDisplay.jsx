// Step 1: Accept `joke` and `loading` as props

const JokeDisplay = ({ joke, loading }) => {
  if (loading) {
    return <div className="joke-container">Loading...</div>
  }

  return (
    <div className="joke-container" >
      {loading ? (
        <div>Loading...</div>
      ) : (
        <p>{joke}</p>
      )}
    </div>
  )
}

export default JokeDisplay
