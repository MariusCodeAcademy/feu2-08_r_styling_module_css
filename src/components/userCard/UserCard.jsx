// 1. itraukti modulini css

// 2. css aprasyti klases .card, .title, .text priduodami kazkokio grazaus stiliaus.

// 3. panaudojam modulini css

function UserCard(props) {
  return (
    <div className='card'>
      <img src='' alt='user' />
      <h2 className='title'>Name</h2>
      <h3>age</h3>
      <p className='text'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, facilis.
      </p>
    </div>
  );
}
export default UserCard;
