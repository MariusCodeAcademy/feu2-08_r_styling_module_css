// 1. itraukti modulini css
import { useEffect, useState } from 'react';
import css from './UserCard.module.css';
// 2. css aprasyti klases .card, .title, .text priduodami kazkokio grazaus stiliaus.

// 3. panaudojam modulini css

function UserCard(props) {
  console.log('css ===', css);
  const [userData, setUserData] = useState({});

  // efektas kuris pasileidzia tik susikurus komponentui
  useEffect(() => {
    getUser();
  }, []);

  async function getUser() {
    const url = 'https://dummyjson.com/users/1';
    const resp = await fetch(url);
    const dataInJs = await resp.json();
    // gavom duomenis
    // console.log('dataInJs ===', dataInJs);
    setUserData(dataInJs);
  }

  const { image, lastName, firstName, age, height } = userData;
  return (
    <div className={css.card}>
      <img className={`border ${css.image}`} src={image} alt='user' />
      <h2 className={css.title}>
        {firstName} {lastName}
      </h2>
      <h3>Age {age}</h3>
      <p className={css['card-text']}>Height: {height}cm</p>
    </div>
  );
}
export default UserCard;
