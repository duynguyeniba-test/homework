// let CanNang = 101;
//     if (CanNang > 100) {
//         let SoLe = CanNang - 100;
//         let LyTuong = SoLe * 9 / 10;
//         let ToiDa = SoLe;
//         let ToiThieu = SoLe * 8 / 10;
//         console.log("Số Lẻ", SoLe, "kg");
//         console.log("Chiều cao lý tưởng", LyTuong, "kg");
//         console.log("Chiều cao tối đa", ToiDa, "kg");
//         console.log("Chiều cao tối thiểu", ToiThieu, "kg");
//     }

//     if (CanNang <= 100) {
//         console.log("Công thức không áp dụng");
//     }

    let weight = 99;
    if (weight > 100) {
        const oddNumber = weight - 100;
        let idealWeight = oddNumber * 9 / 10;
        let maxWeight = oddNumber;
        let minWeight = oddNumber * 8 / 10;
        console.log("Số Lẻ", oddNumber, "kg");
        console.log("Chiều cao lý tưởng", idealWeight, "kg");
        console.log("Chiều cao tối đa", maxWeight, "kg");
        console.log("Chiều cao tối thiểu", minWeight, "kg");
    }

    if (weight <= 100) {
        console.log("Công thức không áp dụng");
    }