import styles from './myreact-cookbook-ui.module.css';

/* eslint-disable-next-line */
export interface MyreactCookbookUiProps {}

export function MyreactCookbookUi(props: MyreactCookbookUiProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to MyreactCookbookUi!</h1>
    </div>
  );
}

export default MyreactCookbookUi;
