

const EyeBrowTextCentered = (props) => {
    return (
      <section className='px-4 py-20 text-left lg:text-center lg:px-32'
        style={{
          backgroundColor: props.backgroundColor,
          color: props.textColor,
        }}
      >
        <p className="flex items-end justify-start w-full h-20 pb-5 pr-4 text-left lg:justify-center lg:text-center eyebrow">
          {props.eyebrow}
        </p>
        <h2 className='text-left lg:text-center'>{props.title}</h2>
      </section>
    );
    

}

export default EyeBrowTextCentered;