import css from './Card.module.css';

function Card(props) {
  // console.log('css ===', css);
  return (
    <div className={css.card}>
      <h2 className={css.title}>James Bond</h2>
      <h3 className={css.subtitle}>Title: 007</h3>
      <p className={css.text}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore
        possimus accusamus tempore veniam, a assumenda quo nisi rem repellendus
        numquam!
      </p>
    </div>
  );
}
export default Card;
