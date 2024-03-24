const var2 ='Card Title';
const parStyle={
  color:'orange',
  textAlign: 'center',
  fontSize: '20px',
}

function Card(){
  return <div className='card'>
      <h2 className='cardTitle'>{var2}</h2>
      <p className='cardDes'>This is description.It's a body of this card.</p>
      <p className='cardFooter'>This is footer.</p>
  </div>
}
export default Card;