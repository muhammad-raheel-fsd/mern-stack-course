const SectionOutlet = (props) => {
  // const { children, title, className, id } = props;
  const { children, title, ...rest } = props;
  console.log("props", rest);
  return (
    // <section id={id} className={className}>
    //   {children}
    // </section>
    <section {...rest}>{children}</section>
  );
};

export default SectionOutlet;
