// 1. itraukti modulini css
import css from './UserCard.module.css';
// 2. css aprasyti klases .card, .title, .text priduodami kazkokio grazaus stiliaus.

// 3. panaudojam modulini css

function UserCard(props) {
  return (
    <div className={css.card}>
      <img src='' alt='user' />
      <h2 className={css.title}>Name</h2>
      <h3>age</h3>
      <p className={css.text}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, facilis.
      </p>
    </div>
  );
}
export default UserCard;
