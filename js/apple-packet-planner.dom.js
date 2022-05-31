//references to DOM elements

let calculateBtn = document.querySelector(".calculate_btn");
let priceBox = document.querySelector("#box_price");
let appleInBox = document.querySelector("#apples_in_box");
let applesInPacket = document.querySelector("#apples_in_packet");
let profitPerc = document.querySelector("#profit_perc");

//instance of ApplePacketPlanner
//initiate data from localStorage
let applePacketPlanner = ApplePacketPlanner();

calculateBtn.addEventListener("click", () => {
    applePacketPlanner.setBoxPrice(parseFloat(priceBox.value));
    applePacketPlanner.getBoxPrice();

    applePacketPlanner.setNumberInBox(Number(appleInBox.value));
    applePacketPlanner.getNumberInBox();

    applePacketPlanner.setNumberInPacket(Number(applesInPacket.value));
    applePacketPlanner.getNumberInPacket();

    applePacketPlanner.setPercentage(Number(profitPerc.value));
    applePacketPlanner.getPercentage();


    valuesTemplate(applePacketPlanner.numberOfPackets(), applePacketPlanner.pricePerApple(), applePacketPlanner.pricePerPacket(), applePacketPlanner.recommendedPrice())

})

//Handlebars template function for output values
function valuesTemplate(numOfPack, costPerApple, costPerPacket, packetPrice) {
    let valuesTemplate = document.querySelector(".values_content").innerHTML;
    let valuesTemplateFunc = Handlebars.compile(valuesTemplate);
    let valuesObj = {
        one: numOfPack,
        two: costPerApple.toFixed(2),
        three: costPerPacket.toFixed(2),
        four: packetPrice.toFixed(2)
    }
    document.querySelector(".values_container").innerHTML = valuesTemplateFunc(valuesObj);
}
valuesTemplate(0, 0, 0, 0)
