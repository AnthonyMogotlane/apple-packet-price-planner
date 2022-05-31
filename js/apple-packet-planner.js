const ApplePacketPlanner = () => {
    //variables
    let boxPrice;
    let numberInBox;
    let numberInPacket;
    let percentage;
  
    let theNumberOfPackets;
    let thePriceOfTheApple;
    let thePriceOfThePacket;
    let theRecommendedPrice;


    //setting and getting the inputs values
    const setBoxPrice = bp => boxPrice = bp;
    const getBoxPrice = () => boxPrice;
    const setNumberInBox = nib => numberInBox = nib;
    const getNumberInBox = () => numberInBox;
    const setNumberInPacket = nip => numberInPacket = nip;
    const getNumberInPacket = () => numberInPacket;
    const setPercentage = perc => percentage = perc;
    const getPercentage = () => percentage;

    //number of packets - that can be made from a box.
    const numberOfPackets = () => {
        theNumberOfPackets = getNumberInBox() / getNumberInPacket();
        return theNumberOfPackets;
    }
    //calculate how much each apple will cost
    const pricePerApple = () => {
        thePriceOfTheApple = getBoxPrice() / getNumberInBox();
        return thePriceOfTheApple;
    }
    //calculate the total price for apples in a packet
    const pricePerPacket = () => {
        thePriceOfThePacket = pricePerApple() * getNumberInPacket();
        return thePriceOfThePacket;
    }
    //calculate the recommended price to sell the packet
    const recommendedPrice = () => {
        //formula calculating the recommended price
        let theRecommendedPrice = (((getBoxPrice() * getPercentage()/100) + getBoxPrice()) / getNumberInBox()) * getNumberInPacket();
        return theRecommendedPrice;
    }
    return {
        setBoxPrice,
        getBoxPrice,
        setNumberInBox,
        getNumberInBox,
        setNumberInPacket,
        getNumberInPacket,
        setPercentage,
        getPercentage,

        numberOfPackets,
        pricePerApple,
        pricePerPacket,
        recommendedPrice
    }
}