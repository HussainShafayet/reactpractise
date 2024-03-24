// import WithCounter from "./HOC/withCounter";

const hoverCounter = (props) => {
    const { count, incrementCount,theme,switchTheme } = props;
    const style = theme == 'dark' ? { color: 'white',backgroundColor:"black" } : { color: 'black',backgroundColor:"red" };
    return (
      <div>
          <h2 style={style} onMouseOver={incrementCount}>Item clicked {count} times</h2>
          <button type="button" onClick={switchTheme}>Switch Theme</button>
      </div>
    )
}

// export default WithCounter(hoverCounter);
export default hoverCounter;