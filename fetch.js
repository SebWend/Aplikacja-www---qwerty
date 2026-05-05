 
(async ()=>{
     const response = await fetch('https://apis.codante.io/olympic-games/events')
  const orders = await response.json()
})