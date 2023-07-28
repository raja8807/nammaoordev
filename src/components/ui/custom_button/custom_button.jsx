import styles from "./custom_busston.module.scss";

const CustomButton = (props) => {
  const { children, clickHandler = () => {} } = props;

  return (
    <button
      className={styles.custom_button}
      onClick={() => {
        clickHandler();
      }}
    >
      {children}
    </button>
  );
};

export default CustomButton;
