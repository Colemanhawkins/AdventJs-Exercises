function wrapping(gifts: string[]): string[] {

  let wrappedGifts: string[] = [];
  
    gifts.forEach((gift) => {
      const papper = '*';
      const box = papper.repeat( 2 + gift.length);
      const wrapper = box + `\n*${gift}*\n` +  box;
      wrappedGifts.push(wrapper);
    
    })
 
  return  wrappedGifts;
}
    