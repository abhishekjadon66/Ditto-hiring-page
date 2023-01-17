const api = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=rum";
export async function getServerSideProps() {
  const res = await fetch(api);

  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}

export default function Home({ data }) {
  const { drinks = [] } = data;
  return (
    <div className="drinks d-flex gap-2 mt-4">     
      {drinks.map((drink) => {
        const { idDrink, strDrink, strDrinkThumb } = drink;
        return (   
          <div key={idDrink}>      
            <img src={strDrinkThumb} width="100" />
            <p>{strDrink}</p>
          </div>  
        );
      })}
    </div>
  );
}