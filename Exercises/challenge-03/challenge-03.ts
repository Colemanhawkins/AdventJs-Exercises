function distributeGifts(packOfGifts: string[],reindeers: string[]): number {
    const giftsWeidht = packOfGifts.join('').length
    const reindeersCapacityWeidth = reindeers.join('').length * 2
   return giftsWeidht < reindeersCapacityWeidth ?
    Math.floor(reindeersCapacityWeidth / giftsWeidht)
    : 0
}

const packOfGifts = ['regalo1', 'regalo2'] //esto daria un peso de 14
const reindeers = ['rudolf']

distributeGifts(packOfGifts,reindeers)