import Header from '../../components/Header'

const post = ({ results: query }) => {
  return (

    <div>
      <Header />
      <h1>getServerSideProps</h1>
      {query.map((q, index) =>
      <div key={{index}}>
        <h3>
          {q.title}
        </h3>
        <p>{q.content}</p>
      </div>
      )}
      </div>

  )
}

export async function getServerSideProps(context){
  const res = await fetch(`http://localhost:3000/api/hello?q=${context.params.query}`)
  const json = await res.json();
  const blogpost = json

  return{
    props:{
      results: blogpost,
    }
  }
}

export default post