const timSoNguyenTo = (num) => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
};
document.querySelector(".kq1").addEventListener("click", () => {
  var so1 = document.getElementById("so1").value * 1;
  var thongBao = document.querySelector(".footer1");
  var arr = [];
  var ketqua = "";
  for (let i = 1; i <= so1; i++) {
    arr.push(i);
  }
  so1 < 2
    ? (ketqua = "Nhập số lớn hơn 1 giùm cái nha!!!")
    : (ketqua = arr.filter(timSoNguyenTo));
  thongBao.innerHTML = `Các số nguyên tố của ${so1} là: ${ketqua}`;
});
