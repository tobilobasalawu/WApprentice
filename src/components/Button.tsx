export default function Button({ type, text }) { 
  return(
    <>
      <button className={`btn ${type === 'primary' ? 'btn-primary' : 'btn-secondary'}`}>
        {type === 'primary' ? text : 'Secondary'}
      </button>
    </>
  )
}