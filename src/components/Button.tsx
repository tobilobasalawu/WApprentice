export default function Button({ type, text }) { 
  return(
    <>
      <button className={`btn ${type === 'primary' ? 'btn-primary' : 'btn-special'}`}>
        {type === 'primary' ? text : text}
      </button>
    </>
  )
}