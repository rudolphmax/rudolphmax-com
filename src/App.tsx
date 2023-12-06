const links = [
  { 'name': 'Mail', 'href': 'mailto:rudolph-max@gmx.net', 'target': '' },
  { 'name': 'GitHub', 'href': 'https://github.com/blumelume', 'target': '_blank' }
]

function App() {
  return (
    <div className='w-full h-full flex justify-center items-center'>
      <div className='flex flex-col justify-center gap-3 h-full w-full sm:h-max md:w-w3 p-10 sm:p-20 md:p-32 border-7 border-blue'>
        <h1 className='mb-2 text-4xl font-black'>Hi!</h1>
        <p className='text-lg'>
          I'm Max, <br />
          full-stack developer and computer science student based in berlin.
        </p>
        <p>
        I am interested in how I can use my skill set to make a useful impact. On our society, our future and the way we live together.
        </p>

        <div className='bg-blue h-px w-full mt-8 mb-4'></div>

        <div className='flex flex-row gap-2'>
          {links.map(({name, href, target}, i) => {
            return (
              <>
                <a className='font-semibold' href={href} target={target}>{name}</a>
                <span hidden={i >= links.length-1}>/</span>
              </>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default App
