describe("The ApplePacketPlanner function", () => {

        it("should be able to get the cost of the apple box", () => {
            let applePacketPlanner = ApplePacketPlanner();
            applePacketPlanner.setBoxPrice(100);
            assert.equal(applePacketPlanner.getBoxPrice(), 100);
        })

        it("should be able to get number of apples in the box", () => {
            let applePacketPlanner = ApplePacketPlanner();
            applePacketPlanner.setNumberInBox(50);
            assert.equal(applePacketPlanner.getNumberInBox(), 50);
        })

        it("should be able to get number of apples that will be in the packet", () => {
            let applePacketPlanner = ApplePacketPlanner();
            applePacketPlanner.setNumberInPacket(5);
            assert.equal(applePacketPlanner.getNumberInPacket(), 5);
        })

        it("should be able to get percentage number of the profit they will like to make", () => {
            let applePacketPlanner = ApplePacketPlanner();
            applePacketPlanner.setPercentage(15);
            assert.equal(applePacketPlanner.getPercentage(), 15);
        })

        it("should be able to check how many packet will be made from a box with 300 apples", () => {
            let applePacketPlanner = ApplePacketPlanner();
            applePacketPlanner.setNumberInBox(300);
            applePacketPlanner.setNumberInPacket(5);
            assert.equal(applePacketPlanner.numberOfPackets(), 60);
        })

        it("should be able to calculate how much each apple cost from a given price of the box and the quantity of apples in the box", () => {
            let applePacketPlanner = ApplePacketPlanner();
            applePacketPlanner.setBoxPrice(100);
            applePacketPlanner.setNumberInBox(50);
            assert.equal(applePacketPlanner.pricePerApple(), 2);
        })

        it("should be able to calculate the cost price for each packet of apples", () => {
            let applePacketPlanner = ApplePacketPlanner();
            applePacketPlanner.setBoxPrice(100);
            applePacketPlanner.setNumberInBox(50)
            applePacketPlanner.setNumberInPacket(10);
            assert.equal(applePacketPlanner.pricePerPacket(), 20);
        })

        it("should be able to calculate the recommended price to sell each packet of apples", () => {
            let applePacketPlanner = ApplePacketPlanner();
            applePacketPlanner.setBoxPrice(100);
            applePacketPlanner.setNumberInBox(50)
            applePacketPlanner.setNumberInPacket(10);
            applePacketPlanner.setPercentage(20);
            assert.equal(applePacketPlanner.recommendedPrice(), 24);
        })

    })