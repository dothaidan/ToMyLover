// Thay đổi nội dung búc thư ở đây
var letterContent =
    " Chúc mừng ngày kỷ niệm của chúng ta. Cảm ơn em một năm qua đã dành tình yêu trân thành cho anh và anh có những điều muốn gởi gắm đến tình iu của anh❤️. Cảm ơn em đã xuất hiện bên anhh như một tiên nữ giáng trần, mang lại nhiều điều may mắn đến cho cuộc sống của anh. Cuộc sống đã trở nên màu hồng kể từ khi em xuất hiện. Em làm cho anh luôn cảm thấy đặc biệt và hoàn hảo. Hy vọng chúng ta sẽ có thêm nhiều năm nữa đồng hành cùng nhau. 💕Anh Đan dấu iu rấc yêu em💕";
// Tốc độ viết chữ. Số càng nhỏ tốc độ càng nhanh. 50 là tốc độ khá phù hợp
durationWrite = 50;

// Hiệu ứng gõ chữ

function effectWrite() {
    var boxLetter = document.querySelector(".letterContent");
    letterContentSplited = letterContent.split("");

    letterContentSplited.forEach((val, index) => {
        setTimeout(() => {
            boxLetter.innerHTML += val;
        }, durationWrite * index);
    });
}

window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".container").classList.add("active");
    }, 500);
});

var openBtn = document.querySelector(".openBtn");
openBtn.addEventListener("click", () => {
    document.querySelector(".cardValentine").classList.add("active");
    document.querySelector(".container").classList.add("close");
});

var cardValentine = document.querySelector(".cardValentine");

cardValentine.addEventListener("click", () => {
    cardValentine.classList.toggle("open");

    if (cardValentine.className.indexOf("open") != -1) {
        setTimeout(effectWrite, 500);
    } else {
        setTimeout(() => {
            document.querySelector(".letterContent").innerHTML = "";
        }, 1000);
    }
});
