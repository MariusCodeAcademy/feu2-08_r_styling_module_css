import Button from '../UI/btn/Button';
import Grid from '../UI/grid/Grid';
import css from './Card.module.css';
import { useState } from 'react';

function Card(props) {
  // console.log('css ===', css);
  // 1 reikes state nuo kurio priklausys ar rodyti title
  const [toShowTitle, setToShowTitle] = useState(true);
  // 2 funkcijos kuri pakeicia state kad nerodyti title
  function showTitleHadle() {
    // console.log('showTitleHadle ran');
    setToShowTitle(false);
  }
  // 3 mygtuko paspaudimu iskviesti ta funkcija
  // 4
  return (
    <div className={css.card}>
      {toShowTitle && <h2 className={css.title}>James Bond</h2>}
      <h3 className={css.subtitle}>Title: 007</h3>
      <p className={css.text}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore
        possimus accusamus tempore veniam, a assumenda quo nisi rem repellendus
        numquam!
      </p>
      <Grid cols={2}>
        <Button onClick={showTitleHadle}>Hide title</Button>
        <Button>Dark mode</Button>
      </Grid>
    </div>
  );
}
export default Card;
