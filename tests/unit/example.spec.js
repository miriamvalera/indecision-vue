describe( 'Example Component', () => {

  test( 'Debe de ser mayor a 10', () => {

    // Arreglar
    let value = 10;

    // Estímulo
    value = value + 2

    // Observar el resultado
    expect( value ).toBeGreaterThan( 10 )
  })

}) 

    // Observar el resultado
    // if ( value > 10 ) {
    //   //TODO: todo bien!
    // } else {
    //   throw `${ value } no es mayor a 10`
    // }