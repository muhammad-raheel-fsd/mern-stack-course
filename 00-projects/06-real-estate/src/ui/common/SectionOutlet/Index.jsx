import { CN } from "../../../utils";

const SectionOutlet = (props) => {
  // const { children, title, className, id } = props;
  const { children, parentClassName, childClassName, ...rest } = props;
  return (
    // <section id={id} className={className}>
    //   {children}
    // </section>
    <section {...rest} className={CN("w-full min-h-screen", parentClassName)}>
      <div className={CN("max-w-[1100px] mx-auto", childClassName)}>{children}</div>
    </section>
  );
};

export default SectionOutlet;
