const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

// Dữ liệu mẫu của các dự án
const projects = [
    {
        id: 1,
        logo: "img/daklak.jpg",
        title: "Giúp bé H'Thy Ân nuôi ước mơ trở thành bác sĩ",
        organization: "Quỹ Từ tâm Đắk Lắk",
        category: "Trẻ em",
        image_url: "img/img1.jpeg",
        goal: 20000000
    },
    {
        id: 2,
        logo: "img/vigef.jpeg",
        title: "Kiến tạo trường học hạnh phúc: Cải tạo nhà vệ sinh và nhà tắm cho gần 600 em học sinh trường PTDTBT Chế Tạo, Yên Bái",
        organization: "Quỹ Hỗ trợ đổi mới giáo dục phổ thông Việt Nam",
        category: "Giáo dục",
        image_url: "img/img2.png",
        goal: 200000000
    },
    {
        id: 3,
        logo: "img/daklak.jpg",
        title: "Xin giúp đỡ hộ nghèo dân tộc ít người có 2 con nhỏ đang cấp cứu",
        organization: "Quỹ Từ tâm Đắk Lắk",
        category: "Trẻ em",
        image_url: "img/img3.jpeg",
        goal: 20000000
    },
    {
        id: 4,
        logo: "img/tuoitho.jpeg",
        title: "Xin hãy giúp tìm lại nụ cười lành lặn cho bé Lâm Tâm Như",
        organization: "Quỹ Từ thiện Nâng bước tuổi thơ",
        category: "Trẻ em",
        image_url: "img/img4.jpeg",
        goal: 20000000
    },
    {
        id: 5,
        logo: "img/tuoitho.jpeg",
        title: "Mang phép mầu y tế cho cậu học trò nghèo Trương Khả Hào",
        organization: "Quỹ Từ thiện Nâng bước tuổi thơ",
        category: "Y tế",
        image_url: "img/img5.jpeg",
        goal: 14000000
    },
    {
        id: 6,
        logo: "img/tuoitho.jpeg",
        title: "Trái Tim Bé Nhỏ Của Như Ý Đang Cần Cứu",
        organization: "Quỹ Từ thiện Nâng bước tuổi thơ",
        category: "Trẻ em",
        image_url: "img/img6.jpeg",
        goal: 15000000
    },
];

// Sử dụng CORS để cho phép truy cập từ các nguồn khác
app.use(cors());

// Endpoint GET /projects để trả về danh sách các dự án
app.get('/projects', (req, res) => {
    res.json({ projects: projects });  // Trả về danh sách dự án thực tế
});

// Khởi động server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
