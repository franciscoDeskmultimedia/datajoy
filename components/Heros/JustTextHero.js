const JustTextHero = (props) => {
    const transformDate = (date) => {
    
        const d = new Date(date);
        const ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(d);
        const mo = new Intl.DateTimeFormat("en", { month: "long" }).format(d);
        const da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(d);
        return `${mo} ${da},  ${ye}`;
      };
    return( 
        <section className='px-4 py-16 mb-20 border-b border-black lg:px-32 justTextHero'>
            <h1>{props.title}</h1>
            <p className='pt-10 text-base '>Last Updated: {transformDate(props.date)}</p>
        </section>
    )
}

export default JustTextHero;