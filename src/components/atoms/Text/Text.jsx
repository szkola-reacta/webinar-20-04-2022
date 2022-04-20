// <Text>Lorem ipsum</Text>
// <Text fontSize="10px">Lorem ipsum</Text>

function Text(props) {
  // console.log('Text props: ', props);
  const { color, children } = props;

  const styles = {
    container: {
      backgroundColor: '#fff'
    },
    para: {
      color,
    }
  };

  return (
    <div style={styles.container}>
      <p style={styles.para}>{children}</p>
    </div>
  );
}

Text.defaultProps = {
  color: "#000",
}

export { Text };
// export default Text;