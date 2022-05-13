import { useInView } from "react-intersection-observer";

function ProjectItem() {
    const { ref, inView, entry } = useInView({
      /* Optional options */
      threshold: 0,
    })
    return (
      <div style={{}} ref={ref}>
          hello
      </div>
    );
  }
  
export default ProjectItem;