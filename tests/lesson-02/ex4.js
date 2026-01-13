let CanNang = 101;
    if (CanNang > 100) {
        let SoLe = CanNang - 100;
        let LyTuong = SoLe * 9 / 10;
        let ToiDa = SoLe;
        let ToiThieu = SoLe * 8 / 10;
        console.log("Số Lẻ", SoLe, "kg");
        console.log("Chiều cao lý tưởng", LyTuong, "kg");
        console.log("Chiều cao tối đa", ToiDa, "kg");
        console.log("Chiều cao tối thiểu", ToiThieu, "kg");
    }

    if (CanNang <= 100) {
        console.log("Công thức không áp dụng");
    }
