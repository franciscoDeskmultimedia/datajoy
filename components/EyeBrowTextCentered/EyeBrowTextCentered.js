

const EyeBrowTextCentered = (props) => {
    return (
      <section className='px-4 py-20 text-center lg:px-32'
        style={{
          backgroundColor: props.backgroundColor,
          color: props.textColor,
        }}
      >
        <p className="flex items-end justify-center w-full h-20 pb-5 pr-4 text-center eyebrow">
          {props.eyebrow}
        </p>
        <h2>{props.title}</h2>
      </section>
    );
    

}

export default EyeBrowTextCentered;