export default function idPage({params} : {params: {id: string}}) {
    return (
      <h1>details of {params.id}</h1>
    );
  }
  